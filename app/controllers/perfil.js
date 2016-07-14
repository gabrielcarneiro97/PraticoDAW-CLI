import Ember from 'ember';
function get(url, callback204) {
  var request = Ember.$.ajax({
    type        : 'GET',
    url         : sHost + url,
    statusCode  : {
      204: callback204
    }
  });
};
export default Ember.Controller.extend({
  actions: {
    logout(){
      var self = this;
        get('candidato/logout', function() {
          self.transitionToRoute('/main');
          Materialize.toast("Logout efetuado com sucesso", 2000);
        });
    }
  }

});
