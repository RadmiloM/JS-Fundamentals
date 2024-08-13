// add class dom-html to html element

const htmlElement = document.createElement('html');

// on html element add head element with class dom-head and title element with class dom-title
document.documentElement.classList.add('dom-html');
document.head.classList.add('dom-head');

const titleElement = document.createElement('title');
document.head.appendChild(titleElement);
titleElement.setAttribute('class','dom-title');

// on body element add order list inside div container with name dom-order-list and inside order list add list items with same class attribute and add text

const domOrderList = document.createElement('div');
document.documentElement.appendChild(domOrderList);
domOrderList.setAttribute('class','dom-order-list');

const orderList = document.createElement('ol');
domOrderList.appendChild(orderList);

const firstItem = document.createElement('li');
firstItem.setAttribute('class', 'list-item');
orderList.appendChild(firstItem);
firstItem.innerText = 'Apple';

const secondItem = document.createElement('li');
secondItem.setAttribute('class','list-item');
secondItem.innerText = 'Orange';

orderList.appendChild(secondItem);

const thirdItem = document.createElement('li');
thirdItem.setAttribute('class','list-item');
thirdItem.innerHTML =  'Pineapple';

orderList.appendChild(thirdItem);

// iterate over each list item and display results in the console

Array.from(orderList.childNodes).forEach(
    (item) => {
        console.log( item.textContent )
    }
)

// Add event button and when user clicks on it should change color of background to red and text to blue
const eventButton = document.createElement('button');
eventButton.setAttribute('class', 'event-button');
eventButton.innerHTML = 'Event';
document.documentElement.appendChild(eventButton);
eventButton.addEventListener('click', (event)=> {
    eventButton.style.backgroundColor = 'red';
    eventButton.style.color = 'blue';
})

// fetch one public api using fetch api and log the results in the console
// display data from cat facts text on template
// for each even index add border red and for each odd add border blue
// add space between margins

let catFacts = [];

fetch("https://cat-fact.herokuapp.com/facts")
.then((data) => data.json())
.then((data)=> {
    this.catFacts = data;
    this.catFacts.forEach((fact,i) => {
        const item = document.createElement('li');
        orderList.appendChild(item);
        if(i % 2 === 0){
            item.innerText = fact.text;
            item.style.border = ' thick solid red';
            item.style.margin = '10px'
        } else {
            item.innerText = fact.text;
            item.style.border=  'thick solid blue';
        }
    })
});


// fetch other public api and send headers in request
fetch("https://www.dnd5eapi.co/api/ability-scores/cha", {
    method: "GET",
    headers: {
        'Content-Type': 'application/json'
    }
}).then((data) => data.json())
.then((data) => console.log(data));


// append form element on the dom, add label and input element on the form element with type text and submit button

const formElement = document.createElement('form');
document.documentElement.appendChild(formElement);
formElement.setAttribute('type','text');

const labelElement = document.createElement('label');
formElement.appendChild(labelElement);
labelElement.innerText = 'Enter your name: ';
labelElement.setAttribute('for','yourName');
labelElement.style.display = 'flex';
labelElement.style.margin = '5px';


const inputElement = document.createElement('input');
formElement.append(inputElement);
inputElement.setAttribute('name','yourName')
inputElement.style.margin = '5px';
inputElement.classList.add('input-name')

const submitName = document.createElement('button');
formElement.appendChild(submitName);
submitName.innerText = 'Submit';
submitName.style.display = 'flex';
submitName.style.margin = '5px';

// log input data from the form element and change color of the button
submitName.addEventListener('click',(event)=> {
    event.preventDefault();
    const inputValue = document.querySelector('.input-name').value;
    console.log(inputValue);
    submitName.style.backgroundColor = 'red';
});
