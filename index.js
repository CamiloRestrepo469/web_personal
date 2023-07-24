// Código JavaScript para el menú de navegación del encabezado
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Código JavaScript para el botón "Get in touch" (Contacto)
const contactButton = document.querySelector('.button');
contactButton.addEventListener('click', function (event) {
  event.preventDefault();
  const contactSection = document.querySelector(contactButton.getAttribute('href'));
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Obtener todos los elementos con la clase 'has-dropdown'
const dropdownItems = document.querySelectorAll('.has-dropdown');

// Agregar un evento 'mouseover' para mostrar la lista desplegable cuando el mouse entra
dropdownItems.forEach((item) => {
  item.addEventListener('mouseover', function () {
    this.classList.add('show');
  });

  // Agregar un evento 'mouseout' para ocultar la lista desplegable cuando el mouse sale
  item.addEventListener('mouseout', function () {
    this.classList.remove('show');
  });
});
