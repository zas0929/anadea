$(document).ready(function() {
  $('select').niceSelect();
  $('.main-content').masonry({
      itemSelector: '.item',
      gutter: 10
  })
});
