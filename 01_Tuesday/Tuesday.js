// Assignment 1
// a)
console.log("--- Assignment 1:  a) ---");

let arr = ["Alexander", "Jean-Poul", "Per", "Mick", "Morten"];

console.log(arr);

arr = arr.filter(e => e.startsWith("A"));

console.log(arr);

// b)
console.log("--- Assignment 1:  b) ---");

const arrTwo = ["Alexander", "Jean-Poul", "Per", "Mick", "Morten"];

console.log(arrTwo);

let newArr = arrTwo.map(function () {

    let str = arrTwo.join(' ');
    // console.log(str);

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    let tester = newString.split(' ').reverse();

    return tester;
}
)

console.log(newArr);

function myFunctionB2(array) {
    return array.split("").reverse().join("");
}
let namesReversed = arrTwo.map(myFunctionB2);
console.log(namesReversed);

// Extra assignment from school
console.log("--- Extra assignment ---");

const myList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function myCallBack(param) {
    let x = param * 10;
    if (x < 1000) {
        return true;
    } else {
        return false;
    }
}


function myFilter(myList, callback) {
    const list = [];
    for (idx in myList) {
        if (callback(myList[idx])) {
            list.push(myList[idx]);
        }
    }
    return list;
}

console.log(myFilter(myList, myCallBack));

// Assignment 2
// a)
console.log("--- Assignment 2:  a) ---");

const array = ["Alexander", "Jean-Poul", "Per", "Mick", "Morten"];

console.log(array);

function theCallback(param) {
    if (param.length != null) {
        return true;
    } else {
        return false;
    }
}

function myFilters(array, callback) {
    array = array.filter(e => e.startsWith("J"));
    return array;
}

console.log(myFilters(array, theCallback));

// b)
console.log("--- Assignment 2:  b) ---");

const arry = ["Alexander", "Jean-Poul", "Per", "Mick", "Morten"];

function aCallback(param) {
    if (param.length != null) {
        return true;
    } else {
        return false;
    }
}

function myMap(array, callback) {
    let str = arrTwo.join(' ');
    // console.log(str);

    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    let tester = newString.split(' ').reverse();

    return tester;
}

console.log(myMap(arry, aCallback));

// Assignment 3
// a)
console.log("--- Assignment 3:  a) ---");

var numbers = [1, 3, 5, 10, 11];
var result = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1])
        result.push(numbers[i] + numbers[i + 1]);
    else
        result.push(numbers[i]);
}

console.log(result);

// b)
console.log("--- Assignment 3:  b) ---");

const aLinks = [
    "<a href=””>Hassan</a>",
    "<a href=””>Peter</a>",
    "<a href=””>Jan</a>",
    "<a href=””>Boline</a>"
];

let navigation = "<nav>" + aLinks.map(function (link) {
    return link;
}).join(" ") + "</nav>";

//document.getElementById("links").innerHTML = navigation;

console.log(navigation);

// c)
console.log("--- Assignment 3:  c) ---");

let persons = [
    { name: "Hassan", phone: "1234567" },
    { name: "Peter", phone: "675843" },
    { name: "Jan", phone: "98547" },
    { name: "Boline", phone: "79345" }
];

//var tbody = document.getElementById("tbody");
//tbody.innerHTML = "";

let table = "<tbody>" + persons.map(function (person) {
    return "<tr><td>" + person.name + "</td><td>" + person.phone + "<td></tr>";
}).join(" ") + "</tbody>";
//tbody.innerHTML += table;

console.log(table);

// Assignment 4
// a)
console.log("--- Assignment 4:  a) ---");

const all = ["Hassan", "Peter", "Carla", "Boline"];

console.log(all.join('#'));

// b)
console.log("--- Assignment 4:  b) ---");
const numbers2 = [2, 3, 67, 33];

totalValue = numbers2.reduce((total, currentElement) => { return total + currentElement });

console.log("Total value: " + totalValue);

// c)
console.log("--- Assignment 4:  c) ---");

const members = [
    { name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }
];

let avgs = members.reduce((ac, a) => a.age + ac, 0) / members.length

console.log("Average age: " + avgs)



// d)
console.log("--- Assignment 4:  d) ---");

const votes = ["Biden", "Trump", "Biden", "Biden", "Trump", "Trump", "Biden", "None"];

let initialValue2 = {};

let reducerTwo = function (tally, vote) {

    if (!tally[vote]) {
        tally[vote] = 1;
    } else {
        tally[vote] = tally[vote] + 1;
    }
    return tally;

}

let votingResult = votes.reduce(reducerTwo, initialValue2)

console.log(votingResult);

/*
const votes = ["Biden", "Trump", "Biden", "Biden", "Trump", "Trump", "Biden", "None"];

result = votes.reduce((accu, candidate) =>{
    accu[candidate] = accu[candidate] ? accu[candidate] + 1 : 1;
    return accu;
},{});
console.log(result);
*/

// Assignment 5
// a)
console.log("--- Assignment 5:  a) ---");

let car = {
    brand: "Nissan",
    getBrand: function () {
        console.log(this.brand);
    }
};

let getCarBrand = car.getBrand;

getCarBrand();

console.log("Read comments")

/*
"getCarBrand holds just a plain function, which is no longer a method of the car object.
So, in this case, this.brand actually translates to window.brand, which is, of course, undefined.
If we extract a method from an object, it becomes a plain function again. Its connection to the object is severed, and it
no longer works as intended. In other words, an extracted function is not bound to the object it was taken from.
if we want to keep the reference to the original object, we need to explicitly bind the getBrand()
 function to the car object when we assign it to the getCarBrand variable. We can do this by using the bind() method."
 Example car.getBrand.bind(car); 
 */

// b)
console.log("--- Assignment 5:  b) ---");

console.log("Read comments")

/*
Even though we use car.getBrand, we actually only get the function getBrand() which is attached to the button object.
Passing a parameter to a function is an implicit assignment, so what happens here is almost the same as in the previous example. 
The difference is that now car.getBrand is not explicitly assigned, but implicitly. And the result is pretty much the same—what 
we get is a plain function, bound to the button object.
In other words, when we execute a method on an object, which is different from the object upon which the method was originally 
defined, the this keyword no longer refers to the original object, rather to the object that invokes the method.
With reference to our example: we are executing car.getBrand on el (the button element), not the car object, upon which it was originally defined. 
Consequently, this no longer refers to car, rather to el.
If we want to keep the reference to the original object intact, again, we need to explicitly bind the getBrand() function to the car object 
by using the bind() method.
Example el.addEventListener("click", car.getBrand.bind(car));
*/


// Assignment 6
// 1)
console.log("--- Assignment 6:  1) ---");

var add = (function () {
    var counter = 0;
    return function () { counter += 1; return counter }
})();

add();
add();

console.log(add());
  // the counter is now 3 *** Closures *** https://www.w3schools.com/js/js_function_closures.asp

  // 2)
console.log("--- Assignment 6:  2) ---");

function MyObject(name, age) {
    let setName = name,
    setAge = age

    const getInfo = () => {
        return [setName, setAge].join(", ")
    }

    const setFullName = n => {
        setName = n
    }
    const setFullAge = a => {
        setAge = a
    }

    return {
        getInfo,
        setFullName,
        setFullAge
    }
}

console.log(MyObject("Peter","45").getInfo());