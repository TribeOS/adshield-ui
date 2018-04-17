
import { RecordArray, FilteredRecordArray, AdapterPopulatedRecordArray } from "./record-arrays"; /**
                                                                                                   @module ember-data
                                                                                                 */

import cloneNull from "./clone-null";


/**
  @class RecordArrayManager
  @namespace DS
  @private
*/
export default class RecordArrayManager {
  constructor(options) {
    this.store = options.store;
    this.isDestroying = false;
    this.isDestroyed = false;
    this._filteredRecordArrays = Object.create(null);
    this._liveRecordArrays = Object.create(null);
    this._pending = Object.create(null);
    this._adapterPopulatedRecordArrays = [];
  }

  recordDidChange(internalModel) {
    // TODO: change name
    // TODO: track that it was also a change
    this.internalModelDidChange(internalModel);
  }

  recordWasLoaded(internalModel) {
    // TODO: change name
    // TODO: track that it was also that it was first loaded
    this.internalModelDidChange(internalModel);
  }

  internalModelDidChange(internalModel) {

    var modelName = internalModel.modelName;

    if (internalModel._pendingRecordArrayManagerFlush) {
      return;
    }

    internalModel._pendingRecordArrayManagerFlush = true;

    var pending = this._pending;
    var models = pending[modelName] = pending[modelName] || [];
    if (models.push(internalModel) !== 1) {
      return;
    }

    Ember.run.schedule('actions', this, this._flush);
  }

  _flush() {

    var pending = this._pending;
    this._pending = Object.create(null);
    var modelsToRemove = [];

    for (var modelName in pending) {
      var internalModels = pending[modelName];
      for (var j = 0; j < internalModels.length; j++) {
        var internalModel = internalModels[j];
        // mark internalModels, so they can once again be processed by the
        // recordArrayManager
        internalModel._pendingRecordArrayManagerFlush = false;
        // build up a set of models to ensure we have purged correctly;
        if (internalModel.isHiddenFromRecordArrays()) {
          modelsToRemove.push(internalModel);
        }
      }

      // process filteredRecordArrays
      if (this._filteredRecordArrays[modelName]) {
        var recordArrays = this.filteredRecordArraysFor(modelName);
        for (var i = 0; i < recordArrays.length; i++) {
          this.updateFilterRecordArray(recordArrays[i], modelName, internalModels);
        }
      }

      var array = this._liveRecordArrays[modelName];
      if (array) {
        // TODO: skip if it only changed
        // process liveRecordArrays
        this.updateLiveRecordArray(array, internalModels);
      }

      // process adapterPopulatedRecordArrays
      if (modelsToRemove.length > 0) {
        removeFromAdapterPopulatedRecordArrays(modelsToRemove);
      }
    }
  }

  updateLiveRecordArray(array, internalModels) {
    return updateLiveRecordArray(array, internalModels);
  }

  /**
    Update an individual filter.
     @private
    @method updateFilterRecordArray
    @param {DS.FilteredRecordArray} array
    @param {String} modelName
    @param {Array} internalModels
  */
  updateFilterRecordArray(array, modelName, internalModels) {

    var filter = Ember.get(array, 'filterFunction');

    var shouldBeInAdded = [];
    var shouldBeRemoved = [];

    for (var i = 0; i < internalModels.length; i++) {
      var internalModel = internalModels[i];
      if (internalModel.isHiddenFromRecordArrays() === false && filter(internalModel.getRecord())) {
        if (internalModel._recordArrays.has(array)) {
          continue;
        }
        shouldBeInAdded.push(internalModel);
        internalModel._recordArrays.add(array);
      } else {
        if (internalModel._recordArrays.delete(array)) {
          shouldBeRemoved.push(internalModel);
        }
      }
    }

    if (shouldBeInAdded.length > 0) {
      array._pushInternalModels(shouldBeInAdded);
    }
    if (shouldBeRemoved.length > 0) {
      array._removeInternalModels(shouldBeRemoved);
    }
  }

  // TODO: remove, utilize existing flush code but make it flush sync based on 1 modelName
  _syncLiveRecordArray(array, modelName) {
    (true && !(typeof modelName === 'string') && Ember.assert(`recordArrayManger.syncLiveRecordArray expects modelName not modelClass as the second param`, typeof modelName === 'string'));

    var hasNoPotentialDeletions = Object.keys(this._pending).length === 0;
    var map = this.store._internalModelsFor(modelName);
    var hasNoInsertionsOrRemovals = Ember.get(map, 'length') === Ember.get(array, 'length');

    /*
      Ideally the recordArrayManager has knowledge of the changes to be applied to
      liveRecordArrays, and is capable of strategically flushing those changes and applying
      small diffs if desired.  However, until we've refactored recordArrayManager, this dirty
      check prevents us from unnecessarily wiping out live record arrays returned by peekAll.
      */
    if (hasNoPotentialDeletions && hasNoInsertionsOrRemovals) {
      return;
    }

    var internalModels = this._visibleInternalModelsByType(modelName);
    var modelsToAdd = [];
    for (var i = 0; i < internalModels.length; i++) {
      var internalModel = internalModels[i];
      var recordArrays = internalModel._recordArrays;
      if (recordArrays.has(array) === false) {
        recordArrays.add(array);
        modelsToAdd.push(internalModel);
      }
    }

    array._pushInternalModels(modelsToAdd);
  }

