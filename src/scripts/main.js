document.addEventListener('DOMContentLoaded', function(){
    const amelieImage = document.querySelector('.about__container__animation__image')
    const castItem = document.querySelectorAll('.cast__list__item')

    //Animation about
    amelieImage.addEventListener('click', function(elemento) {
        const containerAnimation = amelieImage.parentNode

        containerAnimation.classList.toggle('about__container__animation--is-showing')
    })

    //Animation cast
    for (let i = 0; i < castItem.length; i++) {
        castItem[i].addEventListener('click', function() {
            castItem[i].classList.toggle('cast__list__item--is-showing')
        })
    }

})