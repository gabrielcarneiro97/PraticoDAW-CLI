import Ember from 'ember';

function validateEmail(email) {
    var x = email;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        return false;
    }
    else {
      return true;
    }
}

export function allOkEmpresa(params/*, hash*/) {

  var inputs = {};
  for (var i = 0; i < params.length; i++) {
    if (params[i] == null || params[i] == '' || params[i] == undefined) {
        return false;
    }
  }

  console.log("teste");

  inputs.name = params[0];
  inputs.country = params[1];
  inputs.state = params[2];
  inputs.city = params[3];
  inputs.email = params[4];
  inputs.emailrpt = params[5];
  inputs.login = params[6];
  inputs.passwd = params[7];
  inputs.passwdrpt = params[8];
  inputs.cnpj = params[9];
  inputs.street = params[10];
  inputs.cep = params[11];
  inputs.numHouse = params[12];
  inputs.comp = params[13];
  inputs.tel = params[14];
  inputs.cel = params[15];

  if(inputs.email == inputs.emailrpt){
    if(!validateEmail(inputs.email)){
      return false;
    }
  }

  if(inputs.passwd == inputs.passwdrpt){
    if(inputs.passwd.length < 6){
      return false;
    }
  }
  else {
    return false;
  }

  return true;

}

export default Ember.Helper.helper(allOkEmpresa);
