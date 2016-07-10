import Ember from 'ember';

export default Ember.Controller.extend({
  searchIn: "zzz",
  actions: {
    buscar(){
      this.searchIn = this.search;
      console.log(this.searchIn);
    }
  }
});
