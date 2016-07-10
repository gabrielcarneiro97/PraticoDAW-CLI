import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('main', {
    path: '/'
  });
  this.route('login');
  this.route('empresas');
  this.route('cadastro');
  this.route('busca');
});

export default Router;
