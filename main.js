let numberOne = 1
let numberTwo = 2
let numberThree = 3
let numberFour = 4
let numberFive = 7

console.log(typeof(numberFive))

// Addition
console.log(numberOne + numberFour);

// subtraction
console.log(numberFive - numberThree);

// multiplication
console.log(numberFour * numberThree);

// division
console.log(numberFive / numberTwo);

// modulus
console.log(numberFive % numberThree);

// combined operations
console.log(numberFive + numberOne - numberThree / numberTwo * numberFour);

console.log(typeof(numberFive.toString()));

let strVariable = numberFive.toString()

console.log(typeof(strVariable));

let numVariable = parseInt(strVariable)

console.log(typeof(numVariable));

// strings

// number of characters
let firstString = 'Mikey was not late on saturday!!!'
console.log(typeof(firstString));

 let numberOfCharacters = firstString.length

 console.log(numberOfCharacters);


// writing a speech
let mikeSpeech = `Mike said, "Man united lost"`
console.log(mikeSpeech);

// string concutination
let sentence = "Manchester" + ' ' + 'is' + ' ' + 'the' + ' ' + 'best' + ' ' + 'club'
console.log(sentence);

let sentenceTwo = 'Ashivaka ' + 'is ' + 'always ' + 'sleeping '
console.log(sentenceTwo);

let firstPart = 'we are learning'

let lastPart = "Javascript"

let sentenceThree = firstPart + ' ' + lastPart + ' ' + "today"

console.log(sentenceThree);

// Arrays

let developers = [ 'Mike', 'Ashivaka', 'Rukia', 'Faith','Mwendwa','Brian']

console.log(developers);

let numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]
console.log(numbers);

console.log(numbers[4]);

console.log(developers[4]);

console.log(developers.length);

// adding elements on the end of an array
 developers.push('Gi')

 developers.push('Hassan')

 developers.push('Constance')

 developers.push('Rukia')
 
 developers.pop('Rukia')

 developers.pop('Constance')


console.log(developers);

developers.unshift('Rukia')

developers.unshift('Constance')

console.log(developers);

developers.shift('Rukia')

developers.shift('Constance')

console.log(developers);

developers.push('Constance')

developers.push('Rukia')

console.log(developers);

// combinig arrays

let combineArray = [developers + ' ' + numbers]
console.log(combineArray);

// spread operator
let cloneDevelopers = [...developers]

console.log(cloneDevelopers);

let cloneNumbers = [...numbers]

console.log(cloneNumbers);

let ages = [19,21,25,22,19,18]

let Gender = ['male','male', 'female', 'male', 'male' ]

let combinedAgesGender = [...ages,...Gender]

console.log(combinedAgesGender);

console.log(numbers);

numbers.reverse()

console.log(numbers);

numbers.sort()

console.log(numbers);

let presidents = ['Uhuru', 'Moi', 'Kibaki', 'Kenyatta', 'Ruto']

let opposition = ['Jaramogi', 'Matiba', 'Kibaki', 'Raila', 'Aukot']

let combinedResults = presidents.concat(opposition)

console.log(combinedResults);

// let newArray = numbers.map()

// function

// function Greetings(name) {
//     console.log(name + ' ' + 'hello world');
// }

// Greetings('Mike')
// Greetings('Grover')

function Addition(num3,num5,num1,num2,num4) {
    console.log(num3 + num5 +num1 +num4 - num2 );
}

Addition(1000,129,300,500,5000)

// map method on arrays
console.log(numbers);

let newArray = numbers.map((numbers) =>
{
    return numbers * 2
})

console.log(newArray);

let evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

let productByFour = evenNumbers.map((evenNumbers) =>   {

    return evenNumbers * 4
})

console.log(productByFour);

let animals = ['goat', 'cow', 'cat', 'dog']

let animalsByTwo = animals.map((animal) => {

    return animal + 's'
})

console.log(animalsByTwo);

let nums = [4, 9, 16, 25, 36, 49, 64]

