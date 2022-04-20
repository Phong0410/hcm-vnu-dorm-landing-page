import scrollUpBtnHandle from './scrollUpBtnHandle.js'
import changeLocationHandle from './changLocationHandle.js'
import sliderHandle from './sliderHandle.js'
import modalHandle from './modalHandle.js'

document.addEventListener('DOMContentLoaded', function () {
    const backgroundAnimation = [
        {
            transform: 'scale(0)',
            opacity: 0
        },
        {
            transform: 'scale(1)',
            opacity: 1
        }
    ]
    const animationAttr = {
        easing: 'ease-in-out',
        duration: 1000,
        fill: 'forwards'
    }

    document.querySelector('.background-1').animate(
        backgroundAnimation,
        animationAttr
    )

    document.querySelector('.background-2').animate(
        backgroundAnimation,
        animationAttr
    )

    setTimeout(() => {
        document.querySelector('.wrapper').animate(
            [
                {
                    opacity: 0
                },
                {
                    opacity: 1
                }
            ],
            animationAttr
        )

        scrollUpBtnHandle()
        changeLocationHandle()
        sliderHandle()
        modalHandle()
    }, 1000)


})