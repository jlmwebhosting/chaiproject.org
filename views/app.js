app.version = -1 // dev mode

$(document).bind('_show', function() {
  $.require('lib/js/google-code-prettify/prettify.css');
  $.require('lib/js/google-code-prettify/prettify.js');
  prettyPrint();
})