  /**
    This method is invoked if the `filterFunction` property is
    changed on a `DS.FilteredRecordArray`.
     It essentially re-runs the filter from scratch. This same
    method is invoked when the filter is created in th first place.
     @method updateFilter
    @param {Array} array
    @param {String} modelName
    @param {Function} filter
  */
  updateFilter(array, modelName, filter) {
    (true && !(typeof modelName === 'string') && Ember.assert(`recordArrayManger.updateFilter expects modelName not modelClass as the second param, received ${modelName}`, typeof modelName === 'string'));

    var modelMap = this.store._internalModelsFor(modelName);
    var internalModels = modelMap.models;

    this.updateFilterRecordArray(array, filter, internalModels);
  }

  _didUpdateAll(modelName) {
    var recordArray = this._liveRecordArrays[modelName];
    if (recordArray) {
      Ember.set(recordArray, 'isUpdating', false);
    }
  }

  /**
    Get the `DS.RecordArray` for a modelName, which contains all loaded records of
    given modelName.
     @method liveRecordArrayFor
    @param {String} modelName
    @return {DS.RecordArray}
  */
  liveRecordArrayFor(modelName) {
    (true && !(typeof modelName === 'string') && Ember.assert(`recordArrayManger.liveRecordArrayFor expects modelName not modelClass as the param`, typeof modelName === 'string'));


    var array = this._liveRecordArrays[modelName];

    if (array) {
      // if the array already exists, synchronize
      this._syncLiveRecordArray(array, modelName);
    } else {
      // if the array is being newly created merely create it with its initial
      // content already set. This prevents unneeded change events.
      var internalModels = this._visibleInternalModelsByType(modelName);
      array = this.createRecordArray(modelName, internalModels);
      this._liveRecordArrays[modelName] = array;
    }

    return array;
  }

  _visibleInternalModelsByType(modelName) {
    var all = this.store._internalModelsFor(modelName)._models;
    var visible = [];
    for (var i = 0; i < all.length; i++) {
      var model = all[i];
      if (model.isHiddenFromRecordArrays() === false) {
        visible.push(model);
      }
    }
    return visible;
  }
  /**
    Get the `DS.RecordArray` for a modelName, which contains all loaded records of
    given modelName.
     @method filteredRecordArraysFor
    @param {String} modelName
    @return {DS.RecordArray}
  */
  filteredRecordArraysFor(modelName) {
    (true && !(typeof modelName === 'string') && Ember.assert(`recordArrayManger.filteredRecordArraysFor expects modelName not modelClass as the param`, typeof modelName === 'string'));


    return this._filteredRecordArrays[modelName] || (this._filteredRecordArrays[modelName] = []);
  }
  /**
    Create a `DS.RecordArray` for a modelName.
     @method createRecordArray
    @param {String} modelName
    @param {Array} _content (optional|private)
    @return {DS.RecordArray}
  */
  createRecordArray(modelName, content) {
    (true && !(typeof modelName === 'string') && Ember.assert(`recordArrayManger.createRecordArray expects modelName not modelClass as the param`, typeof modelName === 'string'));


    var array = RecordArray.create({
      modelName,
      content: Ember.A(content || []),
      store: this.store,
      isLoaded: true,
      manager: this
    });

    if (Array.isArray(content)) {
      associateWithRecordArray(content, array);
    }

    return array;
  }

  /**
    Create a `DS.FilteredRecordArray` for a modelName and register it for updates.
     @method createFilteredRecordArray
    @param {String} modelName
    @param {Function} filter
    @param {Object} query (optional
    @return {DS.FilteredRecordArray}
  */
  createFilteredRecordArray(modelName, filter, query) {
    (true && !(typeof modelName === 'string') && Ember.assert(`recordArrayManger.createFilteredRecordArray expects modelName not modelClass as the first param, received ${modelName}`, typeof modelName === 'string'));

    var array = FilteredRecordArray.create({
      query,
      modelName,
      content: Ember.A(),
      store: this.store,
      manager: this,
      filterFunction: filter
    });

    this.registerFilteredRecordArray(array, modelName, filter);

    return array;
  }

