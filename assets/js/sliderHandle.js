export default function sliderHandle() {
    const slides = document.querySelectorAll('.front-page__slider-section')

    slideIn(slides[0], 1000)

    const slidesLength = slides.length
    let prev = 0
    let next = 1

    setInterval(() => {
        slideOut(slides[prev], 1000)
        slideIn(slides[next], 1000)
        prev = next
        next++
        if (!slides[next]) {
            next = 0
        }
    }, 5000)
}

const slideOut = (element, duration) => {
    const animation = element.animate(
        [
            {
                transform: 'translateX(0%)',
                opacity: 1
            },
            {
                transform: 'translateX(-100%)',
                opacity: 0
            }
        ],
        {
            easing: 'ease-in-out',
            duration: duration,
            fill: 'forwards'
        }
    )

    animation.onfinish = event => event.target.effect.target.style.display = 'none'

}

const slideIn = (element, duration) => {
    element.style.display = 'block'
    element.animate(
        [
            {
                transform: 'translateX(100%)',
                opacity: 0
            },
            {
                transform: 'translateX(0%)',
                opacity: 1
            }
        ],
        {
            easing: 'ease-in-out',
            duration: duration,
            fill: 'forwards'
        }
    )
}