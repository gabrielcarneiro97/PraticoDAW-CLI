import Ember from 'ember';

var sHost = "http://localhost:8000"; //Host do servidor

var post = function(obj, url, callback200){
  Ember.$.ajax({
    type        : 'POST',
    url         : sHost + url,
    dataType    : 'json',
    data        : JSON.stringify(obj),
    processData : false,
    contentType : 'application/json',
    statusCode: {
      200: callback200()
    }
  });
};



export default Ember.Controller.extend({
  actions: {
    changeGender(gen){
      // this.model.gender = gen;
      Ember.set(this.model, 'gender', gen);
    },
    register(){
      var self = this;
      var inputs = this.model;

      var count = 0;
      for (var type in inputs) {
        if(type == null || type == ''){
          Materialize.toast('Preencha todos os campos', 2000);
          return false;
        }
        else {
          count++;
        }
      }
      if(count < 11){
        Materialize.toast('Preencha todos os campos', 2000);
        return false;
      }
      if(inputs.email != inputs.emailrpt){
        Materialize.toast("Os emails não conferem", 2000);
        return false;
      }
      if(inputs.passwd.length < 6){
        Materialize.toast("Entre com uma senha de mais de 6 dígitos", 2000);
        return false;
      }
      if(inputs.passwd != inputs.passwdrpt){
        Materialize.toast("As senhas não conferem", 2000);
        return false;
      }


      var user =  {
        primeiroNome : inputs.name,
        sobreNome    : inputs.surname,
        tipoSexo     : inputs.gender,
        pais         : inputs.country,
        estado       : inputs.state,
        cidade       : inputs.city,
        email        : inputs.email,
        login        : inputs.login,
        senha        : inputs.passwd
      };

      post(user, '/cadastro', function(){
        self.transitionToRoute('main');
        Materialize.toast("Cadastro efetuado com sucesso", 2000);

      });

    }
  }
});
