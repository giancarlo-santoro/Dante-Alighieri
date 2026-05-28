/**
 * DANTE ALIGHIERI - Main JavaScript
 * Gestione navigazione, animazioni e interazioni
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // LOADER
    // ============================================
    const loader = document.getElementById('loader');
    
    setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 3000);

    // ============================================
    // HEADER SCROLL
    // ============================================
    const header = document.getElementById('header');
    const heroScroll = document.getElementById('heroScroll');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            if (heroScroll) heroScroll.classList.add('hidden');
        } else {
            header.classList.remove('scrolled');
            if (heroScroll) heroScroll.classList.remove('hidden');
        }
    });

    // ============================================
    // MOBILE MENU
    // ============================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // ============================================
    // HERO STARS
    // ============================================
    const heroStars = document.getElementById('heroStars');
    
    if (heroStars) {
        for (let i = 0; i < 150; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                --duration: ${Math.random() * 4 + 2}s;
                --delay: ${Math.random() * 3}s;
            `;
            heroStars.appendChild(star);
        }
    }

    // ============================================
    // SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                navLinks.classList.remove('open');
            }
        });
    });

    // ============================================
    // HERO CTA
    // ============================================
    const heroCta = document.getElementById('heroCta');
    if (heroCta) {
        heroCta.addEventListener('click', () => {
            document.getElementById('sections').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ============================================
    // LOGO HOME
    // ============================================
    const logoHome = document.getElementById('logoHome');
    if (logoHome) {
        logoHome.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllSections();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============================================
    // PANELS NAVIGATION
    // ============================================
    const panels = document.querySelectorAll('.panel');
    const mainWrapper = document.getElementById('mainWrapper');
    const footer = document.querySelector('.footer');
    const sectionCloseBtn = document.getElementById('sectionCloseBtn');

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            const sectionName = panel.dataset.section;
            openSection(sectionName);
        });

        panel.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const sectionName = panel.dataset.section;
                openSection(sectionName);
            }
        });

        const ctaBtn = panel.querySelector('.panel-cta');
        if (ctaBtn) {
            ctaBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const sectionName = ctaBtn.dataset.target;
                openSection(sectionName);
            });
        }
    });

    // ============================================
    // SECTION MANAGEMENT
    // ============================================
    function openSection(sectionName) {
        mainWrapper.style.display = 'none';
        footer.style.display = 'none';

        document.querySelectorAll('.content-section').forEach(s => {
            s.classList.remove('active');
        });

        const section = document.getElementById(`${sectionName}Section`);
        if (section) {
            section.classList.add('active');
            sectionCloseBtn.classList.add('visible');
            window.scrollTo({ top: 0, behavior: 'instant' });

            // Load content
            if (sectionName === 'biografia') {
                loadBiografiaContent();
            } else if (sectionName === 'opere') {
                loadOpereContent();
            } else if (sectionName === 'commedia') {
                loadCommediaContent();
            }
        }
    }

    function closeAllSections() {
        document.querySelectorAll('.content-section').forEach(s => {
            s.classList.remove('active');
        });
        mainWrapper.style.display = 'block';
        footer.style.display = 'block';
        sectionCloseBtn.classList.remove('visible');
    }

    // Close button
    if (sectionCloseBtn) {
        sectionCloseBtn.addEventListener('click', closeAllSections);
    }

    // Back buttons
    document.querySelectorAll('.section-back-btn').forEach(btn => {
        btn.addEventListener('click', closeAllSections);
    });

    // ============================================
    // LOAD BIOGRAFIA CONTENT
    // ============================================
    function loadBiografiaContent() {
        const container = document.getElementById('biografiaContent');
        if (!container || !window.biografiaData) return;

        let html = '<div class="biografia-timeline">';

        window.biografiaData.eras.forEach((era, eraIndex) => {
            html += `
                <div class="timeline-era" data-era="${eraIndex}">
                    <div class="era-header">
                        <div class="era-period">${era.period}</div>
                        <h3 class="era-title">${era.title}</h3>
                    </div>
                    <div class="era-events">
            `;

            era.events.forEach((event, eventIndex) => {
                html += `
                    <article class="timeline-event" data-event="${eventIndex}">
                        <div class="event-marker">
                            <div class="event-dot"></div>
                            <div class="event-line"></div>
                        </div>
                        <div class="event-content">
                            <div class="event-date">
                                <span class="event-year">${event.year}</span>
                                ${event.period ? `<span class="event-period">${event.period}</span>` : ''}
                            </div>
                            <h4 class="event-title">${event.title}</h4>
                            <p class="event-description">${event.description}</p>
                            ${event.quote ? `
                                <blockquote class="event-quote">
                                    <p>"${event.quote}"</p>
                                    <cite>— ${event.source}</cite>
                                </blockquote>
                            ` : ''}
                        </div>
                    </article>
                `;
            });

            html += '</div></div>';
        });

        html += '</div>';
        container.innerHTML = html;

        // Add timeline styles
        addTimelineStyles();
    }

    // ============================================
    // LOAD OPERE CONTENT
    // ============================================
    function loadOpereContent() {
        const container = document.getElementById('opereContent');
        if (!container || !window.opereData) return;

        let html = '<div class="opere-container">';

        window.opereData.opere.forEach((opera, index) => {
            html += `
                <article class="opera-card" data-opera="${index}">
                    <div class="opera-header">
                        <div class="opera-icon">${opera.icon}</div>
                        <div class="opera-meta">
                            <span class="opera-date">${opera.periodo}</span>
                            <span class="opera-type">${opera.tipo}</span>
                        </div>
                    </div>
                    <h3 class="opera-title">${opera.titolo}</h3>
                    <p class="opera-subtitle">${opera.sottotitolo}</p>
                    
                    <div class="opera-content">
                        <div class="opera-section">
                            <h4>Introduzione</h4>
                            <p>${opera.introduzione}</p>
                        </div>
                        
                        <div class="opera-section">
                            <h4>Contenuto e Struttura</h4>
                            <p>${opera.contenuto}</p>
                        </div>
                        
                        <div class="opera-section">
                            <h4>Temi Principali</h4>
                            <ul class="opera-temi">
                                ${opera.temi.map(tema => `<li>${tema}</li>`).join('')}
                            </ul>
                        </div>
                        
                        ${opera.personaggi ? `
                        <div class="opera-section">
                            <h4>Personaggi e Figure</h4>
                            <div class="opera-personaggi">
                                ${opera.personaggi.map(p => `
                                    <div class="personaggio-card">
                                        <h5>${p.nome}</h5>
                                        <p>${p.descrizione}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}
                        
                        <div class="opera-section">
                            <h4>Significato e Eredità</h4>
                            <p>${opera.significato}</p>
                        </div>
                        
                        ${opera.citazioni ? `
                        <div class="opera-section">
                            <h4>Citazioni Celebri</h4>
                            <div class="opera-citazioni">
                                ${opera.citazioni.map(c => `
                                    <blockquote class="opera-citazione">
                                        <p>"${c.testo}"</p>
                                        <cite>${c.fonte}</cite>
                                    </blockquote>
                                `).join('')}
                            </div>
                        </div>
                        ` : ''}
                    </div>
                </article>
            `;
        });

        html += '</div>';
        container.innerHTML = html;

        // Add opere styles
        addOpereStyles();
    }

    // ============================================
    // LOAD COMMEDIA CONTENT
    // ============================================
    function loadCommediaContent() {
        const container = document.getElementById('commediaContent');
        if (!container) return;

        let html = `
            <div class="commedia-container">
                <div class="commedia-intro">
                    <p class="commedia-intro-text">
                        La Divina Commedia è il capolavoro di Dante Alighieri, composto tra il 1304 e il 1321. 
                        L'opera narra il viaggio allegorico di Dante attraverso i tre regni dell'oltretomba: 
                        Inferno, Purgatorio e Paradiso. Composta da 100 canti in terzine di endecasillabi, 
                        rappresenta la summa del pensiero medievale e uno dei vertici della letteratura mondiale.
                    </p>
                </div>

                <div class="cantiche-tabs">
                    <button class="cantica-tab active" data-cantica="inferno">
                        <span class="tab-icon">🔥</span>
                        <span class="tab-name">Inferno</span>
                        <span class="tab-canti">34 Canti</span>
                    </button>
                    <button class="cantica-tab" data-cantica="purgatorio">
                        <span class="tab-icon">⛰️</span>
                        <span class="tab-name">Purgatorio</span>
                        <span class="tab-canti">33 Canti</span>
                    </button>
                    <button class="cantica-tab" data-cantica="paradiso">
                        <span class="tab-icon">✨</span>
                        <span class="tab-name">Paradiso</span>
                        <span class="tab-canti">33 Canti</span>
                    </button>
                </div>

                <div class="cantiche-content">
                    <div class="cantica-panel active" id="infernoPanel"></div>
                    <div class="cantica-panel" id="purgatorioPanel"></div>
                    <div class="cantica-panel" id="paradisoPanel"></div>
                </div>
            </div>
        `;

        container.innerHTML = html;

        // Load cantica data
        loadCanticaContent('inferno');

        // Tab switching
        document.querySelectorAll('.cantica-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.cantica-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.cantica-panel').forEach(p => p.classList.remove('active'));
                
                tab.classList.add('active');
                const cantica = tab.dataset.cantica;
                document.getElementById(`${cantica}Panel`).classList.add('active');
                
                loadCanticaContent(cantica);
            });
        });

        // Add commedia styles
        addCommediaStyles();
    }

    function loadCanticaContent(cantica) {
        const panel = document.getElementById(`${cantica}Panel`);
        if (!panel) return;

        let data;
        if (cantica === 'inferno' && window.infernoData) {
            data = window.infernoData;
        } else if (cantica === 'purgatorio' && window.purgatorioData) {
            data = window.purgatorioData;
        } else if (cantica === 'paradiso' && window.paradisoData) {
            data = window.paradisoData;
        }

        if (!data) {
            panel.innerHTML = '<p class="loading-text">Caricamento in corso...</p>';
            return;
        }

        let html = `
            <div class="cantica-header cantica-${cantica}">
                <h3 class="cantica-title">${data.titolo}</h3>
                <p class="cantica-description">${data.descrizione}</p>
                <div class="cantica-stats">
                    <div class="stat">
                        <span class="stat-value">${data.canti.length}</span>
                        <span class="stat-label">Canti</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${data.versiTotali}</span>
                        <span class="stat-label">Versi</span>
                    </div>
                    <div class="stat">
                        <span class="stat-value">${data.struttura}</span>
                        <span class="stat-label">Struttura</span>
                    </div>
                </div>
            </div>

            <div class="canti-grid">
        `;

        data.canti.forEach((canto, index) => {
            html += `
                <article class="canto-card" data-canto="${index + 1}">
                    <div class="canto-number">${toRoman(index + 1)}</div>
                    <h4 class="canto-title">${canto.titolo}</h4>
                    <p class="canto-luogo">${canto.luogo}</p>
                    <button class="canto-expand-btn" data-cantica="${cantica}" data-index="${index}">
                        Leggi il Canto
                    </button>
                </article>
            `;
        });

        html += '</div>';
        panel.innerHTML = html;

        // Canto expansion
        panel.querySelectorAll('.canto-expand-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const canticaName = btn.dataset.cantica;
                const index = parseInt(btn.dataset.index);
                openCantoModal(canticaName, index);
            });
        });
    }

    // ============================================
    // CANTO MODAL
    // ============================================
    function openCantoModal(cantica, index) {
        let data;
        if (cantica === 'inferno') data = window.infernoData;
        else if (cantica === 'purgatorio') data = window.purgatorioData;
        else if (cantica === 'paradiso') data = window.paradisoData;

        if (!data) return;

        const canto = data.canti[index];
        if (!canto) return;

        const modal = document.createElement('div');
        modal.className = `canto-modal modal-${cantica}`;
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                
                <div class="modal-header">
                    <div class="modal-cantica">${cantica.toUpperCase()}</div>
                    <h2 class="modal-title">Canto ${toRoman(index + 1)}</h2>
                    <h3 class="modal-subtitle">${canto.titolo}</h3>
                    <p class="modal-luogo">${canto.luogo}</p>
                </div>

                <div class="modal-tabs">
                    <button class="modal-tab active" data-view="riassunto">Riassunto</button>
                    <button class="modal-tab" data-view="testo">Testo Originale</button>
                    <button class="modal-tab" data-view="parafrasi">Parafrasi</button>
                    <button class="modal-tab" data-view="personaggi">Personaggi</button>
                </div>

                <div class="modal-views">
                    <div class="modal-view active" id="viewRiassunto">
                        <h4>Riassunto del Canto</h4>
                        <div class="riassunto-content">${canto.riassunto}</div>
                        
                        <h4>Temi Principali</h4>
                        <ul class="temi-list">
                            ${canto.temi.map(t => `<li>${t}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="modal-view" id="viewTesto">
                        <h4>Testo Originale</h4>
                        <div class="testo-originale">
                            ${canto.testo.split('\n').map(verso => `<p class="verso">${verso}</p>`).join('')}
                        </div>
                    </div>

                    <div class="modal-view" id="viewParafrasi">
                        <h4>Parafrasi</h4>
                        <div class="parafrasi-content">${canto.parafrasi}</div>
                    </div>

                    <div class="modal-view" id="viewPersonaggi">
                        <h4>Personaggi del Canto</h4>
                        <div class="personaggi-grid">
                            ${canto.personaggi.map(p => `
                                <div class="personaggio-modal-card">
                                    <h5>${p.nome}</h5>
                                    <p class="personaggio-ruolo">${p.ruolo}</p>
                                    <p class="personaggio-desc">${p.descrizione}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="modal-navigation">
                    ${index > 0 ? `<button class="nav-prev" data-cantica="${cantica}" data-index="${index - 1}">← Canto ${toRoman(index)}</button>` : '<div></div>'}
                    ${index < data.canti.length - 1 ? `<button class="nav-next" data-cantica="${cantica}" data-index="${index + 1}">Canto ${toRoman(index + 2)} →</button>` : '<div></div>'}
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Tab switching
        modal.querySelectorAll('.modal-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                modal.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
                modal.querySelectorAll('.modal-view').forEach(v => v.classList.remove('active'));
                
                tab.classList.add('active');
                const view = tab.dataset.view;
                modal.querySelector(`#view${view.charAt(0).toUpperCase() + view.slice(1)}`).classList.add('active');
            });
        });

        // Close modal
        modal.querySelector('.modal-close').addEventListener('click', () => closeCantoModal(modal));
        modal.querySelector('.modal-overlay').addEventListener('click', () => closeCantoModal(modal));

        // Navigation
        modal.querySelectorAll('.nav-prev, .nav-next').forEach(btn => {
            btn.addEventListener('click', () => {
                closeCantoModal(modal);
                setTimeout(() => {
                    openCantoModal(btn.dataset.cantica, parseInt(btn.dataset.index));
                }, 300);
            });
        });

        // Add modal styles
        addModalStyles();

        // Animate in
        setTimeout(() => modal.classList.add('active'), 10);
    }

    function closeCantoModal(modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = 'auto';
        }, 300);
    }

    // ============================================
    // ROMAN NUMERALS
    // ============================================
    function toRoman(num) {
        const romanNumerals = [
            ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
            ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
            ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
        ];
        
        const digits = String(num).split('').reverse();
        let result = '';
        
        for (let i = 0; i < digits.length && i < 3; i++) {
            result = romanNumerals[i][parseInt(digits[i])] + result;
        }
        
        return result;
    }

    // ============================================
    // DYNAMIC STYLES
    // ============================================
    function addTimelineStyles() {
        if (document.getElementById('timeline-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'timeline-styles';
        styles.textContent = `
            .biografia-timeline {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 2rem 6rem;
            }

            .timeline-era {
                margin-bottom: 5rem;
                position: relative;
            }

            .era-header {
                text-align: center;
                margin-bottom: 3rem;
                padding: 2rem;
                background: linear-gradient(135deg, rgba(201, 162, 39, 0.1) 0%, transparent 100%);
                border: 1px solid rgba(201, 162, 39, 0.2);
                border-radius: 8px;
            }

            .era-period {
                font-family: var(--font-display);
                font-size: 1.2rem;
                color: var(--gold);
                letter-spacing: 0.3em;
                margin-bottom: 0.5rem;
            }

            .era-title {
                font-family: var(--font-display);
                font-size: 1.8rem;
                color: var(--parchment);
                font-weight: 600;
            }

            .era-events {
                position: relative;
                padding-left: 3rem;
            }

            .era-events::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 2px;
                background: linear-gradient(to bottom, var(--gold), rgba(201, 162, 39, 0.2));
            }

            .timeline-event {
                position: relative;
                margin-bottom: 3rem;
                display: flex;
                gap: 2rem;
            }

            .event-marker {
                position: absolute;
                left: -3rem;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .event-dot {
                width: 16px;
                height: 16px;
                background: var(--gold);
                border-radius: 50%;
                box-shadow: 0 0 20px rgba(201, 162, 39, 0.5);
            }

            .event-content {
                flex: 1;
                background: rgba(26, 26, 26, 0.8);
                border: 1px solid rgba(201, 162, 39, 0.2);
                border-radius: 8px;
                padding: 2rem;
                transition: all 0.4s;
            }

            .event-content:hover {
                border-color: var(--gold);
                transform: translateX(10px);
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            }

            .event-date {
                display: flex;
                gap: 1rem;
                align-items: baseline;
                margin-bottom: 1rem;
            }

            .event-year {
                font-family: var(--font-display);
                font-size: 1.5rem;
                color: var(--gold);
                font-weight: 600;
            }

            .event-period {
                font-family: var(--font-body);
                font-size: 0.95rem;
                color: var(--parchment);
                opacity: 0.7;
            }

            .event-title {
                font-family: var(--font-display);
                font-size: 1.3rem;
                color: var(--parchment);
                margin-bottom: 1rem;
                font-weight: 500;
            }

            .event-description {
                font-family: var(--font-body);
                font-size: 1.05rem;
                line-height: 1.8;
                color: var(--parchment);
                opacity: 0.9;
            }

            .event-quote {
                margin-top: 1.5rem;
                padding: 1.5rem;
                background: rgba(201, 162, 39, 0.1);
                border-left: 3px solid var(--gold);
                border-radius: 0 8px 8px 0;
            }

            .event-quote p {
                font-family: var(--font-text);
                font-size: 1.1rem;
                font-style: italic;
                color: var(--parchment);
                line-height: 1.7;
            }

            .event-quote cite {
                display: block;
                margin-top: 0.8rem;
                font-family: var(--font-body);
                font-size: 0.9rem;
                color: var(--gold);
            }

            @media (max-width: 768px) {
                .biografia-timeline {
                    padding: 0 1rem 4rem;
                }
                
                .era-events {
                    padding-left: 2rem;
                }
                
                .event-marker {
                    left: -2rem;
                }
                
                .event-content {
                    padding: 1.5rem;
                }
            }
        `;
        document.head.appendChild(styles);
    }

    function addOpereStyles() {
        if (document.getElementById('opere-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'opere-styles';
        styles.textContent = `
            .opere-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 2rem 6rem;
            }

            .opera-card {
                background: rgba(26, 26, 26, 0.9);
                border: 1px solid rgba(201, 162, 39, 0.2);
                border-radius: 12px;
                margin-bottom: 3rem;
                overflow: hidden;
                transition: all 0.4s;
            }

            .opera-card:hover {
                border-color: var(--gold);
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
            }

            .opera-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem;
                background: linear-gradient(135deg, rgba(201, 162, 39, 0.15) 0%, transparent 100%);
            }

            .opera-icon {
                font-size: 3rem;
            }

            .opera-meta {
                display: flex;
                gap: 1rem;
            }

            .opera-date, .opera-type {
                padding: 0.5rem 1rem;
                font-family: var(--font-display);
                font-size: 0.75rem;
                letter-spacing: 0.15em;
                text-transform: uppercase;
                border-radius: 4px;
            }

            .opera-date {
                background: rgba(201, 162, 39, 0.2);
                color: var(--gold);
            }

            .opera-type {
                background: rgba(245, 230, 200, 0.1);
                color: var(--parchment);
            }

            .opera-title {
                font-family: var(--font-display);
                font-size: 2.2rem;
                color: var(--parchment);
                padding: 0 2rem;
                margin-top: 1rem;
            }

            .opera-subtitle {
                font-family: var(--font-text);
                font-size: 1.1rem;
                font-style: italic;
                color: var(--gold);
                padding: 0 2rem;
                margin-top: 0.5rem;
                opacity: 0.8;
            }

            .opera-content {
                padding: 2rem;
            }

            .opera-section {
                margin-bottom: 2rem;
            }

            .opera-section h4 {
                font-family: var(--font-display);
                font-size: 1.1rem;
                color: var(--gold);
                margin-bottom: 1rem;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid rgba(201, 162, 39, 0.2);
            }

            .opera-section p {
                font-family: var(--font-body);
                font-size: 1.05rem;
                line-height: 1.9;
                color: var(--parchment);
                opacity: 0.9;
            }

            .opera-temi {
                list-style: none;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 1rem;
            }

            .opera-temi li {
                padding: 1rem;
                background: rgba(201, 162, 39, 0.1);
                border-left: 3px solid var(--gold);
                border-radius: 0 8px 8px 0;
                font-family: var(--font-body);
                font-size: 1rem;
                color: var(--parchment);
            }

            .opera-personaggi {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                gap: 1.5rem;
            }

            .personaggio-card {
                padding: 1.5rem;
                background: rgba(26, 26, 26, 0.6);
                border: 1px solid rgba(201, 162, 39, 0.15);
                border-radius: 8px;
                transition: all 0.3s;
            }

            .personaggio-card:hover {
                border-color: var(--gold);
                transform: translateY(-5px);
            }

            .personaggio-card h5 {
                font-family: var(--font-display);
                font-size: 1.1rem;
                color: var(--gold);
                margin-bottom: 0.8rem;
            }

            .personaggio-card p {
                font-family: var(--font-body);
                font-size: 0.95rem;
                line-height: 1.7;
                color: var(--parchment);
                opacity: 0.85;
            }

            .opera-citazioni {
                display: flex;
                flex-direction: column;
                gap: 1.5rem;
            }

            .opera-citazione {
                padding: 1.5rem 2rem;
                background: linear-gradient(135deg, rgba(201, 162, 39, 0.1) 0%, transparent 100%);
                border-left: 4px solid var(--gold);
                border-radius: 0 8px 8px 0;
            }

            .opera-citazione p {
                font-family: var(--font-text);
                font-size: 1.15rem;
                font-style: italic;
                color: var(--parchment);
                line-height: 1.8;
            }

            .opera-citazione cite {
                display: block;
                margin-top: 1rem;
                font-family: var(--font-body);
                font-size: 0.9rem;
                color: var(--gold);
                font-style: normal;
            }

            @media (max-width: 768px) {
                .opere-container {
                    padding: 0 1rem 4rem;
                }
                
                .opera-header {
                    flex-direction: column;
                    gap: 1rem;
                    align-items: flex-start;
                }
                
                .opera-title {
                    font-size: 1.8rem;
                }
            }
        `;
        document.head.appendChild(styles);
    }

    function addCommediaStyles() {
        if (document.getElementById('commedia-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'commedia-styles';
        styles.textContent = `
            .commedia-container {
                max-width: 1400px;
                margin: 0 auto;
                padding: 0 2rem 6rem;
            }

            .commedia-intro {
                text-align: center;
                max-width: 900px;
                margin: 0 auto 4rem;
            }

            .commedia-intro-text {
                font-family: var(--font-body);
                font-size: 1.2rem;
                line-height: 1.9;
                color: var(--parchment);
                opacity: 0.9;
            }

            .cantiche-tabs {
                display: flex;
                justify-content: center;
                gap: 2rem;
                margin-bottom: 3rem;
                flex-wrap: wrap;
            }

            .cantica-tab {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                padding: 1.5rem 3rem;
                background: rgba(26, 26, 26, 0.8);
                border: 2px solid rgba(201, 162, 39, 0.2);
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.4s;
            }

            .cantica-tab:hover {
                border-color: var(--gold);
                transform: translateY(-5px);
            }

            .cantica-tab.active {
                border-color: var(--gold);
                background: rgba(201, 162, 39, 0.15);
            }

            .cantica-tab[data-cantica="inferno"].active {
                border-color: var(--inferno);
                background: rgba(139, 0, 0, 0.2);
            }

            .cantica-tab[data-cantica="purgatorio"].active {
                border-color: var(--purgatorio);
                background: rgba(218, 165, 32, 0.15);
            }

            .cantica-tab[data-cantica="paradiso"].active {
                border-color: var(--paradiso);
                background: rgba(30, 144, 255, 0.15);
            }

            .tab-icon {
                font-size: 2rem;
            }

            .tab-name {
                font-family: var(--font-display);
                font-size: 1.1rem;
                color: var(--parchment);
                letter-spacing: 0.15em;
                text-transform: uppercase;
            }

            .tab-canti {
                font-family: var(--font-body);
                font-size: 0.85rem;
                color: var(--gold);
                opacity: 0.7;
            }

            .cantica-panel {
                display: none;
            }

            .cantica-panel.active {
                display: block;
                animation: fadeIn 0.5s ease;
            }

            .cantica-header {
                text-align: center;
                padding: 3rem;
                margin-bottom: 3rem;
                border-radius: 12px;
            }

            .cantica-header.cantica-inferno {
                background: linear-gradient(135deg, rgba(139, 0, 0, 0.3) 0%, rgba(61, 0, 0, 0.5) 100%);
                border: 1px solid rgba(139, 0, 0, 0.4);
            }

            .cantica-header.cantica-purgatorio {
                background: linear-gradient(135deg, rgba(218, 165, 32, 0.2) 0%, rgba(107, 78, 10, 0.4) 100%);
                border: 1px solid rgba(218, 165, 32, 0.3);
            }

            .cantica-header.cantica-paradiso {
                background: linear-gradient(135deg, rgba(30, 144, 255, 0.2) 0%, rgba(10, 40, 85, 0.4) 100%);
                border: 1px solid rgba(30, 144, 255, 0.3);
            }

            .cantica-title {
                font-family: var(--font-display);
                font-size: 2.5rem;
                color: var(--parchment);
                margin-bottom: 1rem;
            }

            .cantica-description {
                font-family: var(--font-body);
                font-size: 1.1rem;
                color: var(--parchment);
                opacity: 0.85;
                max-width: 800px;
                margin: 0 auto 2rem;
                line-height: 1.8;
            }

            .cantica-stats {
                display: flex;
                justify-content: center;
                gap: 3rem;
            }

            .stat {
                text-align: center;
            }

            .stat-value {
                display: block;
                font-family: var(--font-display);
                font-size: 1.8rem;
                color: var(--gold);
            }

            .stat-label {
                font-family: var(--font-body);
                font-size: 0.9rem;
                color: var(--parchment);
                opacity: 0.7;
            }

            .canti-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 1.5rem;
            }

            .canto-card {
                background: rgba(26, 26, 26, 0.8);
                border: 1px solid rgba(201, 162, 39, 0.15);
                border-radius: 10px;
                padding: 1.5rem;
                text-align: center;
                transition: all 0.4s;
                cursor: pointer;
            }

            .canto-card:hover {
                border-color: var(--gold);
                transform: translateY(-8px);
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
            }

            .canto-number {
                font-family: var(--font-display);
                font-size: 1.8rem;
                color: var(--gold);
                margin-bottom: 0.8rem;
            }

            .canto-title {
                font-family: var(--font-display);
                font-size: 1.1rem;
                color: var(--parchment);
                margin-bottom: 0.5rem;
            }

            .canto-luogo {
                font-family: var(--font-body);
                font-size: 0.9rem;
                color: var(--parchment);
                opacity: 0.6;
                font-style: italic;
                margin-bottom: 1rem;
            }

            .canto-expand-btn {
                padding: 0.7rem 1.5rem;
                font-family: var(--font-display);
                font-size: 0.75rem;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                color: var(--ink);
                background: var(--gold);
                border: none;
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s;
            }

            .canto-expand-btn:hover {
                background: var(--gold-bright);
                transform: scale(1.05);
            }

            .loading-text {
                text-align: center;
                font-family: var(--font-body);
                font-size: 1.2rem;
                color: var(--gold);
                padding: 4rem;
            }

            @media (max-width: 768px) {
                .commedia-container {
                    padding: 0 1rem 4rem;
                }
                
                .cantiche-tabs {
                    gap: 1rem;
                }
                
                .cantica-tab {
                    padding: 1rem 2rem;
                }
                
                .cantica-stats {
                    flex-wrap: wrap;
                    gap: 1.5rem;
                }
            }
        `;
        document.head.appendChild(styles);
    }

    function addModalStyles() {
        if (document.getElementById('modal-styles')) return;
        
        const styles = document.createElement('style');
        styles.id = 'modal-styles';
        styles.textContent = `
            .canto-modal {
                position: fixed;
                inset: 0;
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s;
            }

            .canto-modal.active {
                opacity: 1;
            }

            .modal-overlay {
                position: absolute;
                inset: 0;
                background: rgba(0, 0, 0, 0.9);
            }

            .modal-content {
                position: relative;
                width: 90%;
                max-width: 1000px;
                max-height: 90vh;
                background: var(--ink);
                border-radius: 16px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            .modal-inferno .modal-content {
                border: 2px solid var(--inferno);
                box-shadow: 0 0 60px rgba(139, 0, 0, 0.4);
            }

            .modal-purgatorio .modal-content {
                border: 2px solid var(--purgatorio);
                box-shadow: 0 0 60px rgba(218, 165, 32, 0.3);
            }

            .modal-paradiso .modal-content {
                border: 2px solid var(--paradiso);
                box-shadow: 0 0 60px rgba(30, 144, 255, 0.3);
            }

            .modal-close {
                position: absolute;
                top: 1rem;
                right: 1rem;
                width: 40px;
                height: 40px;
                background: rgba(26, 26, 26, 0.8);
                border: 1px solid var(--gold);
                border-radius: 50%;
                color: var(--gold);
                font-size: 1.5rem;
                cursor: pointer;
                transition: all 0.3s;
                z-index: 10;
            }

            .modal-close:hover {
                background: var(--gold);
                color: var(--ink);
                transform: rotate(90deg);
            }

            .modal-header {
                padding: 2.5rem 2rem;
                text-align: center;
            }

            .modal-inferno .modal-header {
                background: linear-gradient(135deg, rgba(139, 0, 0, 0.3) 0%, transparent 100%);
            }

            .modal-purgatorio .modal-header {
                background: linear-gradient(135deg, rgba(218, 165, 32, 0.2) 0%, transparent 100%);
            }

            .modal-paradiso .modal-header {
                background: linear-gradient(135deg, rgba(30, 144, 255, 0.2) 0%, transparent 100%);
            }

            .modal-cantica {
                font-family: var(--font-display);
                font-size: 0.85rem;
                letter-spacing: 0.4em;
                color: var(--gold);
                margin-bottom: 0.5rem;
            }

            .modal-title {
                font-family: var(--font-display);
                font-size: 2.5rem;
                color: var(--parchment);
                margin-bottom: 0.5rem;
            }

            .modal-subtitle {
                font-family: var(--font-display);
                font-size: 1.3rem;
                color: var(--gold);
                margin-bottom: 0.5rem;
            }

            .modal-luogo {
                font-family: var(--font-body);
                font-size: 1rem;
                color: var(--parchment);
                opacity: 0.7;
                font-style: italic;
            }

            .modal-tabs {
                display: flex;
                justify-content: center;
                gap: 0.5rem;
                padding: 1rem 2rem;
                background: rgba(26, 26, 26, 0.5);
                border-bottom: 1px solid rgba(201, 162, 39, 0.2);
                flex-wrap: wrap;
            }

            .modal-tab {
                padding: 0.8rem 1.5rem;
                font-family: var(--font-display);
                font-size: 0.8rem;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                color: var(--parchment);
                background: transparent;
                border: 1px solid rgba(201, 162, 39, 0.3);
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s;
            }

            .modal-tab:hover {
                border-color: var(--gold);
                color: var(--gold);
            }

            .modal-tab.active {
                background: var(--gold);
                color: var(--ink);
                border-color: var(--gold);
            }

            .modal-views {
                flex: 1;
                overflow-y: auto;
                padding: 2rem;
            }

            .modal-view {
                display: none;
            }

            .modal-view.active {
                display: block;
                animation: fadeIn 0.4s ease;
            }

            .modal-view h4 {
                font-family: var(--font-display);
                font-size: 1.2rem;
                color: var(--gold);
                margin-bottom: 1.5rem;
                padding-bottom: 0.5rem;
                border-bottom: 1px solid rgba(201, 162, 39, 0.2);
            }

            .riassunto-content,
            .parafrasi-content {
                font-family: var(--font-body);
                font-size: 1.1rem;
                line-height: 1.9;
                color: var(--parchment);
                margin-bottom: 2rem;
            }

            .temi-list {
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
            }

            .temi-list li {
                padding: 0.8rem 1.2rem;
                background: rgba(201, 162, 39, 0.1);
                border-left: 3px solid var(--gold);
                border-radius: 0 6px 6px 0;
                font-family: var(--font-body);
                font-size: 0.95rem;
                color: var(--parchment);
            }

            .testo-originale {
                background: rgba(26, 26, 26, 0.6);
                padding: 2rem;
                border-radius: 8px;
                border: 1px solid rgba(201, 162, 39, 0.15);
            }

            .verso {
                font-family: var(--font-text);
                font-size: 1.05rem;
                line-height: 2;
                color: var(--parchment);
                margin-bottom: 0;
            }

            .verso:nth-child(3n) {
                margin-bottom: 1rem;
            }

            .personaggi-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 1.5rem;
            }

            .personaggio-modal-card {
                padding: 1.5rem;
                background: rgba(26, 26, 26, 0.6);
                border: 1px solid rgba(201, 162, 39, 0.15);
                border-radius: 8px;
                transition: all 0.3s;
            }

            .personaggio-modal-card:hover {
                border-color: var(--gold);
                transform: translateY(-5px);
            }

            .personaggio-modal-card h5 {
                font-family: var(--font-display);
                font-size: 1.1rem;
                color: var(--gold);
                margin-bottom: 0.5rem;
            }

            .personaggio-ruolo {
                font-family: var(--font-body);
                font-size: 0.85rem;
                color: var(--parchment);
                opacity: 0.6;
                font-style: italic;
                margin-bottom: 0.8rem;
            }

            .personaggio-desc {
                font-family: var(--font-body);
                font-size: 0.95rem;
                line-height: 1.7;
                color: var(--parchment);
                opacity: 0.85;
            }

            .modal-navigation {
                display: flex;
                justify-content: space-between;
                padding: 1.5rem 2rem;
                background: rgba(26, 26, 26, 0.5);
                border-top: 1px solid rgba(201, 162, 39, 0.2);
            }

            .nav-prev, .nav-next {
                padding: 0.8rem 1.5rem;
                font-family: var(--font-display);
                font-size: 0.85rem;
                letter-spacing: 0.1em;
                color: var(--gold);
                background: transparent;
                border: 1px solid var(--gold);
                border-radius: 4px;
                cursor: pointer;
                transition: all 0.3s;
            }

            .nav-prev:hover, .nav-next:hover {
                background: var(--gold);
                color: var(--ink);
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }

            @media (max-width: 768px) {
                .modal-content {
                    width: 95%;
                    max-height: 95vh;
                }
                
                .modal-header {
                    padding: 2rem 1rem;
                }
                
                .modal-title {
                    font-size: 1.8rem;
                }
                
                .modal-tabs {
                    padding: 1rem;
                    gap: 0.3rem;
                }
                
                .modal-tab {
                    padding: 0.6rem 1rem;
                    font-size: 0.7rem;
                }
                
                .modal-views {
                    padding: 1.5rem;
                }
            }
        `;
        document.head.appendChild(styles);
    }
});
