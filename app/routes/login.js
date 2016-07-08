import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var model = {};
    model.parallax = "assets/images/cityLights.jpg"
    return model;
  }
});
