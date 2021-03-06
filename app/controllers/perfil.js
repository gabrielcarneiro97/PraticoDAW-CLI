import Ember from 'ember';
import Connect from '../hosts';

function get(url, callback204) {
  var request = Ember.$.ajax({
    type        : 'GET',
    url         : Connect.sHost + url,
    xhrFields   : {
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
      else if(which == 3)
        Ember.$("#curriculo-btn").addClass("menu-li-active");
    },
    logout(){
      var self = this;
        get('/candidato/logout', function() {
          self.transitionToRoute('/');
          Materialize.toast("Logout efetuado com sucesso", 2000);
        });
    },
    curriculo(){
      var self = this;
      var obj = {};
      var c = this.model.curriculo;

      obj.experiencias = c.exp;
      obj.cursosExtracurriculares = c.extra;
      obj.escolaridade = c.escolaridade;

      Ember.$.ajax({
        type        : 'POST',
        url         : Connect.sHost + '/candidato/cadastraCurriculo',
        data        : JSON.stringify(obj),
        xhrFields   : {
          withCredentials : true
        },
        statusCode  : {

        }
      });
    }
  }

});
