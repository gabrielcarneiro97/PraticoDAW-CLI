import Ember from 'ember';

var sHost = "http://localhost:8000"; //Host do servidor

var post = function(obj, url, callback202, callback403){
  Ember.$.ajax({
    type        : 'POST',
    url         : sHost + url,
    dataType    : 'json',
    data        : JSON.stringify(obj),
    processData : false,
    contentType : 'application/json',
    statusCode: {
      202: callback202(),
      403: callback403()
    }
  });
};


export default Ember.Controller.extend({
  actions: {
    login(){
      var self = this;
      var user = {
        login: this.model.login,
        senha: this.model.passwd
      };

      post(user, '/login', function() {

      }, function() {

      });
    }
  }
});
