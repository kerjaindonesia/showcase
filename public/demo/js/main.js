(function ($) {
    "use strict";
    jQuery(document).on('ready', function () {
        $('.navbar-nav li a').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top -70
            }, 1500);
            e.preventDefault()
        });
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 120) {
                $('.navbar').addClass("is-sticky")
            } else {
                $('.navbar').removeClass("is-sticky")
            }
        });
        $('.like-slides').owlCarousel({
            loop: !0,
            nav: !0,
            dots: !1,
            autoplayHoverPause: !0,
            autoplay: !1,
            navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
                1650: {
                    items: 4,
                }
            }
        });
        if (document.getElementById("particles-js")) particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 40,
                    "density": {
                        "enable": !0,
                        "value_area": 600
                    }
                },
                "color": {
                    "value": ["#fbe5e5", "#e9fbf7", "#dbf9f2"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#fff"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 50,
                        "height": 50
                    }
                },
                "opacity": {
                    "value": 1,
                    "random": !0,
                    "anim": {
                        "enable": !0,
                        "speed": 0.2,
                        "opacity_min": 0,
                        "sync": !1
                    }
                },
                "size": {
                    "value": 50,
                    "random": !0,
                    "anim": {
                        "enable": !0,
                        "speed": 2,
                        "size_min": 5,
                        "sync": !1
                    }
                },
                "line_linked": {
                    "enable": !1,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": !0,
                    "speed": 1,
                    "direction": "top",
                    "random": !0,
                    "straight": !1,
                    "out_mode": "out",
                    "bounce": !1,
                    "attract": {
                        "enable": !1,
                        "rotateX": 600,
                        "rotateY": 600
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": !1,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": !1,
                        "mode": "repulse"
                    },
                    "resize": !0
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 250,
                        "size": 0,
                        "duration": 2,
                        "opacity": 0,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": !0
        });
        var TxtType = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = !1
        };
        TxtType.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];
            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1)
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1)
            }
            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
            var that = this;
            var delta = 200 - Math.random() * 100;
            if (this.isDeleting) {
                delta /= 2
            }
            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = !0
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = !1;
                this.loopNum++;
                delta = 500
            }
            setTimeout(function () {
                that.tick()
            }, delta)
        };
        window.onload = function () {
            var elements = document.getElementsByClassName('typewrite');
            for (var i = 0; i < elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period)
                }
            }
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css)
        }
        $(function () {
            $('[data-tooltip="tooltip"]').tooltip()
        })
    });
    jQuery(window).on('load', function () {
        $('.preloader').fadeOut()
    })
}(jQuery))
