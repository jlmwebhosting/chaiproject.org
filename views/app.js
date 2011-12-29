app.version = -1; // dev mode
app.cms = true;
app.brand = '<img src="chaiproject.org/files/chai21x30.png"\
	style="margin-right: 4x; margin-bottom: -8px; margin-top: -6px">\
	<span>chaiproject.org</span>';

$(document).ready(function() {
});

$(document).bind('_show', function() {
  $.require('lib/js/google-code-prettify/prettify.css');
  $.require('lib/js/google-code-prettify/prettify.js');
  prettyPrint();

})