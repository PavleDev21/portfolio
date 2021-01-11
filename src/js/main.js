$navBtn = $('.nav-btn');
$nav = $('.navigation');

$navBtn.on('click', function() {
    $nav.toggleClass('nav-show');
})

$('.banner-subtitle').delay(1500).animate({opacity: 1}, {duration: 700});

var $aboutSticky = $('.about-card');
var sectionOffsetTop = $('.about').offset().top;
var triggerOffset = sectionOffsetTop + $('.about').height() - $aboutSticky.height();
console.log(triggerOffset);

$(document).scroll(function() {
    if ( $(document).scrollTop() >= sectionOffsetTop ) {
        $aboutSticky.addClass('about-fixed');
    } else if ( $(document).scrollTop() < sectionOffsetTop){
        $aboutSticky.removeClass('about-fixed');
    }

    if ( $(document).scrollTop() > triggerOffset ) {
        $aboutSticky.removeClass('about-fixed');
        $aboutSticky.addClass('about-bottom');
    } else if( $(document).scrollTop() <= triggerOffset ) {
        $aboutSticky.removeClass('about-bottom');
    }
});