let square = nums.map((num)  =>{

    return num ** 2
})

console.log(square);

console.log(nums);

let cube = nums.map((num) => {

    return num ** 3
})

console.log(cube);

console.log(nums);

 let squareRoot = nums.map ((num) => {

     return Math.sqrt(num)

 })

 console.log(squareRoot);

 let billionaires = ["Elon", "Jeff", "Bill", "Mike", "Ganira"]

 billionaires.splice(3, 2)

console.log(billionaires);

// changing array to String

let clothes = ["tuxedo", "cashmeer", "silk", "polyester"];

clothes.toString("")
console.log(clothes);


// emptying an array
let array = [3, 4, 5, 6]

array.length = 0

console.log(array);

// swapping an array

// destructuring an array

let goons = ["dj", "gj", "hj"]
let goon1= goons[0]
let goon2 = goons[1]
let goon3 = goons[2]

console.log(goon1, goon2, goon3);

//  console.log(navigator.appVersion);

//  console.log(window);

//  objects

let mwendwa = {
    hair: 'rastafarian',
    age: 20,
    height: 5,
    married: true,
    salary: null,
    networth: undefined,
    tribe: 'kamba',
    'life expectancy': 100,
     hobbies: ['painting', 'riding', 'ballerina', 'reading', ]
}

console.log(mwendwa);


// accessing properties
// we use . notation to access object properties
console.log(mwendwa.hair);

console.log(mwendwa['life expectancy']);

console.log(mwendwa.hobbies[3]);

// array of objects

let devClass = [
    {
        id: 01,
        name: 'Hassan Ondieki',
        age: 23,
        married: false,
        profession: 'Web developer',
        tribe: 'Luo',
        hobbies: ['video games', 'Football'],
        gender: 'male'
    },

    {
        id: 02,
        name: 'Ashivaka John',
        age: 22,
        married: false,
        profession: 'Frontend Web developer',
        tribe: 'Luhyia',
        hobbies: ['Reading novels', 'swimming', 'watching football and tutorials'],
        gender: 'male'
    },

    {
        id: 03,
        name: 'Philip Mwendwa',
        age: 19,
        married: false, 
        profession: 'Web developer',
        tribe: 'kamba',
        hobbies: ['Riding', 'painting',],
        gender: 'male'
    },

    {
        id: 04,
        name: 'Hillary Mukaka',
        age: 20,
        married: false,
        profession: 'Web developer',
        tribe: 'Luhyia',
        hobbies: ['Riding', 'swimming'],
        gender: undefined
    },

    {
        id: 05,
        name: 'Fauz Swalleh',
        age: 27,
        married: true,
        profession: 'Web developer',
        tribe: 'Nubian',
        hobbies: ['football', 'partying'],
        gender: null
    },

    {
        id: 06,
        name: 'Simon Ojuku',
        age: 18,
        married: false,
        profession: 'Undertaker',
        tribe: 'Kisii',
        hobbies: ['football', 'video games'],
        gender: 'female'
    },

    {
        id: 07,
        name: 'Abraham Mafwoli',
        age: 30,
        married: true,
        profession: 'Sniper',
        tribe: 'Pokot',
        hobbies: ['hustling', 'researcher'],
        gender: 'male'
    },

    {
        id: 08,
        name: 'Ann Ngugi',
        age: 20,
        married: false,
        profession: 'Actress',
        tribe: 'Kikuyu',
        hobbies: ['photography', 'volunteering'],
        gender: 'female'
    },

    {
        id: 09,
        name: 'Mike Peace Mutuku',
        age: 120,
        married: true,
        profession: 'Astronaut',
        tribe: 'alien',
        hobbies: ['video games', 'travelling'],
        gender: undefined
    },

    {
        id: 10,
        name: 'Wadenya Majoni',
        age: 100,
        married: true,
        profession: 'Advocate',
        tribe: 'Kikuyu',
        hobbies: ['coding', 'swimming'],
        gender: 'male'
    },

    {
        id: 11,
        name: 'Constance Khalumba Itolondo',
        age: 70,
        married: true,
        profession: 'Journalist',
        tribe: 'Iteso',
        hobbies: ['singing', 'drawing'],
        gender: 'female'
    },

    {
        id: 12,
        name: 'Dennis Gannira',
        age: 3,
        married: false,
        profession: 'kid',
        tribe: 'giriama',
        hobbies: ['watching', 'sleeping'],
        gender: 'male'
    },

    {
        id: 13,
        name: 'Faith Victoria Sikuku',
        age: 90,
        married: true,
        profession: 'chef',
        tribe: 'Masai',
        hobbies: ['eating', 'travelling'],
        gender: 'female'
    },

    {
        id: 14,
        name: 'Rukia Rashid Akinyi',
        age: 110,
        married: true,
        profession: 'Director',
        tribe: 'Digo',
        hobbies: ['photography', 'listening to music'],
        gender: 'female'
    },

    {
        id: 15,
        name: 'Brian Nyamwea Isicho',
        age: 50,
        married: true,
        profession: 'Farmer',
        tribe: 'Kisii',
        hobbies: ['running', 'flying'],
        gender: 'male'
    },
]