  /**
    Create a `DS.AdapterPopulatedRecordArray` for a modelName with given query.
     @method createAdapterPopulatedRecordArray
    @param {String} modelName
    @param {Object} query
    @return {DS.AdapterPopulatedRecordArray}
  */
  createAdapterPopulatedRecordArray(modelName, query, internalModels, payload) {
    (true && !(typeof modelName === 'string') && Ember.assert(`recordArrayManger.createAdapterPopulatedRecordArray expects modelName not modelClass as the first param, received ${modelName}`, typeof modelName === 'string'));


    var array = void 0;
    if (Array.isArray(internalModels)) {
      array = AdapterPopulatedRecordArray.create({
        modelName,
        query: query,
        content: Ember.A(internalModels),
        store: this.store,
        manager: this,
        isLoaded: true,
        isUpdating: false,
        meta: cloneNull(payload.meta),
        links: cloneNull(payload.links)
      });

      associateWithRecordArray(internalModels, array);
    } else {
      array = AdapterPopulatedRecordArray.create({
        modelName,
        query: query,
        content: Ember.A(),
        store: this.store,
        manager: this
      });
    }

    this._adapterPopulatedRecordArrays.push(array);

    return array;
  }

  /**
    Register a RecordArray for a given modelName to be backed by
    a filter function. This will cause the array to update
    automatically when records of that modelName change attribute
    values or states.
     @method registerFilteredRecordArray
    @param {DS.RecordArray} array
    @param {String} modelName
    @param {Function} filter
  */
  registerFilteredRecordArray(array, modelName, filter) {
    (true && !(typeof modelName === 'string') && Ember.assert(`recordArrayManger.registerFilteredRecordArray expects modelName not modelClass as the second param, received ${modelName}`, typeof modelName === 'string'));


    this.filteredRecordArraysFor(modelName).push(array);
    this.updateFilter(array, modelName, filter);
  }

  /**
    Unregister a RecordArray.
    So manager will not update this array.
     @method unregisterRecordArray
    @param {DS.RecordArray} array
  */
  unregisterRecordArray(array) {

    var modelName = array.modelName;

    // unregister filtered record array
    var recordArrays = this.filteredRecordArraysFor(modelName);
    var removedFromFiltered = remove(recordArrays, array);

    // remove from adapter populated record array
    var removedFromAdapterPopulated = remove(this._adapterPopulatedRecordArrays, array);

    if (!removedFromFiltered && !removedFromAdapterPopulated) {

      var liveRecordArrayForType = this._liveRecordArrays[modelName];
      // unregister live record array
      if (liveRecordArrayForType) {
        if (array === liveRecordArrayForType) {
          delete this._liveRecordArrays[modelName];
        }
      }
    }
  }

  willDestroy() {
    Object.keys(this._filteredRecordArrays).forEach(modelName => flatten(this._filteredRecordArrays[modelName]).forEach(destroy));
    Object.keys(this._liveRecordArrays).forEach(modelName => this._liveRecordArrays[modelName].destroy());
    this._adapterPopulatedRecordArrays.forEach(destroy);
    this.isDestroyed = true;
  }

  destroy() {
    this.isDestroying = true;
    Ember.run.schedule('actions', this, this.willDestroy);
  }
}

function destroy(entry) {
  entry.destroy();
}

function flatten(list) {
  var length = list.length;
  var result = [];

  for (var i = 0; i < length; i++) {
    result = result.concat(list[i]);
  }

  return result;
}

function remove(array, item) {
  var index = array.indexOf(item);

  if (index !== -1) {
    array.splice(index, 1);
    return true;
  }

  return false;
}

function updateLiveRecordArray(array, internalModels) {
  var modelsToAdd = [];
  var modelsToRemove = [];

  for (var i = 0; i < internalModels.length; i++) {
    var internalModel = internalModels[i];
    var isDeleted = internalModel.isHiddenFromRecordArrays();
    var recordArrays = internalModel._recordArrays;

    if (!isDeleted && !internalModel.isEmpty()) {
      if (!recordArrays.has(array)) {
        modelsToAdd.push(internalModel);
        recordArrays.add(array);
      }
    }

    if (isDeleted) {
      modelsToRemove.push(internalModel);
      recordArrays.delete(array);
    }
  }

  if (modelsToAdd.length > 0) {
    array._pushInternalModels(modelsToAdd);
  }
  if (modelsToRemove.length > 0) {
    array._removeInternalModels(modelsToRemove);
  }
}

function removeFromAdapterPopulatedRecordArrays(internalModels) {
  for (var i = 0; i < internalModels.length; i++) {
    var internalModel = internalModels[i];
    var list = internalModel._recordArrays.list;

    for (var j = 0; j < list.length; j++) {
      // TODO: group by arrays, so we can batch remove
      list[j]._removeInternalModels([internalModel]);
    }

    internalModel._recordArrays.clear();
  }
}

export function associateWithRecordArray(internalModels, array) {
  for (var i = 0, l = internalModels.length; i < l; i++) {
    var internalModel = internalModels[i];
    internalModel._recordArrays.add(array);
  }
}