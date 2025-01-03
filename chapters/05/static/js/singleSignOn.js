(function ($, Drupal, drupalSettings) {
    Drupal.behaviors.orange_b2b_singlesignon = {
        attach: function (context, settings) {

            // console.log('LANGUAGE DE DRUPALSETTINGS');
            // console.log(drupalSettings.settings.language);
            var lang = drupalSettings.settings.language;
            // var url = window.location.href,

            // questionMark = url.indexOf("?"),
            // paramString = url.substring(questionMark + 1),
            // spliter = url.substring(questionMark + 1).indexOf('&'),
            // params = paramString.split('&');
            // console.log(params);
            // console.log(url);
            // url = new URL(url);
            // console.log(url);


            // console.log(location.search.substring(1));
            var search = location.search.substring(1);
            if(search && search !== '') {
                var params = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) });
                if(params) {
                    var msgParam = params.msg,
                    errorCode = params['ERROR-CODE'],
                    errorMsg;
                    if (errorCode && msgParam && msgParam == 'SamlAuthFailed') {
                        switch(errorCode) {
                            case '2000':
                                if (lang == 'nl') {
                                    errorMsg = ' Om met itsme toegang te krijgen tot je Klantenzone, dien je eerst een account aan te maken. Klik hiervoor op « Ik schrijf me in ».';
                                }
                                else {
                                    errorMsg = 'Pour accéder à votre Espace client avec itsme, vous devez d’abord créer un compte. Pour cela cliquez sur « Créer un compte » ci-dessous.';
                                }
                                $('.istme-errorMsg-container').addClass('alert-danger');
                                break;
                            case '2001':
                                if (lang == 'nl') {
                                    errorMsg = 'Sorry, er ging iets mis. Zorg ervoor dat je de itsme-app tijdig opent om het inloggen te bevestigen.';
                                }
                                else {
                                    errorMsg = 'Nous sommes désolés, quelque chose s\'est mal passé. Assurez-vous d\'avoir bien ouvert l\'application itsme pour confirmer votre connexion.';
                                }
                                $('.istme-errorMsg-container').addClass('alert-danger');
                                break;
                            default:
                            if (parseInt(errorCode) >= 1000 && parseInt(errorCode) < 2000 ) {
                                 if (lang == 'nl') {
                                    errorMsg = 'Sorry, er ging iets mis. Probeer het later opnieuw.';
                                }
                                else {
                                    errorMsg = 'Nous sommes désolés, quelque chose s\'est mal passé. Veuillez réessayer plus tard.';
                                }
                                $('.istme-errorMsg-container').addClass('alert-danger');
                            }
                            break;
                        }
                        $('.istme-errorMsg-container').text(errorMsg);
                    }
                }
            }


            var translate = {
                errorServer: 'We are experiencing technical difficulties, please try again later.',
                errorCompleteForm: 'Please complete all the fields to log in',
                errorInvalidLogin: 'Your username or password is incorrect. Please try again.'
            }
            if(lang == 'nl'){
                translate = {
                    errorServer: 'We ondervinden momenteel technische problemen, gelieve later opnieuw te proberen.',
                    errorCompleteForm: 'Gelieve alle velden in te vullen om in te loggen.',
                    errorInvalidLogin: "Je gebruikersnaam of wachtwoord is onjuist. Probeer het opnieuw."
                }
            }else if (lang == 'fr'){
                translate = {
                    errorServer: 'Nous &eacute;prouvons des difficult&eacute;s techniques, veuillez r&eacute;essayer plus tard.',
                    errorCompleteForm: "Veuillez remplir tous les champs pour vous identifier",
                    errorInvalidLogin: "Votre nom d'utilisateur ou votre mot de passe est incorrect. Veuillez réessayer."
                }
            }
            function getURLParameter(name) {
                return decodeURI(
                    (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
                );
            }
            function createCookie(name,value,domain) {
                var domainstr = ";domain="+domain+";"
                document.cookie = name+"="+value+"; domain="+domain+"; path=/; secure";
            }
            function getCookie(name) {
              var value = "; " + document.cookie;
              var parts = value.split("; " + name + "=");
              if (parts.length == 2) return parts.pop().split(";").shift();
            }

            if(getURLParameter('msg') == "AuthFailed"){
                $('#sso-form').validate("markForm",'error',translate.errorInvalidLogin);
                // var _gaq = _gaq || [];
                // _gaq.push(['_setAccount', 'UA-21388172-1', '_trackPageview']);
                // _gaq.push(['_trackEvent', 'Customer Zone', 'login failed', 'login failed']);
            }
            if (getURLParameter("TARGET") != 'null') {
                var base = drupalSettings.settings.ssodomain;
                newTarget = base + decodeURIComponent(getURLParameter("TARGET")).split("orange.be")[1];
                $("input[name='target']").val(newTarget);
            }


            // $('#sso-email')
            //     .on('keyup',function(){
            //         var el = $(this);
            //         if(el.validate('hasMinLength',4)){
            //             el.validate('markField','success');
            //         }else{
            //             el.validate('markField','warning');
            //         }
            //     })
            //     .on('blur',function(){
            //         var el = $(this);
            //         if(el.validate('hasMinLength',4)){
            //             el.validate('markField','success');
            //         }else{
            //             el.validate('markField','error');
            //         }
            //     })
            // $('#sso-password')
            //     .on('keyup',function(){
            //         var el = $(this);
            //         if(el.validate('hasMinLength',4)){
            //             el.validate('markField','success');
            //         }else{
            //             el.validate('markField','warning');
            //         }
            //     })
            //     .on('blur',function(){
            //         var el = $(this);
            //         if(el.validate('hasMinLength',4)){
            //             el.validate('markField','success');
            //         }else{
            //             el.validate('markField','error');
            //         }
            //     })

            $('#sso-form').on('submit',function(e){
                var form = $(this),
                    btn = form.find('button[type=submit], input[type=submit]');
                var segment = getCookie('SEGMENT');

                e.preventDefault();
                //console.log(arguments);
                if($('#sso-email').validate('hasMinLength',4) && $('#sso-password').validate('hasMinLength',4)){

                     if(segment === 'SOHO') {
                         var username    = $('#sso-email').val();
                         var b2bloginurl = form.data('soho-target');
                         $.ajax({
                             type: "POST",
                             url: "/e-services/userCheck/b2b",
                             data: {
                                 "username": username
                             },
                             success: function(msg){

                                 if(msg == "CZUser") {
                                     form[0].submit();
                                 }
                                 else if(msg == "B2BUser"){
                                     form.attr('action',b2bloginurl);
                                     form[0].submit();
                                 }
                                 else {
                                     form.validate("markForm",'error',translate.errorInvalidLogin);
                                 }
                             },
                             error: function(XMLHttpRequest, textStatus, errorThrown) {
                                // console.log("login failure due to "+XMLHttpRequest.status);
                                form.validate("markForm",'error',translate.errorInvalidLogin);
                             }
                         });
                     }
                     else {
                        form[0].submit();
                     }
                }
                else{
                    form.validate("markForm",'error',translate.errorCompleteForm);
                }

                return false
            })
        }
    };
})(jQuery, Drupal, drupalSettings);
