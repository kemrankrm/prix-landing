const featuresHeader = document.querySelector('.features__header');

const firstCard = document.querySelectorAll('.features__card');


let scrollPosition;
//FEATURES HEADER VARIABLE OPACITY SETUP
window.addEventListener('scroll', () => {
    console.log('SCROLL: ', window.pageYOffset);
    scrollPosition = window.pageYOffset;
    if (scrollPosition < 65) {
        featuresHeader.setAttribute('style', 'opacity: 0')
    } else if (scrollPosition > 130) {
        featuresHeader.setAttribute('style', 'opacity: 1;')
    } else {
        featuresHeader.setAttribute('style', `opacity: ${(scrollPosition - 65) * 0.01}`)
    }

    // firstCard.forEach((item, index) => {
    //     item.setAttribute('style', `transform: translateY(${index*(scrollPosition/10)}px)`)
    // });
})