console.log(devClass);

// mapping over the array
// splits out things in an array
// let developersNames = 
// devClass.map((deve) => {

//     return deve.name
// })

// console.log(developersNames);

let developersAge = 
devClass.map((deve) => {

    return deve.age
})

console.log(devClass);

let numss = [4, 9 ,16, 25, 36, 49]

// reducing method

//reduces an array to one value.
let sumofNums = 
numss.reduce ((curr, acc, i ,arr) =>{

    return acc + curr
}, 0)

console.log(sumofNums);


let asign = [100, 1000, 2, 3, 10]

let sumofAsign =
asign.reduce ((curr, acc, i, arr) => {

    return acc + curr
}, 0)

console.log(sumofAsign);

let decimal = [10.33, 7.5, 8.19, 20.98, 30.99]

let sumofDecimal =
decimal.reduce ((curr, acc, i, arr) => {

    return acc + curr
}, 0)

console.log(Math.round(sumofDecimal));

let [a, b, c, d, e, f, g, h, i, j, k, l, m, n] = devClass

console.log(a);


// filter
// returns a new array based on the condition given


let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

let newNumber = oddNumbers.filter((oddNumber) => {

    return oddNumber > 3
})

console.log(newNumber);
// combination of the three topics

let aged = devClass.filter((aged) => {

    return aged.age > 20  
}).map((aged) => {

    return aged.age + 10

}).reduce((acc, curr) => {
    return acc + curr 

},0)

console.log(aged);

let Dodge = {
    color: 'gold',
    engine: 'V12',
    seats: '4',
    automatic: false,
    accelerate(){
        console.log('I am accelerating!!!')
}
}

console.log(Dodge);

console.log(Dodge.accelerate());

//destructuring in Es5

// let color = Dodge.color

// let engine = Dodge.engine

// let seats = Dodge.seats

// let automatic = Dodge.automatic

// destructuring in Es6

let {color:paint, engine, seats, automatic} = Dodge 

console.log(paint, engine, seats, automatic);

// Greetings

function Greetings(name) {
    console.log("hello" + ' ' + name);
}

Greetings('Gaia')
Greetings('Kratos')

// addition
 function Addition(five, six, seven,) {
    console.log(five +six + seven);
 }

 Addition(5, 6, 7)

 // multiplication
 function multiplication(five, six, seven,) {
    console.log(five * six * seven);
 }

 multiplication(5, 6, 7)

 //division
 function division(sixtyfour, four, two){
    console.log(sixtyfour/ four/ two);
 }

 division(64, 4, 2)

 // subtraction
 function subtraction(five, six, seven,){
    console.log(five - six - seven);
 }

 subtraction(5, 6, 7)

 // modulus
 function modulus(five, six, seven,){
    console.log(five % six % seven);
 }

 modulus(5, 6, 7)

 // adding function in an array
 // es 5
 let element = [2, 4, 5, 6, 7 ,20]

 function feedelement(){
  return element.push(25)
}

