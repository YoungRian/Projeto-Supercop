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
})

let currentPage = 1;
  const itemsPerPage = 3;

  function displayItems() {
    const items = document.querySelectorAll('#noticiasLista .noticia');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    items.forEach((item, index) => {
      if (index >= start && index < end) {
        item.style.display = 'block'; // Exibe os itens da página atual
      } else {
        item.style.display = 'none'; // Oculta os itens que não pertencem à página atual
      }
    });

    // Habilita ou desabilita os botões de navegação
    document.getElementById('prev-button').disabled = currentPage === 1;
    document.getElementById('next-button').disabled = currentPage * itemsPerPage >= items.length;
  }

  function changePage(direction) {
    const items = document.querySelectorAll('#noticiasLista .noticia');
    const totalPages = Math.ceil(items.length / itemsPerPage);
    
    if (direction === 'prev' && currentPage > 1) {
      currentPage--;
    } else if (direction === 'next' && currentPage < totalPages) {
      currentPage++;
    }

    displayItems();
  }

  // Inicializa a página com os itens da primeira página
  displayItems();