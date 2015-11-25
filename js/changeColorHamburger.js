// Changing to black (Main Section)
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".hamburger").addClass("scrolling");
       } else {
          $(".hamburger").removeClass("scrolling");
       }
   });
    }
});

// Changing to white (Contact Section)
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange-white');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".hamburger").addClass("scrolling-white");
       } else {
          $(".hamburger").removeClass("scrolling-white");
       }
   });
    }
});
