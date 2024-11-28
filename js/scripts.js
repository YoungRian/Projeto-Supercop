/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Variveis para mudar e controlar o numero de paginas
    let paginaAtual = 1;
    const noticiasPorPagina = 5;

    // Função para mudar de pagina
    function mudarPagina(incremento) {
        paginaAtual += incremento;

        // Isso garante que a pagina não seja menor do que 1
        if (paginaAtual < 1) {
            paginaAtual = 1;
        }

        // Obtem todas as noticias
        const noticias = document.querySelectorAll('.noticia');

        // Calcula os indices das noticias que devem serem exibidas
        const inicio = (paginaAtual - 1) * noticiasPorPagina;
        const fim = paginaAtual * noticiasPorPagina;

        // Oculta todas as noticias
        noticia.forEach((noticia, index) => {
            noticia.style.display = 'none';
        });

        //Exibe apenas as noticias da pagina atual
        for (let i = inicio; i < fim && i < noticias.lenght; i++) {
            noticias[i].style.display = 'block';
        }
    }

    // Inicializar a página com as notícias da página 1
    document.addEventListener('DOMContentLoaded', () => {
        mudarPagina(0); // Chama a função para exibir a primeira página
    })
});
