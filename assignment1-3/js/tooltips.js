(function($) {
    $.fn.tooltips = function(options) {

        var settings = $.extend({
            'delay': 100,
            'duration': 0
        }, options);

        return this.each(function() {
            $(this).on('mouseover', function() {
                var tooltipText = $(this).data('text');
                $(this).append('<p class="tooltip-text">' + tooltipText + '</p>');

                var self = $(this);
                var timeout = setTimeout(function() {
                    self.find('.tooltip-text').fadeIn(settings.duration);
                }, settings.delay)
            })
            $(this).on('mouseout', function() {
                $(this).find('.tooltip-text').fadeOut(settings.duration).remove();
            })
        })
    };
})(jQuery);
