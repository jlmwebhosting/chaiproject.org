app.version = -1 // dev mode
app.cms = true;

$(document).ready(function() {
})

$(document).bind('_show', function() {
  $.require('lib/js/google-code-prettify/prettify.css');
  $.require('lib/js/google-code-prettify/prettify.js');
  prettyPrint();
})