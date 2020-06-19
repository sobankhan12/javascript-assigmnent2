//CHAPTER 21-25
// Q NO 1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName + lastName;
// alert(fullName);
// Q NO 2
// var phone = prompt("Enter your mobile model");
// var length = phone.length;
// document.write("My favorite phone is:  " + phone + "<br>" + "Length of string is: " + length);
//Q NO 3
// var string = "Pakistan";
// var index = string.indexOf("n");
// document.write("String: Pakistan" + "<br>"); 
// document.write("index of n Pakistan is : " + index+ "<br>"); 

//Q NO 4
// var string = "Hello world";
// var index = string.lastIndexOf("l");
// document.write("String: Hello world" + "<br>"); 
// document.write("index of n Hello world is : " + index+ "<br>"); 
// Q NO 5
// var string = "Pakistani";
// var character = string.charAt(3);
// document.write("String: Pakistani" + "<br>"); 
// document.write("character at 3rd index  is : " + character +"<br>");
// Q NO 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = "";
//  fullName = fullName.concat(firstName," ",lastName);
// alert(fullName);
// Q NO 7
// var city = "Hyderabad";
// var cityReplace = city.replace(city, "Islamabad");
// document.write("City :" + city + " <br>" + "After replacement : " + cityReplace);
// Q NO 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g, "&");
// document.write(message+"<br>");
// document.write(newMessage);
// Q NO 9
// var value = "472";
// document.write("value: "+value + " <br>");
// document.write("value: "+typeof (value) + ": <br>");
// document.write("value: "+value + " <br>");
// value = parseInt("value: "+value);
// document.write("value: "+typeof(value) + "<br>");
// Q NO 10
// var input = prompt("Enter any text");
// document.write("input: "+input + "<br>");
// input = input.toUpperCase();
// document.write("input: " + input);
// Q NO 11
// var input = prompt("Enter any text");
// document.write("input: "+input + "<br>");
// var x= input.charAt(0).toUpperCase() + input.slice(1);
// document.write("input: " + x);
// Q NO 12
// END OF CHAPTER 21-25....................................
// START OF CHAPTER 26-30.............................
// // Q NO 1
// a = +prompt("Enter any positive  value: ");
// document.write("Number is: " + a+"<br>");
// document.write("Round off value is: " + Math.round(a)+"<br>");
// document.write("Floor value is: " + Math.floor(a)+"<br>");
// document.write("Ceil value is is: " + Math.ceil(a)+"<br>");
// Q NO 2
// a = prompt("Enter any negative value: ");
// document.write("Number is: " + a+"<br>");
// document.write("Round off value is: " + Math.round(a)+"<br>");
// document.write("Floor value is: " + Math.floor(a)+"<br>");
// document.write("Ceil value is is: " + Math.ceil(a)+"<br>");
// Q NO 3
// a = prompt("Enter any  value: ");
// document.write("The absolute value of " + a + "  is: " + Math.abs(a) + "<br>");
// Q NO 4 
// document.write("random dice value is  "+Math.floor((Math.random()*6)+1)+"<br>");
// document.write("random dice value is  "+Math.floor((Math.random()*6)+1)+"<br>");
// Q NO 5
// a = Math.floor((Math.random() * 6) + 1);
// document.write(a + "<br>");
// if (a !== 1) {
//     document.write("random coin value is:   Head"+"<br>");
// }
// else {
//     document.write("random coin value is:   Tails"+"<br>");
// }
// Q NO 6
// document.write("random  value  between 1-100:::  " + Math.floor((Math.random() * 100) + 1) + "<br>");
// Q NO 8
// a = Math.floor((Math.random() * 10) + 1);
// user = +prompt("Guess number between 1-10: ");
// if (a === user) {
//     alert("Happy congratulation you guess it");
// }
// else {
//     alert("Sorry Try again!");
// }

