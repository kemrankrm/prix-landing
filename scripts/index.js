const popupContent = [
    {
        name: 'marketplace',
        title: 'Удобный маркетплейс',
        text: 'PRIX предоставляет выбор авто из самой актуальной базы зарубежных авторынков. Подробное описание автомобиля, фото и цены от наших партнеров - все это будет компактно упаковано для приятного чтения. Команда Prix делает все для упрощения и прозрачности покупки авто. Осталось приступить к оформлению заказа. Удачи!',
        image: './images/porsche-minimalist-4k-s4-1366x768.jpg',
        addition: 'blablabla',
    },
    {
        name: 'pricing',
        title: 'Лучшие цены',
        text: 'Основная цель Prix - предоставить лучшие условия для клиентов. Мы стимулируем наших партнеров конкурировать для предоставления лучших цен и снижение сроков поставки. Помимо цен ты также сможешь увидеть преимущества каждой компании, отзывы и оценки наших клиентов, а также количество успешно доставленных автомобилей. Мы уверены, что ты найдешь ту самую!',
        image: './images/bestPricePopupImage.jpg',
        addition: 'blablabla',
    },
    {
        name: 'gps',
        title: 'GPS ТРЕКИНГ',
        text: 'Безопасность сделки - один из главных приоритетов Prix. Команда разработчиков позаботилась о твоих нервах и внедрила точную систему определения местоположения авто в любой точке мира(GPS). Удобный интерфейс поможет тебе всегда знать, где в данный момент находится твой автомобиль. Также перед отправкой тебе будет выслан подробный отчет об осмотре авто специалистом, дополненный фотографиями. После подписания договора в личном кабинете появится возможность отслеживания авто. Не переживай!',
        image: './images/gpsPicForPopup.jpeg',
        addition: 'blablabla',
    },
]
const cardsContent = [
    {
        id: 'marketplace',
        imageUrl: 'images/Add%20files-rafiki.svg',
        imageAlt: 'feature',
        title: 'УДОБНЫЙ МАРКЕТПЛЕЙС',
        description: 'Найти и выбрать авто в любой стране стало гораздо проще',
    },
    {
        id: 'pricing',
        imageUrl: 'images/Calculator-amico.svg',
        imageAlt: 'feature',
        title: 'КОНКУРЕНТНЫЕ ЦЕНЫ',
        description: 'Партнеры предложат цены на модели по интересу, где ты сможешь подобрать авто под свой бюджет',
    },
    {
        id: 'gps',
        imageUrl: 'images/Paper%20map-bro%20(1).svg',
        imageAlt: 'GPS ТРЕКИНГ',
        title: 'GPS ТРЕКИНГ',
        description: 'Отслеживай доставку своего авто в любой точке мира',
    },
]

const cardsContainer = document.querySelector('.features__cards');
const cardTemplate = document.querySelector('.card-template').content;

// console.log(cardTemplate);

const featuresHeader = document.querySelector('.features__header');
const featuresCards = document.querySelectorAll('.features__card');
const featuresTitleBorder = document.querySelector('.content__title-border');
const advantagesTitleBorder = document.querySelector('.advantages__title-border');

const blogTitle = document.querySelector('.blog__title');
const blogSubtitle = document.querySelector('.blog__subtitle');
const blogContainer = document.querySelector('.blog__container');
const blogImageDescription = document.querySelectorAll('.blog__description');

const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupOverlay = document.querySelector('.popup__overlay');
const popupImage = popup.querySelector('.popup__image')
const popupTitle = popup.querySelector('.popup__title');
const popupText = popup.querySelector('.popup__text');


//CARD ELEMENT CLONING
cloneCardElement(cardsContent);

const closeElements = [popupCloseButton, popupOverlay];
const cards = document.querySelectorAll('.features__card');

//CARD ELEMENT CLICK LISTENER
cards.forEach(item => {
    item.addEventListener('click', () => handlePopupOpen(item));
})

closeElements.forEach(item => {
    item.addEventListener('click', handlePopupClose)
})

const scrollDisplay = document.querySelector('.scroll');

function handlePopupOpen(item) {
    const content = popupContent.find(block => block.name === item.id)

    popupImage.setAttribute('src', content.image)
    popupTitle.textContent = content.title;
    popupText.textContent = content.text;

    popup.classList.add('popup_visible');
    document.addEventListener('keydown', handleEscClose)

}

function handlePopupClose() {
    popup.classList.remove('popup_visible');
    document.removeEventListener('keydown', handleEscClose);
    clearPopupData();
}

function clearPopupData() {
    popupImage.setAttribute('src', null)
    popupTitle.textContent = null;
    popupText.textContent = null;
}

function handleEscClose(e) {
    let button = e.key;

    if (button === 'Escape') {
        handlePopupClose()
    }
}

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
    let contentBorderWidth = (scrollPosition - minScroll)*(100 / (maxScroll - minScroll));
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
    scrollDisplay.textContent = scrollPosition;

    //VARIABLE CARDS TITLE OPACITY
    varyElementOpacity(featuresHeader, 400, 580);

    varyElementOpacity(blogTitle, 2479, 2850);
    varyElementOpacity(blogSubtitle, 2546, 2900);
    varyElementOpacity(blogContainer, 2700, 2900);
    blogImageDescription.forEach(item => {
        varyElementOpacity(item, 2900, 3050);
    })

    //VARIABLE OPACITY FOR EACH CAR
    featuresCards.forEach(item => {
        varyElementOpacity(item, 600, 800)
    })

    //VARIABLE BORDER WIDTH FOR CONTENT SECTION
    varyBorderWidth(featuresTitleBorder, 1171, 1600);

    //VARIABLE BORDER WIDTH FOR ADVANTAGE SECTION
    varyBorderWidth(advantagesTitleBorder, 1820, 2130);

})

