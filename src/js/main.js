$(document).ready(function() {
    //$('.loader').delay(2300).fadeOut(1000);
    $('.loader').hide();
})


function bannerCS() {
    var $svg = $('.svg');
    var $svgWrap = $('.svg-banner-wrap');
    var calc = $svg.width();
    var finish = calc*0.516;
    $svgWrap.height(finish);
}

function bannerResize() {
    var $svg = $('.svg');
    var $svgWrap = $('.svg-banner-wrap');
    $( window ).resize(function() {
        var calc = $svg.width();
        var finish = calc*0.516;
        $svgWrap.height(finish);
    });
}

function bannerAnimation() {
    $title = $('.banner-title');
    $mainBlocks = $('.banner-content-block');
    $btn = $('.banner-btn');
    $lineSection = $('.banner-alternate-container');
    $bacLine = $('.bac-line');
    $fakeBtn = $('.bac-btn');
    $orangePen = $('#orange-pen');
    $bluePen = $('#blue-pen');
    $yellowPen = $('#yellow-pen');
    $html = $('.banner-html');
    $css = $('.banner-css');
    $js = $('.banner-js');

    $btn.on('click', function() {
        $title.fadeOut(550);
        $mainBlocks.fadeIn(550).css('display', 'inline-block');
        $html.fadeIn(350);
        $orangePen.addClass('pen-slide').delay(3700).queue(function(){
            $orangePen.removeClass('pen-slide').dequeue();
        }).queue(function() {
            $lineSection.addClass('bac-color');
            $bacLine.addClass('bac-line-color');
            $html.slideUp();
            $css.delay(500).slideDown();
            $bluePen.addClass('pen-slide').delay(2000).queue(function() {
                $bluePen.removeClass('pen-slide').dequeue();
            }).queue(function() {
                $css.slideUp();
                $js.delay(1000).slideDown();
                $fakeBtn.addClass('fake-btn-color').delay(1500).queue(function() {
                    $lineSection.addClass('alternate-scroll').dequeue();
                });
                $yellowPen.addClass('pen-slide').delay(2000).queue(function() {
                    $yellowPen.removeClass('pen-slide').dequeue();
                })
            })
        });
        $lineSection.delay(500).slideDown(3000).queue(function() {
            $(this).addClass('alternate-h').dequeue();
        });
        //$html.hide('slide', {direction: 'up'});
        //$css.show('slide', {direction: 'down'});
    })
}
bannerAnimation();

$navBtn = $('.nav-btn');
$nav = $('.navigation');

$navBtn.on('click', function() {
    $nav.toggleClass('nav-show');
})

$('.banner-subtitle').delay(1500).animate({opacity: 1}, {duration: 700});


function floatingNav() {
    var $navItemMain = $('.navr-link');
    var $navItemAbout = $('.about-navr-link');
    var $navItemWork = $('.work-navr-link');
    var $jsSection = $('.js-section');

    $navItemMain.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });

    $navItemAbout.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });

    $navItemWork.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });

    $jsSection.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });

    $navItemMain.on('click', function() {
        var index = $(this).data('index');
        var sectionOffset = $('.js-section[data-index="'+ index + '"]').offset().top;
        $('html,body').stop().animate({scrollTop: sectionOffset}, 900);
    })

}


function scrollAbout() {
    var $aboutSticky = $('.about-card');
    var sectionOffsetTop = $('.about').offset().top;
    var triggerOffset = sectionOffsetTop + $('.about').height() - $aboutSticky.height();

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
}

var offsetBtm;
$(document).scroll(function() {
    offsetBtm = $('.work').offset().top + $('.work').height() - $('.work-card').height();
})

function scrollWork() {
    var $workSticky = $('.work-card');
    var sectionOffsetTop = $('.work').offset().top;
    //var triggerOffset = sectionOffsetTop + $('.work').height() - $workSticky.height();
    //doesn't work when element changes height constant bottom offset calculation needed
    //don't know fix when last item content is less than 100vh!!!

    $(document).scroll(function() {
        if ( $(document).scrollTop() >= sectionOffsetTop ) {
            $workSticky.addClass('work-fixed');
        } else if ( $(document).scrollTop() < sectionOffsetTop){
            $workSticky.removeClass('work-fixed');
        }

        if ( $(document).scrollTop() > offsetBtm ) {
            $workSticky.removeClass('work-fixed');
            $workSticky.addClass('work-bottom');
        } else if( $(document).scrollTop() <= offsetBtm ) {
            $workSticky.removeClass('work-bottom');
        }
    });
}

