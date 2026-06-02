/* ==========================================================================
   2026 LUXURY INTERACTIVE ARCHITECTURE - DABHI AAYUSHI
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. PROJECT CASE STUDY DATABASE
    const projectsData = {
        "1": {
            title: "Aurelia Fragrances",
            category: "Luxury Brand Identity",
            client: "Aurelia International",
            role: "Lead Brand Identity Designer & 3D Visualizer",
            timeline: "3 Months (2025)",
            image: "assets/project1.png",
            imgBefore: "assets/project6.png", 
            imgAfter: "assets/project1.png",
            overview: "Aurelia Fragrances required a radical luxury realignment for their 2026 digital marketplace. Moving away from generic golden branding, we engineered an obsidian-dark aesthetic utilizing micro-grid layouts, gold foil embossing guidelines, and structural custom glass perfume bottles to attract elite modern consumers.",
            deliverables: "Brand Strategy, Bespoke Typography, 3D Mockup Visualizations, Packaging Mechanics",
            processResearch: "We researched classic luxury perfume brands from 1920-1950, finding a recurring emphasis on geometric strictness and high tactile relief. In our design stage, we imported Swiss modernist principles, creating a custom monospace branding frame that anchors the luxury glass perfume bottle.",
            processGuide: "The brand uses custom geometric lines aligned perfectly in a bento-style design grid. We restricted our canvas to deep dark slate, titanium white, and royal champagne gold to convey absolute premium positioning.",
            colors: ["#0B0B0C", "#D4AF37", "#FFFFFF", "#3B82F6"],
            typography: "Syne (for headers) combined with strict 9pt Plus Jakarta Sans grid alignment."
        },
        "2": {
            title: "Moderne Fashion Grid",
            category: "Social Media Campaign",
            client: "Moderne Paris",
            role: "Digital Grid strategist & Motion Artist",
            timeline: "2 Months (2025)",
            image: "assets/project2.png",
            imgBefore: "assets/project4.png",
            imgAfter: "assets/project2.png",
            overview: "Moderne Paris wanted an immersive, typography-driven social media campaign for their high-fashion collection. We created a modular bento grid feed displaying architectural geometries, high-contrast black-and-silver product mockups, and micro-animated text stories that improved dynamic user engagement.",
            deliverables: "Social Feed Framework, Micro-Animations, Typographical Layout Guides, Art Direction",
            processResearch: "We analyzed user retention speeds on luxury digital feeds, revealing that large serif font stacks paired with extreme minimalist spaces increase dwell times by 40%. We built a custom template suite using high-contrast grid bounds.",
            processGuide: "Our assets rely on strict vertical divisions. We implemented interactive modular cards where clothing shots break out of borders, creating three-dimensional pacing.",
            colors: ["#000000", "#E5E5E5", "#888888", "#111111"],
            typography: "Playfair Display Serif paired with lightweight titanium labels."
        },
        "3": {
            title: "L'Orangerie Hospitality",
            category: "Restaurant Branding Package",
            client: "L'Orangerie Culinary",
            role: "Tactile Identity & Package Designer",
            timeline: "4 Months (2025)",
            image: "assets/project3.png",
            imgBefore: "assets/project1.png",
            imgAfter: "assets/project3.png",
            overview: "For L'Orangerie, a botanical culinary restaurant, we designed an organic but highly refined packaging and dining collateral suite. By selecting luxury forest-green matte paperstocks and copper gold foils, we created elegant menus, drink coasters, and premium labels reflecting botanical luxury.",
            deliverables: "Logo Emblems, Restaurant Menu Collateral, Dining Assets, Tactile Material Consultation",
            processResearch: "The restaurant operates inside a glass greenhouse. Our visual strategy imported structural window grid lines into the menu booklet layout, combining natural leaf forms with metallic linear frames.",
            processGuide: "We crafted customized botanical vector leaf logo marks using golden ratio curves, providing a highly premium and natural visual trademark.",
            colors: ["#062319", "#D4AF37", "#F8F5F0", "#3E2723"],
            typography: "Bespoke high-contrast elegant serif paired with deep copper gold highlights."
        },
        "4": {
            title: "Titanium Architecture",
            category: "Corporate Brochure Design",
            client: "Titanium Structures Ltd.",
            role: "Print Architect & Editor",
            timeline: "3 Months (2025)",
            image: "assets/project4.png",
            imgBefore: "assets/project2.png",
            imgAfter: "assets/project4.png",
            overview: "Titanium Structures required a professional corporate brochure showing their luxury contemporary buildings. We drafted a sleek, large-format editorial presentation booklet. Every page matches a strict modular grid, showing large concrete structures juxtaposed with minimalist grey technical annotations.",
            deliverables: "Print Brochure Grid, Editorial Layouts, Vector Blueprint Accents, Production Print Supervision",
            processResearch: "We investigated traditional structural architectural blueprints. Incorporating industrial materials into our pages, we designed a high-end titanium foil cover with premium matte finish sheets inside.",
            processGuide: "Every page relies on a bento layout principle where image squares sit perfectly aligned next to geometric text columns, delivering premium readability.",
            colors: ["#1C1D21", "#8E9095", "#FFFFFF", "#0A0A0A"],
            typography: "Modernist Sans-Serif utilizing modular font weights (300 to 800)."
        },
        "5": {
            title: "Art & Space Exhibit",
            category: "Event Poster Collection",
            client: "Visual Arts Gallery",
            role: "Experimental Typographer",
            timeline: "1 Month (2025)",
            image: "assets/project5.png",
            imgBefore: "assets/project6.png",
            imgAfter: "assets/project5.png",
            overview: "A series of high-impact experimental event posters for the Art & Space Exhibit. Blending 3D digital elements (chrome spheres, floating toruses) with warped, high-contrast liquid serif typography, this campaign achieved a Behance Feature and represents 2026 digital art trends.",
            deliverables: "Event Poster Series, Experimental Typography Design, Digital Promotion Visuals",
            processResearch: "The exhibit theme explored how physical gravity controls visual space. We warped geometric typography grids digitally, bending font guidelines around glowing 3D spheres to simulate physical mass.",
            processGuide: "We combined dark gallery backdrops with glowing acid cyan and gold elements to create high visual interest and dynamic scroll contrast.",
            colors: ["#08080C", "#00F0FF", "#D4AF37", "#FFFFFF"],
            typography: "Warped Serif Display Fonts paired with strict monospace digital labels."
        },
        "6": {
            title: "Vanguard Emblems",
            category: "Logos Showcase",
            client: "Various Elite Clients",
            role: "Bespoke Emblem designer",
            timeline: "Ongoing (2025-2026)",
            image: "assets/project6.png",
            imgBefore: "assets/project3.png",
            imgAfter: "assets/project6.png",
            overview: "A curated gallery of vector emblems, minimalist luxury logo marks, and corporate seals crafted for tech firms, fashion houses, and design consultancies. Each emblem focuses on absolute geometric simplicity, ensuring scalability from micro app icons up to large glass building signage.",
            deliverables: "Logos, Brand Marks, Vector Emblem Suites, Vector Geometry Studies",
            processResearch: "We explored historic luxury family crests and modern symbols, seeking to strip away unnecessary details until only the most memorable geometric core remains.",
            processGuide: "Our emblem assets rely on pure geometric formulas, strict circular grids, and custom vector points that look beautiful when rendered in gold foils.",
            colors: ["#000000", "#FFFFFF", "#D4AF37", "#1E3A8A"],
            typography: "Strict geometrical logo marks with custom-tailored letter pairings."
        }
    };

    // 2. LUXURY COUNTER PRELOADER SCREEN
    const preloader = document.getElementById("preloader");
    const preloaderBar = document.getElementById("preloader-bar");
    const progressCount = document.getElementById("load-progress");
    document.body.classList.add("preloader-active");

    let progress = 0;
    const preloaderInterval = setInterval(() => {
        progress += Math.floor(Math.random() * 8) + 4;
        if (progress >= 100) {
            progress = 100;
            clearInterval(preloaderInterval);
            
            // Fade out preloader & trigger GSAP animations
            setTimeout(() => {
                preloader.style.opacity = "0";
                preloader.style.visibility = "hidden";
                document.body.classList.remove("preloader-active");
                
                // Launch Hero animations
                triggerHeroAnimations();
            }, 500);
        }
        preloaderBar.style.width = progress + "%";
        progressCount.textContent = progress < 10 ? "0" + progress : progress;
    }, 80);

    // 3. GSAP INITIALIZATIONS & SCROLL REVEALS
    gsap.registerPlugin(ScrollTrigger);

    function triggerHeroAnimations() {
        const tl = gsap.timeline();
        
        tl.from(".luxury-header", {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        })
        .from("#hero-tagline", {
            opacity: 0,
            x: -30,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.5")
        .from(".hero-title", {
            y: 100,
            opacity: 0,
            stagger: 0.08,
            duration: 1.2,
            ease: "power4.out"
        }, "-=0.6")
        .from("#hero-desc", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.8")
        .from(".hero-cta-group", {
            opacity: 0,
            y: 15,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from(".floating-3d-card", {
            scale: 0.8,
            opacity: 0,
            stagger: 0.15,
            duration: 1.2,
            ease: "elastic.out(1, 0.75)"
        }, "-=0.8")
        .from(".floating-shape", {
            scale: 0,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out"
        }, "-=1")
        .from(".hero-scroll-indicator", {
            opacity: 0,
            y: 10,
            duration: 0.6
        }, "-=0.4");
    }

    // Scroll Triggered reveals for major components
    const revealUpElements = document.querySelectorAll(".reveal-up");
    revealUpElements.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });
    });

    const revealLeftElements = document.querySelectorAll(".reveal-left");
    revealLeftElements.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%"
            },
            x: -60,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });
    });

    const revealRightElements = document.querySelectorAll(".reveal-right");
    revealRightElements.forEach((el) => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%"
            },
            x: 60,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        });
    });

    // 4. INTERACTIVE 3D PARALLAX & MOUSE MOCKUP TILT
    const text3D = document.getElementById("text-3d-wrap");
    const interactiveScene = document.getElementById("hero-interactive-scene");
    const customCursor = document.getElementById("custom-cursor");
    const customCursorDot = document.getElementById("custom-cursor-dot");

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // 3D Typography parallax logic
        if (text3D) {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const dx = (e.clientX - w/2) / (w/2);
            const dy = (e.clientY - h/2) / (h/2);

            const base = text3D.querySelector(".layer-base");
            const mid = text3D.querySelector(".layer-mid");
            const front = text3D.querySelector(".layer-front");

            if (base) base.style.transform = `translate(${dx * 10}px, ${dy * 5}px)`;
            if (mid) mid.style.transform = `translate(${dx * 25}px, ${dy * 12}px) rotateY(${dx * 10}deg) rotateX(${-dy * 10}deg)`;
            if (front) front.style.transform = `translate(${dx * 45}px, ${dy * 20}px) rotateY(${dx * 15}deg) rotateX(${-dy * 15}deg)`;
        }

        // Floating 3D mockups tilt logic
        if (interactiveScene) {
            const cards = interactiveScene.querySelectorAll(".tilt-effect");
            cards.forEach(card => {
                const speed = parseFloat(card.getAttribute("data-speed")) || 1;
                const rect = card.getBoundingClientRect();
                const cardX = rect.left + rect.width / 2;
                const cardY = rect.top + rect.height / 2;
                const angleX = -(e.clientY - cardY) / 12 * speed;
                const angleY = (e.clientX - cardX) / 12 * speed;
                
                card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(${-speed * 8}px)`;
            });
        }
    });

    // Custom Cursor tracking
    function updateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.15;
        cursorY += dy * 0.15;
        
        if (customCursor && customCursorDot) {
            customCursor.style.left = `${cursorX}px`;
            customCursor.style.top = `${cursorY}px`;
            
            customCursorDot.style.left = `${mouseX}px`;
            customCursorDot.style.top = `${mouseY}px`;
        }
        
        requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // Hover scales for cursor
    const hoverables = document.querySelectorAll("a, button, .portfolio-card, .filter-btn, .testimonial-slide");
    hoverables.forEach(item => {
        item.addEventListener("mouseenter", () => {
            if (customCursor) {
                customCursor.style.width = "50px";
                customCursor.style.height = "50px";
                customCursor.style.borderColor = "var(--gold)";
                customCursor.style.backgroundColor = "rgba(212, 175, 55, 0.05)";
            }
        });
        item.addEventListener("mouseleave", () => {
            if (customCursor) {
                customCursor.style.width = "30px";
                customCursor.style.height = "30px";
                customCursor.style.borderColor = "var(--gold)";
                customCursor.style.backgroundColor = "transparent";
            }
        });
    });

    // 5. STATIC HEADER SCROLL EFFECT
    const header = document.querySelector(".luxury-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Navigation Section Highlighting
    const navItems = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${current}`) {
                item.classList.add("active");
            }
        });
    });

    // 6. MOBILE DRAWER TOGGLE MECHANICS
    const menuToggle = document.getElementById("menu-toggle");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const drawerItems = document.querySelectorAll(".drawer-item");

    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("open");
            mobileDrawer.classList.toggle("open");
        });

        drawerItems.forEach(item => {
            item.addEventListener("click", () => {
                menuToggle.classList.remove("open");
                mobileDrawer.classList.remove("open");
            });
        });
    }

    // 7. DYNAMIC LIVE CLOCK (SAFE ELEM CHECK)
    const timeDisplay = document.getElementById("live-time");
    function updateClock() {
        if (!timeDisplay) return;
        const options = {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        timeDisplay.textContent = formatter.format(new Date());
    }
    if (timeDisplay) {
        setInterval(updateClock, 1000);
        updateClock();
    }

    // 8. PORTFOLIO FILTERING SYSTEM
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioCards = document.querySelectorAll(".portfolio-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            portfolioCards.forEach(card => {
                const category = card.getAttribute("data-category");
                
                if (filterValue === "all" || category === filterValue) {
                    gsap.to(card, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        display: "block",
                        ease: "power2.out"
                    });
                } else {
                    gsap.to(card, {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.4,
                        display: "none",
                        ease: "power2.out"
                    });
                }
            });
        });
    });

    // 9. CLIENT TESTIMONIAL CAROUSEL
    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll(".carousel-dots .dot");
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
        currentSlide = index;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    // Initialize Auto-slide interval
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 7000);
    }

    if (slides.length > 0) {
        startSlideShow();

        dots.forEach(dot => {
            dot.addEventListener("click", () => {
                clearInterval(slideInterval);
                const slideIndex = parseInt(dot.getAttribute("data-slide"));
                showSlide(slideIndex);
                startSlideShow();
            });
        });
    }

    // 10. LUXURY FORM VALIDATION ENGINE
    const contactForm = document.getElementById("portfolio-contact-form");
    const successOverlay = document.getElementById("form-success-overlay");
    const successClose = document.getElementById("success-close-btn");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Name validation
            const nameInput = document.getElementById("contact-name");
            if (nameInput.value.trim() === "") {
                nameInput.parentElement.classList.add("invalid");
                isValid = false;
            } else {
                nameInput.parentElement.classList.remove("invalid");
            }

            // Email validation
            const emailInput = document.getElementById("contact-email");
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!emailInput.value.match(emailPattern)) {
                emailInput.parentElement.classList.add("invalid");
                isValid = false;
            } else {
                emailInput.parentElement.classList.remove("invalid");
            }

            // Service validation
            const serviceSelect = document.getElementById("contact-service");
            if (serviceSelect.value === "") {
                serviceSelect.parentElement.classList.add("invalid");
                isValid = false;
            } else {
                serviceSelect.parentElement.classList.remove("invalid");
            }

            // Message validation
            const messageInput = document.getElementById("contact-message");
            if (messageInput.value.trim() === "") {
                messageInput.parentElement.classList.add("invalid");
                isValid = false;
            } else {
                messageInput.parentElement.classList.remove("invalid");
            }

            // Submit Success
            if (isValid) {
                // Launch success panel
                successOverlay.classList.add("active");
                contactForm.reset();
            }
        });

        // Close Success Panel
        if (successClose) {
            successClose.addEventListener("click", () => {
                successOverlay.classList.remove("active");
            });
        }

        // Live input cleaning error highlights
        const inputs = contactForm.querySelectorAll(".form-input");
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                if (input.value.trim() !== "") {
                    input.parentElement.classList.remove("invalid");
                }
            });
        });
    }

    // 11. BEHANCE CASE STUDY MODAL ENGINE
    const caseOverlay = document.getElementById("case-study-overlay");
    const caseClose = document.getElementById("case-close-btn");
    const caseDeck = document.getElementById("case-deck-wrapper");

    portfolioCards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.getAttribute("data-id");
            const project = projectsData[projectId];
            
            if (project) {
                // Construct Case Study Presentation Deck (Behance / Awwwards Layout)
                let colorsHtml = "";
                project.colors.forEach(col => {
                    colorsHtml += `<div class="color-circle" style="background-color: ${col};" data-hex="${col}"></div>`;
                });

                const caseHtml = `
                    <div class="case-hero">
                        <span class="case-hero-cat uppercase">${project.category}</span>
                        <h1 class="case-hero-title serif">${project.title} Case Study</h1>
                        <div class="case-hero-img-wrap">
                            <img src="${project.image}" alt="${project.title} presentation showcase mockup" class="case-hero-img">
                        </div>
                    </div>

                    <div class="case-details-row">
                        <div class="detail-node">
                            <h5 class="uppercase">Client</h5>
                            <p>${project.client}</p>
                        </div>
                        <div class="detail-node">
                            <h5 class="uppercase">Role</h5>
                            <p>${project.role}</p>
                        </div>
                        <div class="detail-node">
                            <h5 class="uppercase">Timeline</h5>
                            <p>${project.timeline}</p>
                        </div>
                        <div class="detail-node">
                            <h5 class="uppercase">Deliverables</h5>
                            <p>${project.category}</p>
                        </div>
                    </div>

                    <div class="case-section">
                        <h2 class="case-block-title serif">The Concept Overview</h2>
                        <p class="case-block-desc">${project.overview}</p>
                    </div>

                    <!-- Before & After Showcase Slider -->
                    <div class="case-section">
                        <h2 class="case-block-title serif">Before & After Showcase</h2>
                        <p class="case-block-desc" style="margin-bottom: 2rem;">Use the interactive gold slider to compare Dabhi Aayushi's pre-design concept vector layout with the final high-end client mockup presentation.</p>
                        
                        <div class="compare-container" id="compare-slider-container">
                            <img src="${project.imgBefore}" class="compare-img img-before" alt="Pre-design creative wireframe logo presentation">
                            <span class="compare-badge badge-before">PRE-CONCEPT VECTOR</span>
                            
                            <img src="${project.imgAfter}" class="compare-img img-after" alt="Final luxurious branding mockup outcome">
                            <span class="compare-badge badge-after">FINAL BRAND MOCKUP</span>
                            
                            <div class="compare-slider-bar" id="compare-bar">
                                <div class="compare-slider-button">
                                    <i class="ri-arrow-left-right-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="case-section">
                        <h2 class="case-block-title serif">Creative Architecture & Design Process</h2>
                        <div class="presentation-grid">
                            <div class="presentation-card">
                                <h4><i class="ri-survey-line text-gold"></i> Step 1: Research & Discovery</h4>
                                <p>${project.processResearch}</p>
                            </div>
                            <div class="presentation-card">
                                <h4><i class="ri-compass-3-line text-blue"></i> Step 2: System Guidelines</h4>
                                <p>${project.processGuide}</p>
                                <div class="color-circles">
                                    ${colorsHtml}
                                </div>
                            </div>
                            <div class="presentation-card" style="grid-column: span 2;">
                                <h4><i class="ri-font-size text-gold"></i> Step 3: Typography & Structural Grids</h4>
                                <p>To sustain absolute visual authority, we established Swiss grid limits. The primary font setting is: <strong>${project.typography}</strong>. Clean margins maintain high breathability ratios, ensuring the product mockups speak premium quality instantly.</p>
                            </div>
                        </div>
                    </div>
                `;

                // Inject markup & open modal
                caseDeck.innerHTML = caseHtml;
                caseOverlay.scrollTop = 0;
                caseOverlay.classList.add("active");
                document.body.classList.add("preloader-active"); 

                // Initialize comparative slider physics
                initCompareSlider();
            }
        });
    });

    // Close Case Study Modal
    if (caseClose) {
        caseClose.addEventListener("click", () => {
            caseOverlay.classList.remove("active");
            document.body.classList.remove("preloader-active"); 
        });
    }

    // Before/After Slider Engine
    function initCompareSlider() {
        const container = document.getElementById("compare-slider-container");
        const afterImg = container.querySelector(".img-after");
        const bar = document.getElementById("compare-bar");
        let isDragging = false;

        function slide(x) {
            const rect = container.getBoundingClientRect();
            let position = ((x - rect.left) / rect.width) * 100;
            
            if (position < 0) position = 0;
            if (position > 100) position = 100;

            afterImg.style.clipPath = `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`;
            bar.style.left = `${position}%`;
        }

        // Mouse handlers
        container.addEventListener("mousedown", (e) => {
            isDragging = true;
            slide(e.clientX);
        });

        window.addEventListener("mouseup", () => {
            isDragging = false;
        });

        window.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            slide(e.clientX);
        });

        // Touch handlers for mobile/tablet responsive comparisons
        container.addEventListener("touchstart", (e) => {
            isDragging = true;
            slide(e.touches[0].clientX);
        });

        window.addEventListener("touchend", () => {
            isDragging = false;
        });

        window.addEventListener("touchmove", (e) => {
            if (!isDragging) return;
            slide(e.touches[0].clientX);
        });
    }
});
