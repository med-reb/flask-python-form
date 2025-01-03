(function ($, Drupal, drupalSettings) {
  'use strict';

  var initialized_swiper = false;

  Drupal.behaviors.SSComponentContainerSwiper = {
    attach: function (context, settings) {
      init_swiper();

    }
  };

  function init_swiper() {
    if (!initialized_swiper) {
      initialized_swiper = true;

      if ($('.swiper-enabled').length) {
        $('body').css('overflow-x', 'hidden');
        $('.swiper-enabled').each(function () {
          var scrollbar = $('<div class="swiper-scrollbar></div>');
          var uniq = Math.floor(Math.random() * 6000);
          $(this).find(' > .coh-container').css('overflow', 'visible');
          $(this).find(' > .coh-container > .coh-row').addClass('swiper-' + uniq).attr('style', 'width:100% !important;');

          $(this).find(' > .coh-container > .coh-row > .coh-row-inner').addClass('swiper-wrapper').css('justify-content', 'left');
          $(this).find(' > .coh-container > .coh-row > .coh-row-inner').removeClass('coh-row-inner');
          $(this).find(' > .coh-container > .coh-row > .swiper-wrapper > .coh-column').addClass('swiper-slide');
          $(this).find(' > .coh-container > .coh-row > .swiper-wrapper > .coh-column').attr('class', function (i, c) {
            return c.replace(/(^|\s)coh-col-\S+/g, '');
          });
          $(this).find(' > .coh-container > .coh-row > .cswiper-wrapperoh-row-inner > .coh-column').attr('class', function (i, c) {
            return c.replace(/(^|\s)coh-visible-\S+/g, '');
          });
          $('.swiper-' + uniq).append(scrollbar);

          let width = $(document).width();
          // Get values
          let slides_wide_desktop = $(this).attr('data-content-per-slider');
          let slides_tablet = $(this).attr('data-content-per-slider-tablet');
          let slides_phone_landscape = $(this).attr('data-content-per-slider-phone-landscape');


          let slides = slides_wide_desktop;
          if (width < 993 && width > 769) {
            slides = slides_tablet;
          }
          if (width < 769) {
            slides = slides_phone_landscape;
          }

          var swiper = new Swiper('.swiper-' + uniq, {
            spaceBetween: 0,
            centeredSlides: false,
            mousewheel: {
              forceToAxis: true
            },
            breakpoints: {
              1200: {
                slidesPerView: slides_wide_desktop,
              },
              769: {
                slidesPerView: "auto",
              },
              320: {
                slidesPerView: "auto",
              },
            },
            scrollbar: {
              el: ".swiper-scrollbar",
              hide: false,
            },
          });

          // It works.
          // var swiper = new Swiper('.swiper-' + uniq, {
          //   slidesPerView: slides,
          //   spaceBetween: 0,
          //   scrollbar: {
          //     el: ".swiper-scrollbar",
          //     hide: true,
          //   },
          // });

        });
      }
    }

  }


})(jQuery, Drupal, drupalSettings);
