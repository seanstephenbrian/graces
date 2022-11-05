window.addEventListener('DOMContentLoaded', addInitialListeners);
window.addEventListener('DOMContentLoaded', storeHomeHtml);

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

function storeHomeHtml() {
    const homeMain = document.querySelector('.main');
    const homeHtml = homeMain.innerHTML;
    localStorage.setItem('homeHtml', homeHtml);
}

function renderHome() {
    hideNav();

    const stylesheet = document.querySelector('.page-stylesheet');
    stylesheet.setAttribute('href', 'css/home.css');

    const main = document.querySelector('.main');
    const homeHtml = localStorage.getItem('homeHtml');
    main.innerHTML = homeHtml;

    addHomeListeners();
    
}


function renderMenuPage() {
    hideNav();

    const stylesheet = document.querySelector('.page-stylesheet');
    stylesheet.setAttribute('href', 'css/menu.css');
    
    const main = document.querySelector('.main');
    main.innerHTML = '';

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
    hideNav();

    const stylesheet = document.querySelector('.page-stylesheet');
    stylesheet.setAttribute('href', 'css/events.css');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="events-main">
            <img src="img/coming-soon.jpg" class="coming-soon" alt="coming soon">
        </div>
    `;
}

function renderContactPage() {
    hideNav();

    const stylesheet = document.querySelector('.page-stylesheet');
    stylesheet.setAttribute('href', 'css/contact.css');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="contact-main">
            <div class="inquires">for inquiries, please email <span class="graces-web-portal">letsgotograces@gmail.com</span>.</div>
            <div class="coming-next">to find out what we<span class="apostrophe">'</span>re up to next, sign up for our newsletter <span class="inline-newsletter graces-web-portal" onclick="sendToMailchimp()">here</span>.</div>
        </div>
    `;
}

function sendToMailchimp() {
    window.open('https://mailchi.mp/56e44903e4bd/graces-email-newsletter', '_blank');
}

function renderAboutPage() {
    hideNav();

    const stylesheet = document.querySelector('.page-stylesheet');
    stylesheet.setAttribute('href', 'css/about.css');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="about-main">
            <img src="img/coming-soon.jpg" class="coming-soon" alt="coming soon">
        </div>
    `;
}

function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function sendToInsta() {
    window.open('https://www.instagram.com/graces_PA/', '_blank');
}