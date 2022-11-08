window.addEventListener('DOMContentLoaded', runInitialFunctions);

function runInitialFunctions() {
    loadStylesheets();
    renderInitialElements();
    addInitialListeners();
    renderHome();
    setBodyHeight();
    window.addEventListener('resize', setBodyHeight);
}

function renderInitialElements() {
    createWrapper();
    renderHeader();
    renderNav();
    hideNav();
    createMain();
    renderFooter();
}

function createWrapper() {
    const body = document.querySelector('body');

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    body.appendChild(wrapper);
}

function renderHeader() {
    const wrapper = document.querySelector('.wrapper');

    const header = document.createElement('header');
    wrapper.appendChild(header);

        const headerLogo = document.createElement('div');
        headerLogo.classList.add('header-logo', 'logo-container');
        header.appendChild(headerLogo);

            const headerLogoImg = document.createElement('img');
            headerLogoImg.classList.add('logo');
            headerLogoImg.setAttribute('src', 'img/logo.jpg');
            headerLogoImg.setAttribute('alt', 'Graces');
            headerLogo.appendChild(headerLogoImg);

        const headerDrawingContainer = document.createElement('div');
        headerDrawingContainer.classList.add('header-drawing-container');
        header.appendChild(headerDrawingContainer);

            const headerDrawing = document.createElement('img');
            headerDrawing.classList.add('header-drawing');
            headerDrawing.setAttribute('src', 'img/header-drawing.jpg');
            headerDrawingContainer.appendChild(headerDrawing);

        const hamburgerContainer = document.createElement('div');
        hamburgerContainer.classList.add('hamburger-container');
        header.appendChild(hamburgerContainer);

            const hamburger = document.createElement('img');
            hamburger.classList.add('hamburger');
            hamburger.setAttribute('src', 'img/list.svg');
            hamburger.setAttribute('alt', 'Menu');
            hamburgerContainer.appendChild(hamburger);
}

function renderNav() {
    const wrapper = document.querySelector('.wrapper');

    const nav = document.createElement('div');
    nav.classList.add('nav');
    wrapper.appendChild(nav);

        const navList = document.createElement('ul');
        navList.classList.add('nav-list');
        nav.appendChild(navList);

            const navMenu = document.createElement('li');
            navMenu.classList.add('nav-button', 'nav-menu');
            navMenu.textContent = 'menu';
            navList.appendChild(navMenu);

            const navEvents = document.createElement('li');
            navEvents.classList.add('nav-button', 'nav-events');
            navEvents.textContent = 'events';
            navList.appendChild(navEvents);

            const navContact = document.createElement('li');
            navContact.classList.add('nav-button', 'nav-contact');
            navContact.textContent = 'contact';
            navList.appendChild(navContact);

            const navNewsletter = document.createElement('li');
            navNewsletter.classList.add('nav-button', 'nav-newsletter');
            navNewsletter.textContent = 'newsletter';
            navList.appendChild(navNewsletter);

            const navAbout = document.createElement('li');
            navAbout.classList.add('nav-button', 'nav-about');
            navAbout.textContent = 'about';
            navList.appendChild(navAbout);

            const navClose = document.createElement('li');
            navClose.classList.add('nav-close');
            navList.appendChild(navClose);

                const closeIcon = document.createElement('img');
                closeIcon.setAttribute('src', 'img/close.svg');
                navClose.appendChild(closeIcon);
}

function createMain() {
    const wrapper = document.querySelector('.wrapper');

    const main = document.createElement('div');
    main.classList.add('main');
    wrapper.appendChild(main);
}

function renderFooter() {
    const wrapper = document.querySelector('.wrapper');
    
    const footer = document.createElement('footer');
    wrapper.appendChild(footer);

        const logoContainer = document.createElement('div');
        logoContainer.classList.add('logo-container', 'footer-logo');
        footer.appendChild(logoContainer);

            const logo = document.createElement('img');
            logo.classList.add('logo');
            logo.setAttribute('src', 'img/logo.jpg');
            logo.setAttribute('alt', 'Graces');
            logoContainer.appendChild(logo);

        const footerDivider1 = document.createElement('div');
        footerDivider1.classList.add('footer-divider');
        footer.appendChild(footerDivider1);

            const footerDrawing1 = document.createElement('img');
            footerDrawing1.setAttribute('src', 'img/footer-drawing.jpg');
            footerDivider1.appendChild(footerDrawing1);

        const doyle = document.createElement('div');
        doyle.classList.add('doyle');
        doyle.textContent = 'doylestown, PA';
        footer.appendChild(doyle);

        const footerDivider2 = document.createElement('div');
        footerDivider2.classList.add('footer-divider');
        footer.appendChild(footerDivider2);

            const footerDrawing2 = document.createElement('img');
            footerDrawing2.setAttribute('src', 'img/footer-drawing.jpg');
            footerDivider2.appendChild(footerDrawing2);

        const insta = document.createElement('div');
        insta.classList.add('insta-container');
        footer.appendChild(insta);

            const instaIcon = document.createElement('img');
            instaIcon.setAttribute('src', 'img/instagram.svg');
            insta.appendChild(instaIcon);
}

function loadStylesheets() {
    const head = document.querySelector('head');

    // load main stylesheet:
    const mainStylesheet = document.createElement('link');
    mainStylesheet.classList.add('main-stylesheet');
    mainStylesheet.setAttribute('rel', 'stylesheet');
    mainStylesheet.setAttribute('href', 'css/main.css');
    head.appendChild(mainStylesheet);

    // create element for page-specific stylesheets:
    const pageStylesheet = document.createElement('link');
    pageStylesheet.classList.add('page-stylesheet');
    pageStylesheet.setAttribute('rel', 'stylesheet');
    pageStylesheet.setAttribute('href', '');
    head.appendChild(pageStylesheet);
}

