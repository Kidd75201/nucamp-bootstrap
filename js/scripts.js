// ready function/ready method
$(function () {
    // slide time
    $(".carousel").carousel({ interval: 2000 });

    // button Pause/Play
    $("#carouselButton").click(function () {
      if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
        //alert(".click() if function .carousel(\"pause\"); called.");
      } else {
        $(".carousel").carousel("cycle");
        $("#carouselButton").children("i").removeClass("fa-play");
        $("#carouselButton").children("i").addClass("fa-pause");
        //alert(".click() else function .carousel(\"cycle\") called.");
      }
    });

   $('#reserveButton').click(function() {
     $('#reserveModal').modal('show');
   })

   $('#loginButton').click(function() {
    $('#loginModal').modal('show');
  })
   
    
  });