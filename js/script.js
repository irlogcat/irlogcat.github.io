var menu = document.getElementById("simple-menu");
var close = document.getElementById("close-menu");
var topNav = document.getElementById("top_nav");
var ul = document.getElementById("nav-ul");
var navLink = document.getElementsByClassName("nav_link");


/*
window.onscroll = function () {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
            topNav.className = "fixed";
        } else {
            topNav.className = "";
        }
};
*/


// menu.onclick = function () {
//     ul.classList.toggle("side-nav");
// };
// close.onclick = function () {
//     ul.classList.toggle("side-nav");
// };

for(var i in navLink){
    navLink[i].onclick = function () {
        for (var i  in navLink) {
            navLink[i].className = "nav_link";
            this.className = "nav_link active";
        }
    };
}

$(document).ready(function(){

   $(".scroll").click(function() {
    var link=$(this).attr('data-link');
       $('html, body').animate({
           scrollTop: $("#"+link).offset().top
       }, 1000);
   });


});


