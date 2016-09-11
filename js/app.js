$(function() {
  $('nav li a').click(function(){
    href = $.attr(this, 'href');
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500, function() {
      window.location.hash = href;
    });

    return false;
  });

  $(window).scroll(selectAnchor);

  selectAnchor();
});

function selectAnchor() {
  var windowPos = $(window).scrollTop() + $('.nav').height(); 
  var anchorPositions = [];
  var aChildren = $("nav li").children();

  for (var i=0; i < aChildren.length; i++) {    
    var aChild = aChildren[i];
    var ahref = $(aChild).attr('href');
    anchorPositions.push({id: ahref, position: $(ahref).offset().top});
  }

  var selectedAnchor;

  if (windowPos == 0) {
    selectedAnchor = anchorPositions[0].id;
  } else if (windowPos + $(window).height() >= $(document).height()) {
    selectedAnchor = anchorPositions[anchorPositions.length-1].id;
  } else {
    for (i=0; i < anchorPositions.length; i++) {
      if (windowPos >= anchorPositions[i].position) {
        if (i >= anchorPositions.length-1 || windowPos < anchorPositions[i+1].position) {
          selectedAnchor = anchorPositions[i].id;
          break;
        }
      }
    }
  }

  if (selectedAnchor) {
    $("nav li a").removeClass("nav-active");
    $("nav li a[href='" + selectedAnchor + "']").addClass("nav-active");      
  }    
}