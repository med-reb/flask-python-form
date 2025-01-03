(function ($, Drupal) {
    'use strict';
    var initialize_colors;

    Drupal.behaviors.custom_OBEColors = {
        attach: function (context, settings) {
            if (!initialize_colors) {
                initialize_colors = true;
                custom_colors();
                prepare_ajax_complete();
            }
        }
    }

    function custom_colors() {
        setColorPicker();
    }

    function prepare_ajax_complete(){
        $(document).ajaxComplete(function (event, xhr, settings) {
            if(settings.url.indexOf('_wrapper_format=drupal_ajax') !== -1 &&  settings.url.includes("/admin/obe-colors") && settings.type==='POST') {
                setColorPicker();
            }
        });
    }

    function setColorPicker() {
        $(".spectrumField").spectrum({
            type: "component",
            preferredFormat: "hex",
            showInput: true,
            showAlpha: false
        });
    }

})(jQuery, Drupal);