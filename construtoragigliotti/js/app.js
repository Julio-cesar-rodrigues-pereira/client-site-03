var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $("header").css({"background-color": "#5e1a30" ,"opacity":"0.9"  });
	    $("nav ul li a").css({"color":"white"});
	  }

	  else{
		  $("header").css({"background":  "white"  });
		  $(" nav ul li a").css({"color":"#5e1a30"});	  		    	
	  }
  })
})


