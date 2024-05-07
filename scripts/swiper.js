'use strict';

const swiper1 = new Swiper('.swiper1', {
    autoplay: {
        delay: 3000,
    },
    direction: 'horizontal',
    loop: true,
    speed: 4000,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        894: {
            slidesPerView: 4,
            slidesPerGroup: 2,
            spaceBetween: 16,
            navigation: {
                enabled: false,
            }
        },
        595: {
            slidesPerView: 2.1,
            slidesPerGroup: 3,
            spaceBetween: 12,
            navigation: {
                enabled: false,
            }
        },
        320: {
            slidesPerView: 1.5,
            // slidesPerGroup: 2,
            spaceBetween: 12,
            navigation: {
                enabled: false,
            },
        }

        // 480: {
        //   slidesPerView: 3,
        //   spaceBetween: 30
        // },
        // 640: {
        //   slidesPerView: 4,
        //   spaceBetween: 40
        // }
    }
});

const swiper2 = new Swiper('.swiper2', {
    autoplay: {
        delay: 4000,
    },
    direction: 'horizontal',
    loop: true,
    speed: 4000,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        894: {
            slidesPerView: 4,
            slidesPerGroup: 2,
            spaceBetween: 16,
            navigation: {
                enabled: false,
            }
        },
        595: {
            slidesPerView: 2.1,
            slidesPerGroup: 3,
            spaceBetween: 16,
            navigation: {
                enabled: false,
            }
        },
        320: {
            slidesPerView: 1.5,
            // slidesPerGroup: 3,
            spaceBetween: 12,
            navigation: {
                enabled: false,
            }
        }

        // 480: {
        //   slidesPerView: 3,
        //   spaceBetween: 30
        // },
        // 640: {
        //   slidesPerView: 4,
        //   spaceBetween: 40
        // }
    }
});

const swiper3 = new Swiper('.swiper3', {
    autoplay: {
        delay: 5000,
    },
    direction: 'horizontal',
    loop: true,
    speed: 4000,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        894: {
            slidesPerView: 4,
            slidesPerGroup: 2,
            spaceBetween: 16,
            navigation: {
                enabled: false,
            }
        },
        595: {
            slidesPerView: 2.1,
            slidesPerGroup: 3,
            spaceBetween: 16,
            navigation: {
                enabled: false,
            }
        },
        320: {
            slidesPerView: 1.5,
            // slidesPerGroup: 3,
            spaceBetween: 12,
            navigation: {
                enabled: false,
            }
        }

        // 480: {
        //   slidesPerView: 3,
        //   spaceBetween: 30
        // },
        // 640: {
        //   slidesPerView: 4,
        //   spaceBetween: 40
        // }
    }
});

const vacance = new Swiper('.swiper_vacance', {
    // width
    freeMode: {
        enabled: true,
        sticky: true,
    },
    slidesPerView: "auto",
    spaceBetween: 44,
    mousewheel: {
        invert: false,
        forceToAxis: true,
    },
    // autoplay: {
    //     delay: 7600,
    // },
    direction: 'horizontal',
    // speed: 2200,

    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        425: {
            slidesPerView: "auto",
        }
    }

    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30
    // },
    // 640: {
    //   slidesPerView: 4,
    //   spaceBetween: 40
    // }
    // }
});



let menu = ['1', '2', '3'];

const swiper4 = new Swiper('.swiper4', {
    // autoplay: {
    //     delay: 7600,
    // },
    direction: 'horizontal',
    loop: true,
    draggable: false,
    // speed: 1200,
    allowTouchMove:false,
    speed: 300,

    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'bullet',
    //   clickable: 'true',
    // },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
    // effect: 'coverflow',
    // coverflowEffect: {
    // rotate: 90,
    // slideShadows: false,
    // },
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    // cssMode: true,
    // speed: 11000,
    slidesPerView: 1,
    breakpoints: {
        320: {
            // slidesPerGroup: 1,
            spaceBetween: 100,
            navigation: {
                enabled: false,
            }
        }

        // 480: {
        //   slidesPerView: 3,
        //   spaceBetween: 30
        // },
        // 640: {
        //   slidesPerView: 4,
        //   spaceBetween: 40
        // }
    }
});

const swiper_gallery_page = new Swiper('.swiper_gallery_page', {
    // width
    loop: true,
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    speed: 4000,
    autoplay: {
        delay: 0,
    },

    // slidesPerView: "auto",  
    // spaceBetween:  14,

});
