export default function scrollUpBtnHandle() {
    const scrollUpElement = document.querySelector('.scroll-up')

    scrollUpElement.addEventListener('click', returnToTop)
}

function returnToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}