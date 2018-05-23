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
        this.route('javascript-check-failed');
        this.route('javascript-not-loaded');
        this.route('known-violator-user-agent');
        this.route('suspicious-user-agents');
        this.route('browser-integrity-check');
        this.route('known-violator-data-centre');
        this.route('pages-per-minute-exceeded');
        this.route('pages-per-session-exceeded');
        this.route('blocked-country');
        this.route('aggregator-user-agents');
        this.route('known-violator-automation-tool');
  });
  this.route('ipviolatorslist');
  this.route('ipviolatorgraph', {queryParams : 'ip'});
});

export default Router;
