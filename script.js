const btns = document.querySelectorAll('.btn');
const cards = document.querySelectorAll('.card');
const arrows = document.querySelectorAll('.img__arrow');
console.log(btns);

let currentActiveItem = 0;

const removeActiveElements = (selector) => {
    const linksActive = document.querySelectorAll(`.${selector}`);

    if(linksActive.length){
        linksActive.forEach(linkActive => {
            linkActive.classList.remove(selector);
        });
    }
}

let currentCardIndex = 0;

btns.forEach((btn, i) =>{
    let btnsIndex = [i];
    console.log(btnsIndex);
    btn.addEventListener('click', (e) =>{
        const indexChange = parseInt(btn.getAttribute('data-index'));  // Get the index change value
        removeActiveElements('card--active');
        removeActiveElements('btn--active');
        
        currentCardIndex = (currentCardIndex + indexChange + cards.length) % cards.length;
        cards[currentCardIndex].classList.add('card--active');
        btn.classList.add('btn--active');
        
    });


});