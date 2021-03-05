$(function () {
 //******************left menu hide
	$(".btn").click(function () {
    if ($(".nav").hasClass("close")) {
      $(".nav").removeClass("close");
    }
    $(".nav").toggleClass("active");
		$(".chevron").toggleClass("rotate");
    $("#all").click(function() {
      if ($(".nav").hasClass("active")) {
        $(".chevron").toggleClass("rotate");
        $(".nav").removeClass("active");
        $(".nav").toggleClass("close");
        $("#all").off("click");
      }
    })
	});
 //******************left menu hide end
 //******************go to top
   $("#return-to-top").click(function(){
      $("html,body").animate({
          scrollTop:0
      },500);
  });
  $(window).scroll(function() {
      if ( $(this).scrollTop() > 500){
          $('#return-to-top').addClass("gotop-in");
      } else {
          $('#return-to-top').stop().removeClass('gotop-in');
      }
  });
  //******************go to top end

});