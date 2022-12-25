const featuresHeader = document.querySelector('.features__header');
const featuresCards = document.querySelectorAll('.features__card');
const featuresTitleBorder = document.querySelector('.content__title-border');
const advantagesTitleBorder = document.querySelector('.advantages__title-border');

const scrollDisplay = document.querySelector('.scroll');


console.log(featuresHeader)
let scrollPosition;
//FEATURES HEADER VARIABLE OPACITY SETUP
window.addEventListener('scroll', () => {
    console.log('SCROLL: ', window.pageYOffset);
    scrollPosition = window.pageYOffset;
    if (scrollPosition < 400) {
        featuresHeader.setAttribute('style', 'opacity: 0')
    } else if (scrollPosition > 580) {
        featuresHeader.setAttribute('style', 'opacity: 1;')
    } else {
        featuresHeader.setAttribute('style', `opacity: ${(scrollPosition - 400) * 0.006}`)
    }

    scrollDisplay.textContent = scrollPosition;
    let contentBorderWidth = (scrollPosition - 1171)*0.371;
    if (scrollPosition < 1171) {
        featuresTitleBorder.style.width = "0%"
    } else if (scrollPosition > 1440) {
        featuresTitleBorder.style.width = '100%';
    } else {
        featuresTitleBorder.style.width = `${contentBorderWidth < 100 ? contentBorderWidth : 100}%`
    }

    let advantagesBorderWidth = (scrollPosition - 1820)*0.3226;
    if (scrollPosition < 1820) {
        advantagesTitleBorder.style.width = "0%"
    } else if (scrollPosition > 2130) {
        advantagesBorderWidth.style.width = '100%';
    } else {
        advantagesTitleBorder.style.width = `${advantagesBorderWidth < 100 ? advantagesBorderWidth : 100}%`
    }

    // featuresCards.forEach(item => {
    //     if (scrollPosition < 670) {
    //         item.setAttribute('style', 'opacity: 0')
    //     // } else if (scrollPosition > 1000) {
    //     //     item.setAttribute('style', 'opacity: 1')
    //     } else {
    //         item.setAttribute('style', `opacity: ${(scrollPosition - 670) * 0.003}`)
    //     }
    // })
    //
    // // if (scrollPosition < 670) {
    // //     featuresCardsBlock.setAttribute('style', 'opacity: 0');
    // // } else if (scrollPosition > 1000) {
    // //     featuresCardsBlock.setAttribute('style', 'opacity: 1')
    // // } else {
    // //     featuresCardsBlock.setAttribute('style', `opacity: ${(scrollPosition - 670) * 0.003}`)
    // // }
})

