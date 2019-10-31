/*Explanation
A block of code is defined by {}. Everything in between 
Those curly braces is considered in the block. 
Anything else is outside of the block. 

If statements allow us to run a block of code only if a 
specific condition is true. 
If the condition in the parentheses is true the block 
following the the parentheses will run. 

We can optionally have an else statement that will run 
only if the other block doesn't run. 
*/ 

/*Your turn 
Modify the code below to print your favorite 
cookie if the user inputs y.
*/
let input = prompt("Do you like cookies?\n"
                    +"y for yes");

if(input ==="y"){
    console.log("We can be friends");
}else{
    console.log("It was nice knowing you.");
}

/*Your turn
    Modify the code below so that it will print "You got it to work!"
Hint: && and || are used to evaluate two conditions at the same time
    && will evaulate to true if both sides are true
    || will evaluate to false if both sides are false
*/
let num = 5;

if (num < 0 && num < 10) {
    console.log("You got it to work!")
}


let number = prompt("Give me a number between 1 and 10");
number= Number(number);//converts the input into a number;

/*Your turn 
Write an if statment that checks if the user 
input a number in the correct range. 
If they did alert them with the message Nice Job!
Alert them with the message that they need to be better
at following the instructions.
*/
   if(number >= 1 && number < 10){
       console.log("You entered right number");
   }
/*Example 
What if we want to check multiple conditions? 
We can also say else if (another condition){instructions}
*/ 
let age = 5;
if(age<5){
    console.log("You're too young to use the computer");
}else if(age <= 9){
    console.log("You're still too young.");
}else if(age<18){
    console.log("Are you using the computer for school?");
}else{
    console.log("Do what you want");
}
/*Note that as soon as the program encounters a condition 
that is true that is the only block that runs.
5 is less than 9 and 18, but only the block that follows less 
than 9 runs. */

/*Your turn
 Set x to some value. Then write an ifstatement that checks 
 if x is equal to 3. If so, print the message, 
 “x is equal to 3”. Write an else-if statement to check 
 if x is greater than 5, and, if so, prints the message, 
 “x is greater than 5”. Write another else-if statement 
 to check if x is less than or equal to 0. If so, it 
 prints the message, “x is less than or equal to 0”. 
 Write an else-statement to prints the message, 
 “x is none of the other options”. */
let x = 15;
if (x === 3) {
    console.log("x is equal to 3");
} else if (x > 5) {
    console.log("x is greater than 5");
} else if (x <= 0) {
    console.log("x is less than or equal to 0");
} else {
    console.log("x is none of the other options");
}
 /*Example 
 We can also 'nest' our if statements within one another. 
 */ 
//Using the number given to us from the user
if(number <=10){
    if(number>0){
        console.log("You followed directions");
    }else{
        console.log("number is less than 11," 
        +"but not greater than 0");
    }
}else{
    console.log("Number is greater than 10.");
}

/*Your turn
Prompt the user to ask if they want ice cream.
If they say yes. Prompt them if they want sprinkles. 
    If they say yes. Add icecream and sprinkles to the array below. 
    If they say no to sprinkles add only icecream to the array below.
If they say no to ice cream add another fruit to the array below.
*/
let array = ["apples","strawberries"];
let input = prompt("Do you want ice cream?");
if(input.toLowerCase() === 'yes'){
     input = prompt("Do you want sprinkles?");
     if(input.toLowerCase() === "yes"){
         array.push("ice cream", "sprinkles");
     }else{
         array.push("ice cream");
     }
}else{
    array.push("banana");
}
