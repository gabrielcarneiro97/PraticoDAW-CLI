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
  this.route('cadastro', function() {
    this.route('main');
    this.route('candidato');
    this.route('empresa');
  });
  this.route('busca');
  this.route('perfil');
  this.route('perfilEmpresa');
});

export default Router;
