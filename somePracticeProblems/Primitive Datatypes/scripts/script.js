//Your work goes here.

/*Example*/ 
//Boolean
//True or false values
console.log("Boolean example:");
let booleanVariable = true; 
console.log(booleanVariable);
console.log(typeof(booleanVariable));

/*Your turn 
Create a variable using const named 
candyIsHealthy
assign it a boolean value 
print it to the console
*/
console.log("practice1");
const candyIsHealthy = false;
console.log(typeof(candyIsHealthy));

/*Example*/
//Number
console.log("\nNumber example:");
let number = -12.4;
console.log(number);
console.log(typeof(number));
/* Your turn 
Create a variable using the keyword var
assign it a number */
console.log("practice2");
var num = 23;
console.log(typeof(num));
//Numbers can be expressed within this range
console.log(Number.MIN_VALUE+" to "+ Number.MAX_VALUE);
/*Explanation
Numbers in JavaScript are stored in 64-bit IEEE format
so the smallest they can get is 5*10^(-324) 
and the largest is roughly 1.7977 * 10^(308) */

/*Your turn
Add to this comment a whole number that you think given the above 
information might not be accurately represented using the
number datatype
Answer: 
*/
console.log("practice3");
console.log(Number.MAX_VALUE);
/*Example*/
console.log("\nBigInt Example");
//BigInt
let bigNumber = BigInt(Number.MAX_VALUE)+1n;
console.log(bigNumber);
console.log(typeof(bigNumber));
/*Explanation
By adding n to the end of a number you indicate to JavaScript
that it is a bigint. Bigints allow you to accurately represent
arbitrarily big and small whole numbers. */

/*Your turn
Create a variable using the let keyword and try to 
assign it the answer you gave above using big int notation.*/
console.log("practice4");
let nextExample = bigNumber;
console.log(nextExample);
/*Example*/
console.log("\n\nString example:");
//String
let string = "This is a String";
let string2 ='single quotes work too';
console.log(string);
console.log(typeof(string));
console.log(string2);
console.log(typeof(string2));
/*Your turn
Assign a string to the variable you created earlier
that holds a number 
Print it to the console.*/ 
console.log("practice5");
nextExample = string;
console.log(nextExample);
/*Explanation 
JavaScript is dynamically typed which allows us to 
first assign a number to a variable and then later
assign a string. */


/*Example*/
//Null
console.log("Null example: ")
let nullVariable = null;
console.log(nullVariable);
console.log(typeof(nullVariable));
/*Explanation
Using typeof null is decieving. 
This result is an "accident" because of the 
way that javascript was first defined. 
The actual type of null is indeed null.

It should be used to represent the absence 
of a value that is intentionality set to not 
have a value.*/

/*Example*/
//Undefined
console.log("Undefined example: ")

var undefinedVariable;
console.log(typeOf(undefinedVariableTrad));
/*Explanation
Meanwhile undefined is typically the value of 
variables that have not be initialized. */

/*Your turn
Create a variable using either let or var
and print the result of using typeof 
on your variable. Then assign it a value and use typeof
again- printing out the result.*/
console.log("practice 6");
let ex = null;
var ex1;
console.log(typeof(ex));
console.log(typeof(ex1));


//The final primitive 
//Symbol a piece of data that 
//you can create that Javascript is 
//guaranteed to understand as unique
//We won't talk about symbols until
//we discuss objects at 

//GREAT WORK!!