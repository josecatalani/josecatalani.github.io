(function() {
        var isMobile =
                {
                        Android: function() {
                                return navigator.userAgent.match(/Android/i) ? true : false;
                        },
                        BlackBerry: function() {
                                return navigator.userAgent.match(/BlackBerry/i) ? true : false;
                        },
                        iOS: function() {
                                return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
                        },
                        Windows: function() {
                                return navigator.userAgent.match(/IEMobile/i) ? true : false;
                        },
                        any: function() {
                                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
                        }
                };


        function init() {

                initEvents();
        }

        function initEvents() {

                /* Google Analitycs */
                var contactFormGA = document.getElementById('contact-form-link');
                contactFormGA.addEventListener('click', function() {
                  ga('send', 'event', 'contact', 'send', 'form');
                            return false;
                });

                var briefingFormGA = document.getElementById('briefing-form-link');
                briefingFormGA.addEventListener('click', function() {
                  ga('send', 'event', 'contact', 'send', 'briefing');
                            return false;
                });



        }

        init();
})();