// END OF CHAPTER 26-30.............................
// Start  OF CHAPTER 31-34.............................
// Q NO 1
// date = new Date();
// document.write(date);
// Q NO 2
// date = new Date();
// var month = ["January", "February", "March", "April", "May", "June", "july", "August", "September", "October", "November", "December"];
// document.write("Current month is :  " + month[date.getMonth()]+"<br>");
// Q NO 3
// date = new Date();
// var day= ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
// document.write("Current day is :  " + day[date.getDay()] + "<br>");
// Q NO 4
// date = new Date();
// day = date.getDay();
// if (day === 0 || day === 6) { 
// document.write("Its a Fun day :  " +"<br>");
// }
// Q NO 5
// date = new Date();
// day = date.getDate();
// if (day<16 ) { 
// document.write("first  Fifteen days of month :  " +"<br>");
// }
// else {
//     document.write("Last  Fifteen days of month :  " +"<br>");
// }
// Q NO 6
// var d = new Date();
// var n = d.getTime();
// document.write("Current date is: "+d +"<br>");
// document.write("elapsed  million seconds since january 1 1970 :"+n+"<br>");
// document.write("elapsed  minutes since january 1 1970 : " + n / (1000 * 60)+"<br>");
// Q NO 7
// var d = new Date();
// var n = d.getHours();

// if (n > 13) {
    
// document.write("its PM"+"<br>");
// }
// else {
    
// document.write("its AM"+"<br>");
// }
//Q NO 8
// var d = new Date("2020-12-31");
// document.write("Later date : " + d + "<br>");
// // Q NO 9
// var d = new Date("2015-06-18");

// document.write("Later date : "+d + "<br>");
// END OF CHAPTER 31-34.............................
// Start  OF CHAPTER 35-38.............................
//Q NO 1
// function todayDate() {
//     date = new Date();
//     document.write(date + "<br>");
// }
// todayDate();
// Q NO 2
// function greet(a,b) {
//     document.write("HELLO" + (a + b) + "<br>");
// }


// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// greet(firstName, lastName);
// Q NO 3
// function add(a,b) {
//     document.write("sum of two number" + (a + b) + "<br>");
// }


// var a = +prompt("Enter your first number");
// var b = +prompt("Enter your second number");
// add(a, b);
// Q NO 4
// function calculator(a, b, operator) {
//     switch (operator) {
//         case "+":
            
//             return (document.write("sum of two number: " + (a + b) + "<br>"))
//             break;
//         case "-":
            
//             return document.write("difference of two number: " + (a - b) + "<br>");
//             break;
//         case "*":
            
//             return document.write("multiplication of two number: " + (a * b) + "<br>");
//             break;
//         case "/":
            
//             return document.write("division of two number: " + (a / b) + "<br>");
//                 break;
//         default:
//             return document.write("you have to enter valid operator "+"<br>");
//     }

// }


// var a = +prompt("Enter your first number");
// var b = +prompt("Enter your second number");
// var operator = prompt("Enter your operator +,-,*,/");
// Q NO 5
// function square(n) {
//     document.write("square of number is : " + (n * n) + "<br>");
// } 
// var n = +prompt("Enter any number")
// square(n);
// Q NO 6 is not cover in class
// function factorial(number) {
//     a = 1;
//     for (i = 1; i <= number; i++){
//         a *= i;
//     }
//     return a;
    
// }
// number = +prompt("Enter any number");
// alert(factorial(number));
// Q NO 7
function counting(start,end) {
    
    for (i = start; i <= end; i++){
        document.write(i + "<br>");
    }
    
    
}
start = +prompt("Starting number");
end = +prompt("Ending number");
document.write("counting start from  " + start + " to " + end);
counting(start, end);
// Q NO 8
function Hypotenuse(base, per) {
    a = base;
    b = per;
    function square(base, per) {
       return((base*base)+(per*per))
    }     
    hypo = square();
    document.write(hypo);


}
base = +prompt("Enter base number");
per = +prompt("Enter perpendicular number");
Hypotenuse(start, end);





// END   OF CHAPTER 35-38.............................



