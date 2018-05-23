import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('stats');
  this.route('dash', function() {
    this.route('ipaccesslist');
  });
  this.route('ipviolatorslist');
  this.route('ipviolatorgraph', {queryParams : 'ip'});
});

export default Router;
