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
    setMenu(which){
      Ember.set(this.model, 'exib', which);
      Ember.$(".menu-li").removeClass("menu-li-active");
      if(which == 1)
        Ember.$("#pessoal-btn").addClass("menu-li-active");
      else if(which == 2)
        Ember.$("#local-btn").addClass("menu-li-active");
    },
    logout(){
      var self = this;
        get('/candidato/logout', function() {
          self.transitionToRoute('/');
          Materialize.toast("Logout efetuado com sucesso", 2000);
        });
    }
  }

});
