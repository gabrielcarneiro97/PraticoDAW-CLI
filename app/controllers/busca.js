import Ember from 'ember';

export default Ember.Controller.extend({
  main: Ember.inject.controller(),
  search: Ember.computed.alias('main.searchIn'),
  init: function () {
    this._super();
    Ember.run.schedule("afterRender",this,function() {
      this.send("render");
    });
  },
  actions: {
    render(){ //colocar aqui as funções de filtro de pesquisa, tudo aqui acontece imediatamente depois do render
      console.log(this.get('search'));
    }
  }
});
