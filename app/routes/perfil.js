import Ember from 'ember';
import Connect from '../hosts';

function get(url, callback200) {
  Ember.$.ajax({
    async       : false,
    type        : 'GET',
    url         : Connect.sHost + url,
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
    Ember.$("#pessoal-btn").addClass("menu-li-active");
    Ember.$('.parallax').parallax();
    Ember.$('ul.tabs').tabs('select_tab', 'tab_id');
    Ember.$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  },
  model(){
    var self = this;
    get('/candidato/getinfo', function(data){
      self.infos = data;
    });
    Ember.set(self.infos, 'exib', 1);
    return self.infos;
  }
});
