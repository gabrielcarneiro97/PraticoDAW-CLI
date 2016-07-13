import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return {
      search: params.search
    };
  },
  actions: {
    didTransition(){
       Ember.run.next(this, 'initTooltip');
    }
  },
  initTooltip() {
    Ember.$('.parallax').parallax();
  }
});
