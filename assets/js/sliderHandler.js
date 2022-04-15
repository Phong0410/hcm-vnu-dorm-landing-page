export default function sliderHandle (event) {
    document.querySelectorAll('.main__slider-content').length
    const sliderCounter = {
        length: document.querySelectorAll('.main__slider-content').length,
        currentIndex: 1
    }

    const slideRightBtn = document.querySelector(".main__slider-button:first-child")
    const slideLeftBtn = document.querySelector(".main__slider-button:last-child")

    let slideLoop = setInterval(() => {
        slideLeft('.main__slider-content', sliderCounter, 300)
    }, 10000)

    slideLeftBtn.addEventListener('click', () => {
        slideLeft('.main__slider-content', sliderCounter, 300)
        clearInterval(slideLoop)
        slideLoop = setInterval(() => {
            slideLeft('.main__slider-content', sliderCounter, 300)
        }, 10000)
    })

    slideRightBtn.addEventListener('click', () => {
        slideRight('.main__slider-content', sliderCounter, 300)
        clearInterval(slideLoop)
        slideLoop = setInterval(() => {
            slideLeft('.main__slider-content', sliderCounter, 300)
        }, 10000)
    })
}

const slideLeft = (selector, sliderCounter, duration) => {
    const currentSlide = document.querySelector(`${selector}:nth-child(${sliderCounter.currentIndex})`)
    const nextSlide = document.querySelector(`${selector}:nth-child(${sliderCounter.currentIndex + 1})`)

    const animation = currentSlide.animate(
        [
            {
                transform: 'translateX(-50%)',
                opacity: 1
            },
            {
                transform: 'translateX(-200%)',
                opacity: 0
            }
        ],
        {
            easing: 'ease',
            duration: duration,
            fill: 'forwards'
        }
    )

    if (nextSlide) {
        nextSlide.style.display = 'flex'
        nextSlide.animate(
            [
                {
                    transform: 'translateX(150%)',
                    opacity: 0
                },
                {
                    transform: 'translateX(-50%)',
                    opacity: 1
                }
            ],
            {
                easing: 'ease',
                duration: duration,
                fill: 'forwards'
            }
        )
        sliderCounter.currentIndex++
    }
    else {
        const firstSlide = document.querySelector(`${selector}:first-child`)
        firstSlide.style.display = 'flex'
        firstSlide.animate(
            [
                {
                    transform: 'translateX(150%)',
                    opacity: 0
                },
                {
                    transform: 'translateX(-50%)',
                    opacity: 1
                }
            ],
            {
                easing: 'ease',
                duration: duration,
                fill: 'forwards'
            }
        )
        sliderCounter.currentIndex = 1
    }

    animation.onfinish = event => {
        event.target.effect.target.style.display = 'none'
    }
}

const slideRight = (selector, sliderCounter, duration) => {
    const currentSlide = document.querySelector(`${selector}:nth-child(${sliderCounter.currentIndex})`)
    const prevSlide = document.querySelector(`${selector}:nth-child(${sliderCounter.currentIndex - 1})`)

    const animation = currentSlide.animate(
        [
            {
                transform: 'translateX(-50%)',
                opacity: 1
            },
            {
                transform: 'translateX(200%)',
                opacity: 0
            }
        ],
        {
            easing: 'ease',
            duration: duration,
            fill: 'forwards'
        }
    )

    if (prevSlide) {
        prevSlide.style.display = 'flex'
        prevSlide.animate(
            [
                {
                    transform: 'translateX(-150%)',
                    opacity: 0
                },
                {
                    transform: 'translateX(-50%)',
                    opacity: 1
                }
            ],
            {
                easing: 'ease',
                duration: duration,
                fill: 'forwards'
            }
        )
        sliderCounter.currentIndex--
    }
    else {
        const lastSlide = document.querySelector(`${selector}:last-child`)
        lastSlide.style.display = 'flex'
        lastSlide.animate(
            [
                {
                    transform: 'translateX(-150%)',
                    opacity: 0
                },
                {
                    transform: 'translateX(-50%)',
                    opacity: 1
                }
            ],
            {
                easing: 'ease',
                duration: duration,
                fill: 'forwards'
            }
        )
        sliderCounter.currentIndex = sliderCounter.length
    }

    animation.onfinish = event => {
        event.target.effect.target.style.display = 'none'
    }
}