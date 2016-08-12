import Ember from 'ember';
import Conect from '../hosts';

function get(url, callback202, callback203, callback204) {
  Ember.$.ajax({
    type        : 'GET',
    url         : Conect.sHost + url,
    xhrFields   : {
      withCredentials : true
    },
    statusCode  : {
      202 : callback202,
      203 : callback203,
      204 : callback204
    },
  });
}

export default Ember.Controller.extend({
  actions: {
    toLogin(){
      var self = this;
      get('/session', function () {
        self.transitionToRoute('/perfil');
      }, function(){
        self.transitionToRoute('/login');
      }, function() {
        self.transitionToRoute('/perfilEmpresa');
      });

    }
  }
});
