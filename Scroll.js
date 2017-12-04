$(document).ready(function(){
    $('body').scrollspy({target: ".navbar", offset: 50});
    $(".smoothScroll").each(initSmoothScroll);
});

function initSmoothScroll(){
  $(this).on('click', smoothScroll);
}

function smoothScroll(e){
  var target = $(this.dataset.link);
   if( target.length ) {
       e.preventDefault();
       $('html, body').stop().animate({
           scrollTop: target.offset().top
       }, 1000);
   }
}
