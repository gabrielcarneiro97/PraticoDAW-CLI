import Ember from 'ember';

var sHost = "http://localhost:8000"; //Host do servidor

var post = function(obj, url, callback202, callback403){
  var request = Ember.$.ajax({
    type        : 'POST',
    url         : sHost + url,
    dataType    : 'json',
    data        : JSON.stringify(obj),
    processData : false,
    contentType : 'application/json',
    statusCode: {
      202: callback202,
      403: callback403,
      404: function() {
        console.log("404");
      }
    }
  });
};


export default Ember.Controller.extend({
  perfil: Ember.inject.controller(),
  id: Ember.computed.alias("perfil.id"),
  on: Ember.computed.alias("perfil.on"),
  actions: {
    login(){
      var self = this;
      var user = {
        login: this.model.login,
        senha: this.model.passwd
      };

      post(user, '/candidato/main', function() {
        console.log("zzz");
        self.set('on', true);
      }, function() {
        Materialize.toast("Login ou senha invalidos", 2000);
        console.log("deu ruim");
      });
    }
  }
});
