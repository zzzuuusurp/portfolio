import { years } from "./5yeardata.js";

const carousel = document.getElementById('yearPlans')
let count = 1;


function createCarousel() {
    count = 1;
    for (let index = 1; index < 6; index++) {
        const string = 'year' + `${index}`
        console.log(string);
        const year = document.createElement('section');
        year.classList.add('year');
        const h2 = document.createElement('h2');
        h2.innerHTML = `Year ${index}`;
        const p = document.createElement('p');
        p.innerHTML = years[string]
        year.appendChild(h2);
        year.appendChild(p);
        carousel.appendChild(year);
        console.log(year)

        //buttons
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonList');
        year.appendChild(buttonDiv)
        const prevBtn = document.createElement('button');
        prevBtn.classList.add('prevBtn');
        prevBtn.textContent = 'Previous';
        year.querySelector('.buttonList').appendChild(prevBtn);
        const nextBtn = document.createElement('button');
        nextBtn.classList.add('nextBtn');
        nextBtn.textContent = 'Next';
        year.querySelector('.buttonList').appendChild(nextBtn);
        if (years.year1 === years[string]) {
            prevBtn.disabled = true;
        }
        if (years.year5 === years[string]) {
            nextBtn.disabled = true;
        }
    }
}

createCarousel();

//Carousel stuff (copeid and pasted from the other carousel code)
const nextButtons = document.querySelectorAll('.nextBtn');
const prevButtons = document.querySelectorAll('.prevBtn');
let currentPah = carousel.firstElementChild; //starts on the first card

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentCard = currentPah;
        const nextCard = currentCard.nextElementSibling;
        if (nextCard) {
            currentCard.style.display = 'none';
            nextCard.style.display = 'flex';
            currentPah = nextCard;
        }
    });
});

prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentCard = currentPah;
        const prevCard = currentCard.previousElementSibling;
        if (prevCard) {
            currentCard.style.display = 'none';
            prevCard.style.display = 'flex';
            currentPah = prevCard;
        }
    });
});