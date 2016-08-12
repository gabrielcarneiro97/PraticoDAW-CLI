import Ember from 'ember';
import Connect from '../../hosts'

export default Ember.Controller.extend({
  actions: {
    register(){

      var self = this;

      var obj = {};

      obj.login = this.model.login;
      obj.razaoSocial = this.model.name;
      obj.senha = this.model.passwd;
      obj.cidade = this.model.city;
      obj.estado = this.model.state;
      obj.pais = this.model.country;
      obj.email = this.model.email;
      obj.CNPJ = this.model.cnpj;
      obj.CEP = this.model.cep;
      obj.logradouro = this.model.street;
      obj.numeroEndereco = this.model.numHouse;
      obj.complementoLocalidade = this.model.comp;
      obj.numTelefone = this.model.tel;

      Ember.$.ajax({
        type        : 'POST',
        url         : Connect.sHost + '/empresa/cadastro',
        dataType    : 'json',
        data        : JSON.stringify(obj),
        processData : false,
        contentType : 'application/json',
        statusCode: {
          200: function(){
            self.transitionToRoute('main');
            Materialize.toast("Cadastro efetuado com sucesso", 2000);
          }
        }
      });
    }
  }
});
