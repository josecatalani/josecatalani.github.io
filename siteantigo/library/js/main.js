var productionFolder = "/";
var developmentFolder = "/josecatalani/www/";

var folderLocation = location.host == 'localhost' ? developmentFolder : productionFolder;
var serverLocation = location.host == 'localhost' ? location.protocol + '//' + location.host + folderLocation : location.protocol + '//' + location.host + folderLocation;
var isMobile = 
{
	Android: function() 
	{
		return navigator.userAgent.match(/Android/i) ? true : false;
	},
	BlackBerry: function() 
	{
		return navigator.userAgent.match(/BlackBerry/i) ? true : false;
	},
	iOS: function() 
	{
		return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
	},
	iPad: function() 
	{
		return navigator.userAgent.match(/iPad/i) ? true : false;
	},
	Windows: function() 
	{
		return navigator.userAgent.match(/IEMobile/i) ? true : false;
	},
	any: function() 
	{
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
	}
};
jQuery.ajaxSetup ({
    // Disable caching of AJAX responses
    cache: false
});

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
