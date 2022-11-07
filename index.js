window.addEventListener('DOMContentLoaded', addInitialListeners);
window.addEventListener('DOMContentLoaded', storeHomeHtml);
window.addEventListener('DOMContentLoaded', setBodyHeight);

// set body min-height to inner window height 
//  to ensure that mobile users see the footer:
function setBodyHeight() {
    const windowHeight = window.innerHeight + "px";
    document.body.style.minHeight = windowHeight;
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.minHeight = windowHeight
}
  
function addInitialListeners() {
    // add click listener to header icons:
    const headerLogo = document.querySelector('.header-logo');
    headerLogo.addEventListener('click', renderHome);
    const hamburger = document.querySelector('.hamburger-container');
    hamburger.addEventListener('click', showNav);

    // add click listeners to nav buttons:
    const menuButton = document.querySelector('.nav-menu');
    menuButton.addEventListener('click', renderMenuPage);
    const eventsButton = document.querySelector('.nav-events');
    eventsButton.addEventListener('click', renderEventsPage);
    const contactButton = document.querySelector('.nav-contact');
    contactButton.addEventListener('click', renderContactPage);
    const newsletterButton = document.querySelector('.nav-newsletter');
    newsletterButton.addEventListener('click', sendToMailchimp);
    const aboutButton = document.querySelector('.nav-about');
    aboutButton.addEventListener('click', renderAboutPage);
    const closeButton = document.querySelector('.nav-close');
    closeButton.addEventListener('click', hideNav);

    addHomeListeners();

    // add click listener to bottom 'graces' logo to scroll to top of page:
    const footerLogo = document.querySelector('.footer-logo');
    footerLogo.addEventListener('click', scrollUp);

    // add click listener to instagram icon:
    const insta = document.querySelector('.insta-container');
    insta.addEventListener('click', sendToInsta);
}

function addHomeListeners() {
    // add click event listeners to homepage buttons:
    const contactButton = document.querySelector('.contact-button');
    contactButton.addEventListener('click', renderContactPage);
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', renderMenuPage);
    const newsletterButton = document.querySelector('.newsletter-button');
    newsletterButton.addEventListener('click', sendToMailchimp);
}

function showNav() {
    const nav = document.querySelector('.nav');
    nav.classList.remove('hide');
}

function hideNav() {
    const nav = document.querySelector('.nav');
    nav.classList.add('hide');
}

function selectNav(page) {
    // clear selection class from all nav buttons:
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('nav-selected');
    });
    // add selection class to the intended nav button:
    const selectedNavButton = document.querySelector(`.nav-${page}`);
    if (selectedNavButton) {
        selectedNavButton.classList.add('nav-selected');
    }
}

function storeHomeHtml() {
    const homeMain = document.querySelector('.main');
    const homeHtml = homeMain.innerHTML;
    localStorage.setItem('homeHtml', homeHtml);
}

function appendComingSoon(parent) {
    const comingSoon = document.createElement('img');
    comingSoon.classList.add('coming-soon');
    comingSoon.setAttribute('src', 'img/coming-soon.jpg');
    comingSoon.setAttribute('alt', 'coming soon');
    parent.appendChild(comingSoon);
}

function renderHome() {
    // clear selection styling from nav buttons, then hide the nav bar:
    selectNav('');
    hideNav();

    // load home stylesheet:
    const stylesheet = document.querySelector('.page-stylesheet');
    stylesheet.setAttribute('href', 'css/home.css');

    // if the home html is stored in localStorage, use it to update the main content section:
    const main = document.querySelector('.main');
    if (localStorage.getItem('homeHtml')) {
        const homeHtml = localStorage.getItem('homeHtml');
        main.innerHTML = homeHtml;
    // if it's not stored, just reload the site:
    } else {
        location.reload();
    }
    
    // add click listeners to the big buttons:
    addHomeListeners();
}


