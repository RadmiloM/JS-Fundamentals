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

