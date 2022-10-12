const hamurger = document.querySelector('.hamburger'),
      menu = document.querySelector('.header__menu'),
      languages = document.querySelector('.header__languages'),
      logoWhite = document.querySelector('.logo__white');
hamurger.addEventListener('click', () => {
    hamurger.classList.toggle('hamburger_active');
    menu.classList.toggle('header__menu_active');
    languages.classList.toggle('header__languages_active');
    logoWhite.classList.toggle('logo__white_active')
    document.body.classList.toggle('scroll-close');
}) 
