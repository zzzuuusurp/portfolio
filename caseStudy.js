import { projects } from "./caseStudyItems.js";

//DOMs
const chooseProject = document.getElementById('chooseProject');
const CStitle = document.getElementById('whoIsThis');
const techStack = document.getElementById('stack');
const stackList = document.getElementById('stackList');
const conceptsList = document.getElementById('conceptsList');
const challengesList = document.getElementById('challengesList');
const habitsList = document.getElementById('habitsList');

//Variable to display project
let project = projects.eecu;

//Event listener for dropdown
for (const key in projects) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = projects[key].title;
    chooseProject.appendChild(option);
}

chooseProject.addEventListener('change', (e) => {
    project = projects[e.target.value];
    updatePage();
})

//Function to update page
function updatePage() {
    //clears the page for the new project
    stackList.innerHTML = '';
    conceptsList.innerHTML = '';
    challengesList.innerHTML = '';
    habitsList.innerHTML = '';
    CStitle.innerHTML = project.title;

    for (let index = 0; index < project.techStack.length; index++) {
        const tech = project.techStack[index];
        
        const li = document.createElement('li');
        li.classList.add('techItem');
        li.innerHTML = tech;
        stackList.appendChild(li);
    } //fills in tech stack section, even though they're the excact same

    for (let index = 0; index < project.conceptsTitle.length; index++) {
        const concept = project.conceptsTitle[index];
        const conceptText = project.concepts[index];
        
        const li = document.createElement('li');
        li.classList.add('conceptItem');
        li.innerHTML = `<strong>${concept}:</strong> ${conceptText}`;
        conceptsList.appendChild(li);
    } //fills in concepts section

    for (let index = 0; index < project.problems.length; index++) {
        const problem = project.problems[index];
        const solution = project.solutions[index];
        
        const li = document.createElement('li');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.classList.add('problem');
        p2.classList.add('solution');
        p1.innerHTML = `<strong>Problem:</strong> ${problem}`;
        p2.innerHTML = `<strong>Solution:</strong> ${solution}`;
        li.appendChild(p1);
        li.appendChild(p2);
        challengesList.appendChild(li);
    } //fills in challenges section

    for (let index = 0; index < project.habits.length; index++) {
        const habit = project.habits[index];
        const habitText = project.habitsText[index];

        const li = document.createElement('li');
        li.classList.add(habit); //I'll make a different color for each habit
        li.classList.add('habitItem');
        li.innerHTML = `<strong>${habit}:</strong> \n${habitText}`;
        habitsList.appendChild(li);
    } //fills in habits section

}

//loads the page without the need of the event listener.
updatePage();