function workItem() {
    var $workContent = $('.work-content');
    var $workBtn = $('.work-main-btn');
    var $closeBtn = $('.work-close-btn');
    var $workCard = $('.work-card');
    var $workItemContent = $('.work-item-content');
    var $workItem = $('.work-item');
    var counter = 0;
    var width;

    $workBtn.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });

    $closeBtn.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });

    $workItem.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });

    $workItemContent.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });

    $workBtn.on('click', function() {
        var index = $(this).data('index');
        var sectionOffset = $('.work-item[data-index="'+ index + '"]').offset().top;
        $('html,body').stop().animate({scrollTop: sectionOffset}, 500);
        $workContent.delay(900).animate({
            'padding-left': '30%' 
        }, 1000);
        width = $('.work-card').width() / $('.work-card').parent().width() * 100;
        width = Math.round(width);
        if(width != 30) {
            $workCard.delay(900).animate({
                width: '30%'
            }, 1000);
            $('.work-item-content[data-index="'+ index + '"]').delay(1000).show(0);
            $('.work-item[data-index="'+ index + '"]').delay(2100).animate({
                height: '40vh'
            }, 1000);
        } else {
            $('.work-item-content[data-index="'+ index + '"]').delay(1000).show(0);
            $('.work-item[data-index="'+ index + '"]').delay(1100).animate({
                height: '40vh'
            }, 1000);
        }
        $('.work-close-btn[data-index="'+ index + '"]').addClass('close-btn-visible');
        $('.work-main-btn[data-index="'+ index + '"]').addClass('main-btn-hidden');
        counter++;
    })

    $closeBtn.on('click', function() {
        var index = $(this).data('index');
        var sectionOffset = $('.work-item[data-index="'+ index + '"]').offset().top;
        $('html,body').stop().animate({scrollTop: sectionOffset}, 500);
        $('.work-item[data-index="'+ index + '"]').delay(1000).animate({
            height: '100vh'
        }, 1000);
        if( counter === 1 ) {
            $workContent.delay(1900).animate({
                'padding-left': '50%' 
            }, 1000);
            $workCard.delay(1900).animate({
                width: '50%'
            }, 1000);
        }
        $('.work-item-content[data-index="'+ index + '"]').delay(2100).hide(0);
        $('.work-close-btn[data-index="'+ index + '"]').removeClass('close-btn-visible');
        $('.work-main-btn[data-index="'+ index + '"]').removeClass('main-btn-hidden');
        counter--;
    })
}

function workItemTouch() {
    var $workBtn = $('.work-main-btn');
    var $closeBtn = $('.work-close-btn');
    var $workCard = $('.work-card');
    var $workItemContent = $('.work-item-content');
    var $workItem = $('.work-item');

    $workBtn.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });

    $closeBtn.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });

    $workItem.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });

    $workItemContent.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });

    $workBtn.on('click', function() {
        var index = $(this).data('index');
        var sectionOffset = $('.work-item[data-index="'+ index + '"]').offset().top;
        $('html,body').stop().animate({scrollTop: sectionOffset}, 500);
        $('.work-item-content[data-index="'+ index + '"]').delay(1000).show(0);
        $('.work-item[data-index="'+ index + '"]').delay(1100).animate({
            height: '45vh'
        }, 1000);
        $('.work-close-btn[data-index="'+ index + '"]').addClass('close-btn-visible');
        $('.work-main-btn[data-index="'+ index + '"]').addClass('main-btn-hidden');
    })

    $closeBtn.on('click', function() {
        var index = $(this).data('index');
        var sectionOffset = $('.work-item[data-index="'+ index + '"]').offset().top;
        $('html,body').stop().animate({scrollTop: sectionOffset}, 500);
        $('.work-item[data-index="'+ index + '"]').delay(1000).animate({
            height: '100vh'
        }, 1000);
        $('.work-item-content[data-index="'+ index + '"]').delay(2100).hide(0);
        $('.work-close-btn[data-index="'+ index + '"]').removeClass('close-btn-visible');
        $('.work-main-btn[data-index="'+ index + '"]').removeClass('main-btn-hidden');
    })
}

bannerCS();
floatingNav();
bannerResize();

if (screen.width > 1024) {
    scrollAbout();
    scrollWork();
    workItem();
}

if (screen.width <= 1024) {
    workItemTouch();
}


//Ilustracija za hero banner lik za kompom i na ekranu plugin za kucanje i u <> pise css html js ili jquery tjt

//ekran i kao half screen je koji jezik html kao samo crno belo onda kao css dodaju se boje a js kao scroll

// 1 or 2


// fix mora dok se loaduje da se dodeli height na svgWrap
// fix karakter ne radi mora mixin za hexagon