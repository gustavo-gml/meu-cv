const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar nav ul li a');

// Escuta o evento de rolagem da página
window.addEventListener('scroll', () => {
    let current = '';

    // Verifica a posição de cada seção na tela
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // Se a rolagem da página passar do topo da seção
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    // Remove a classe 'active' de todos e adiciona apenas no link correspondente
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
