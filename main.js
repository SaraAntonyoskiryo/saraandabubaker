``````function square1(monkey) {
  return monkey * monkey;
}


function square2() { 
 return 5 * 5 ; 

 } 


 function square3(x) { 
 return 'x' * 'x' ; 

 }




 /*function square1(x) { 
 return x * x ; 
 } 

 function square2 (y) {
 return y * y ; 
 } 


 function square3 (w)  { 
 return w* w; 
}

function square0(x){
	return x * x ; 
} 
 function square1(x) { 
 	return x *x; 
 } 
 function square2(x) 
 { 
 return x * x; 
 }

function cube(x) { 
 return x*x*x;
 }
 


 

 function fullName(firstName,lastName) { 
 	return firstName+ " "+ lastName;
  
 } 

fullName('Nancy', 'Ajram');



function average(x,y){

	return (x+y)/2;

}


function areaOfSquare(x){

	return  x*x;

}






function futurValue(p,t,i,n){

	var f =p*t*i;
	print math.pow(f,n);

}




function oldEnough(age){
if (age >= 16){
	return true ;

}

return false  ;


}
function sameLength(a,b){
	if(a.length===b.length){
		return true;
	}
	return false;
}

function passwordLength(p){

if (p.length>=6){
	return true ;

}
return false;


}





function rentalCar(name,age){

	if (age >= 21){

		return  'have fun driving' ;
	}

	return 'you dont have akey';
}




function larger(x,y){

	if(x.length >= y.length){
		return x;
	}

}

function smaller(x,y){
	if(x.length <= y.length){
		return y;
	}
	
}




function p(x){
	if (x>=0){
		return postive;


	}
	return negative;
}



function rentCar(r){
	if (r === 'one year' ){
		return 'you allowed to rent';
	}
	return 'not allowed';
}




function scoreToGrade(y){
	if(y === 95){
		return "excellent";
	}
	else if(y > 100){
		return 'invalied';
	}

	return "pass";
}

function outdoor(t,w){
	if (t>=25 && w==="sunny"){
		return "is good for swimming ";

	}
	else if (t<3 && w==="snowy"){
		return "is good for skiing";

	}
	return "is good for football";

}




function guessMyNumber(n){
	if (n>=0 && n<=5 ){
		return "you are inside the bound"
	}
	return "you are outside the bound "

}

//////////////////////////////



//////////////////////////////////


function rentalCar(age){
	if (age>=18 ){
		return "avaliable car";
	}
	else if(age>=18&& age<=21){
		return "you allowed on w and t";
	}
	return "you are not allowed "
}

//////////////////////////////////////

function letterGrade(n,l){
 	if(n>=98 &&n<=100){
		return 'A+';
	}



else if(n>=90 && n<=92){
	return 'A-';
}
else 
	return 'A';

}

l= 'B'


	else if (n>=88 &&n<=89){
		return 'B+';
	}



else if(n>=80 && n<=82){
	return 'B-';
}

else 
	return 'B';

}


}

///////////////////////////////////




	
function scoreToGrade(n){
	return letterGrade(l,n);

		
	} 

	
/////////////////////////////////////////////////////



function sum(n) {
	if(n>=0){
		return n+1;
	}else {
		return ;
	}
}


function sum1(n) {
	if(n===0){
		return 1;
	}
	return n * sum1(n-1);
}

function repeatString(str, count) {
	if(count ===0){
		return " ";
	}
	
	return (str) + repeatString(str, count-1);
}


function fib(n){
	if (n===0){
		return 1;
	}
	else if ( n===1){
		return 1;
	}
	else {
		return fib(n-1)+fib(n-2);
	}
}







function  multyplyBy10(number, n){


	if (n===number){
		return number;

	}
	else {


return 10 * multyplyBy10(number, n+1);		
	}
}



 

function sum8(start,end){
	if(start===end) {
	return end ;
	}

	return start + sum8(start + 1, end);
}


//////

function sum9(start,end){

	if(start===end) {
	return end ;
	}

	return start * sum9(start + 1, end);
}


////

/*
function inc (x,y){
	return x+1 ;
	return y+1;
}

function dec(x,y){
	return x-1;
return y-1;
}


///////



function even(n){

	if(n/2 === Math.floor(n/2)){

		return true ;
	}

	else{

	 return false ;  
}
}



//////



function multyply(x,y){

	if(x===0 || y===0) {
	return 1;

	}
	return x + multyply(x,y-1);
}



/////////

var sa =", "

function range(x,y){
	if(x===(y-2)) {
	return (x+1);
 
	}

	return (x+1)+", "+range(x+1,y);
}


var cd = 0;

function length(n){
if(n==="") {	return 0;
}

	return 1+length(n.slice(1))
}

////

function mu(num1, num2){
	return Math.floor(num1 /num2)
}



/////////////////////////////. 4th Day. /////////////////////////////


var firstName = 'sara';
var lastName = 'antonyos';
var fullName = firstName +' '+ lastName;

///////


//Q4
var count=0;
function counter() {
return count=count+1;

}


  function guessMyNumber(n) { 
 if (n > 5) { 
 return 'Out of bounds! Please try a number between 0 and 5.'; 
 } else if (n === randInt(5)) { 
 return 'You guessed my number!'; 
 } 
 return "Nope! That wasn't it!"; 
 } 
 function randInt(n) { 
 return Math.floor(Math.random() * (n+1)) 
 }
 

/////////////////////////////////



function sum(n) { 
	var x=0;

while(n>0){

x=x+n;
n=n-1;

}

return x
 } 


/////////////


 function factorial(n){
 var x=1;
while(n>0){
	x=x*n
	n=n-1
}

return x;

 }


///////////////

function repeatString(str, count) { 

var x=""
	while(count>0){
		x= x+str;

		count=count-1

 }
 return x;
	}











////////

function counting(n){
var w ="";
	while(n>=0){
		if(n === 0){
			w = n + w;
		}else{
	
	w = ","+n + w;
	}

n = n-1;
	}
return w;

}

/////////////////


//

///////////////day 5/////////

  var array =['cat', 'fox', 'dog', 'monkey']; 
  var a = [1, 3, 4, 7, 9];

  var b = ['the','quick','brown','fox', 'ju
  mped', 'over', 'the lazy', 'dog'  ] 
  c =[true ,false,true];
/////////


  fav = ['boxing','music' ];


  sport = ['football','tennis' ];

 n= ['sara','haya']


//////


function arr(){

var h=[1,2,4];
	

	return h[0]

}

///////


function last(){

var s=[4,5,6,7];
	return s[3];
}


///// 

var ass = [2,3,4,];
// ass.unshift(0 ,1
var animal = ['dog', 'elephant', 'zebra']; 

////// 
*/


function sum(arr1){
var total=0;
var index =0;  

while(index < arr1.length ){
	total =total +arr1[index];

	index=index+1;
}

return total ;

}

//////////////




function sum2(arr2){
var total=0;
  

for (var index=0; index<arr2.length;index=index+1 )
{

	total =total + arr2[index];

	
}

return total ;

}



//////////////////

function remove(array, element) { 


for(var i = 0; i < array.length; i++ ){


  	if (array[i]=== element ){


  		
  		array.splice(i,element);
  	}

}

return array;


  	 } 


  	 /////////////////////////

  	 function evens(array1){

for(var i = 0; i < evens.length; i++ ){


  	if (evens[i] % 2 === 0 ){ 

	return evens[i];

  	}

evens.splice(i,i);
  	}

  	 }


//return evens;


  	 










 

































 



































 
		













``````