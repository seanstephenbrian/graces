window.addEventListener('DOMContentLoaded', addInitialListeners);
window.addEventListener('DOMContentLoaded', renderHome);

function addInitialListeners() {
    // add click listener to hamburger icon:
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

function renderMenuPage() {
    hideNav();

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