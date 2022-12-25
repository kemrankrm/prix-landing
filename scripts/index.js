const featuresHeader = document.querySelector('.features__header');
const featuresCards = document.querySelectorAll('.features__card');
const featuresTitleBorder = document.querySelector('.content__title-border');
const advantagesTitleBorder = document.querySelector('.advantages__title-border');

const scrollDisplay = document.querySelector('.scroll');

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

    //VARIABLE OPACITY FOR EACH CAR
    featuresCards.forEach(item => {
        varyElementOpacity(item, 600, 800)
    })

    //VARIABLE BORDER WIDTH FOR CONTENT SECTION
    varyBorderWidth(featuresTitleBorder, 1171, 1600);

    //VARIABLE BORDER WIDTH FOR ADVANTAGE SECTION
    varyBorderWidth(advantagesTitleBorder, 1820, 2130);

})

