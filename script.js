const btns = document.querySelectorAll('.btn');
const cards = document.querySelectorAll('.card');
const arrows = document.querySelectorAll('.img__arrow');
console.log(cards);

let currentActiveItem = 0;

const removeActiveElements = (selector) => {
    const linksActive = document.querySelectorAll(`.${selector}`);

    if(linksActive.length){
        linksActive.forEach(linkActive => {
            linkActive.classList.remove(selector);
        });
    }
}


btns.forEach((btn, i) =>{
    btn.addEventListener('click', (e) =>{

        const dataArticle = btn.getAttribute('data-article');
        console.log(dataArticle);

        const cardShow = document.querySelector(`.card:nth-of-type(${dataArticle})`);

        removeActiveElements('card--active');
        
        // Add the card--active class to the selected card
        if (cardShow) {
            cardShow.classList.add('card--active');
        }

    });
});