var timeout;

function loader() {
    timeout = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}


$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});

$(document).ready(function(){
   $('.scrollspy').scrollSpy();
 });

 $(".link-insta").hover(
   function () {
     $("#insta").addClass('animated bounce');
   },
   function () {
     $("#insta").removeClass("animated bounce");
   }
 );

 $(".link-dribble").hover(
   function () {
     $("#dribble").addClass('animated bounce');
   },
   function () {
     $("#dribble").removeClass("animated bounce");
   }
 );

 $(".link-twitter").hover(
   function () {
     $("#twitter").addClass('animated bounce');
   },
   function () {
     $("#twitter").removeClass("animated bounce");
   }
 );

 $(".link-linkedin").hover(
   function () {
     $("#linkedin").addClass('animated bounce');
   },
   function () {
     $("#linkedin").removeClass("animated bounce");
   }
 );