feedelement(25)
    console.log(element);

// es 6

const greetings = (friendsName) => {
    console.log(`Hello ${friendsName}, how are you today?`);
}

greetings('Mikey Irving')

const greetpeople = (friendsName) => console.log(`Hello ${friendsName}, how are you`);

greetpeople('developers') 

// LOOPS

// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');

 for(let i = 0; i < 5 ; i++) {
     console.log('hello world', i + 1);
 }


 let oddno = [1,3,5,7,9]
for(let i = 0; i < 10 ; i++) {
    console.log(oddno, i + 1);
}

// if statement

// let win = 0 
// if (win < 10) {
//     console.log(win);
// } else {
//     console.log('win is greater than 10');
// }

 for(i = 1; i < 10 ; i++) {
    if (i % 2 !== 0)
     console.log(i);
 }

//  for loop
 let numers = [2,3,4,5]
 for(let i = 2; i <= numers.length+ 1 ; i++) {
    console.log(i);
}

let sleepers = ['Ashivaka', 'Ganira', 'Ann', 'Peace', 'Majoni', 'Kimani']
for(let i = 0; i<= sleepers.length + 1; i++) {
    console.log(sleepers);
}

// while loop
let numerals = 0

while(numerals <= 20){
    console.log(numerals);

    numerals++
}

// do while loop

let gaia = 10
do{
    console.log(gaia)
    gaia++
}
while(gaia <= 10)

// for of loops
let teams = ['Manchester', 'Arsenal', 'Tottenham']

for(team of teams) {

    console.log(team);
}

// for in loops

for(teams in teams) {

    console.log(teams);
}

// class

class Car {
    constructor(model,color,millage){
        this.model = model
        this.color = color
        this.millage = millage 
    }
    // walk(){
    //     console.log('I am walking');
    // }

}

const Bmw = new Car('X6', 'gold', 10)
console.log(Bmw);


function showTime() {
let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let milliseconds = date.getMilliseconds()

let time = `${hours}: ${minutes} : ${seconds} : ${milliseconds}`

setTimeout(() => showTime(), 1000)

console.log(time);
 }

//  showTime()

// Document Object Model (DOM)

// using queryselector
let selector = document.querySelector('div')
console.log(selector);

// using queryselectorAll
let all = document.querySelectorAll('div')
console.log(all);

// using tagname
 let div = document.getElementsByTagName('div')
 console.log(div);

 // using classes
 let faith = document.querySelector('.faith')

let speech = 'I have a husband and a boyfriend!!!'

 faith.append(speech)

 faith.textContent = speech

let secondFaith = document.createElement('div')

console.log(secondFaith);

 faith.append(secondFaith)

  console.log(faith);

 //using id's
  let ganira = document.getElementById('ganira')
  console.log(ganira);

 console.log(devClass);

 // using textContent to display items on the web
 let developerName = 
 devClass.map((deve) => {

    return deve.name
})

ganira.textContent = developerName

let developerProfession = devClass.map((deve) => {

    return deve.profession
})

 faith.textContent =developerProfession

let carrierTwo = document.createElement('h1')

let profession = devClass.map((deve) => {
    return deve.profession
})

 carrierTwo.textContent = profession

 ganira.append(carrierTwo)



let mike = document.querySelector('.mike')

let carrierThree = document.createElement('p')

let developerAge = devClass.map((deve)  => {

    return deve.age
})

let developersProfile = 
devClass.map((deve) => {
    
    return deve.id
}) 

//  mike.textContent = developersProfile


// for(let i = 0; i < 15; i++) {
//     const img = document.createElement("img");
//     img.src = "/assets/bad boys.jpg";
//     document.body.appendChild(img);
//  }

//  for(let i = 0; i < 15; i++) {
//     const id = document.createElement("img");

