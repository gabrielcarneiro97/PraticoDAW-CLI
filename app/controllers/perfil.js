import Ember from 'ember';
import Conect from '../hosts';

function get(url, callback204) {
  var request = Ember.$.ajax({
    type        : 'GET',
    url         : Conect.sHost + url,
    xhrFields: {
      withCredentials: true
    },
    statusCode  : {
      204 : callback204
    }
  });
};
export default Ember.Controller.extend({
  actions: {
    pessoal(){
      console.log(this.model.exib);
      Ember.set(this.model, 'exib','1');
      console.log(this.model.exib);
    },
    logout(){
      var self = this;
      console.log("zzzzz");
        get('/candidato/logout', function() {
          self.transitionToRoute('/');
          Materialize.toast("Logout efetuado com sucesso", 2000);
        });
    }
  }

});
