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

export function allOk(params/*, hash*/) {
  var inputs = {};
  for (var i = 0; i < params.length; i++) {
    if (params[i] == null || params[i] == '' || params[i] == undefined) {
      return false;
    }
  }
  inputs.name = params[0];
  inputs.surname = params[1];
  inputs.gender = params[2];
  inputs.coutry = params[3];
  inputs.state = params[4];
  inputs.city = params[5];
  inputs.email = params[6];
  inputs.emailrpt = params[7];
  inputs.login = params[8];
  inputs.passwd = params[9];
  inputs.passwdrpt = params[10];

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

export default Ember.Helper.helper(allOk);
