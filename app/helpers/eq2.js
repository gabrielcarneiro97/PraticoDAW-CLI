import Ember from 'ember';

export function eq2(params/*, hash*/) {
  if(params[0] == params[1] || params[1] == null)
    return true;
  else
    return false;
}

export default Ember.Helper.helper(eq2);
