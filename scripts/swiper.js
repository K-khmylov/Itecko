'use strict';

const swiper1 = new Swiper('.swiper1', {
    autoplay: {
        delay: 7000,
    },
    direction: 'horizontal',
    loop: true,
    speed: 2200,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        894: {
          slidesPerView: 4,
          slidesPerGroup: 4,
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
        delay: 7300,
    },
    direction: 'horizontal',
    loop: true,
    speed: 2200,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      894: {
        slidesPerView: 4,
        slidesPerGroup: 4,
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
      delay: 7600,
  },
  direction: 'horizontal',
  loop: true,
  speed: 2200,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      894: {
        slidesPerView: 4,
        slidesPerGroup: 4,
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
  spaceBetween:  44,
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

  // breakpoints: {
  //     320: {
  //       // slidesPerView: 4,
  //       // slidesPerGroup: 4,
  //       spaceBetween: 24,
  //       navigation: {
  //         enabled: false,
  //       }
  //     }

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
  speed: 1200,

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
  
  effect: 'coverflow',
  coverflowEffect: {
  rotate: 90,
  slideShadows: false,
  },

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