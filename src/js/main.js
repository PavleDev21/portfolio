$(window).on('load', function() {
    //$('.loader').delay(2300).fadeOut();
    $('.loader').hide();
});


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
    $btnClose = $('.banner-btn-close');
    $lineSection = $('.banner-alternate-container');
    $bacLine = $('.bac-line');
    $fakeBtn = $('.bac-btn');
    $orangePen = $('#orange-pen');
    $bluePen = $('#blue-pen');
    $yellowPen = $('#yellow-pen');
    $html = $('.banner-html');
    $css = $('.banner-css');
    $js = $('.banner-js');

    function orange() {
        $orangePen.addClass('pen-slide');
        setTimeout(function() {
            $orangePen.removeClass('pen-slide');
        }, 3700)
    }

    function blue() {
        setTimeout(function() {
            $lineSection.addClass('bac-color');
            $bacLine.addClass('bac-line-color');
            $html.slideUp();
            $css.delay(500).slideDown();
            $bluePen.addClass('pen-slide');
        }, 3700)
        setTimeout(function() {
            $bluePen.removeClass('pen-slide');
        }, 5200)
    }

    function yellow() {
        setTimeout(function() {
            $css.slideUp();
            $yellowPen.addClass('pen-slide');
            $js.delay(1000).slideDown();
            $fakeBtn.addClass('fake-btn-color');
        }, 5200)
        setTimeout(function() {
            $lineSection.addClass('alternate-scroll');
        }, 6700)
        setTimeout(function() {
            $yellowPen.removeClass('pen-slide');
        }, 7400)
    }
    function closeBtn() {
        setTimeout(function() {
            $btnClose.fadeIn();
        }, 7400)
    }

    $btn.on('click', function() {
        $title.fadeOut(550);
        $btn.slideUp();
        $mainBlocks.fadeIn(550).css('display', 'inline-block');
        $html.fadeIn(350);
        $lineSection.delay(500).slideDown(3000).queue(function() {
            $(this).addClass('alternate-h').dequeue();
        });
        orange();
        blue();
        yellow();
        closeBtn();
    })
    $btnClose.on('click', function() {
        $mainBlocks.fadeOut(500);
        $lineSection.hide();
        $lineSection.removeClass('bac-color');
        $lineSection.removeClass('alternate-scroll');
        $bacLine.removeClass('bac-line-color');
        $lineSection.removeClass('alternate-h');
        $fakeBtn.removeClass('fake-btn-color');
        $js.hide();
        $btnClose.fadeOut(500);
        $title.fadeIn(500);
        $btn.slideDown();
    })
}

function nav() {
    $navLink = $('.nav-link');
    $navBtn = $('.nav-btn');
    $nav = $('.navigation');
    $navIcon = $('.nav-btn-icon-span');
    $header  = $('.header');
    $jsSection = $('.js-section');

    if(screen.width <= 1024) {
        $header.css('display','block');
    }

    $navBtn.on('click', function() {
        $nav.toggleClass('nav-show');
        $navIcon.toggleClass('nav-icon-span-active');
    })

    $navLink.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    })

    $navLink.on('click', function() {
        var index = $(this).data('index');
        var sectionOffset = $('.js-section[data-index="'+ index + '"]').offset().top;
        $('html,body').stop().animate({scrollTop: sectionOffset}, 900);
        $nav.toggleClass('nav-show');
        $navIcon.toggleClass('nav-icon-span-active');
    })

}


function floatingNav() {
    var $navItemMain = $('.navr-link');
    var $navItemAbout = $('.about-navr-link');
    var $navItemWork = $('.work-navr-link');
    var $navItemContact = $('.contact-navr-link');
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

    $navItemContact.each(function(i) {
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

function floatingHide() {
    var $navMobile = $('.nav-mobile');

    if(screen.width <= 1024) {
        $navMobile.css('display' , 'none');
    }
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

function scrollWork() {
    var $workSticky = $('.work-card');
    var sectionOffsetTop = $('.work').offset().top;
    var offsetBtm;
    $(document).scroll(function() {
        offsetBtm = $('.work').offset().top + $('.work').height() - $('.work-card').height();
    })

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
    var $workSubtitle = $('.work-item-info-subtitle');
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

    $workSubtitle.each(function(i) {
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
        console.log(width);
        if(width != 30) {
            console.log("aa");
            $workCard.delay(900).animate({
                width: '30%'
            }, 1000);
            $('.work-item-content[data-index="'+ index + '"]').delay(1000).show(0);
            $('.work-item[data-index="'+ index + '"]').delay(2100).animate({
                height: '40vh'
            }, 1000);
        } else {
            console.log("bb");
            $('.work-item-content[data-index="'+ index + '"]').delay(1000).show(0);
            $('.work-item[data-index="'+ index + '"]').delay(1100).animate({
                height: '40vh'
            }, 1000);
        }
        $('.work-close-btn[data-index="'+ index + '"]').addClass('close-btn-visible');
        $('.work-main-btn[data-index="'+ index + '"]').addClass('main-btn-hidden');
        $('.work-item-info-subtitle[data-index="'+ index + '"]').addClass('wii-subtitle-move');
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
        $('.work-item-info-subtitle[data-index="'+ index + '"]').removeClass('wii-subtitle-move');
        counter--;
    })
}

function workItemTouch() {
    var $workBtn = $('.work-main-btn');
    var $workSubtitle = $('.work-item-info-subtitle');
    var $closeBtn = $('.work-close-btn');
    var $workCard = $('.work-card');
    var $workItemContent = $('.work-item-content');
    var $workItem = $('.work-item');

    $workBtn.each(function(i) {
        var $this = $(this);
        $this.attr('data-index', i);
    });

    $workSubtitle.each(function(i) {
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
        $('.work-item-info-subtitle[data-index="'+ index + '"]').addClass('wii-subtitle-move');
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
        $('.work-item-info-subtitle[data-index="'+ index + '"]').removeClass('wii-subtitle-move');
    })
}

nav();
floatingNav();
///////////////
floatingHide();
///////////////
bannerCS();
bannerResize();
bannerAnimation();


if (screen.width > 1024) {
    scrollAbout();
    scrollWork();
    workItem();
}

if (screen.width <= 1024) {
    workItemTouch();
}