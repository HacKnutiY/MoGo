/*--------------------------СЛАЙДЕР-------------------------- */
$(document).ready(function(){
	$('.slider').slick(
        {
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
          }
    );
});
/*--------------------------СЛАЙДЕР-------------------------- */


/* ------------------------МЕНЮ БУРГЕР-------------------- */
$('.drop-menu-btn').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('drop-menu-btn_active');
	$('.drop-menu').toggleClass('drop-menu_active');
	$('.content-wrapper').toggleClass('content-wrapper_active')
});

$('.work__tab-nav-item').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('work__tab-nav-item_active');
});



/* ----------------------------ЯКОРЬ------------------- */
$('.scrollto a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 370,   // по умолчанию «400» 
        easing: "linear" // по умолчанию «swing» 
    });

    return false;
});
/* ----------------------------ЯКОРЬ------------------- */

$('masonry-container').masonry();


var $grid = $('.masonry-container').imagesLoaded( function() {
    // init Masonry after all images have loaded
    $grid.masonry({
        itemSelector: '.masonry-container__item',
        percentPosition: true
    });
});


/*-------------MAP-------------*/
$('.map').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('map_active');
});


$(document).ready(function() {
    function checkWidth() {
      var windowWidth = $('body').innerWidth(),
          elem = $(".masonry-container__item"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
                                      // страницу для поиска нужного элемента
      if(windowWidth < 1170){
        elem.removeClass('gradient-bg-image');
      }
    }
  
    checkWidth(); // проверит при загрузке страницы
  
  $(window).resize(function(){
      checkWidth(); // проверит при изменении размера окна клиента
    });
  });


