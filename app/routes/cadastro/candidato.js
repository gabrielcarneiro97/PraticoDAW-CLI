import Ember from 'ember';

function testaCPF(strCPF) {
  var Soma;
  var Resto;
  var str2 = [];
  Soma = 0;

  if (strCPF == "00000000000"){
    return false;
  }

  for (var i = 1; i <= 9; i++) {
    Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  }

  Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)){
      Resto = 0;
    }
    if (Resto != parseInt(strCPF.substring(9, 10)) ){
      return false;
    }

    Soma = 0;

    for (i = 1; i <= 10; i++){
      Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    }

    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)){
      Resto = 0;
    }

    if (Resto != parseInt(strCPF.substring(10, 11) ) ){
      return false;
    }

    return true;
}

export default Ember.Route.extend({
  actions: {
    didTransition(){
       Ember.run.next(this, 'initTooltip');
    }
  },
  initTooltip() {
    Ember.$("#cpf").change(function(){

      var strCPF = Ember.$(this).val();
      var str2 = [];
      if(strCPF[3] == "." && strCPF[7] == "." && strCPF[11] == "-"){
          for (var i = 0; i < 11; i++) {
            if(i < 3)
              str2[i] = strCPF[i];
            else if (i < 6)
              str2[i] = strCPF.charAt(i+1);
            else if (i < 9)
              str2[i] = strCPF.charAt(i+2);
            else if (i >= 9)
              str2[i] = strCPF.charAt(i+3);
          }
          strCPF = str2.join('');
      }

      if(testaCPF(strCPF)){
        Ember.$(this).css("border-bottom", "1px solid #4caf50");
      }
      else {
        Ember.$(this).css("border-bottom", "1px solid #d00000");
      }

    });
    Ember.$('.tooltipped').tooltip({delay: 50});
    Ember.$('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: true, // Does not change width of dropdown to that of the activator
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
      }
    );
  },
  model(){
    var inputs = {};
    inputs.gender = "Sexo";
    return inputs;
  }
});
