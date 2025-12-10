<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MMVI — Цифровые продукты и стратегии</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Навигация -->
    <nav class="navbar">
        <div class="container">
            <div class="nav-content">
                <a href="#" class="logo">
                    <span class="logo-text">MMVI</span>
                </a>
                
                <div class="nav-links">
                    <a href="#services">Услуги</a>
                    <a href="#portfolio">Портфолио</a>
                    <a href="#process">Процесс</a>
                    <a href="#about">О нас</a>
                    <a href="#contact" class="nav-btn">Обсудить проект</a>
                </div>
                
                <button class="menu-toggle" aria-label="Меню">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </nav>

    <!-- Герой-секция -->
    <header class="hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title">
                    <span class="title-line">Создаём</span>
                    <span class="title-line">цифровые</span>
                    <span class="title-line">продукты</span>
                    <span class="title-line highlight">и стратегии</span>
                </h1>
                
                <div class="hero-description">
                    <p>Агентство полного цикла: от стратегии и дизайна до разработки и запуска.</p>
                </div>
                
                <div class="hero-stats">
                    <div class="stat">
                        <span class="stat-number">50+</span>
                        <span class="stat-label">проектов</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">7</span>
                        <span class="stat-label">лет опыта</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">15+</span>
                        <span class="stat-label">отраслей</span>
                    </div>
                </div>
                
                <a href="#contact" class="hero-btn">
                    <span>Обсудить проект</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
        
        <div class="hero-background">
            <div class="bg-circle circle-1"></div>
            <div class="bg-circle circle-2"></div>
            <div class="bg-circle circle-3"></div>
        </div>
    </header>

    <!-- Секция услуг -->
    <section id="services" class="services">
        <div class="container">
            <h2 class="section-title">Услуги</h2>
            
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <h3>Стратегия</h3>
                    <ul>
                        <li>Исследование рынка</li>
                        <li>Анализ конкурентов</li>
                        <li>Разработка концепции</li>
                        <li>Планирование продукта</li>
                    </ul>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-paint-brush"></i>
                    </div>
                    <h3>Дизайн</h3>
                    <ul>
                        <li>UX/UI дизайн</li>
                        <li>Прототипирование</li>
                        <li>Брендинг</li>
                        <li>Дизайн-системы</li>
                    </ul>
                </div>
                
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>Разработка</h3>
                    <ul>
                        <li>Веб-разработка</li>
                        <li>Мобильные приложения</li>
                        <li>Интеграции</li>
                        <li>Техподдержка</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Секция портфолио -->
    <section id="portfolio" class="portfolio">
        <div class="container">
            <h2 class="section-title">Портфолио</h2>
            
            <div class="portfolio-grid">
                <div class="portfolio-card">
                    <div class="portfolio-image">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Финтех проект">
                        <div class="portfolio-overlay">
                            <div class="portfolio-content">
                                <span class="portfolio-category">Финтех</span>
                                <h3>Банковское приложение</h3>
                                <p>Полный цикл: от исследования до запуска мобильного банка</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="portfolio-card">
                    <div class="portfolio-image">
                        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="E-commerce проект">
                        <div class="portfolio-overlay">
                            <div class="portfolio-content">
                                <span class="portfolio-category">E-commerce</span>
                                <h3>Онлайн-магазин</h3>
                                <p>Платформа для продажи товаров с AI-рекомендациями</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="portfolio-card">
                    <div class="portfolio-image">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Стартап проект">
                        <div class="portfolio-overlay">
                            <div class="portfolio-content">
                                <span class="portfolio-category">Стартап</span>
                                <h3>Образовательная платформа</h3>
                                <p>Дизайн и разработка MVP для EdTech проекта</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Секция процесса -->
    <section id="process" class="process">
        <div class="container">
            <h2 class="section-title">Процесс работы</h2>
            
            <div class="process-steps">
                <div class="step">
                    <div class="step-number">01</div>
                    <h3>Исследование</h3>
                    <p>Анализируем рынок, конкурентов и целевую аудиторию</p>
                </div>
                
                <div class="step">
                    <div class="step-number">02</div>
                    <h3>Прототипирование</h3>
                    <p>Создаём интерактивные прототипы будущего продукта</p>
                </div>
                
                <div class="step">
                    <div class="step-number">03</div>
                    <h3>Дизайн</h3>
                    <p>Разрабатываем UI/UX дизайн и дизайн-систему</p>
                </div>
                
                <div class="step">
                    <div class="step-number">04</div>
                    <h3>Разработка</h3>
                    <p>Программируем и тестируем готовый продукт</p>
                </div>
                
                <div class="step">
                    <div class="step-number">05</div>
                    <h3>Запуск</h3>
                    <p>Публикуем продукт и обеспечиваем техподдержку</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Секция о нас -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h2 class="section-title">О нас</h2>
                    <p>Мы — команда экспертов в digital-разработке, создающая продукты, которые решают реальные бизнес-задачи.</p>
                    <p>Работаем с компаниями от стартапов до корпораций, помогая им достигать целей через технологии и дизайн.</p>
                    
                    <div class="about-values">
                        <div class="value">
                            <i class="fas fa-lightbulb"></i>
                            <h4>Инновации</h4>
                        </div>
                        <div class="value">
                            <i class="fas fa-handshake"></i>
                            <h4>Партнёрство</h4>
                        </div>
                        <div class="value">
                            <i class="fas fa-chart-line"></i>
                            <h4>Результат</h4>
                        </div>
                    </div>
                </div>
                
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Наша команда">
                </div>
            </div>
        </div>
    </section>

    <!-- Секция контактов -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="contact-content">
                <div class="contact-text">
                    <h2 class="section-title">Начнём проект?</h2>
                    <p>Обсудим вашу задачу и предложим решение</p>
                    
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:hello@mmvi.pro">hello@mmvi.pro</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <a href="tel:+78001234567">+7 (800) 123-45-67</a>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Москва, ул. Примерная, 15</span>
                        </div>
                    </div>
                </div>
                
                <div class="contact-form">
                    <form id="projectForm">
                        <div class="form-group">
                            <input type="text" placeholder="Ваше имя" required>
                        </div>
                        <div class="form-group">
                            <input type="email" placeholder="Email" required>
                        </div>
                        <div class="form-group">
                            <input type="tel" placeholder="Телефон">
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Опишите ваш проект" rows="4"></textarea>
                        </div>
                        <button type="submit" class="submit-btn">
                            <span>Отправить</span>
                            <i class="fas fa-arrow-right"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Футер -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <span class="logo-text">MMVI</span>
                    <p>Цифровые продукты и стратегии</p>
                </div>
                
                <div class="footer-links">
                    <a href="#services">Услуги</a>
                    <a href="#portfolio">Портфолио</a>
                    <a href="#process">Процесс</a>
                    <a href="#about">О нас</a>
                    <a href="#contact">Контакты</a>
                </div>
                
                <div class="footer-social">
                    <a href="#" aria-label="Telegram">
                        <i class="fab fa-telegram"></i>
                    </a>
                    <a href="#" aria-label="WhatsApp">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>© 2024 MMVI. Все права защищены.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
