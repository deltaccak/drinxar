
        // --- SCRIPT PARA ANIMACIÓN DE SCROLL ---
        const sections = document.querySelectorAll('section');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });



        
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
       
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            // Cuando la imagen termine de cargar
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            
            // Manejo de error
            img.addEventListener('error', function() {
                console.error('Error cargando imagen:', this.src);
                this.classList.add('loaded'); // Evitar spinner infinito
            });
        }
    });