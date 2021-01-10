$navBtn = $('.nav-btn');
$nav = $('.navigation');

$navBtn.on('click', function() {
    $nav.toggleClass('nav-show');
})