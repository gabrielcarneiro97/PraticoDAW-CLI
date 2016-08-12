import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition(){
       Ember.run.next(this, 'initTooltip');
    }
  },
  initTooltip() {
    Ember.$('.parallax').parallax();

  }
});
