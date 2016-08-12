import Ember from 'ember';
import Conect from '../hosts';

var post = function(obj, url, callback202, callback403){
  var request = Ember.$.ajax({
    type        : 'POST',
    url         : Conect.sHost + url,
    dataType    : 'json',
    data        : JSON.stringify(obj),
    processData : false,
    contentType : 'application/json',
    xhrFields   : {
      withCredentials: true
    },
    statusCode  : {
      202: callback202,
      403: callback403,
      404: function() {
        console.log("404");
      },
      500: function() {
        Materialize.toast("Problemas no servidor, por favor tente novamente mais tarde", 4000);
      }
    }
  });
};


export default Ember.Controller.extend({
  actions: {
    changeLogin(log){
      Ember.set(this.model, 'loginType', log);
    },
    login(){
      var where = '';
      var goTo = '';
      var self = this;
      var user = {
        login: this.model.login,
        senha: this.model.passwd
      };
      if(this.model.loginType == "Candidato"){
        where = '/candidato/main';
        goTo = '/perfil';
      }
      else {
        where = '/empresa/login';
        goTo = '/perfilEmpresa';
      }
      post(user, where, function() {
        self.transitionToRoute(goTo);
      }, function() {
        Materialize.toast("Login ou senha invalidos", 2000);
      });
    }
  }
});
