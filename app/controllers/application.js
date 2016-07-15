import Ember from 'ember';
import Conect from '../hosts';

function get(url, callback202, callback203) {
  Ember.$.ajax({
    type        : 'GET',
    url         : Conect.sHost + url,
    xhrFields   : {
      withCredentials: true
    },
    statusCode  : {
      202: callback202,
      203: callback203
    },
  });
}

export default Ember.Controller.extend({
  actions: {
    toLogin(){
      var self = this;
      get('/candidato/session', function () {
        self.transitionToRoute('/perfil');
      }, function(){
        self.transitionToRoute('/login');
      });

    }
  }
});
