(function ($, Drupal) {
  'use strict';

  // Range slider
  const settings = {
    fill: '#F16E00',
    background: '#eee'
  }

  const sliders = document.querySelectorAll('.form-type-range');

  Array.prototype.forEach.call(sliders, (slider) => {
    // Look inside our slider for our input add an event listener
    slider.querySelector('input').addEventListener('input', (event) => {
      // 1. apply our value to the span
      slider.querySelector('span').innerHTML = event.target.value;
      // 2. apply our fill to the input
      applyFill(event.target);
    });
    // Don't wait for the listener, apply it now!
    applyFill(slider.querySelector('input'));
  });

  // This function applies the fill to our sliders by using a linear gradient background
  function applyFill(slider) {
    // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
    const percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min);
    // now we'll create a linear gradient that separates at the above point
    // Our background color will change here
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
    slider.style.background = bg;
  }

  Drupal.behaviors.enableFirstCustomerMenu = {
    attach: function (context) {
      if ($("header").length) {
        // Check if we are in independants.
        if (window.location.href.indexOf("/fr/independants") > -1 || window.location.href.indexOf("/nl/zelfstandigen") > -1) {
          $('.b2c-global-header-customer-menu li.coh-menu-list-item:nth-child(2)').addClass('is-active');
        }
        // If independants is not enabled, enlabled particuliers by default.
        if (!$('.b2c-global-header-customer-menu li.coh-menu-list-item:nth-child(2)').hasClass('is-active')) {
          $('.b2c-global-header-customer-menu li.coh-menu-list-item:nth-child(1)').addClass('is-active activeParent');
        }

        if ($(window).width() < 515) {
          $('.dropnav li.coh-menu-list-item>a').on('click', function () {
            $(".dropnav .level1").css('overflow-y', 'clip');
          });
          $('.coh-link.back').on('click', function () {
            $(".dropnav .level1").css('overflow-y', 'auto');
          });
          $("body > div.dialog-off-canvas-main-canvas > header > div.coh-container.b2c-global-header-bar-middle > div > div > ul > li.coh-menu-list-item.hidden-md.js-coh-menu-item > div:nth-child(1) > a:nth-child(2)").text(Drupal.t('Espace client'));
        }
        if (window.location.href.indexOf("/nl") >= 0) {
          setTimeout(function () {
            var cz_link = $("body > div.dialog-off-canvas-main-canvas > header > div.coh-container.b2c-global-header-bar-middle > div > div > ul > li.coh-menu-list-item.hidden-md.js-coh-menu-item > div:nth-child(1) > a:nth-child(2)").attr("href").replace("/fr/", "/nl/");
            $("body > div.dialog-off-canvas-main-canvas > header > div.coh-container.b2c-global-header-bar-middle > div > div > ul > li.coh-menu-list-item.hidden-md.js-coh-menu-item > div:nth-child(1) > a:nth-child(2)").attr("href", cz_link);
            var cz_zone = $("body > div.dialog-off-canvas-main-canvas > header > div.coh-container.b2c-global-header-bar-middle > div > div > ul > li.coh-menu-list-item.hidden-md.js-coh-menu-item.has-children.is-collapsed > div:nth-child(1) > a.b2c-global-header-customerzone").attr("href").replace("/fr", "/nl");
            $("body > div.dialog-off-canvas-main-canvas > header > div.coh-container.b2c-global-header-bar-middle > div > div > ul > li.coh-menu-list-item.hidden-md.js-coh-menu-item.has-children.is-collapsed > div:nth-child(1) > a.b2c-global-header-customerzone").attr("href", cz_zone);
          }, 100);
        }
      }
    }
  };
  // End Range slider

  $(window).on('load', function() {
    $('.language-switcher-block li a').each(function() {
      var lang = $(this).attr("hreflang");
      var link = $(this).attr("href");
      $('.b2c-global-header-bar-top-right-mobile a.lang-'+lang).attr("href",link);
    });
  });

})(jQuery, Drupal);
