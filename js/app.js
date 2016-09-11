// Scrolling anchor links

$(function() {
  $('a[href*="#"]').click(function(){
    href = $.attr(this, 'href');
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500, function() {
      window.location.hash = href;
    });

    return false;
  });
});