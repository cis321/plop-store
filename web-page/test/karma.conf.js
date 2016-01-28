// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2016-01-22 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/seiyria-bootstrap-slider/dist/bootstrap-slider.js',
      'bower_components/angular-bootstrap-slider/slider.js',
      'bower_components/wysihtml5x/dist/wysihtml5x.min.js',
      'bower_components/wysihtml5x/dist/wysihtml5x-toolbar.min.js',
      'bower_components/rangy-1.3/uncompressed/rangy-core.js',
      'bower_components/rangy-1.3/uncompressed/rangy-cssclassapplier.js',
      'bower_components/rangy-1.3/uncompressed/rangy-highlighter.js',
      'bower_components/rangy-1.3/uncompressed/rangy-selectionsaverestore.js',
      'bower_components/rangy-1.3/uncompressed/rangy-serializer.js',
      'bower_components/rangy-1.3/uncompressed/rangy-textrange.js',
      'bower_components/handlebars/handlebars.js',
      'bower_components/bootstrap3-wysiwyg/dist/bootstrap3-wysihtml5.min.js',
      'bower_components/chartjs/Chart.js',
      'bower_components/ckeditor/ckeditor.js',
      'bower_components/jquery-ui/jquery-ui.js',
      'bower_components/colorpicker/jquery.colorpicker.js',
      'bower_components/datatables/media/js/jquery.dataTables.js',
      'bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
      'bower_components/moment/moment.js',
      'bower_components/bootstrap-daterangepicker/daterangepicker.js',
      'bower_components/fastclick/lib/fastclick.js',
      'bower_components/fullcalendar/dist/fullcalendar.js',
      'bower_components/angularjs/angular.js',
      'bower_components/angularjs-icheck/angular-icheck.js',
      'bower_components/angular-input-mask/src/angular-simple-mask.js',
      'bower_components/jqueryui/jquery-ui.js',
      'bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js',
      'bower_components/jquery-knob/js/jquery.knob.js',
      'bower_components/angular-knob/src/angular-knob.js',
      'bower_components/raphael/raphael.js',
      'bower_components/mocha/mocha.js',
      'bower_components/morris.js/morris.js',
      'bower_components/angular-morris-chart/src/angular-morris-chart.min.js',
      'bower_components/pace/pace.js',
      'bower_components/select2/dist/js/select2.js',
      'bower_components/kapusta-jquery.sparkline/dist/jquery.sparkline.min.js',
      'bower_components/timepicker/jquery.timepicker.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      "app/scripts/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
