//1. Given a string, reverse each word in the sentence

// Initial string with a sentence to reverse each word
let str = "saare jaha se achha hindustaan humara";

// The split() function is used to split the string into an array of words, 
// and map() is used to reverse each individual word.
let savedStrArray = str.split(" ").map(function(word) {
    return word.split("").reverse().join("");  // Reverse each word
})

// Join the reversed words back together with a space separator
let newStr = savedStrArray.join(" ");

console.log(newStr); // Output will be: "eraas arah se ahcah naatsudnih aramuh"

//2. How to check if an object is an array or not? Provide some code. 

// Function that checks if a given element is an array using Array.isArray() method.
function checkArray(elem) {
    return Array.isArray(elem); // Returns true if 'elem' is an array, otherwise false.
}

console.log(checkArray([])); // true, because [] is an array
console.log(checkArray({})); // false, because {} is an object, not an array

//3. How to empty an array in JavaScript? (do not reset to a new array and do not run a loop through to pop each value)

var arr = [1, 2, 3, 4, 5, 6];

// By setting the length property of the array to 0, the array becomes empty
arr.length = 0;

console.log(arr); // Output will be: [] (empty array)

//4. How would you check if a number is an integer? (You do not need to use .isInteger())

var a = 12; // Integer value

// Check if a number is an integer by verifying if the remainder is 0 when divided by 1
if(a % 1 === 0){
    console.log("Yes, It is an integer"); // Output: Yes, It is an integer
}
else{
    console.log("No, It isn't an integer");
}

var a = 12.5; // Non-integer value

if(a % 1 === 0){
    console.log("Yes, It is an integer");
}
else{
    console.log("No, It isn't an integer"); // Output: No, It isn't an integer
}

var a = 12.0; // Integer value (even though written with a decimal, it's still an integer)

if(a % 1 === 0){
    console.log("Yes, It is an integer"); // Output: Yes, It is an integer
}
else{
    console.log("No, It isn't an integer");
}

var a = 12.9; // Non-integer value

if(a % 1 === 0){
    console.log("Yes, It is an integer");
}
else{
    console.log("No, It isn't an integer"); // Output: No, It isn't an integer
}

//5. Make this work: duplicate([1, 2, 3, 4, 5]); Output:- [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// Function that duplicates an array by concatenating it with itself
function duplicate(arr) {
    return arr.concat(arr); // Concatenate the array with itself to duplicate
}

