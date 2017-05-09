import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('profile');
  this.route('stylists');
  this.route('services');
  this.route('promotions');
  this.route('login');
});

export default Router;
