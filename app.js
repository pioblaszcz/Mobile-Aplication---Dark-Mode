const startAplication = document.querySelector('.startAplication');
const header = document.querySelector('.main__header');

const mainMenu = document.querySelector('.main-menu');
const burgerMenu = document.querySelector('.burgerMenu');
const newsComponent = document.querySelector('.news-component');
const lawComponent = document.querySelector('.law-component');
const discountsComponent = document.querySelector('.discounts-component');
const trainingComponent = document.querySelector('.training-component');
const learnComponent = document.querySelector('.learn-component');

const newsButton = document.querySelector('.news');
const lawButton = document.querySelector('.law');
const discountsButton = document.querySelector('.discounts');
const trainingButton = document.querySelector('.training');
const learnButton = document.querySelector('.learn');

const goHome = [...document.querySelectorAll('.fa-home')];

const learnCategoryFirst = document.querySelector('.learnCategory-first > h2');
const learnCategoryInside = document.querySelector('.learnInside-component');
const learnCategoryComponent = document.querySelector('.firstComponent');

const lawCategoryFirst = document.querySelector('.lawCategory > h2');
const lawCategoryComponent = document.querySelector('.lawCategoryComponent');

const favorite = document.querySelector('.menu-bottom > .fa-heart');
const favoriteComponent = document.querySelector('.favorite-component');

const goBack = [...document.querySelectorAll('.fa-chevron-left')];
const goBackInsideLearn = document.querySelector('.backInsideLern');

const categorysFavorite = [...document.querySelectorAll('.categoryInContainer')];

const wrapperLearn = document.querySelector('.wrapperLearn');
const wrapperLaw = document.querySelector('.wrapperLaw');

const registerButton = document.querySelector('.buttonToSubmit')
const register = document.querySelector('.registerPhone');

const settings = document.querySelector('.showSettings');
const settingsComponent = document.querySelector('.editPhone');

// klikalność poorady

const porada = document.querySelector('.newP');

handleHideStartAplicationElement = () => {
    startAplication.classList.add('unVisible');
    setTimeout(() => startAplication.style.display = "none", 490);
}

handleMenuButtonClick = (type) => {
    if (type !== 'register') {
        burgerMenu.classList.add('moveRight');
        header.classList.add('moveRight');
    }
    switch (type) {
        case 'news':
            mainMenu.classList.add('moveRight');
            newsComponent.classList.add('moveRight');
            break;
        case 'law':
            mainMenu.classList.add('moveRight');
            lawComponent.classList.add('moveRight');
            break;
        case 'discounts':
            mainMenu.classList.add('moveRight');
            discountsComponent.classList.add('moveRight');
            break;
        case 'training':
            mainMenu.classList.add('moveRight');
            trainingComponent.classList.add('moveRight');
            break;
        case 'learn':
            mainMenu.classList.add('moveRight');
            learnComponent.classList.add('moveRight');
            break;
        case 'learnCategoryFirst':
            learnCategoryInside.classList.add('moveRight');
            break;
        case 'lawCategoryFirst':
            lawCategoryComponent.classList.add('moveRight');
            break;
        case 'favoriteComponent':
            favoriteComponent.classList.add('moveRight');
            break;
        case 'porada':
            learnCategoryComponent.classList.add('moveRight');
            break;
        case 'settings':
            settingsComponent.classList.add('showSettings');
            break;
        case 'register':
            register.classList.add('hide');
        case 'goBack':
            learnCategoryComponent.classList.remove('moveRight');
            lawCategoryComponent.classList.remove('moveRight');
            break;
        case 'goBackInsideLearn':
            learnCategoryInside.classList.remove('moveRight');
        default:
            return;
    }
}

handleHomeClicked = () => {
    console.log('click')
    mainMenu.classList.remove('moveRight');
    newsComponent.classList.remove('moveRight');
    lawComponent.classList.remove('moveRight');
    discountsComponent.classList.remove('moveRight');
    trainingComponent.classList.remove('moveRight');
    learnComponent.classList.remove('moveRight');
    header.classList.remove('moveRight');
    burgerMenu.classList.remove('moveRight');
    lawCategoryComponent.classList.remove('moveRight');
    favoriteComponent.classList.remove('moveRight');
    learnCategoryInside.classList.remove('moveRight');
    settingsComponent.classList.remove('showSettings');
}

handleCategoyFavoriteClicked = (category) => {
    categorysFavorite.map(categoryInside => categoryInside.classList.remove('active'));
    category.classList.add('active');
    if (category.innerText !== 'Ucz się!') {
        wrapperLearn.style.display = "none";
        wrapperLaw.style.display = "block";
    }
    else if (category.innerText === 'Ucz się!') {
        wrapperLearn.style.display = "block";
        wrapperLaw.style.display = "none";
    }
}

setTimeout(handleHideStartAplicationElement, 1400);

newsButton.addEventListener('click', () => handleMenuButtonClick('news'));
lawButton.addEventListener('click', () => handleMenuButtonClick('law'));
learnButton.addEventListener('click', () => handleMenuButtonClick('learn'));
discountsButton.addEventListener('click', () => handleMenuButtonClick('discounts'));
trainingButton.addEventListener('click', () => handleMenuButtonClick('training'));
learnCategoryFirst.addEventListener('click', () => handleMenuButtonClick('learnCategoryFirst'));
lawCategoryFirst.addEventListener('click', () => handleMenuButtonClick('lawCategoryFirst'));
favorite.addEventListener('click', () => handleMenuButtonClick('favoriteComponent'));
porada.addEventListener('click', () => handleMenuButtonClick('porada'));
registerButton.addEventListener('click', () => handleMenuButtonClick('register'));
settings.addEventListener('click', () => handleMenuButtonClick('settings'));

goBack.map(item => item.addEventListener('click', () => handleMenuButtonClick('goBack')));
goBackInsideLearn.addEventListener('click', () => handleMenuButtonClick('goBackInsideLearn'));

categorysFavorite.map(category => category.addEventListener('click', () => handleCategoyFavoriteClicked(category)));
goHome.map(item => item.addEventListener('click', handleHomeClicked));

//hamburger

const hamburger = document.querySelector('.burgerMenu');
const onInnerPhone = document.querySelector('.onInnerPhone');
const navigationHamburger = document.querySelector('.navigation-hamburger')

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    onInnerPhone.classList.toggle('onInnerPhone--active');
    navigationHamburger.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', handleClick);
// onInnerPhone--active