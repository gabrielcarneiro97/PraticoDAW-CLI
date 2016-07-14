
/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

/* Materialize import rotes
*/
//Materialize
var Materialize = 'bower_components/Materialize/dist/';
//Js
var MaterializeJs = Materialize + 'js/materialize.min.js';
//CSS
var MaterializeCss = Materialize + 'css/materialize.min.css';
//Fonts
var MaterializeFonts = Materialize + 'font/roboto/Roboto-';
var FontBold = MaterializeFonts + 'Bold.woff';
var FontLight = MaterializeFonts + 'Light.woff';
var FontMedium = MaterializeFonts + 'Medium.woff';
var FontRegular = MaterializeFonts + 'Regular.woff';
var FontThin = MaterializeFonts + 'Thin.woff';
var FontBoldWoff2 = MaterializeFonts + 'Bold.woff2';
var FontLightWoff2 = MaterializeFonts + 'Light.woff2';
var FontMediumWoff2 = MaterializeFonts + 'Medium.woff2';
var FontRegularWoff2 = MaterializeFonts + 'Regular.woff2';
var FontThinWoff2 = MaterializeFonts + 'Thin.woff2';
//Icons
var MaterializeIcons = Materialize + 'font/material-design-icons/Material-Design-Icons.woff';
//Sass
var MaterializeSass = 'bower_components/Materialize/sass/materialize.scss';


module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  //Importing Materialize
  app.import(MaterializeJs);
  app.import(MaterializeCss);
  app.import(MaterializeSass);
  app.import(FontBold, {
    destDir : '/fonts/roboto'
  });
  app.import(FontLight, {
    destDir : '/fonts/roboto'
  });
  app.import(FontMedium, {
    destDir : '/fonts/roboto'
  });
  app.import(FontRegular, {
    destDir : '/fonts/roboto'
  });
  app.import(FontThin, {
    destDir : '/fonts/roboto'
  });
  app.import(FontBoldWoff2, {
    destDir : '/fonts/roboto'
  });
  app.import(FontLightWoff2, {
    destDir : '/fonts/roboto'
  });
  app.import(FontMediumWoff2, {
    destDir : '/fonts/roboto'
  });
  app.import(FontRegularWoff2, {
    destDir : '/fonts/roboto'
  });
  app.import(FontThinWoff2, {
    destDir : '/fonts/roboto'
  });
  app.import(MaterializeIcons);
  app.import('bower_components/hosts.js')

  return app.toTree();
};
