import Ember from 'ember';

export default Ember.Controller.extend({
  searchIn: null,
  init: function () {
    this._super();
    Ember.run.schedule("afterRender",this,function() {
      this.send("render");
    });
  },
  actions: {
    buscar(){
      this.set('searchIn', this.search);
      this.set('search', '');
      this.transitionToRoute("busca");
    },
    render(){ //tudo aqui acontece imediatamente depois do render
    }
  }
});
