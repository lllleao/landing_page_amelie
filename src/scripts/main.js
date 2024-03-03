document.addEventListener('DOMContentLoaded', function(){
    const amelieImage = document.querySelector('.about__container__animation__image')
    const castItem = document.querySelectorAll('.cast__list__item')
    const header = document.querySelector('.header')
    const about = document.querySelector('.about')
    const sectionAboutHeight = about.clientHeight
    const sectionAboutWidth = about.clientWidth
    const widthMobile = 1457
    const dropdown = document.querySelector('.header__dropdown')


    header.classList.remove('header--is-hidden')

    //Animation about
    amelieImage.addEventListener('click', function(elemento) {
        const containerAnimation = amelieImage.parentNode

        if (sectionAboutWidth > widthMobile) {
            containerAnimation.classList.toggle('about__container__animation--is-showing')
        }
    })

    //Animation cast
    for (let i = 0; i < castItem.length; i++) {
        castItem[i].addEventListener('click', function() {
            castItem[i].classList.toggle('cast__list__item--is-showing')
        })
    }

    //Header Fixed
    window.addEventListener('scroll', function() {
        const scrollnumber = window.scrollY

        if (scrollnumber >= (sectionAboutHeight)) {
            header.classList.add('header--is-hidden')
        } else {
            header.classList.remove('header--is-hidden')
        }
    })

    //Header Dropdown
    dropdown.addEventListener('click', function() {
        const navbar = document.querySelector('.header__navbar')
        navbar.classList.toggle('header__navbar--is-open')
    })
})


$(window).on('load', function() {
    $('#tel').mask('(00) 0 0000-0000', {placeholder: '(XX) X XXXX-XXXX'})
})
