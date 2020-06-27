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

const lawCategoryFirst = document.querySelector('.lawCategory-first > h2');
const lawCategoryBefore = document.querySelector('.lawCategory-before');
const lawCategoryComponent = document.querySelector('.lawCategoryComponent');
const lawComponentBefore = document.querySelector('.lawComponentBefore');

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

// const newsFirst = document.querySelector('.newsFirstInside');
// const newsComponentInside = document.querySelector('.news-componentInside');

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
        case 'lawComponentBefore':
            mainMenu.classList.add('moveRight');
            lawComponentBefore.classList.add('moveRight');
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
            break;
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
    lawComponentBefore.classList.remove('moveRight');
    settingsComponent.classList.remove('showSettings');
}

handleCategoyFavoriteClicked = (category) => {
    categorysFavorite.map(categoryInside => categoryInside.classList.remove('active'));
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
lawButton.addEventListener('click', () => handleMenuButtonClick('lawComponentBefore'));
learnButton.addEventListener('click', () => handleMenuButtonClick('learn'));
discountsButton.addEventListener('click', () => handleMenuButtonClick('discounts'));
trainingButton.addEventListener('click', () => handleMenuButtonClick('training'));
learnCategoryFirst.addEventListener('click', () => handleMenuButtonClick('learnCategoryFirst'));
lawCategoryFirst.addEventListener('click', () => handleMenuButtonClick('lawCategoryFirst'));
lawCategoryBefore.addEventListener('click', () => handleMenuButtonClick('law'));
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


//Pytanie sprawdzające

const handleAnswerClicked = () => {
    answer1.classList.add('true');
    answer2.classList.add('false');
    answer3.classList.add('false');
}

const answer1 = document.querySelector('.odp1');
const answer2 = document.querySelector('.odp2');
const answer3 = document.querySelector('.odp3');

const elementToMove = document.querySelector('.borderAdvice');
const elementToMove2 = document.querySelector('.trenerToMove');
const elementToMove3 = document.querySelector('.trener-img');
const elementToMove4 = document.querySelector('.cityToMove');
const elementToMove5 = document.querySelector('.titleToMove');
const elementToMove6 = document.querySelector('.iconsTrainingToMove');

const mainQuestion = document.querySelector('.questionMain');

const QuestionToArticle = document.querySelector('.questionToArticle');

const answers = [...document.querySelectorAll('.odps > div')];

QuestionToArticle.addEventListener('click', () => {
    elementToMove.classList.toggle('moveDownElement');
    elementToMove2.classList.toggle('moveDownElement');
    elementToMove3.classList.toggle('moveDownElement');
    elementToMove4.classList.toggle('moveDownElement');
    elementToMove5.classList.toggle('moveDownElement');
    elementToMove6.classList.toggle('moveDownElement');
    mainQuestion.classList.toggle('showQuestion');
});

answers.map(answer => answer.addEventListener('click', handleAnswerClicked))