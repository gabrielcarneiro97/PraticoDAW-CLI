import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    buscar(){
      this.transitionToRoute("busca", {queryParams: {search: this.search}});
      this.set('search', '');
    }
  }
});