console.log(duplicate([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

//6. Write a JavaScript function that reverses a number 

//1st way: Convert the number to a string, reverse the string, and then convert it back to a number
function reverseKaroNumber(num) {
    return Number(num.toString().split("").reverse().join("")); // Reverse the number and return as a number
}

console.log(reverseKaroNumber(12)); // Output: 21

//2nd way: Reverse a number by extracting digits using modulo and division
function reversekaro(num) {
    var rev = 0;
    while(num > 0) {
        var rem = num % 10;  // Get the last digit of the number
        rev = rev*10 + rem;  // Add the digit to the reversed number
        num = Math.floor(num/10); // Remove the last digit from the number
    }
    return rev; // Return the reversed number
}

console.log(reversekaro(12345)); // Output: 54321

//7. Write a JavaScript function that checks whether a passed string is palindrome or not?

//Using if-else statement:
function stringPalChecker(str) {
    var reversed = str.split("").reverse().join(""); // Reverse the string
    if(reversed === str) return true; // Check if the reversed string matches the original string
    else return false; // Return false if not a palindrome
}

console.log(stringPalChecker("poop")); // true
console.log(stringPalChecker("loop")); // false

//Using ternary operator:
function stringPalChecker(str) {
    var reversed = str.split("").reverse().join(""); // Reverse the string
    return reversed === str? true : false; // Return true if palindrome, else false
}

console.log(stringPalChecker("poop")); // true
console.log(stringPalChecker("loop")); // false

//8. Write a JavaScript function that returns a passed string with letters in alphabetical order.

function stringAlphaBeticalOrder(str) {
    // Convert the string into an array of characters, sort the array in alphabetical order, and then join it back into a string
    return str.split("").sort().join("");
}

console.log(stringAlphaBeticalOrder("hello")); // Output: "ehllo"
console.log(stringAlphaBeticalOrder("apple")); // Output: "aelpp"

//9. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string into uppercase

function capitalizeKaro(str) {
    // Split the string into an array of words, then map over each word to capitalize the first letter, and rejoin the words back into a string
    let allWords = str.split(" ").map(function(word) {
        return word.charAt(0).toUpperCase() + word.substring(1); // Capitalize first letter and concatenate the rest
    })
    
    return allWords.join(" "); // Join the array of words into a single string
}

console.log(capitalizeKaro("bhai kese ho tum?")); // Output: "Bhai Kese Ho Tum?"
console.log(capitalizeKaro("me badhiya hu.")); // Output: "Me Badhiya Hu."

//10. Write a JavaScript function which accepts an argument and returns the type 
//Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function typeTeller(elem) {
    return typeof elem; // Return the type of the element
}

console.log(typeTeller([])); // Output: "object" (arrays are considered objects in JavaScript)
console.log(typeTeller(true)); // Output: "boolean"
console.log(typeTeller(function() {})); // Output: "function"
console.log(typeTeller(12)); // Output: "number"
console.log(typeTeller("12")); // Output: "string"
console.log(typeTeller(undefined)); // Output: "undefined"

//11. Write a JavaScript function to get the number of occurrences of each letter in a specified string.

function occ(str) {
    let occurence = {}; // Create an object to store letter counts
    str.split("").forEach(function(elem) {
        if(occurence.hasOwnProperty(elem) === false) {
            occurence[elem] = 1; // If letter doesn't exist, add it with a count of 1
        }
        else {
            occurence[elem]++; // If letter exists, increment the count
        }
    });
    return occurence; // Return the object with letter occurrences
}

console.log(occ("apple")); // Output: { a: 1, p: 2, l: 1, e: 1 }
console.log(occ("hello")); // Output: { h: 1, e: 1, l: 2, o: 1 }

//Loops:-

//12. Loop an array and add members to it

let arrOfNumbers = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

// Use forEach to iterate through the array and accumulate the sum
arrOfNumbers.forEach(function(elem) {
    sum = sum + elem; // Add each element to sum
})

console.log(sum); // Output: 28

//13. In an array of numbers and strings, only add those members which are not strings

let ArrOfStringsAndNumbers = ["hehehe", 123, "abc", 25, "efg", 50, "hij", "lmn"];
let newSum = 0;

// Iterate through the array and add only numbers to the sum
ArrOfStringsAndNumbers.forEach(function(elem) {
    if(typeof elem === 'number') {
        newSum = newSum + elem; // Only add numbers
    }
})

console.log(newSum); // Output: 198 (123 + 25 + 50)


//14. Loop an array of objects and remove all objects which don't have gender value male

//1st way:- Using the filter() method to create a new array of only male objects
let arrayOfObjects = [
    {name: "John", gender: "male"},
    {name: "Jane", gender: "female"},
    {name: "Bob", gender: "male"},
    {name: "Alice", gender: "female"},
    {name: "Mike", gender: "male"},
    {name: "Lily", gender: "female"}
]

let array = arrayOfObjects.filter(function(elem) {
    return elem.gender === "male"; // Only keep objects where gender is male
})

console.log(array); // Output: [{name: "John", gender: "male"}, {name: "Bob", gender: "male"}, {name: "Mike", gender: "male"}]

//2nd way:- Manually iterate and remove non-male objects from the original array
let newArrayOfObjects = [
    {name: "John", gender: "male"},
    {name: "Jane", gender: "female"},
    {name: "Bob", gender: "male"},
    {name: "Alice", gender: "female"},
    {name: "Mike", gender: "male"},
    {name: "Lily", gender: "female"}
]

let count = 0;

// Count how many male objects there are
newArrayOfObjects.forEach(function(elem) {
    if(elem.gender === "male") count++; // Count male objects
})

// Loop through the array and remove non-male objects
for(let i = 0; i < count; i++){
    for(let j = 0; j < newArrayOfObjects.length; j++) {
        if(newArrayOfObjects[j].gender !== "male"){
            newArrayOfObjects.splice(j, 1); // Remove the object if gender is not male
        }
    }
}

console.log(newArrayOfObjects); // Output: [{name: "John", gender: "male"}, {name: "Bob", gender: "male"}, {name: "Mike", gender: "male"}]

// Arrays:-

//15. Write a JavaScript function to clone an array

//1st way:- Using the spread operator
function cloneArray(arr) {
    // Using the spread operator to create a shallow copy of the array
    return [...arr];
}

let newCloneArray = cloneArray([1, 2, 3, 4, 5]);
console.log(newCloneArray); // Output: [1, 2, 3, 4, 5]

//2nd way:- Using forEach method
function cloneArr(arr) {
    let newArr = [];
    // Iterate over the array and push each element to the new array
    arr.forEach(function(e) {
        newArr.push(e);
    })
    return newArr; // Return the new cloned array
}

let newCloneArr = [1, 2, 3, 4, 5];
console.log(cloneArr(newCloneArr)); // Output: [1, 2, 3, 4, 5]

//3rd way:- Using the map method
function cloneThisArray(arr) {
    // Using map to return a new array with the same values as the original array
    let newOneCloneArray = arr.map(function(e) {
        return e;
    })
    return newOneCloneArray; // Return the cloned array
}

let newOneCloneArray = cloneThisArray([1, 2, 3, 4, 5]);
console.log(newOneCloneArray); // Output: [1, 2, 3, 4, 5]

//16. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array

function retrieve(arr, n = 1) {
    // If n is less than or equal to the array length, loop through and log the first 'n' elements
    if(n <= arr.length) {
        for(let i = 0; i < n; i++) {
            console.log(arr[i]); // Log each of the first 'n' elements
        }
    }
    else {
        console.log(n + " is greater than the array length"); // If n is greater than array length, log a message
    }   
}

retrieve([1, 2, 3, 4, 5], 3); // Output: 1 2 3

//17. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

function retrieveNew(arr, n = 1) {
    // If n is less than or equal to the array length, loop through and log the last 'n' elements
    if(n <= arr.length) {
        for(let i = 0; i < n; i++) {
            console.log(arr[arr.length - 1 - i]); // Log each of the last 'n' elements
        }
    }
    else {
        console.log(n + " is greater than the array length"); // If n is greater than array length, log a message
    }   
}

retrieveNew([1, 2, 3, 4, 5], 3); // Output: 5 4 3

//18. Write a JavaScript program to find the most frequent item of an array

function freq(arr) {
    let freq = {}; // Create an object to store the frequency of each element
    arr.forEach(function(elem) {
        // Increment the frequency count of the element
        if(freq.hasOwnProperty(elem)) freq[elem]++;
        else freq[elem] = 1;
    })
    // Find the most frequent element by comparing frequencies
    let ans = Object.keys(freq).reduce(function(acc, next) {
        return freq[acc] > freq[next] ? acc : next;
    })
    console.log(ans); // Log the most frequent element
}

freq([1, 2, 3, 12, 2, 3, 12, 1, 2, 3, 2121]); // Output: "2"

//19. Write a JavaScript program to shuffle an array 

function shuffleKaro(arr) {
    let totalShuffleArea = arr.length;
    while (totalShuffleArea > 0) {
        totalShuffleArea--;
        // Randomly select an index to swap with the last element
        let indexToBeExachanged = Math.floor(Math.random() * totalShuffleArea);
        let temp = arr[totalShuffleArea]; // Store the last element temporarily
        arr[totalShuffleArea] = arr[indexToBeExachanged]; // Swap the last element with the randomly selected one
        arr[indexToBeExachanged] = temp; // Place the temporary element at the swapped index
    }
    return arr; // Return the shuffled array
}

console.log(shuffleKaro([1, 2, 3, 4, 5, 6, 7])); // Output: A shuffled array (order will be random)

//20. Write a JavaScript program to compute the union of two arrays

//Example-1 :- Using Set to remove duplicates and merge arrays
function union(arr1, arr2) {
    // Concatenate the arrays and remove duplicates using Set
    return [...new Set(arr1.concat(arr2))];
}

console.log(union([1, 2, 3], [100, 2, 1, 10])); // Output: [1, 2, 3, 100, 10]

//Example-2 :- Using Set to remove duplicates and merge arrays
function union(arr1, arr2) {
    // Concatenate the arrays and remove duplicates using Set
    return [...new Set(arr1.concat(arr2))];
}

console.log(union([1, 2, 3, 4, 5], [2, 3, 4, 5, 5, 6, 6, 6, 7])); // Output: [1, 2, 3, 4, 5, 6, 7]
