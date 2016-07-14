import Ember from 'ember';

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
  model(params){
    this.controllerFor('perfil').set('id', params.id);
    console.log(this.controllerFor('perfil').get('id'));
    return {
      id: params.id
    }
  }
});
