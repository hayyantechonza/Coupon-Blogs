function Swipe(el, cb, dir, width) {
   var sx, sy;

   if (window.innerWidth < width) {
      $(el).on("mousedown touchstart", function(e) {
         sx = e.pageX || e.originalEvent.touches[0].pageX;
         sy = e.pageY || e.originalEvent.touches[0].pageY;
      });

      $(document).on("mouseup touchend", function(e) {
         var ex = e.pageX || e.originalEvent.changedTouches[0].pageX;
         var ey = e.pageY || e.originalEvent.changedTouches[0].pageY;
         var dx = ex - sx;
         var dy = ey - sy;

         if (dir === "right" && dx > 200 && Math.abs(dx) > Math.abs(dy)) {
            cb();
         }
         if (dir === "left" && dx < -200 && Math.abs(dx) > Math.abs(dy)) {
            cb();
         }
      });
   }
}


const additionalActions = () => {
   $('body').addClass('active')
   $(".menu_navbar").addClass("active")
}
Swipe("body", additionalActions, "left", 768);