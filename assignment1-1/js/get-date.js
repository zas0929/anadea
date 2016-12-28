(function($) {
  $.fn.getDate = function() {
      $.each($(this), function() {
          var dataContent = $(this).data('interval');
          var dataContentItem = dataContent.split(',')

          for (var i = 0; i <= dataContentItem.length - 1; i++) {
              var fullDate = dataContentItem[i].split('').splice(0, 10).join('');
              var humanDate = new Date(fullDate);
              var humanDateMain = humanDate.toString().split(' ').splice(1, 3).join(' ');
              $(this).append('<p>' + humanDateMain + '</p>');
          }
      });
  };
})(jQuery);
