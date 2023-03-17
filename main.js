// create/add/remove elements
const hr1 = document.createElement('hr');
document.body.appendChild(hr1)

const h2 = document.createElement('h2')
h2.textContent = 'Task'
document.body.appendChild(h2)
h2.style.color = 'red'

const p1 = document.createElement('p')
p1.innerHTML = 'In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:'
document.body.appendChild(p1)


const ul1 = document.createElement('ul');
document.body.appendChild(ul1)

const firstLis = ['find elements in the DOM (5 points);',
'create/add/remove elements (5 points);',
'change content of the elements (5 points);',
'change styles of the elements (5 points);',
'change attributes of the elements (5 points);',
'change classes of the elements (5 points).]',]
firstLis.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item
  ul1.appendChild(li);
})

const hr2 = document.createElement('hr');
document.body.appendChild(hr2)

// find elements in the DOM
const h1 = document.querySelector('h1');
const liElems = document.querySelectorAll('li');

// change content of the elements
h1.textContent = 'Lab7 Assignment';

// change styles of the elements
h1.style.color = 'blue';
liElems.forEach((li, index) => {
  li.style.color = index % 2 === 0 ? 'green' : 'purple';
});

// change attributes of the elements
h1.setAttribute('style', 'color: blue');
ul.setAttribute('style', 'list-style-type: none; padding: 0;');

// change classes of the elements
liElems.forEach((li, index) => {
  li.classList.add(index % 2 === 0 ? 'even' : 'odd');
});

// add elements for Submission section
const submissionUl = document.createElement('ul');
document.body.appendChild(submissionUl);

const submissionLis = [
'Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).',
'Clone this repository to your local machine and work inside it.',
'Create a new HTML file, called <b>index.html</b>, which has only one <h1> tag with "Hello, World!" message (<b>1 point</b>).',
'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).',
'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).',
'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).',
'After you finish your work, submit it to the Github (<b>2 points</b>).',
];

submissionLis.forEach((item, index) => {
const li = document.createElement('li');
li.innerHTML = item;
submissionUl.appendChild(li);
li.classList.add(index % 2 === 0 ? 'even' : 'odd');
li.style.color = index % 2 === 0 ? 'green' : 'purple';
});








