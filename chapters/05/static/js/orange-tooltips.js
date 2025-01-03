/**
 * @file
 * Orange tooltips behaviors.
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.orangeTooltipsOrangeTooltips = {
    attach: function (context, settings) {
      if (!window.tippy) {
        return;
      }

      tippy('[data-tippy-content]',{
        arrow: true,
      });
      

    }
  };

} (Drupal));

