/**
 * DANTE ALIGHIERI - Biografia Module
 * Gestione della sezione biografia con timeline cinematografica
 */

function loadBiografia() {
    const container = document.getElementById('biografiaContent');
    if (!container) return;
    
    container.innerHTML = generateBiografiaHTML();
    initBiografiaAnimations();
}

function generateBiografiaHTML() {
    return `
        <div class="biography-container">
            <div class="timeline">
                ${generateTimelineHTML()}
            </div>
        </div>
    `;
}

function generateTimelineHTML() {
    let html = '';
    
    biografiaData.eras.forEach((era, eraIndex) => {
        html += `
            <div class="timeline-era" data-era="${eraIndex}">
                <div class="era-header">
                    <span class="era-badge">${era.period}</span>
                    <h3 class="era-title">${era.title}</h3>
                </div>
                ${era.events.map((event, eventIndex) => `
                    <div class="timeline-event" data-event="${eventIndex}">
                        <div class="event-date">
                            <span class="date-year">${event.year}</span>
                            ${event.period ? `<span class="date-period">${event.period}</span>` : ''}
                        </div>
                        <div class="event-marker">
                            <div class="marker-dot"></div>
                        </div>
                        <div class="event-content">
                            <h4 class="event-title">${event.title}</h4>
                            <p class="event-description">${event.description}</p>
                            ${event.quote ? `
                                <div class="event-quote">
                                    "${event.quote}"
                                    ${event.source ? `<span class="event-source">— ${event.source}</span>` : ''}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    });
    
    return html;
}

function initBiografiaAnimations() {
    const events = document.querySelectorAll('.timeline-event');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    events.forEach((event, index) => {
        event.style.opacity = '0';
        event.style.transform = 'translateY(50px)';
        event.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(event);
    });
}

// Export per uso globale
window.loadBiografia = loadBiografia;