//  }


//  var container = document.getElementById("container");
// for( let i = 1;i <=9; i++)
// {
// 	var el = document.createElement("div");
//   el.className ="card";
//   el.id = "card" + i;
//   el.innerHTML = "ok";
//   container.append(el);
// }

for( i=0; i <devClass.length; i++) {

    let body = document.querySelector('body')


    let container = document.createElement('div')

    let card = document.createElement('div')

    let name = document.createElement('h1')

    let age = document.createElement('h3')

    let image = document.createElement('image')

    let profession = document.createElement('h3')

    let gender = document.createElement('h3')

    let tribe = document.createElement('h3')

    let married = document.createElement('h3')

    let hobbies = document.createElement('h3')

    name.textContent =devClass[i].name
    profession.textContent =devClass[i].profession
    age.textContent = devClass[i].age
    gender.textContent = devClass [i].gender
    married.textContent = devClass [i].married
    tribe.textContent = devClass [i].tribe
    hobbies.textContent = devClass[i].hobbies

     image.src = "/assets/hotel transylvania.jpg"

    console.log([i]);

    console.log(body);

    body.append(container);

    container.append(card)

    card.append(name,profession,age,gender,married,tribe,hobbies)
  
}

//  function myFunction(x) {
//     if (x.matches) { 
//       document.body.style.backgroundColor = "yellow";
//     } else {
//       document.body.style.backgroundColor = "blue";
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 768px)", "(max-width: 1024px)")
//   myFunction(x)  
//   x.addListener(myFunction)
 

function greeting(name) {
    console.log(`Hello ${name}, how are you today`);
}
greeting('Mike')

function talking(person1, person2, person3){
    console.log(`Hello ${person1}, have you met ${person2} or ${person3}?`);
}
talking('Mike', 'Hassan', 'Ann')


const talkings = (person1, person2, person3 ) => 
    //block of code
    console.log(`Hello ${person1},have you met ${person2} or ${person3}`);

talkings('Faith', 'Mukaka', 'Constance')

//destructuring
// es 5
 let destructuring = ['Audi', 'Ford', 'Porsche', 'Koenisegg', 'Mclaren']
 let Audi = destructuring[0]
 let Ford = destructuring[1]
 let Porsche = destructuring[2]
 let Koenisegg = destructuring[3]
 let Mclaren = destructuring[4]

 console.log(Audi, Ford, Porsche, Koenisegg, Mclaren);

// es 6
[Audi, Ford, Porsche, Koenisegg, Mclaren] = destructuring
console.log(Audi, Ford, Porsche, Koenisegg, Mclaren);

// objects
let Abraham = {
    age:18,
    gender: 'Male',
    Married: false,
    Hobbies:['eating', 'dancing', 'singing']
}

//  let age = Abraham.age
//  let gender = Abraham.gender
//  let Married = Abraham.Married
//  let Hobbies = Abraham.Hobbies
//  console.log(age, gender, Married, Hobbies);

// let {age, gender,Married,Hobbies}= Abraham
// console.log(age, gender,Married,Hobbies); 

// Loops

// for loops
for(philip=0; philip<20; philip++){
    console.log(philip+1);
}

let Devs=['Hassan', 'Faith', 'Constance', 'Ojuku']
for(philip=0; philip<Devs.length; philip++){
    console.log(Devs[philip]);
}

let ceo = {
    color:'blue',
    model:'BMW',
    year:2023,
    engines:'5000cc'
}

// create a loop for the above object
 let project = Object.values(ceo)

for(i=0; i<project.length; i++) {
     console.log(project[i]);
 }

// a js code to print out numbers from 1 to 20
for(one=0; one<20; one++){
    console.log(one+1);
}

//  print out even numbers from 1 to 50
for(i = 0; i < 50 ; i++) {
    if (i % 2 !== 0)
     console.log(i +1);
 }

