import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    var mod = {};
    mod.search = params.search;

    //
    // get("/vagas", function() {
    //   model.vagas = data;
    // });

    mod.vagas = [];

    for (var i = 1; i <= 10; i++) {
      mod.vagas[i] = {};
      mod.vagas[i].titulo = "Batata " + i;
      mod.vagas[i].descricao = "Lorem batata " + i;
      mod.vagas[i].empresa = "Batatolandia";
      mod.vagas[i].jornadaDeTrabalho = "tempo que comi sua mãe + " + i;
      mod.vagas[i].requisitos = "Ser batata";
      mod.vagas[i].qntdDisponivel = i;
      mod.vagas[i].salarioInicial = i + "000";

    }


    return mod;
  },
  actions: {
    didTransition(){
       Ember.run.next(this, 'initTooltip');
    }
  },
  initTooltip() {
    Ember.$('.parallax').parallax();
    Ember.$('.collapsible').collapsible();

  }
});
