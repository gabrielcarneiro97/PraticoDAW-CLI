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
      Ember.set(this.model, 'gender', gen);
    },
    register(){
      var self = this;
      var inputs = this.model;

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
