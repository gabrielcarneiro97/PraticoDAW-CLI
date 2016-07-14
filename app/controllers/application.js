import Ember from 'ember';

function get(url, callback418, callback203) {
  var request = Ember.$.ajax({
    type        : 'GET',
    url         : sHost + url,
    statusCode  : {
      418: callback418,
      203: callback203
    }
  });

}

export default Ember.Controller.extend({
  isLog: "zzz",
  actions: {
    toLogin(){
      var self = this;
      console.log(self.isLog);
      get('/candidato/session', function () {
        self.isLog = true;
      }, function(){
        self.isLog = false;
      });
      if(self.isLog){
        this.transitionToRoute('/perfil');
      }
      else {
        this.transitionToRoute('/login');
      }
    }
  }
});
