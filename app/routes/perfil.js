import Ember from 'ember';
import Conect from '../hosts';

function get(url, callback200) {
  Ember.$.ajax({
    async       : false,
    type        : 'GET',
    url         : Conect.sHost + url,
    xhrFields   : {
      withCredentials: true
    },
    statusCode  : {
      200 : callback200
    }
  });
};

export default Ember.Route.extend({
  infos: null,
  actions: {
    didTransition(){
       Ember.run.next(this, 'initTooltip');
    }
  },
  initTooltip() {
    Ember.$('.parallax').parallax();
    Ember.$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  },
  model(){
    var self = this;
    get('/candidato/getinfo', function(data){
      self.infos = data;
    });
    return self.infos;
  }
});
