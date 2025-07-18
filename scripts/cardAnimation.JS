let cards = document.querySelectorAll('.card-project')
for(let index = 0; index < cards.length; index++){
    cards[index].addEventListener('mouseout', function animation(){
        cards[index].classList.add('card-animation')
    })
}