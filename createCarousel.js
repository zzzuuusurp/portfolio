import { projects, otherProjects } from "./caseStudyItems.js";

//DOMs
const projectList = document.getElementById('projectList');

function createCarouselCards() {
    projectList.innerHTML = '';
    for (const key in projects) {
        const project = projects[key];
        const card = document.createElement('div');
        card.classList.add('thingy');
        card.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.desc}</p>
            <p><em>${project.useDesc}</em></p>
            <a href=${project.href} target='_blank'>View Project</a>
            <a href="case_study.html" class="blueBtn">View Case Study</a>
            <div class="buttonList"></div>
        `;
        card.style.backgroundImage = `url(${project.img})`;
        const prevBtn = document.createElement('button');
        prevBtn.classList.add('prevBtn');
        prevBtn.textContent = 'Previous';
        card.querySelector('.buttonList').appendChild(prevBtn);
        if (project.title === 'EECU WiseUp Calculator') {
            prevBtn.disabled = true;
        }
        const nextBtn = document.createElement('button');
        nextBtn.classList.add('nextBtn');
        nextBtn.textContent = 'Next';
        card.querySelector('.buttonList').appendChild(nextBtn);
        projectList.appendChild(card);
    }
    for (const key in otherProjects) {
        const project = otherProjects[key];
        const card = document.createElement('div');
        card.classList.add('thingy');
        card.innerHTML = `
            <h2>${project.title}</h2>
            <p>${project.desc}</p>
            <a href="${project.href}" target="_blank" class="blueBtn">View</a>
            <div class="buttonList"></div>
        `;
        card.style.backgroundImage = `url(${project.img})`;
        const prevBtn = document.createElement('button');
        prevBtn.classList.add('prevBtn');
        prevBtn.textContent = 'Previous';
        card.querySelector('.buttonList').appendChild(prevBtn);
        const nextBtn = document.createElement('button');
        nextBtn.classList.add('nextBtn');
        nextBtn.textContent = 'Next';
        card.querySelector('.buttonList').appendChild(nextBtn);
        if (project.title === 'Track & Field / Cross Country') {
            nextBtn.disabled = true;
        }
        projectList.appendChild(card);
    }
    console.log('made project cards');
}

createCarouselCards(); //makes it

//creating next buttons and previous buttons
const nextButtons = document.querySelectorAll('.nextBtn');
const prevButtons = document.querySelectorAll('.prevBtn');

//values
let currentPah = projectList.firstElementChild; //starts on the first card

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentCard = currentPah;
        const nextCard = currentCard.nextElementSibling;
        if (nextCard) {
            currentCard.style.display = 'none';
            nextCard.style.display = 'block';
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
            prevCard.style.display = 'block';
            currentPah = prevCard;
        }
    });
});