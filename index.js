window.addEventListener('DOMContentLoaded', addInitialListeners);
window.addEventListener('DOMContentLoaded', renderHome);

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

    // add click listener to bottom 'graces' logo to scroll to top of page:
    const footerLogo = document.querySelector('.footer-logo');
    footerLogo.addEventListener('click', scrollUp);

    // add click listener to instagram icon:
    const insta = document.querySelector('.insta-container');
    insta.addEventListener('click', sendToInsta);
}

function showNav() {
    const nav = document.querySelector('.nav');
    nav.classList.remove('hide');
}

function hideNav() {
    const nav = document.querySelector('.nav');
    nav.classList.add('hide');
}

function renderHome() {
    hideNav();

    const stylesheet = document.querySelector('.page-stylesheet');
    stylesheet.setAttribute('href', 'css/home.css');

    const main = document.querySelector('.main');
    main.innerHTML = `
        <div class="intro">
            <div class="p1">hello and welcome to the <span class="graces-web-portal">Graces Web Portal</span>.</div>
            <div class="p2">we<span class="apostrophe">'</span>re cooking with the seasons in bucks county, pennsylvania.</div>
            <div class="p3">if you want to eat, we want to feed you!</div>
        </div>

        <div class="contact">
            <div class="contact-drawing-container"><img src="img/contact-drawing.jpg" alt="ALT GOES HERE" class="contact-drawing"></div>
            <div class="contact-button">CONTACT US</div>
        </div>
        
        <div class="menu">
            <div class="menu-button">TODAY'S MENU</div>
            <div class="menu-drawing-container"><img src="img/menu-drawing.jpg" alt="ALT GOES HERE" class="menu-drawing"></div>
        </div>

        <div class="newsletter">
            <div class="newsletter-drawing-container"><img src="img/newsletter-drawing.jpg" alt="ALT GOES HERE" class="newsletter-drawing"></div>
            <div class="newsletter-button">newsletter sign-up</div>
        </div>
    `;
    // add click event listeners to homepage buttons:
    const contactButton = document.querySelector('.contact-button');
    contactButton.addEventListener('click', renderContactPage);
    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', renderMenuPage);
    const newsletterButton = document.querySelector('.newsletter-button');
    newsletterButton.addEventListener('click', sendToMailchimp);
}

function renderMenuPage() {
    hideNav();

    const stylesheet = document.querySelector('.page-stylesheet');
    stylesheet.setAttribute('href', 'css/menu.css');
    
    const main = document.querySelector('.main');
    main.innerHTML = `
        <img class="menu-title" src="img/current-menu.jpg" alt="current menu">

        <img class="menu-item" src="img/menu-items/tagliatelle.jpg" alt="tagliatelle al ragu alla bolognese">
        <img class="menu-item" src="img/menu-items/breakfast-sandwich.jpg" alt="breakfast sandwich">
        <img class="menu-item" src="img/menu-items/granola.jpg" alt="granola and house yogurt">
        <img class="menu-item" src="img/menu-items/mostaccioli.jpg" alt="mostaccioli all'arrabbiata">
        <img class="menu-item" src="img/menu-items/fennel-arugula-salad.jpg" alt="fennel and arugula salad">
        <img class="menu-item" src="img/menu-items/beans.jpg" alt="cup of beans">
    `;

}

function renderEventsPage() {
    hideNav();

}

function renderContactPage() {
    hideNav();

}

function sendToMailchimp() {
    window.open('https://mailchi.mp/56e44903e4bd/graces-email-newsletter', '_blank');
}

function renderAboutPage() {
    hideNav();

}

function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function sendToInsta() {
    window.open('https://www.instagram.com/graces_PA/', '_blank');
}