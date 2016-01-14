Package.describe({
  summary: "Twitter Bootstrap source files."
});

Package.on_use(function (api) {
  api.use(['less', 'jquery'], 'client');

  api.add_files([
    'less/bootstrap.less',
    'less/responsive.less',
    'js/bootstrap-affix.js',
    'js/bootstrap-alert.js',
    'js/bootstrap-button.js',
    'js/bootstrap-carousel.js',
    'js/bootstrap-collapse.js',
    'js/bootstrap-dropdown.js',
    'js/bootstrap-modal.js',
    'js/bootstrap-tooltip.js',
    'js/bootstrap-popover.js',
    'js/bootstrap-scrollspy.js',
    'js/bootstrap-tab.js',
    'js/bootstrap-transition.js',
  ], 'client');
});

