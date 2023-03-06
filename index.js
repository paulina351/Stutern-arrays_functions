//Question 1
//What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.
Mutable-array-method, changes within its enclosed value
examples
prototype. pop()
prototype. push()
prototype. reverse()
prototype. sort()
prototype. splice()


Non-Mutable-array-method, does not change but create a new array.
examples;
prototype. join()
prototype. filter()
prototype. concat() 
prototype. map()
prototype. slice()




//Question number 2
//Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
//1. Add ‘Kotlin’ to the end of the array
//2. Add ‘Java’ after ‘Ruby’
//3. Remove the first item in the array
//4. Add ’Scala’ and ‘Swift’ to the beginning of the array
//5. Replace ‘PHP’ with ‘Go’ and ‘Rust’
let languages = ["C#", "Javascript", "Ruby", "PHP", "Python"];
languages.push("Kotlin");
console.log(languages);

let languages2 = ["C#", "Javascript", "Ruby", "PHP", "Python"];
languages2.splice(3,0, "Java");
console.log(languages2);

let languages3 = ["C#", "Javascript", "Ruby", "PHP", "Python"];
languages3.shift();
console.log(languages3);

let languages4 = ["C#", "Javascript", "Ruby", "PHP", "Python"];
languages4.unshift("Scala", "Swift",);
console.log(languages4);

let languages5 = ["C#", "Javascript", "Ruby", "PHP","Python"];
languages5.splice(3,1, "Go", "Rust");
console.log(languages5);




//Question number 3
//What will be the value of fruit after calling the function changeFruit?
//let fruit = ['apple', 'mango', 'banana'];
//function changeFruit( fruit ) {
    //    fruit[2] = "orange";
  //      return fruit;
//}
let fruits = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
    fruit[2] = "orange";
    return fruit;
}
let newFruit = fruit;
console.log(changeFruit(newFruit));



//Question number 4
//Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
//e.g., max([4, 5, 10, -2]) // maximum value is 10
function number(a,b,c,d) {
    return Math.max(10,40,50,5)
}
console.log(number(Math.max));




//Question number 5
//Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
//e.g.,
//valTimesIndex([1,2,3]) // [0,2,6]
  //     valTimesIndex([5,10,15]) // [0,10,30]
function valTimeIndex(num){
    return num.map((val,index) => val*index);
}

let arrayNumbers = [1,2,3,4];
let multiplier = valTimeIndex(arrayNumbers);

console.log(multiplier);