function loadPageStylesheet(page) {
    const stylesheet = document.querySelector('.page-stylesheet');
    stylesheet.setAttribute('href', `css/${page}.css`);
}

function setBodyHeight() {
    // set body min-height & body height to inner window height to ensure that mobile users see the footer:
    const windowHeight = window.innerHeight + "px";
    document.body.style.minHeight = windowHeight;
    document.body.style.height = windowHeight;
    // empty maxHeight style in case it is unnecessary for current page:
    document.body.style.maxHeight = '';
}

function setBodyMaxHeight() {
    // set body max-height so there's not empty space on contact & about pages:
    const windowHeight = window.innerHeight + "px";
    document.body.style.maxHeight = windowHeight;
}
  
function addInitialListeners() {

    // header listeners:
    const headerLogo = document.querySelector('.header-logo');
    headerLogo.addEventListener('click', renderHome);
    const hamburger = document.querySelector('.hamburger-container');
    hamburger.addEventListener('click', showNav);

    // nav listeners:
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

    // footer listeners:

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

function renderHome() {
    // clear selection styling from nav buttons, then hide the nav bar:
    selectNav('');
    hideNav();

    loadPageStylesheet('home');

    // clear the main content section, then render the homepage:
    const main = document.querySelector('.main');
    main.innerHTML = '';

        const intro = document.createElement('div');
        intro.classList.add('intro');
        main.appendChild(intro);

            const hello = document.createElement('div');
            hello.classList.add('hello');
            hello.innerHTML =  `hello and welcome to the <span class="graces-web-portal">Graces Web Portal</span>.`;
            intro.appendChild(hello);

            const seasons = document.createElement('div');
            seasons.classList.add('seasons');
            seasons.innerHTML = `we<span class="apostrophe">'</span>re cooking with the seasons in bucks county, pennsylvania.`;
            intro.appendChild(seasons);

            const eat = document.createElement('div');
            eat.classList.add('eat');
            eat.textContent = 'if you want to eat, we want to feed you!'
            intro.appendChild(eat);

        const contact = document.createElement('div');
        contact.classList.add('contact');
        main.appendChild(contact);

            const contactDrawingContainer = document.createElement('div');
            contactDrawingContainer.classList.add('contact-drawing-container');
            contact.appendChild(contactDrawingContainer);

                const contactDrawing = document.createElement('img');
                contactDrawing.classList.add('contact-drawing');
                contactDrawing.setAttribute('src', 'img/contact-drawing.jpg');
                contactDrawingContainer.appendChild(contactDrawing);

            const contactButton = document.createElement('div');
            contactButton.classList.add('contact-button');
            contactButton.textContent = 'contact us';
            contact.appendChild(contactButton);

        const menu = document.createElement('div');
        menu.classList.add('menu');
        main.appendChild(menu);

            const menuButton = document.createElement('div');
            menuButton.classList.add('menu-button');
            menuButton.textContent = `today's menu`;
            menu.appendChild(menuButton);

            const menuDrawingContainer = document.createElement('div');
            menuDrawingContainer.classList.add('menu-drawing-container');
            menu.appendChild(menuDrawingContainer);

                const menuDrawing = document.createElement('img');
                menuDrawing.classList.add('menu-drawing');
                menuDrawing.setAttribute('src', 'img/menu-drawing.jpg');
                menuDrawingContainer.appendChild(menuDrawing);

        const newsletter = document.createElement('div');
        newsletter.classList.add('newsletter');
        main.appendChild(newsletter);

            const newsletterDrawingContainer = document.createElement('div');
            newsletterDrawingContainer.classList.add('newsletter-drawing-container');
            newsletter.appendChild(newsletterDrawingContainer);

                const newsletterDrawing = document.createElement('img');
                newsletterDrawing.classList.add('newsletter-drawing');
                newsletterDrawing.setAttribute('src', 'img/newsletter-drawing.jpg');
                newsletterDrawingContainer.appendChild(newsletterDrawing);

            const newsletterButton = document.createElement('div');
            newsletterButton.classList.add('newsletter-button');
            newsletterButton.textContent = 'newsletter sign-up';
            newsletter.appendChild(newsletterButton);

    // add click listeners to the buttons:
    addHomeListeners();

}


function renderMenuPage() {
    // set body height:
    setBodyHeight();

    // apply selection style to the 'menu' button, then hide the nav bar:
    selectNav('menu');
    hideNav();

    loadPageStylesheet('menu');
    
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
    // set body height:
    setBodyHeight();

    // add selection style to the 'events' button, then hide the nav bar:
    selectNav('events');
    hideNav();

    loadPageStylesheet('events');

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
    // set body height:
    setBodyHeight();
    setBodyMaxHeight();

    // add selection style to the 'contact' button, then hide the nav bar:
    selectNav('contact');
    hideNav();

    loadPageStylesheet('contact');

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
        inquiries.innerHTML = `for inquiries, please email <a href="mailto:letsgotograces@gmail.com" class="graces-web-portal graces-email">letsgotograces@gmail.com</a>.`;
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
    // set body height:
    setBodyHeight();
    setBodyMaxHeight();

    // add selection style to the 'about' button, then hide the nav bar:
    selectNav('about');
    hideNav();

    loadPageStylesheet('about');

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

// in case we need to have a page read 'coming soon':
function appendComingSoon(parent) {
    const comingSoon = document.createElement('img');
    comingSoon.classList.add('coming-soon');
    comingSoon.setAttribute('src', 'img/coming-soon.jpg');
    comingSoon.setAttribute('alt', 'coming soon');
    parent.appendChild(comingSoon);
}