function renderMenuPage() {
    // apply selection style to the 'menu' button, then hide the nav bar:
    selectNav('menu');
    hideNav();

    // load menu page stylesheet:
    const stylesheet = document.querySelector('.page-stylesheet');
    stylesheet.setAttribute('href', 'css/menu.css');
    
    // clear out main content section:
    const main = document.querySelector('.main');
    main.innerHTML = '';

    // render the menu using jpg files of handwritten title & menu items:
    const menuTitle = document.createElement('img');
    menuTitle.classList.add('menu-title');
    menuTitle.setAttribute('src', 'img/current-menu.jpg');
    menuTitle.setAttribute('alt', 'current menu');
    main.appendChild(menuTitle);

    const currentMenu = [
        'tagliatelle',
        'breakfast-sandwich',
        'granola',
        'mostaccioli',
        'fennel-arugula-salad',
        'beans'
    ];

    currentMenu.forEach(item => {
        const newItem = document.createElement('img');
        newItem.classList.add('menu-item');
        newItem.classList.add(`${item}`);
        newItem.setAttribute('src', `img/menu-items/${item}.jpg`);
        newItem.setAttribute('alt', `${item}`);
        main.appendChild(newItem);
    });
}

function renderEventsPage() {
    // add selection style to the 'events' button, then hide the nav bar:
    selectNav('events');
    hideNav();

    // load events stylesheet:
    const stylesheet = document.querySelector('.page-stylesheet');
    stylesheet.setAttribute('href', 'css/events.css');

    // clear out main content section:
    const main = document.querySelector('.main');
    main.innerHTML = '';

    // create events-main div within main content section:
    const eventsMain = document.createElement('div');
    eventsMain.classList.add('events-main');
    main.appendChild(eventsMain);

    appendComingSoon(eventsMain);   
}

function renderContactPage() {
    // add selection style to the 'contact' button, then hide the nav bar:
    selectNav('contact');
    hideNav();

    // load contact page stylesheet:
    const stylesheet = document.querySelector('.page-stylesheet');
    stylesheet.setAttribute('href', 'css/contact.css');

    // clear out main content div:
    const main = document.querySelector('.main');
    main.innerHTML = '';

    // create contact-main div within main content section:
    const contactMain = document.createElement('div');
    contactMain.classList.add('contact-main');
    main.appendChild(contactMain);

    // create contact-text div & child divs for paragraphs:
    const contactText = document.createElement('div');
    contactText.classList.add('contact-text');
    contactMain.appendChild(contactText);

        const inquiries = document.createElement('div');
        inquiries.classList.add('inquiries');
        inquiries.innerHTML = `for inquiries, please email <span class="graces-web-portal">letsgotograces@gmail.com</span>.`;
        contactText.appendChild(inquiries);

        const comingNext = document.createElement('div');
        comingNext.classList.add('coming-next');
        comingNext.innerHTML = `to find out what we<span class="apostrophe">'</span>re up to next, sign up for our newsletter <span class="inline-link graces-web-portal" onclick="sendToMailchimp()">here</span>.`;
        contactText.appendChild(comingNext);
}

function sendToMailchimp() {
    window.open('https://mailchi.mp/56e44903e4bd/graces-email-newsletter', '_blank');
}

function renderAboutPage() {
    // add selection style to the 'about' button, then hide the nav bar:
    selectNav('about');
    hideNav();

    // load stylesheet for about page:
    const stylesheet = document.querySelector('.page-stylesheet');
    stylesheet.setAttribute('href', 'css/about.css');

    // clear out main content section:
    const main = document.querySelector('.main');
    main.innerHTML = '';

    // create about-ain div within main content section:
    const aboutMain = document.createElement('div');
    aboutMain.classList.add('about-main');
    main.appendChild(aboutMain);

    // create div for about text:
    const aboutText = document.createElement('div');
    aboutText.classList.add('about-text');
    aboutText.innerHTML = 'graces is a food pop-up in bucks county, PA, serving up mid-atlantic by midwest sandwiches, salads, pastries, pasta, and more. <span class="apostrophe">:)</span>';
    aboutMain.appendChild(aboutText);
}

function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function sendToInsta() {
    window.open('https://www.instagram.com/graces_PA/', '_blank');
}