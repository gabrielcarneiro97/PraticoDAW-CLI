import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    this.controllerFor('perfil').set('id', params.id);
    console.log(this.controllerFor('perfil').get('id'));
    return {
      id: params.id
    }
  }
});
