// question 1
var illness = "corona";

//question 2
var person = {
    name: "Izzy",
    age: "2",
};

//question 3
var outOfStock = true;
if (outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

//question 4
var numbers = [7, 13, 15,59,73];
for(var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//question 5
for(var i = 15; i <= 25; i++) {
    console.log(i);
}

//question 6
for(var i = 15; i <= 25; i++) {
    if (i === 20){

        console.log(i);
    }
}

//question 7
var illnesses = [
    {
        mainSymptom: "shortness of breath",
        temperature: 39,
        hasCough: true
    },
    {
        mainSymptom: "stuffy nose",
        temperature: 37,
        hasCough: false
    }
];

for(var i = 0; i < illnesses.length; i++) {
    console.log(illnesses[i].temperature);
    console.log(illnesses[i].hasCough);
}

//question 8
function whatIDontLike(somethingYouDontLike) {
    console.log("I don't like " + somethingYouDontLike);
}

whatIDontLike("fish");

//question 9
function subtractTwoArguments(number1, number2) {
    var difference = number1 - number2;
    console.log(difference);
}

subtractTwoArguments(5895, 263);

//question 10
var alphabet = [];

function addToAlphabet(letter){
alphabet.push(letter);
}

addToAlphabet("B");