let styles = `
.radial-gradient {
    position:fixed;
    z-index: -1;
    top:0px;
    left:0px;
    height:100%;
    width:100%;
    
    /*Fallback if gradeints don't work */
    background: #070908;
    /*Linear gradient... */
    background: 
      radial-gradient(
       at center,rgb(59 14 22), #070908
      );
  }
  `
  let styleSheet = document.createElement("style")
  styleSheet.innerText = styles
  document.head.appendChild(styleSheet)

  $(document).mousemove(function(event) {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    
    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);
    
    $('.radial-gradient').css('background', 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, rgb(59 14 22), #070908)');
  });

$(document).ready(function () {
    $('body').append('<div class="radial-gradient"></div>');
    // $('body').css({"background-image": "url(decor/gradient2.png)", "background-size":"cover", "background-repeat":"no-repeat", "background-attachment":"fixed"})
    $('.numberOF').css({"background-color":"transparent"});
});

$(document).ready(function(){
    $('.navbar-nav a').hover(function () {
        $(this).css('color', '#E63B3D');
        }, function () {
        $(this).removeAttr('style');
        }
    );
});

$('.readBtn').attr('download', '');