// add class dom-html to html element

const html = document.querySelector('html');
html.setAttribute('class','dom-html');

// on html element add head element with class dom-head and title element with class dom-title

const headElement = document.createElement('head');
html.appendChild(headElement);
headElement.setAttribute('class','dom-head');

const titleElement = document.createElement('title');
headElement.appendChild(titleElement);
titleElement.setAttribute('class','dom-title');

// on html element add body element with class dom-body

const bodyElement = document.createElement('body');
bodyElement.setAttribute('class','dom-body');
html.appendChild(bodyElement);

// on body element add order list inside div container with name dom-order-list and inside order list add list items with same class attribute and add text

const domOrderList = document.createElement('div');
html.appendChild(domOrderList);
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
thirdItem.innerText =  'Pineapple';

orderList.appendChild(thirdItem);

