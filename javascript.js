//var age=prompt('What is your age:');
//document.getElementById('sometext').innerHTML = age;

//var num1=5.7;
console.log(5*10);

//var name=prompt('what is your name');

function greeting(your_name) {

    var result = "Hello " + your_name;
    alert(result);

}
//greeting(name)


// How do Arguments work in functions:

/*function sumnum(num1, num2) {
    var result= num1+num2;
    alert(result);
}

sumnum(1,1)*/

// While Loops

/*var num =0;


while (num <100) {
    num+= 1;
    console.log(num);
}*/

// For Loop
for (let num=0; num<=100; num++) {
    console.log(num);
}


// Data Types 
let yourAge=13;                                 // Number
let yourName = 'Rishith';                       // String
let names = {first: 'Rishith', last: 'Mathur'}; // object
let truth = true;                               // Boolean
let shopping = ['apple', 'banana', 'orange'];   // Array
let random;                                     // Undefined
let nothing = null;                             // Value null

// String in JAvascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple';

console.log(fruit.length);
console.log(fruit.indexOf('a'));
console.log(fruit.slice(0, 5));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit.split(','));  // split by a comma
console.log(fruit.split(''));   // split by a character


// Array 
let fruits = ['banana', 'apple', 'orange', 'pineapple'];
fruits = new Array('banana', 'apple', 'orange', 'pineapple');

console.log(fruits[2-1])  // access value at index 2nd

for (let i =0; i < fruits.length; i++)
console.log(fruits[i]);


// array common methods

console.log('to string ', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(), fruits); // removes last item of array or list
console.log(fruits.push('blackberries'), fruits);  // appends(adds to the list)
console.log(fruits[4]); 
fruits[4] = 'new fruit';
console.log(fruits);
console.log(fruits.shift(), fruits); // removes first item of array or list
fruits.unshift('pear');  // add's first item to the array or list
console.log(fruits);

let vegetable = ['brocoli', 'tomato', 'asparagus'];
let allGroceries = fruits.concat(vegetable);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());  // reverses the array
console.log(allGroceries.sort());  // Sorted a stringed array alphabetically
let alphabet = ['q', 'r', 't', 'f', 'h', 'b', 'n', 'c',];
console.log(alphabet.sort());


let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort())  /* sorted the number array to the smallest
number to the largest number but the number which the computer saw was the
 first number of the numbers in the array */
console.log(someNumbers.sort(function(a, b) {return a-b})); /*sorted the 
number array to accending order*/

console.log(someNumbers.sort(function(a, b) {return b-a})); /*sorted the 
number array to decending order*/

let emptyArray = [];
for (let num = 0; num <=10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);


// Objects in JavaScript
// Dictionaries in Python

let student = {
    first: 'Rishth', 
    last: 'Mathur', 
    age: 13, 
    height: 170,
    studentInfo: function () {
        return this.first + '\n' + this.last + "\n" + this.age;
    }
};
console.log('My Name is:', student.first);
console.log('My last name is:', student.last);
/* student.first = 'notRishith';    /* changing the 
'first''s value*/
console.log(student.studentInfo());


// Conditionals, Control Flows (if else)
// 18-35 is my target demographic
// this is 'and' = '&&'
// this is 'or' = '||'

let age = 45;

if ((age >=18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

//  Switch statements

/* if every day was a weekday 
How would we differentiate between weekday and weekend
*/

/* 
day 0 is Sunday --> Weekend
day 6 --> Saturday --> Weekend
day 4 --> Thursday --> Weekday

*/

switch(2) {
    case 0:
        text = 'Weekend';
        break;
    case 6:
        text = 'Weekend';
        break;
    default:
        text = 'Weekday';
}

console.log(text);




// --------------------------------------------------------------------------------------------------------------------------------------------------
//                                                       Challenges:
// --------------------------------------------------------------------------------------------------------------------------------------------------

// 1:
function ageInDays() {
    let birthYear = prompt('What year were you born in: ');
    let ageDays = (2021 -birthYear) * 365;
    let textAnswer = document.createTextNode('You are '+ ageDays+' days old');
    let h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result-2').append(h1)
}


function reset() {
    document.getElementById('ageInDays').remove();
}


// 2:

function galaxy() {
    let img = document.createElement('img');

    let div = document.getElementById('flex-gen');
    img.src = "https://im3.ezgif.com/tmp/ezgif-3-0609cdc8054b.jpg";
    div.appendChild(img);
}

function galaxy_del() {
    document.getElementById('flex-gen').innerHTML='';
}

// 3:

function rpsGame(yourChoice) {
    console.log(yourChoice.id);
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice '+botChoice);
    let results = decideWinner(humanChoice, botChoice);
    console.log(results);
    let message = finalMessage(results); // 'you won
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDataBase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1,'paper': 0.5, "scissors": 0},
        'scissors': {'rock': 0, 'paper': 1, 'scissors': 0.5}
    };

    let youScore = rpsDataBase[yourChoice][computerChoice];
    let computerScore = rpsDataBase[computerChoice][yourChoice];

    return [youScore, computerScore];
}


function finalMessage([youScore, computerScore]) {
    if (youScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if (youScore===0.5) {
       return {'message': 'You tied!', 'color': 'yellow'};
    } else  {
        return {'message': 'You won!', 'color': 'green'};
    } 
    
}

function rpsFrontEnd(humanImg, botImg, finalMessage) {
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src

    }


    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();


    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    console.log(imagesDatabase[humanImg]);
    
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImg] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv. innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImg] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-rps-div').appendChild(humanDiv);
    document.getElementById('flex-rps-div').appendChild(messageDiv);
    document.getElementById('flex-rps-div').appendChild(botDiv);


}




// 4:



