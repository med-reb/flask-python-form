(function ($, Drupal) {
  'use strict';

  var initialize_product_card = false;

  Drupal.behaviors.ProductCard = {
    attach: function (context, settings) {
      init_product_card();
    }
  };

  function init_product_card() {
    if (!initialize_product_card) {
      initialize_product_card = true;

      // Get productname from URL.
      var product = new URLSearchParams(window.location.search).get('product');

      if (product) {
        // Load product title.
        // Remove default highglighted if product exists in the URL.
        $("article.product-card").each(function () {
          var title = $(this).find(".product-name-title").html().trim();
          $(this).attr('data-product-name', title.replace(/\s+/g, '-').toLowerCase());
          if (product && $(this).hasClass('coh-style-product-card-highlighted')) {
            $(this).removeClass("coh-style-product-card-highlighted");
          }
        });
        //Add highlighted class for specific product
        $('*[data-product-name="' + product + '"]').addClass("coh-style-product-card-highlighted");
      }
    }
  }

})(jQuery, Drupal);
