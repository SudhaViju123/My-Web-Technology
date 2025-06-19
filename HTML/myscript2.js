console.log("=============Arithmetic Operato=============");

let myNumber1 = 50;
let myNumber2 = "20";//20A

console.log(myNumber1 + myNumber2); //number+string

console.log(myNumber1 +Number(myNumber2) ); //number+number 20
//Nan - Not a number
// we need to check wheather its number or not.

if(isNaN(myNumber2))
{
    console.log('Number 2 is not number'); //20A

}
else{
    console.log(myNumber1 +Number(myNumber2) ); //20
}



let myNumber3 ="30";// 30A - result NaN
let myNumber4 =10;
console.log(typeof myNumber3 , typeof myNumber4);
console.log(myNumber3 - myNumber4);//20 // interanly convert to numner
console.log(myNumber3 * myNumber4); //300
console.log(myNumber3 / myNumber4); //3

// Since + will not convert 
//its having two possiblities
//1. concadination
//2.Addition 



//Assignment Operator = 
// comparsion Operator == , === 
//comparison Operator >,<,>=,<=,!=

let mynumber5 = 100;
mynumber5 = 30;

let myNumber6 =10;
let myNumber7 = 20;
console.log(myNumber6 > myNumber7);
console.log(myNumber6 < myNumber7);

//Logical Operator
//&& || !=

console.log(true && false);
console.log(true && true);

console.log(myNumber6 >5 &&  myNumber7<6);

let myString1 = "hello";
let myString2 = "makkal";
console.log(myString1 &&  myString2 );  //makkal
console.log(myString1 ||  myString2 );  //hello


let isSalary = false;

console.log( 'Salary = ',isSalary);

isSalary = !isSalary; //toggling the value F t, T F

console.log( 'Salary = ',isSalary);

//Ternary Operator


let age =25;
let output = (age > 18)?"older":"Younger";
console.log(output);

/// == comparing only value
// === comparing value along with data type.


let number10 = 3;
let number11 = "3";


console.log(typeof number10 ,typeof number11 );
console.log( number10 == number11 );
console.log( number10 === number11 );

//case sensitive


console.log('Sudha' == 'sudha');  // False 
console.log('Sudha' === 'sudha');  // False 
//data type same but value different.


//null undefined.
let myStrnig10 = null;  //Empting the value
let myString11;   // declaring the variable not assign the value



console.log(typeof myStrnig10 ,typeof myString11 ); //object , Undefined

console.log(myStrnig10 == myString11); //true empty value
console.log(myStrnig10 ===  myString11); // object undefined






















/*console.log('Truthly $$$ Falsy');

let myName;
console.log(myName); // undefined

if(myName) // Falsy Value undeined
{
    console.log('My Name is ' , myName);

}
else{
    console.log('My name is not defined properly');
}

let mySalary = 0;
 console.log(mySalary);
 console.log(typeof mySalary);

  if(mySalary) //Falsy Value 0 
{ 
    console.log('My Salary is ' , mySalary);

}
else{
    console.log('My Salary is not defined properly');
}

*/