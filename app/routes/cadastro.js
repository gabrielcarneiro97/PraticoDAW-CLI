import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition(){
       Ember.run.next(this, 'initTooltip');
    }
  },
  initTooltip() {
    Ember.$("#cpf").change(function(){
      if($(this).val().length == 11){
        $(this).css("border-bottom", "1px solid #4caf50");
        var cpfFull = [];
        cpfFull[3] = '.';
        cpfFull[7] = '.';
        cpfFull[11] = '-';

        for (var i = 0; i < 14; i++) {
          if(i < 3){
            cpfFull[i] = $(this).val().charAt(i);
          }
          else if(i < 7 && i > 3){
            cpfFull[i] = $(this).val().charAt(i-1);
          }
          else if(i < 11 && i > 7){
            cpfFull[i] = $(this).val().charAt(i-2);
          }
          else if(i > 11){
            cpfFull[i] = $(this).val().charAt(i-3);
          }
        }
        $(this).val(cpfFull.join(''));
      }
      else {
        $(this).css("border-bottom", "1px solid #d00000");
      }
    });
    Ember.$('.tooltipped').tooltip({delay: 50});
    Ember.$('.parallax').parallax();
    Ember.$('select').material_select();
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
