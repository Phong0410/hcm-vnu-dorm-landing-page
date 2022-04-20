export default function modalHandle() {
    const menuBtn = document.querySelector('.front-page__header-nav-bars')
    const linksModal = document.querySelector('.links-modal')
    const navList = document.querySelector('.links-modal__header-nav-list')

    menuBtn.addEventListener('click', () => menuBtnClickHandle(linksModal, navList))
    linksModal.addEventListener('click', () => linksModalClickHandle(linksModal))
    navList.addEventListener('click', event => event.stopPropagation())
}

function menuBtnClickHandle(linksModal, navList) {

    linksModal.style.display = 'flex'
    linksModal.animate(
        [
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ],
        {
            easing: 'ease-in-out',
            duration: 1000,
            fill: 'forwards'
        }
    )

    navList.animate(
        [
            {
                transform: 'translateX(100%)',
                opacity: 0
            },
            {
                transform: 'translateX(0)',
                opacity: 1
            }
        ],
        {
            easing: 'ease-in-out',
            duration: 1000,
            fill: 'forwards'
        }
    )
}

function linksModalClickHandle(linksModal) {
    const animation = linksModal.animate(
        [
            {
                opacity: 1
            },
            {
                opacity: 0
            }
        ],
        {
            easing: 'ease-in-out',
            duration: 1000,
            fill: 'forwards'
        }
    )

    animation.onfinish = event => event.target.effect.target.style.display = 'none'
}