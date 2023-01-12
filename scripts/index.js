const cardsContent = [
    {
        id: 'marketplace',
        imageUrl: 'images/ecommerce.png',
        imageAlt: 'feature',
        title: 'УДОБНЫЙ МАРКЕТПЛЕЙС',
        description: 'Найти и выбрать авто в любой стране стало гораздо легче. Вперед к поиску',
    },
    {
        id: 'pricing',
        imageUrl: 'images/policy.png',
        imageAlt: 'feature',
        title: 'ЭЛЕКТРОННЫЕ ДОКУМЕНТЫ',
        description: 'Партнеры предложат цены \n' +
            'на интересующие модели,\n' +
            ' где ты сможешь подобрать\n' +
            ' авто под свой бюджет.\n' +
            'Цены ниже рыночных!',
    },
    {
        id: 'gps',
        imageUrl: 'images/fix.png',
        imageAlt: 'GPS ТРЕКИНГ',
        title: 'ПРОВЕРКА АВТОМОБИЛЯ',
        description: 'Отслеживай доставку своего авто в любой точке мира',
    },
]

const cardsContainer = document.querySelector('.features__cards');
const cardTemplate = document.querySelector('.card-template').content;

const featuresCards = document.querySelectorAll('.features__card');
const featuresTitleBorder = document.querySelector('.content__title-border');
const advantagesTitleBorder = document.querySelector('.advantages__title-border');

//CARD ELEMENT CLONING
cloneCardElement(cardsContent);

const scrollDisplay = document.querySelector('.scroll');

function cloneCardElement (data) {
    data.forEach(item => {
        const card = cardTemplate.querySelector('.features__card').cloneNode(true);
        const image = card.querySelector('.features__image');
        const title = card.querySelector('.features__title');
        const description = card.querySelector('.features__description');

        card.id = item.id;
        image.setAttribute('src', item.imageUrl);
        image.setAttribute('alt', item.imageAlt);
        title.textContent = item.title;
        description.textContent = item.description;

        cardsContainer.append(card);
    })
}

//FUNCTIONS
const varyBorderWidth = (titleBorder, minScroll, maxScroll) => {
    let contentBorderWidth = (scrollPosition - minScroll) * (100 / (maxScroll - minScroll));

    if (scrollPosition < minScroll) {
        titleBorder.style.width = "0%"
    } else if (scrollPosition > maxScroll) {
        titleBorder.style.width = '100%';
    } else {
        titleBorder.style.width = `${contentBorderWidth < 100 ? contentBorderWidth : 100}%`
    }
}

const varyElementOpacity = (element, minScroll, maxScroll) => {
    if (scrollPosition < minScroll) {
        element.setAttribute('style', 'opacity: 0')
    } else if (scrollPosition > maxScroll) {
        element.setAttribute('style', 'opacity: 1;')
    } else {
        element.setAttribute('style', `opacity: ${(scrollPosition - minScroll) * (1 / (maxScroll - minScroll))}`)
    }
}

let scrollPosition;

//FEATURES HEADER VARIABLE OPACITY SETUP
window.addEventListener('scroll', () => {
    scrollPosition = window.pageYOffset;
    scrollDisplay.textContent = window.screen.width;

    //VARIABLE OPACITY FOR EACH CAR
    featuresCards.forEach(item => {
        varyElementOpacity(item, 600, 800)
    })

    //VARIABLE BORDER WIDTH FOR CONTENT SECTION
    varyBorderWidth(featuresTitleBorder, 1171, 1600);

    //VARIABLE BORDER WIDTH FOR ADVANTAGE SECTION
    varyBorderWidth(advantagesTitleBorder, 1820, 2130);

})

