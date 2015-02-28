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
        var bodyEl = document.body,
                content = document.querySelector('.content-wrap'),
                openbtn = document.getElementById('open-button'),
                closebtn = document.getElementById('close-button'),
                isOpen = false;

        var containerInternal = document.getElementById('intro-container'),
                trigger = document.getElementById('projects-menu');

        var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;


        function init() {

                // disable scrolling
                window.addEventListener('scroll', noscroll);

                initEvents();
                /*if(!isMobile.any())
                {
                        initHeader();
                        initAnimation();
                        addListeners();
                }*/
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

                        return false;
                });

                /* Google Analitycs */
                var openMenuGA = document.getElementById('open-button');
                openMenuGA.addEventListener('click', function() {
                  ga('send', 'event', 'menu', 'open');
                            return false;
                });

                var closeMenuGA = document.getElementById('close-button');
                closeMenuGA.addEventListener('click', function() {
                  ga('send', 'event', 'menu', 'close');
                            return false;
                });

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

                var tinpixGA = document.getElementById('about-tinpix');
                tinpixGA.addEventListener('click', function() {
                  ga('send', 'event', 'about', 'click', 'tinpix');
                            return false;
                });

                var umespGA = document.getElementById('about-tinpix');
                umespGA.addEventListener('click', function() {
                  ga('send', 'event', 'about', 'click', 'UMESP');
                            return false;
                });

                var triggerGA = document.getElementById('trigger');
                triggerGA.addEventListener('click', function() {
                  ga('send', 'event', 'button', 'click', 'close-content');
                            return false;
                });

                

                /* menu Click */
                [].slice.call(document.querySelectorAll('.icon-list a')).forEach(function(el) {
                        
                        el.addEventListener("click", function(){
                            var _id = this.id;
                            ga('send', 'event', 'menu', 'click', _id);
                            return false;

                        })
                });

                /* menu Click */
                [].slice.call(document.querySelectorAll('.item')).forEach(function(el) {
                        el.addEventListener("click", function(){
                            var _title = this.title;
                            ga('send', 'event', 'project', 'click', _title);
                            return false;
                        });
                });

                /* menu Click */
                [].slice.call(document.querySelectorAll('#socials a')).forEach(function(el) {
                        el.addEventListener("click", function(){
                            var _title = this.title;
                            ga('send', 'event', 'socials', 'click', _title);
                            return false;
                        });
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

        function toggleContent(attr) {
                if (classie.has(containerInternal, 'container--open')) {
                        if (attr != undefined)
                        {
                                [].slice.call(document.querySelectorAll('.items-wrap')).forEach(function(el) {
                                        el.style.display = "none";
                                });
                                document.getElementById(attr).style.display = "flex";
                        }
                        else {
                                classie.remove(containerInternal, 'container--open');
                                classie.remove(document.getElementById('trigger'), 'trigger--active');
                                window.addEventListener('scroll', noscroll);
                        }
                }
                else {
                        if (attr != undefined)
                        {
                                [].slice.call(document.querySelectorAll('.items-wrap')).forEach(function(el) {
                                        el.style.display = "none";
                                });
                                document.getElementById(attr).style.display = "flex";
                        }
                        classie.add(containerInternal, 'container--open');
                        classie.add(document.getElementById('trigger'), 'trigger--active');
                        window.removeEventListener('scroll', noscroll);
                }
                toggleMenu();

        }

        // reset scrolling position
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        // disable scrolling
        window.addEventListener('scroll', noscroll);

        trigger.addEventListener('click', function() {
                toggleContent("projects");
                return false;
        }, false);
        document.getElementById('trigger').addEventListener('click', function() {
                toggleContent();
                return false;
        }, false);
        document.getElementById('about-menu').addEventListener('click', function() {
                toggleContent("about");
                return false;
        }, false);
        document.getElementById('contact-menu').addEventListener('click', function() {
                toggleContent("contact");
                return false;
        }, false);
        document.getElementById('comments-menu').addEventListener('click', function() {
                toggleContent("comments");
                return false;
        }, false);

        // For Demo purposes only (prevent jump on click)
        [].slice.call(document.querySelectorAll('.items-wrap a')).forEach(function(el) {
                /*el.onclick = function() {
                 return false;
                 }*/
        });

        function initHeader() {
                width = window.innerWidth;
                height = window.innerHeight;
                target = {x: width / 2, y: height / 2};

                largeHeader = document.getElementById('large-header');
                largeHeader.style.height = height + 'px';

                canvas = document.getElementById('demo-canvas');
                canvas.width = width;
                canvas.height = height;
                ctx = canvas.getContext('2d');

                // create points
                points = [];
                for (var x = 0; x < width; x = x + width / 20) {
                        for (var y = 0; y < height; y = y + height / 20) {
                                var px = x + Math.random() * width / 20;
                                var py = y + Math.random() * height / 20;
                                var p = {x: px, originX: px, y: py, originY: py};
                                points.push(p);
                        }
                }

                // for each point find the 5 closest points
                for (var i = 0; i < points.length; i++) {
                        var closest = [];
                        var p1 = points[i];
                        for (var j = 0; j < points.length; j++) {
                                var p2 = points[j]
                                if (!(p1 == p2)) {
                                        var placed = false;
                                        for (var k = 0; k < 5; k++) {
                                                if (!placed) {
                                                        if (closest[k] == undefined) {
                                                                closest[k] = p2;
                                                                placed = true;
                                                        }
                                                }
                                        }

                                        for (var k = 0; k < 5; k++) {
                                                if (!placed) {
                                                        if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                                                closest[k] = p2;
                                                                placed = true;
                                                        }
                                                }
                                        }
                                }
                        }
                        p1.closest = closest;
                }

                // assign a circle to each point
                for (var i in points) {
                        var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,214,64,0.3)');
                        points[i].circle = c;
                }
        }

        // Event handling
        function addListeners() {
                if (!('ontouchstart' in window)) {
                        window.addEventListener('mousemove', mouseMove);
                }
                window.addEventListener('scroll', scrollCheck);
                window.addEventListener('resize', resize);
        }

        function mouseMove(e) {
                var posx = posy = 0;
                if (e.pageX || e.pageY) {
                        posx = e.pageX;
                        posy = e.pageY;
                }
                else if (e.clientX || e.clientY) {
                        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
                }
                target.x = posx;
                target.y = posy;
        }

        function scrollCheck() {
                if (document.body.scrollTop > height)
                        animateHeader = false;
                else
                        animateHeader = true;
        }

        function resize() {
                width = window.innerWidth;
                height = window.innerHeight;
                largeHeader.style.height = height + 'px';
                canvas.width = width;
                canvas.height = height;
        }

        // animation
        function initAnimation() {
                animate();
                for (var i in points) {
                        shiftPoint(points[i]);
                }
        }

        function animate() {
                if (animateHeader) {
                        ctx.clearRect(0, 0, width, height);
                        for (var i in points) {
                                // detect points in range
                                if (Math.abs(getDistance(target, points[i])) < 4000) {
                                        points[i].active = 0.3;
                                        points[i].circle.active = 0.6;
                                } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                                        points[i].active = 0.1;
                                        points[i].circle.active = 0.3;
                                } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                                        points[i].active = 0.02;
                                        points[i].circle.active = 0.1;
                                } else {
                                        points[i].active = 0;
                                        points[i].circle.active = 0;
                                }

                                drawLines(points[i]);
                                points[i].circle.draw();
                        }
                }
                requestAnimationFrame(animate);
        }

        function shiftPoint(p) {
                TweenLite.to(p, 1 + 1 * Math.random(), {x: p.originX - 50 + Math.random() * 100,
                        y: p.originY - 50 + Math.random() * 100, ease: Circ.easeInOut,
                        onComplete: function() {
                                shiftPoint(p);
                        }});
        }

        // Canvas manipulation
        function drawLines(p) {
                if (!p.active)
                        return;
                for (var i in p.closest) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p.closest[i].x, p.closest[i].y);
                        ctx.strokeStyle = 'rgba(255,214,64,' + p.active + ')';
                        ctx.stroke();
                }
        }

        function Circle(pos, rad, color) {
                var _this = this;

                // constructor
                (function() {
                        _this.pos = pos || null;
                        _this.radius = rad || null;
                        _this.color = color || null;
                })();

                this.draw = function() {
                        if (!_this.active)
                                return;
                        ctx.beginPath();
                        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
                        ctx.fillStyle = 'rgba(255,214,64,' + _this.active + ')';
                        ctx.fill();
                };
        }

        // Util
        function getDistance(p1, p2) {
                return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        }


        init();
})();