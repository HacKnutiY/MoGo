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


/*--------------------МАСОНРИ-------------*/
$('masonry-container').masonry();


var $grid = $('.masonry-container').imagesLoaded( function() {
    // init Masonry after all images have loaded
    $grid.masonry({
        itemSelector: '.masonry-container__item',
        percentPosition: true
    });
});

/*--------------------МАСОНРИ-------------*/

/*-------------MAP-------------*/
$('.map').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('map_active');
});

/*------------АДАПТИВ----------------*/
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
/*------------АДАПТИВ----------------*/

/*------------СПОЙЛЕРЫ--------------*/
$(document).ready(function() {
  $('.work__tab-nav-title').click(function(event){
    if($('.work__tab-nav').hasClass('spoiler')){
      $('.work__tab-nav-title').not($(this)).removeClass('work__tab-nav-title_active');
      $('.work__tab-block').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('work__tab-nav-title_active').next().slideToggle(300);
  });
});
/*------------СПОЙЛЕРЫ--------------*/
