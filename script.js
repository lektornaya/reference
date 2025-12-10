document.addEventListener("DOMContentLoaded", () => {
    /* ============================
       М О Б И Л Ь Н О Е  М Е Н Ю
    ============================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("nav-open");
        menuToggle.classList.toggle("active");
        
        // Добавляем/убираем класс no-scroll для body
        if (navLinks.classList.contains("nav-open")) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    });

    // Закрытие меню по клику на ссылку
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("nav-open");
            menuToggle.classList.remove("active");
            document.body.classList.remove("no-scroll");
        });
    });

    // Закрытие при ресайзе
    window.addEventListener("resize", () => {
        if (window.innerWidth > 840) {
            navLinks.classList.remove("nav-open");
            menuToggle.classList.remove("active");
            document.body.classList.remove("no-scroll");
        }
    });

    /* ============================
       С К Р Ы В А Ю Щ А Я С Я  Ш А П К А
    ============================== */
    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= scrollThreshold) {
            header.classList.remove("scroll-up");
            header.classList.remove("scroll-down");
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
            header.classList.remove("scroll-up");
            header.classList.add("scroll-down");
        } else if (currentScroll < lastScroll && header.classList.contains("scroll-down")) {
            header.classList.remove("scroll-down");
            header.classList.add("scroll-up");
        }

        lastScroll = currentScroll;
    });

    /* ============================
       В И Д Е О  О Б Р А Б О Т К А
    ============================== */
    const video = document.querySelector(".hero-bg video");
    
    if (video) {
        video.addEventListener("error", () => {
            console.log("Видео не загрузилось, показываем градиент");
            video.style.display = "none";
        });

        // Предзагрузка видео
        video.addEventListener("loadeddata", () => {
            console.log("Видео загружено успешно");
        });
    }

    /* ============================
       А Н И М А Ц И И  П Р И  С К Р О Л Л Е
    ============================== */
    if (window.gsap && window.ScrollTrigger) {
        // Регистрируем плагин ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Анимация для feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power2.out"
            });
        });

        // Анимация для портфолио
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 75%",
                    toggleActions: "play none none none"
                },
                y: 80,
                opacity: 0,
                duration: 1,
                delay: index * 0.15,
                ease: "power3.out"
            });
        });

        // Анимация для секций
        const sections = document.querySelectorAll('.capabilities, .about, .projects, .media, .showroom');
        sections.forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });
    }

    /* ============================
       П Л А В Н А Я  П Р О К Р У Т К А  К  Я К О Р Я М
    ============================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            const id = anchor.getAttribute("href");
            if (id === "#" || id === "#contact") return;

            const target = document.querySelector(id);
            if (!target) return;

            e.preventDefault();
            const headerHeight = header.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

            // Закрываем мобильное меню если открыто
            if (navLinks.classList.contains("nav-open")) {
                navLinks.classList.remove("nav-open");
                menuToggle.classList.remove("active");
                document.body.classList.remove("no-scroll");
            }
        });
    });

    /* ============================
       И Н И Ц И А Л И З А Ц И Я  С В А Й П Е Р О В
    ============================== */
    function initSwipers() {
        if (typeof Swiper !== 'undefined') {
            // Основной слайдер проектов
            const projectsSlider = new Swiper('.projects-slider', {
                slidesPerView: 1.2,
                spaceBetween: 18,
                loop: true,
                centeredSlides: false,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2.2,
                        spaceBetween: 20
                    },
                    992: {
                        slidesPerView: 3.2,
                        spaceBetween: 24
                    }
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            // Медиа слайдер
            const mediaSlider = new Swiper('.media-slider', {
                slidesPerView: 1.2,
                spaceBetween: 12,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 16
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    }
                }
            });

            console.log("Свайперы инициализированы");
        }
    }

    /* ============================
       Я Н Д Е К С  К А Р Т Ы
    ============================== */
    function initMap() {
        if (typeof ymaps !== 'undefined') {
            ymaps.ready(function () {
                try {
                    const map = new ymaps.Map('map', {
                        center: [55.751244, 37.618423],
                        zoom: 15,
                        controls: ['zoomControl']
                    });

                    const placemark = new ymaps.Placemark([55.751244, 37.618423], {
                        hintContent: 'Шоурум MMVI',
                        balloonContent: '<strong>MMVI Шоурум</strong><br>Москва, Марксистская 20, стр 1<br>+7 (495) 670-70-04'
                    }, {
                        iconLayout: 'default#image',
                        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                        iconImageSize: [40, 40],
                        iconImageOffset: [-20, -40]
                    });

                    map.geoObjects.add(placemark);
                    map.behaviors.disable('scrollZoom');
                    
                    console.log("Карта Яндекс инициализирована");
                } catch (error) {
                    console.error("Ошибка при создании карты:", error);
                }
            });
        }
    }

    /* ============================
       З А Г Р У З К А  С Т Р А Н И Ц Ы
    ============================== */
    // Ждем полной загрузки страницы
    window.addEventListener('load', () => {
        // Инициализируем свайперы
        initSwipers();
        
        // Инициализируем карту
        initMap();
        
        // Добавляем класс loaded для плавного появления
        document.body.classList.add('page-loaded');
        
        console.log("Страница полностью загружена");
    });

    // Добавляем динамические стили
    const dynamicStyles = document.createElement("style");
    dynamicStyles.textContent = `
        /* Предотвращаем скролл при открытом меню */
        body.no-scroll {
            overflow: hidden;
            height: 100vh;
        }
        
        /* Мобильное меню */
        .nav-links.nav-open {
            display: flex !important;
            flex-direction: column;
            position: fixed;
            top: 86px;
            left: 0;
            right: 0;
            background: #f2f1f0;
            padding: 22px 25px;
            gap: 18px;
            box-shadow: 0 7px 25px rgba(0,0,0,0.12);
            z-index: 1000;
            height: calc(100vh - 86px);
            justify-content: flex-start;
            align-items: flex-start;
        }
        
        .nav-links.nav-open a {
            font-size: 18px;
            padding: 10px 0;
            width: 100%;
            border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        
        .nav-links.nav-open a:last-child {
            border-bottom: none;
        }
        
        .menu-toggle.active i {
            transform: rotate(90deg);
            transition: 0.3s ease;
        }
        
        /* Плавное скрытие шапки */
        .header.scroll-down {
            transform: translateY(-100%);
            transition: transform 0.35s ease, box-shadow 0.3s ease;
        }
        
        .header.scroll-up {
            transform: translateY(0);
            box-shadow: 0 2px 18px rgba(0,0,0,0.12);
            transition: transform 0.35s ease, box-shadow 0.3s ease;
        }
        
        /* Плавное появление страницы */
        body.page-loaded .hero-inner {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hero-inner {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 1s ease, transform 1s ease;
        }
    `;
    document.head.appendChild(dynamicStyles);
});
