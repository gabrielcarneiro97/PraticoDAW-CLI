import Ember from 'ember';

export default Ember.Controller.extend({
  perfil: Ember.inject.controller(),
  id: Ember.computed.alias("perfil.id"),
  on: Ember.computed.alias("perfil.on"),
  actions: {
    toLogin(){
      console.log(this.get('on'));
      if(this.get('on')){
        this.transitionToRoute('/perfil', {queryParams: {id: this.get('id')}});
      }
      else {
        this.transitionToRoute('/login');
      }
    }
  }
});
