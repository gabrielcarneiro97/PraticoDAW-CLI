import Ember from 'ember';
import Conect from '../hosts';

function get(url) {
  var request = Ember.$.ajax({
    type        : 'GET',
    url         : Conect.sHost + url,
    statusCode  : {

    }
  });
};

export default Ember.Route.extend({
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
  }
});