//  Doubling elements of an array
 for(p=0; p<10+1; p++) {
    if(p * 2 !==0)
    console.log(p);

    function multiplication(p) {
        console.log(p*2);
     }
    
     multiplication(p)
 }

//  printing out unique values from a given array[2,2,5,5,6,4,4]
  let twinDigits = [2,2,5,5,6,4,4]

  let twinDigit1= twinDigits[0]
  let twinDigit2= twinDigits[1]
  let twinDigit3= twinDigits[2]
  let twinDigit4 = twinDigits[3]
  let twinDigit5 = twinDigits[4]
  let twinDigit6 = twinDigits[5]
  let twinDigit7 = twinDigits[6]

  console.log(twinDigit5);
// let  newDigits= twinDigits.filter((twinDigits) => {

//     return twinDigits >= 6 
// })

// console.log(newDigits);


// let{2,2,5,5,6,4,4} = twinDigits
// console.log(6);

// Destructure the elements within the array of Abraham's object


console.log(Abraham.age);
console.log(Abraham.gender);
console.log(Abraham.Married);
console.log(Abraham.Hobbies);

// write js code that will print out this
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6 
// 1 2 3 4 5 6 7

// let count = 1;
// let x = "1";
// for (a = 0; a<=5; a +=1){
//     console.log(x.repeat(count));
//     count +=1;
// }

function generatePythagorusTheorem() {
    let q = 7;
    let output = '';
    for (let i = 1; i <= q; i++) {
        for (let q = 1; q <= i; q++) {
            output += q + '  ';
        }
        console.log(output);
        output = '';
    }
}

generatePythagorusTheorem();

let heading = document.querySelector('#heading')
heading.textContent = 'my name is BabaVoss'
// heading.style.color='green'
// heading.style.padding = (`50px`)
// heading.style.backgroundColor = 'Black'
// heading.style.borderRadius = (`30px`)
// console.log(heading);

 heading.style =  `width:80%;background-color: rgba(10,10,10,2.9);box-shadow:15px 15px 200px black;border-radius:30px; text-align:center`

heading.addEventListener("mouseenter", function() {
    heading.style.backgroundColor = 'yellow'
})

heading.addEventListener("mouseleave", function () {
    heading.style.backgroundColor = "black"
})

console.log(heading);

// come up with a chess board with elements inside it
// and also a star 

let o = 5;
let string = "";
// Upside pyramid
for (let i = 1; i <= o; i++) {
  // printing spaces
  for (let j = o; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\o";
}
// downside pyramid
for (let i = 1; i <= o - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (o - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\o";
}

console.log(string);
let btn = document.querySelector('.btn')
console.log(btn);
// Object.assign(btn.style,{
//     padding:'15px',
//     color: 'blue',
//     backgroundColor: 'red',
//     boxShadow: 'red'
// })

btn.style = `padding:20px; color:red; border-radius:35px; background-color: blue;`

const click= () =>{

}
btn.addEventListener('click', click())

console.log('I have been clicked');

let apiUrl= 'https://api.github.com/users'
 fetch(apiUrl)

// let data = fetch(apiUrl)
// console.log(data);

let users = fetch(apiUrl).then(response =>
    response.json())
    // console.log(response)
.then(data => 
    console.log(data)
)

 console.log(users);

 for (q=0; q<apiUrl.length; q++) {
     let body = document.querySelector('body')
     let container = document.createElement('div')
     let card = document.createElement('div')
     let login = document.createElement('h2')
     let id = document.createElement('h3')
     let node_id = document.createElement('h3')
     let avatar_url = document.createElement('h2')
     let gravatar_id = document.createElement('h3')



     login.textContent = apiUrl[q].login
     id.textContent = apiUrl[q].id
     node_id.textContent = apiUrl[q].apiUrl
     avatar_url.textContent =apiUrl[q].avatar_url
     gravatar_id.textContent =apiUrl[q].gravatar_id
     
     
     console.log([q]);
     console.log(body);
     body.append(container);
     container.append(card)
     card.append(login,id, node_id,avatar_url,gravatar_id)
    }