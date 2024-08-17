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

// create table with header columns and display data from the json file
const table = document.createElement('table');
document.documentElement.appendChild(table);

const headerRow = document.createElement('tr');
table.appendChild(headerRow);

const idHeader = document.createElement('th');
headerRow.append(idHeader);
idHeader.innerText = 'ID';

const firstNameHeader = document.createElement('th');
firstNameHeader.innerText = 'FIRST_NAME';
headerRow.appendChild(firstNameHeader);

const lastNameHeader = document.createElement('th');
lastNameHeader.innerText = "LAST_NAME";
headerRow.appendChild(lastNameHeader);

const age = document.createElement('th');
age.innerText = "AGE";
headerRow.appendChild(age);

const personData = [];
fetch("/people.json")
.then((data)=> data.json())
.then((data)=>  {
    this.personData = data;
    this.personData.forEach((person) => {
        const row = document.createElement('tr');
        const currentID = document.createElement('td');
        const currentFirstName = document.createElement('td');
        const currentLastName = document.createElement('td');
        const currentAge = document.createElement('td');
        currentID.innerText = person.ID;
        currentFirstName.innerText = person.FIRST_NAME;
        currentLastName.innerText = person.LAST_NAME;
        currentAge.innerText = person.AGE;
        row.appendChild(currentID);
        row.appendChild(currentFirstName);
        row.appendChild(currentLastName);
        row.appendChild(currentAge);
        row.style.border = '1px solid black';
        table.appendChild(row);
    })
})

table.style.border = '1px solid black'
table.style.borderCollapse = 'collapse';


// create h2 element and add tag on that element, also append element to document

const h2Element = document.createElement('h2');
h2Element.innerText = 'This is the new text';
document.documentElement.appendChild(h2Element);
const h2 = document.getElementsByTagName('h2');

// create new json file with animals data and retrieve data from new file

const animalsData = [];
fetch("/animals.json")
.then((data) => data.json())
.then((data)=>  {
    this.animalsData = data;
    const newOrderList = document.createElement('ol');
    document.documentElement.appendChild(newOrderList);
    newOrderList.setAttribute('class', 'animal-list');
    this.animalsData.forEach((animal,index) => {
        const animalRace = document.createElement('li');
        animalRace.innerText = animal.race;
        if(index % 2 === 0){
            newOrderList.appendChild(animalRace);
        }
        document.documentElement.appendChild(newOrderList)

    })
});

// create object and append it to the dom

const person = {
    name : "Rajko",
    age : 44,
    city: "Belgrade"
}


const objectElement = document.createElement('h1');
document.documentElement.appendChild(objectElement);
objectElement.innerHTML = `person: ${person.name} has age: ${person.age} and lives ${person.city}`;

// create new button and attach setInterval to that button which will change color to red

const redButton = document.createElement('button');
redButton.innerText = 'Red color'
document.documentElement.appendChild(redButton);


const changeButton  = function() {
    redButton.style.backgroundColor ='red';

}

document.addEventListener('click',changeButton,2000);

// create new button and attach event every 5 seconds should change background color to blue

const blueButton = document.createElement('button');
blueButton.innerHTML = 'Change color'
document.documentElement.appendChild(blueButton);


const changeToBlue = function(){
setTimeout(() => {
    blueButton.style.backgroundColor = 'blue';
},'4000')
}
blueButton.addEventListener('click', changeToBlue);



// create array which will return element at index specified

const specified = function(array,index) {
    for(let i =0; i < array.length;i++){
        if(i === index){
            return array[i];
        }
    }
    return -1;
}

console.log(specified([1,2,3,4],3));

const elementOnIndex = document.createElement('h1');
document.documentElement.appendChild(elementOnIndex);
elementOnIndex.innerText = `Index specified is: ${specified([1,2,3,4,5],3)}`;


// create for each function which will print all elements in the array
// update function for each element if it is odd append to the dom
const printElements = function(array){
    for(let i =0; i < array.length;i++){
        if(i % 2 === 1){
            const element = document.createElement('p');
            element.innerText = array[i];
            document.documentElement.appendChild(element);
        }
    }
}

printElements([1,2,3,4,5]);

// remove element from dom using remove child

const removeElement = document.createElement('p');
document.documentElement.appendChild(removeElement);
removeElement.innerText = 'Hello world';
document.documentElement.removeChild(removeElement);


// create object laptop and extract properties from the same object

const laptop = {
    brand: "Mac",
    model: "Air",
    year: 2024,
    screenSize: 15,
    weight: 44
}

const {brand, model} = laptop;


// create object which represents books, the object should have properties like title,author,yearPublished and genre,
// next add a method to the object called getSummary that returns a string summarizing the book details
// access properties both using doth notation and bracket notation
// display properties of object on the dom 

const book = {
    title: "Lord of the Rings",
    author: "John Ronald Reuel Tolkien",
    yearPublished: 1954,
    genre: "Fantasy",
    getSummary: function() {
        return `Title: ${this.title}, Author: ${this.author}, year published: ${this.yearPublished}, genre: ${this.genre}`
    }
}

const bookSummary = document.createElement('p');
document.documentElement.appendChild(bookSummary);
bookSummary.innerText = book.getSummary();

// create a nested object which represents school
// the object should have properties like name,location,departments
// departments property is object which includes properties for different departments like science,arts and sports each
// containing array of subjects
const school = {
    name: "Belgrade High School",
    location : "Belgrade",
    departments: {
        science: ['Computer Science',"Math Science","Chemistry Science"],
        arts: ['Visual Arts','Artistry','Painting art'],
        sports: ['Football','Basketball','Tennis']
    },
    printDepartments: function() {
        school['departments'].science.forEach((scienceDepartment) => {
            console.log(scienceDepartment);
        })
        school['departments'].arts.forEach((artsDepartment) => {
            console.log(artsDepartment);
        })
        school['departments'].sports.forEach((sportsDepartment) => {
            console.log(sportsDepartment);
        })
    }
}

school.printDepartments();

// modify and delete propertis in an object
// create object car with properties like make,model,year,color

car = {
    make: "Toyota",
    model: "Camry",
    year: 2007,
    color: 'Black'
}