const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){
   if(lockBoard) return;
   if(this === firstCard) return;

   this.classList.add('flip');


if(!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    return;
}

    // second click
    
    secondCard = this;
    
   
    //do cards match?
    checkForMatch();
    }

function checkForMatch() {
    let isMatch = firstCard.dataset.name ===
     secondCard.dataset.name;

   isMatch ? disableCards() : unflipCards();

}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

 resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        lockBoard = false;
        resetBoard();
    }, 1500);

}
    
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

}

//IIFE (Immediately Invoked Function Expression)
// Executes after its definition

(function cupidShuffle(){
    cards.forEach(card => {
        let randomNum = Math.floor(Math.random() * 12);
        card.style.order = randomNum;
    });

})();
cards.forEach(card => card.addEventListener('click', flipCard));