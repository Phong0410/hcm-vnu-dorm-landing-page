
export default function changeLocationHandle() {

    const mainLocationElements = document.querySelectorAll('.location__content')
    const locationA = document.querySelector('.location__content#location-A')
    const locationB = document.querySelector('.location__content#location-B')
    const locationHeadingA = document.querySelector('.location__heading#heading-A')
    const locationHeadingB = document.querySelector('.location__heading#heading-B')

    mainLocationElements.forEach(mainLocationElement => {
        mainLocationElement.addEventListener('wheel', handleWheel)
    });

    locationHeadingA.addEventListener('click', showA)
    locationHeadingB.addEventListener('click', showB)

    function handleWheel(event) {
        event.preventDefault()
        if (event.deltaY < 0) {
            showA()
        } else if (event.deltaY > 0) {
            showB()
        }
    }


    function showA() {
        locationB.style.maxHeight = '0'
        locationB.style.opacity = '0'
        locationA.style.maxHeight = '450px'
        locationA.style.opacity = '1'


        locationHeadingA.classList.remove('active')
        locationHeadingB.classList.remove('active')
        locationHeadingA.classList.add('active')

        locationHeadingB.style.top = '500px'

    }

    function showB() {
        locationA.style.maxHeight = '0'
        locationA.style.opacity = '0'
        locationB.style.maxHeight = '450px'
        locationB.style.opacity = '1'

        locationHeadingB.classList.remove('active')
        locationHeadingA.classList.remove('active')
        locationHeadingB.classList.add('active')

        locationHeadingB.style.top = '116px'

    }
}

