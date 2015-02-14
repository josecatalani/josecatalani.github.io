(function() {

    var bodyEl = document.body,
            content = document.querySelector('.content-wrap'),
            openbtn = document.getElementById('open-button'),
            closebtn = document.getElementById('close-button'),
            isOpen = false;

    var containerInternal = document.getElementById('intro-container'),
            trigger = containerInternal.querySelector('button.trigger');

    function init() {

        // disable scrolling
        window.addEventListener('scroll', noscroll);

        initEvents();
    }

    function initEvents() {
        openbtn.addEventListener('click', toggleMenu);
        if (closebtn) {
            closebtn.addEventListener('click', toggleMenu);
        }

        // close the menu element if the target it´s not the menu element or one of its descendants..
        content.addEventListener('click', function(ev) {
            var target = ev.target;
            if (isOpen && target !== openbtn) {
                toggleMenu();
            }
        });
    }

    function toggleMenu() {
        if (isOpen) {
            classie.remove(bodyEl, 'show-menu');
        }
        else {
            classie.add(bodyEl, 'show-menu');
        }
        isOpen = !isOpen;
    }


    function noscroll() {
        window.scrollTo(0, 0);
    }

    function toggleContent() {
        if (classie.has(containerInternal, 'container--open')) {
            classie.remove(containerInternal, 'container--open');
            classie.remove(trigger, 'trigger--active');
            window.addEventListener('scroll', noscroll);
        }
        else {
            classie.add(containerInternal, 'container--open');
            classie.add(trigger, 'trigger--active');
            window.removeEventListener('scroll', noscroll);
        }
    }

    // reset scrolling position
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    // disable scrolling
    window.addEventListener('scroll', noscroll);

    trigger.addEventListener('click', toggleContent);

    // For Demo purposes only (prevent jump on click)
    [].slice.call(document.querySelectorAll('.items-wrap a')).forEach(function(el) {
        el.onclick = function() {
            return false;
        }
    });

    init();
})();