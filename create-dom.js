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

const car = {
    make: "Toyota",
    model: "Camry",
    year: 2007,
    color: 'Black'
}
// change car color
car.color = 'Red';
console.log(car['color'])

//add new car property owner
car.owner = 'Radmilo';
console.log(car);

// delete year property from the object

delete car.year;
console.log(car);

// create new property using bracket notation
car['wheels'] = 4;
car.wheels = 8;

/*
Objective: Practice using methods in objects and understand the this keyword.
Details:
Create an object representing a man with properties like firstName, lastName, age, and occupation.
Add a method introduce that returns a string introducing the person, using the this keyword to access properties.
Add another method celebrateBirthday that increments the age property by 1 and returns a message celebrating the birthday.
*/


const man = {
    firstName: "Dejan",
    lastName: "Danic",
    age: 44,
    occupation: "Engineer",
    introduce() {
        return `Hello this is ${this['firstName']} and his last name is ${this['lastName']} he is ${this.age} years old and his occupation is ${this.occupation}`
    },
    celebrateBirthday(){
        this.age++;
        return `Happy new birthday you are now ${this['age']} years old`
    }
}

console.log(man.introduce());
console.log(man.celebrateBirthday());

/*
Objective: Iterate over an object's properties.
Details:
Create an object representing a smartphone with properties like brand, model, releaseYear, features, where features is an array.
Write a function that iterates over the object's properties and prints both the keys and their values.
If a property value is an array (like features), iterate over the array and print each item.
*/

const smartPhone = {
    brand: "Apple",
    model: "IPhone Max 12",
    releaseYear: [2021,2022,2023],
    features: ['Camera','Play store','Video'],
    printProperties() {
        for(const [key,value] of Object.entries(smartPhone)){
            if(typeof value === 'object'){
                value.forEach((property) => {
                    console.log(property)
                })
            }
        }
    }
}

smartPhone.printProperties();

/*
Create an input field and a button. When the user types something into the input and clicks the button, 
the text should be added as a new item in an unordered list below the input. 
Each list item should have a delete button that removes the item when clicked.
*/

const userInputField = document.createElement('input');
const userButtonField = document.createElement('button');
const unorderedUserList = document.createElement('ul');
document.documentElement.append(userInputField);
document.documentElement.append(userButtonField);
userButtonField.innerText = 'Enter user input';
userButtonField.style.display= 'flex';
userInputField.appendChild(unorderedUserList);
document.documentElement.appendChild(unorderedUserList);
const listItem = document.createElement('li');
listItem.innerText = 'starter';
unorderedUserList.appendChild(listItem);
userInputField.classList.add('user-input');
userButtonField.addEventListener('click', () => {
listItem.innerText = document.querySelector('.user-input').value;
})

const deleteButton = document.createElement('button');
document.documentElement.appendChild(deleteButton);
deleteButton.innerText = 'Delete item';
deleteButton.addEventListener('click', () => {
    listItem.innerText = '';
})


/*
Build a to-do list application. 
Each task added should have a checkbox next to it. 
When the checkbox is clicked, 
the task should be crossed out. 
Include a button that clears all completed tasks.
*/

const inputTaskLabel = document.createElement('label');
const createInputTask = document.createElement('input');
document.documentElement.appendChild(inputTaskLabel);
inputTaskLabel.innerText = 'Enter the task: ';
inputTaskLabel.style.display = 'flex';
inputTaskLabel.style.margin = '10px 0px 0px 10px'
document.documentElement.appendChild(createInputTask);
createInputTask.style.display = 'flex';
createInputTask.style.margin = '10px';
const createTask = document.createElement('button');
createTask.innerText = 'Add task';
document.documentElement.appendChild(createTask);
createTask.style.marginLeft = '10px';
createInputTask.setAttribute('class','create-task');
const listOfTasks=  document.createElement('ol');
document.documentElement.appendChild(listOfTasks);

createTask.addEventListener('click', function() {
    const taskContainer = document.createElement('div');
    const task = document.createElement('input');
    task.setAttribute('type','checkbox');
    task.classList.add('class','isChecked')
    const taskValue = document.createElement('label');
    taskValue.innerText = document.querySelector('.create-task').value;
    taskContainer.appendChild(task);
    taskContainer.appendChild(taskValue);
    listOfTasks.appendChild(taskContainer);
    const isSelected = document.querySelector('.isChecked');
    isSelected.addEventListener('click', () => {
        if(task.checked){
            taskValue.style.textDecoration = 'line-through';
        }else{
            taskValue.style.textDecoration = 'none';
        }
    })
})

const deleteTasks = document.createElement('button');
document.documentElement.append(deleteTasks);
deleteTasks.innerText = 'delete task'
deleteTasks.style.margin = '10px';
deleteTasks.style.display = 'flex';
