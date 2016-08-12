import Ember from 'ember';
import Connect from '../hosts';

function get(url, callback204) {
  var request = Ember.$.ajax({
    type        : 'GET',
    url         : Connect.sHost + url,
    xhrFields: {
      withCredentials: true
    },
    statusCode  : {
      204 : callback204
    }
  });
};

export default Ember.Controller.extend({
  actions: {
    setMenu(which){
      Ember.set(this.model, 'exib', which);
      Ember.$(".menu-li").removeClass("menu-li-active");
      if(which == 1)
        Ember.$("#pessoal-btn").addClass("menu-li-active");
      else if(which == 2)
        Ember.$("#local-btn").addClass("menu-li-active");
      else if (which == 3)
        Ember.$("#vagas-btn").addClass("menu-li-active");

    },
    logout(){
      var self = this;
        get('/empresa/logout', function() {
          self.transitionToRoute('/');
          Materialize.toast("Logout efetuado com sucesso", 2000);
        });
    },
    novaVaga(){
      var self = this;
      var vaga = this.model.newVaga;
      var obj = {};

      obj.empresa = this.model.razaoSocial;
      obj.titulo = vaga.titulo;
      obj.jornadaDeTrabalho = vaga.jornada;
      obj.requisitos = vaga.requisitos;
      obj.descricao = vaga.descricao;
      obj.qntdDisponivel = vaga.num;
      obj.salarioInicial = vaga.salario;

      Ember.$.ajax({
        type        : 'POST',
        url         : Connect.sHost + '/vaga/cadastro',
        data        : JSON.stringify(obj),
        xhrFields: {
          withCredentials: true
        },
        statusCode  : {
          202 : function() {
            Materialize.toast("Vaga cadastrada com sucesso", 2000);
          }
        }
      });
    }
  }
});
