import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    choseOne(what){
      console.log(what);
      if(what == "1")
        this.transitionToRoute("/cadastro/candidato");
      if(what == "2")
        this.transitionToRoute("/cadastro/empresa");
    }
  }
});
