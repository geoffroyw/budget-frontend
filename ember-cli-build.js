/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      extension: 'sass'
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.


  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {
    destDir: 'assets'
  });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {
    destDir: 'fonts'
  });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {
    destDir: 'fonts'
  });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {
    destDir: 'fonts'
  });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
  });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {
    destDir: 'fonts'
  });

  app.import('bower_components/bootstrap/dist/js/bootstrap.js');

  app.import('bower_components/moment/moment.js');
  app.import('bower_components/accounting/accounting.js');

  app.import('bower_components/material-design-iconic-font/dist/css/material-design-iconic-font.min.css');

  app.import('bower_components/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.eot', {
    destDir: 'fonts'
  });
  app.import('bower_components/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.svg', {
    destDir: 'fonts'
  });
  app.import('bower_components/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.ttf', {
    destDir: 'fonts'
  });
  app.import('bower_components/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.woff', {
    destDir: 'fonts'
  });
  app.import('bower_components/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.woff2', {
    destDir: 'fonts'
  });


  return app.toTree();
};
