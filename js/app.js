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


  var aChildren = $("nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var anchorName = aArray[i];
            var sectionID = anchorName + '-section';
            var divPos = $(sectionID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(sectionID).height(); // get the height of the div in question

            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + anchorName + "']").addClass("nav-active");
            } else {
                $("a[href='" + anchorName + "']").removeClass("nav-active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("nav-active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                $("nav li:last-child a").addClass("nav-active");
            }
        }
    });

});



