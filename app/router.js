import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('stats');
  this.route('index', { path: '/' }, function() {
    this.route('dashboard');
    this.route('threats-summary');
    this.route('automated-traffic');
    this.route('traffic-by-org');
    this.route('suspicious-countries');
    this.route('click-fraud');
    this.route('captcha-requests');
    this.route('desirable-auto');
    this.route('targeted-content');
    this.route('content-protection');
    this.route('custom-pages');
    this.route('ip-access-list');
    this.route('country-block-list');
    this.route('content-distribution');
    this.route('account-management');
    this.route('complete-log');
    this.route('summary');
    this.route('cache-analysis');
    this.route('upstream-http-errors');
    this.route('overview', function() {
      this.route("show", { path: ":ip" });
    });
    this.route('known-violators');
    this.route('js-check-failed');
    this.route('js-not-loaded');
    this.route('known-violator-user-agent');
    this.route('susp-user-agent');
    this.route('browser-integrity-check');
    this.route('known-violator-data-center');
    this.route('pages-per-minute-exceed');
    this.route('pages-per-session-exceed');
    this.route('blocked-country');
    this.route('aggregator-user-agent');
    this.route('known-violator-automation-tool');
  });
});

export default Router;
