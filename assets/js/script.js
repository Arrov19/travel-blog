const burger = $('#burger'),
    mobileMenuWrapper = $('#mobileMenuWrapper'),
    body = $('page');
let travelSliderLive = false,
    newsSliderLive = false;

/* бургер */
burger.on('click', () => mobileMenuWrapper.toggleClass('mobile-menu_active'));

$('.mobile-menu__close, .bg').click(() => {
    mobileMenuWrapper.removeClass('mobile-menu_active');
});
/* \бургер */

if ($('.travel-page__slider-container').length) {
    new Swiper('.travel-page__slider-container', {
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            500: {
                spaceBetween: 15,
                slidesPerView: 2,
            }
        }
    })
};

function newsSlider() {
    if ($('.news__blocks-slider').length) {
        new Swiper('.news__blocks-slider', {
            slidesPerView: 1,
            spaceBetween: 15,
            navigation: {
                nextEl: '.slider-btn-next',
                prevEl: '.slider-btn-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                }
            }
        })
        newsSliderLive = true;
    }
}

function travelSlider() {
    if ($('.travels__blocks-slider').length) {
        new Swiper('.travels__blocks-slider', {
            slidesPerView: 1,
            spaceBetween: 15,
            navigation: {
                nextEl: '.slider-btn-next',
                prevEl: '.slider-btn-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                650: {
                    slidesPerView: 2,
                }
            }
        })
    }
}

if ($(window).width() <= 768) {
    travelSlider()
    travelSliderLive = true;
}

if ($(window).width() <= 1024) newsSlider();

$(window).resize(() => {
    $(window).width() > 768 ? mobileMenuWrapper.removeClass('mobile-menu_active') : '';

    if ($(window).width() <= 768 && !travelSliderLive) {
        travelSlider();
        travelSliderLive = true;
    } else if ($(window).width() > 768 && travelSliderLive && $('.travels__blocks-slider').length) {
        document.querySelector('.travels__blocks-slider').swiper.destroy(true, true);
        travelSliderLive = false;
    };

    // newsSlider
    if ($(window).width() <= 1024 && !newsSliderLive) {
        newsSlider();
        newsSliderLive = true;
    } else if ($(window).width() > 1024 && newsSliderLive && $('.news__blocks-slider').length) {
        document.querySelector('.news__blocks-slider').swiper.destroy(true, true);
        newsSliderLive = false;
    };
});