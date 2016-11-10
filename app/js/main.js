var timeout;

function loader() {
    timeout = setTimeout(showPage, 2500);
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
