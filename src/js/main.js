$navBtn = $('.nav-btn');
$nav = $('.navigation');

$navBtn.on('click', function() {
    $nav.toggleClass('nav-show');
})

$('.banner-subtitle').delay(1500).animate({opacity: 1}, {duration: 700});

var $aboutSticky = $('.about-card');
var sectionOffsetTop = $('.about').offset().top;

/*$(document).scroll(function() {
    if ( $(document).scrollTop() >= sectionOffsetTop ) {
        $aboutSticky.addClass('about-fixed');
    } else if ( $(document).scrollTop() < sectionOffsetTop ){
        $aboutSticky.removeClass('about-fixed');
    }
});*/