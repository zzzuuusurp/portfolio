//moving stuff from casestudy html to an object for the sake of javascript

export const projects = {
    eecu: {
        title: 'EECU WiseUp Calculator',
        href: 'https://budget-calcalalatora.netlify.app/',
        img: 'stuff/eecuSS.png',
        techStack: ['HTML5, CSS3, and Vanilla JavaScript.', 'Visual Studio Code for development and Git/GitHub for version control.', 'Hosted via Netlify to ensure global accessibility and performance.'],
        conceptsTitle: ['DOM Management', 'Chart Management', 'Responsive Design', 'Fetch()'],
        concepts: ["I rooted my understanding of DOMs in order to create new expenses and root them into the calculations.", "I learned Chart.js in order to showcase a chart of how much of the budget an expense takes up.", "I effectively utilized media queries to create responsive designs for mobile devices, like phones and tablets", "I discovered the effectiveness of Fetch to grab a database from another source and use it in my career list."],
        problems: ["The chart refused to update after creating or updating a new expense.", "Searching for a career only showed the career if the term was exact", "The “balance remaining” was always red, even when the amount was in the positives", "Adding a random color for a new expense instead randomized a color for every expense, making it so that the chart dramatically changed color every time something was updated."],
        solutions: ["After being reviewed by my peers and Fast, I found out that I forgot to add event listeners for my chart, which led to ineffectiveness. After adding the event listener, it resulted in a functional product.", "After searching for the specifics of filter() and finding other examples of a search bar online, I discovered that I was meant to use contains() instead. After fixing that, the bar worked as expected.", "rather than being a JavaScript issue like I thought, i found out through console.logs and manual review that the issue was that the classes I was assigning had the same red color instead of red and green. Once that was fixed, my balance accurately showed if you had money remaining at a glance.", "I pinpointed that the issue was how I used the random color function instead of a list of colors. Once I made the random color push into a list every time a new expense was added, the colors remained the same as expected."],
        habits: ['Investigate', 'Communication', 'Persist'],
        habitsText: ["I spent the first week of the project investigating what other budget calculator websites did. I found some similarities, good features, and flaws, which allowed me to design something that I felt met the client's needs.", "The first two weeks consisted of me telling a developer on what to do rather than coding by myself. I effectively communicated well enough for my project to meet most of the criteria, which allowed me to make personal adjustments by the time I was able to code myself.", "Chart.js was a pain to effectively integrate into my product. It was the thing that I had to spend the most time debugging and testing out of the entire project in order for it to work as well as it does."],
        desc: "A learning tool that lets you calculate the monthly budget of a list of careers.",
        useDesc: "Utilizes JavaScript and Chart.js in order to let you select items in a list, create a pie chart, and add expenses in a list"
    },
    bioshield: {
        title: 'BioShield Website',
        href: 'https://bioshield-jacobsmart.netlify.app/',
        img: 'stuff/bioshield.png',
        techStack: ['HTML5, CSS3, and Vanilla JavaScript.', 'Visual Studio Code for development and Git/GitHub for version control.', 'Hosted via Netlify to ensure global accessibility and performance.'],
        conceptsTitle: ['DOM Manageement', 'CSS Design', 'Responsive Design', 'AI as a tool'],
        concepts: ["I learned how to use Javascript to read what kind of item the user was buying, put it in the list, and add a total.", "I learned how to effectively use classes and IDs to style the layout and colors to fit the theme I was going for.", "I mastered responsive design in order to create an effective design for both tablet and mobile screens.", "I utilized AI tools in order to check for debugging errors and check for grammatical errors in my product descriptions."],
        problems: ["The product, when trying to line them up, sucked at being lined up", "I had no prior knowledge of Javascript before adding the cart feature, which led to the system I used being very incompatible with my page.", "I was not proud of my color pallette that I used on my website."],
        solutions: ["I switched from using table to CSS grid, as it allowed for better flexibility when making small adjustments.", "I consulted things that did know JavaScript, such as Mr. Fast and Gemini, when something with javascript went wrong. This allowed me to understand more about what went wrong with my features and how to fix them.", "I looked online for ways I can arrange the colors that pair well with stores. This led to a more visually appealing website in terms of colors."],
        habits: ['Investigate', 'Persist', 'Persist'],
        habitsText: ['I looked online at how other “competitors” to our repellant company had their websites, and I mirrored the parts I thought were good and changed the parts I thought wouldn\'t work as well.', 'I spent around a week fine-tuning the CSS layouts and colors, alongside another week getting the Javascript to work with my cart and products.', "I came back to my project a couple of months later and improved it by fixing layout issues and adding the cart feature, which was not originally there."],
        desc: "Website for a mock company that allows the user to put items in a cart and check their items out",
        useDesc: "Uses JavaScript to store the items, list the total cost, and “check out” by emptying your cart."
    },
    toDo: {
        title: 'To-Do List',
        href: 'https://todoappwoohoo.netlify.app/',
        img: 'stuff/toDoScreenshot.png',
        techStack: ['HTML5, CSS3, and Vanilla JavaScript.', 'Visual Studio Code for development and Git/GitHub for version control.', 'Hosted via Netlify to ensure global accessibility and performance.'],
        conceptsTitle: ['DOM Creation', 'Object Storage', 'Drag and Drop', 'Local Storage'],
        concepts: ["I fully mastered the creation of DOMs in order to make the list of tasks appear.", "I skillfully utilized arrays and objects in order to store an ID, name, and status for every task.", "I learned how to use the draggable element in HTML in order to use JavaScript to reorder and remove items in the list", "I used local storage to save the items you complete, which allows the user to use the website as an actual list they can come back to."],
        problems: ["Drag and drop didn't seem to fix prioritizing.", "I didn't fully understand how to filter and create DOMs","There was a lot of whitespace when there were no items."],
        solutions: ["I rewrote my list code from scratch, separating prioritized and non-prioritized items into two arrays and then combining them into one big one. This ended up fixing the problem, and let the prioritized items stay up top.", "I had to look up on resources like W3Schools how DOMs worked, and I ended up getting better with practice, which led me to the end result of a functional list that updates properly.", "I thought about ways that would fit the theme, and ended up adding a delete feature, where you delete items by dropping them in the garbage truck. This helped give the list some personality and also make the list more intuitive.", "I thought about ways that would fit the theme, and ended up adding a delete feature, where you delete items by dropping them in the garbage truck. This helped give the list some personality and also make the list more intuitive."],
        habits: ['Reflect', 'Persist'],
        habitsText: ["This list had me think a lot about how I wanted to present the list itself to others. The end result was a construction theme, with a garbage dump being the key to deletion.", "Getting the drag and drop to work was a massive pain that took the majority of my time to get working. It took around 4 days for everything to work the way I wanted it to."],
        desc: "A to-do list that allows users to add, prioritize, complete, and delete items in a list.",
        useDesc: "Utilizes JavaScript to create a list of items that can be prioritized and completed, alongside a drag and drop deletion system."
    }
}


export const otherProjects = {
    paper: {
        title: 'Research Paper',
        img: 'stuff/enrichment.jpg',
        desc: 'A short 4-page paper that highlights the benefits and downsides on how animal enrichment in zoos affect the animals themselves and the environment.',
        href: 'stuff/paper.pdf'
    },
    track: {
        title: 'Track & Field / Cross Country',
        img: 'stuff/DSC_1484.jpg',
        desc: 'My 4-year career in Track and Cross Country, which has led me to run a 18:32 5k meter time in Cross Country and a 4:59 mile time in Track & Field',
        href: 'https://www.athletic.net/profile/JacobRodriguezRunner/feed'
    }
}
//GIVE THE CATALOGUE HAVE THE CLASS THINGY