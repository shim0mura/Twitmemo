(function($){
	$.fn.bottom = function(options) {
		var defaults = {
			proximity: 0.01
		};
		var options = $.extend(defaults, options);
		return this.each(function() {
			var obj = this;
			$(obj).bind("scroll", function() {
				if (obj == window) {
					scrollHeight = $(document).height();
				}
				else {
					scrollHeight = $(obj)[0].scrollHeight;
				}
				scrollPosition = $(obj).height() + $(obj).scrollTop();
				if ( (scrollHeight - scrollPosition) / scrollHeight <= options.proximity) {
					$(obj).trigger("bottom");
				}
			});
			return false;
		});
	};
})(jQuery);
var is = {
    ie:      navigator.appName == 'Microsoft Internet Explorer',
    java:    navigator.javaEnabled(),
    ns:      navigator.appName == 'Netscape',
    ua:      navigator.userAgent.toLowerCase(),
    version: parseFloat(navigator.appVersion.substr(21)) ||
             parseFloat(navigator.appVersion),
    win:     navigator.platform == 'Win32'
}
is.mac = is.ua.indexOf('mac') >= 0;
if (is.ua.indexOf('opera') >= 0) {
    is.ie = is.ns = false;
    is.opera = true;
}
if (is.ua.indexOf('gecko') >= 0) {
    is.ie = is.ns = false;
    is.gecko = true;
}
