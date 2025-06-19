


console.log('Learning my Variables');

//Let - can be updated , cannot be redeclared


let myName = 'Sudha';
console.log('MyName : ',myName);

 //myName = 'Vijayan';
 myName = 'Vijayan';
console.log('MyName : ',myName);

//let myName ="Sun";
console.log('MyName : ',myName);

//Const - var :  cannot be updated / cannot be redeclared
//               obj : can be updated (like attributes not full object)
const myLastName = "Viky"

console.log('myLastName : ',myLastName);


const  myObject ={ 
                fname : 'Nivi', 
                lname:'Vijayan'
            }
console.log('My Object : ' , myObject);

myObject.fname = 'Dhivyasri'; // const obj updated

console.log('My Object : ' , myObject);

myObject.fname = 'Nidhi'; // const obj updated

console.log('My Object : ' , myObject);

/*myObject ={ 
                fname : 'Mithran',   // took full object try to be modified got error
                lname:'Vijayan'
            }
 console.log('My Object : ' , myObject); 
*/

// var = > can be redeclared ,can be resassigned
//global scope.

var bootcamp = 'My LWC';
console.log('bootcamp : ' , bootcamp);

bootcamp = 'LWC 2';
console.log('bootcamp : ' , bootcamp);

var bootcamp = 'My Demo';
console.log('bootcamp : ' , bootcamp);
//Window is golbal Object
console.log(window.bootcamp);


x=10+5+'Sudha';  // Left to Right
console.log(x);

x='Sudha'+12+5; //L to R
console.log(x);

// Datatypes


let myPetName = 'Lion';
console.log('myPetName : ' ,myPetName);
//type of finding data type od variable.
console.log('myPetName : ', typeof myPetName);

//datatype can be changed based on the value 
myPetName = 1000;
console.log('myPetName : ', typeof myPetName);
myPetName = true;
console.log('myPetName : ', typeof myPetName);
 
let myobj ={};
console.log(typeof myobj);  //Ans : Object

let myArray =[];
console.log(typeof myobj);  //Ans : Object

let mynull = null;
console.log(typeof mynull);  //Ans : Object

//Undefined
//declared varaiable but not intial the value;

let myVariable;
console.log(typeof myVariable);  //Ans : Undefined 

let myNumber = "1"; //""String
console.log(typeof myNumber);

let myNumber1 = "1" + "5"; //""String
console.log('myNumber1 = ' ,myNumber1 ); 

let myNumber2 = "1" + 5; //""String
console.log('myNumber1 = ' ,myNumber2 ); 


let myNumber3 =  5 +"1"; //""String
console.log('myNumber1 = ' ,myNumber3 ); 


let obj ={ fname:'Mithu',    //let can be updated
            LName:'Viju'

};
console.log('my Let Object ' ,obj);

obj.fname = 'Mithran';      //let obj updated fully
console.log('my Let Object ' ,obj);

obj ={ fname:'Dhiv',
            LName:'Vijayan'   // let obj updated fully

};
console.log('my Let Object ' ,obj);
