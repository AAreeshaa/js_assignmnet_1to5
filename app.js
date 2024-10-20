//chapter 1
document.body.innerHTML=(`<b><br<CHAPTER 1<br>`)
// QUESTION 1
alert("Hello, long time no see!");


//  QUESTION 2
alert("Error! Pleace enter a valid password."); 



//  QUESTION 3
alert("Welcome to JS Land...\nHappy Codding!"); 



//  QUESTION 4
alert("Welcome to JS Land...");
alert("Happy Codding! \nprevent this page from creating additional dialogs"); 



// QUESTION 5
console.log("Hello... I can run JS through my web browser's console"); 




// CHAPTER 2  
document.body.innerHTML=(`<b><br<CHAPTER 2<br>`)              
// QUESTION 1
      var userName = "Areesha";




//  QUESTION 2
      var myName = "SYEDA AREESHA ALI";



//  QUESTION 3
      var message = "Hello World!";
      alert(message);



//  QUESTION 4
      var stdName = "Johne Doe";
      var stdAge = 15;
      var stdCourse = "Certified Mobile Application Development";

      alert(`${stdName}`);
      alert(`${stdAge} years old`);
      alert(`${stdCourse}`);



//  QUESTION 5
      var alertMessage = "\nPIZZA \nPIZZ \nPIZ \nPI \nP";
      alert(alertMessage);



//  QUESTION 6
      var email = "example@example.com";
      alert(`Your email address is ${email}`);



//   QUESTION 7
      var book = "I am trying to learn from the Book A smarter way to learn JavaScript";
      alert(book);




//   QUESTION 8
      var myText = "Yah! I can write HTML content through JavaScript";
      document.body.innerHTML+=(myText);


     
//   QUESTION 9

      let myString = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
      alert(myString);
      document.body.innerHTML+= (`${myString} <br>`) ;




 //CHAPTER 3  
 document.body.innerHTML=(`<b><br<CHAPTER 3<br>`)    
// QUESTION 1
var myAge = 32;
alert (`I am ${myAge} year old`);



// QUESTION 2
var visitor = 14;
alert(`You have visited this site ${visitor} times <br><hr>`);



// QUESTION 3
var birthYear = 1990;
var dataTy = `Data type of my declare varaible is number <br>` ;
document.body.innerHTML+=(`My birth year is ${birthYear}<br>`)
document.body.innerHTML+=(`${dataTy}<br><hr>`);



// QUESTION 4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.body.innerHTML+=(`${visitorName} ordered  ${quantity} ${productTitle} (s) on XYZ Clothing store <br><hr><br>`);



//CHAPTER 5
document.body.innerHTML=(`<b><br <CHAPTER 5 <br>`)
//QUESTION 1
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.body.innerHTML+=(`sum of ${num1} and ${num2} is ${sum}<br> <hr>`);




// QUESTION 2
//Subtraction
        var num1 = 3;
        var num2 = 5;
        var subtraction = num1 - num2;
        document.body.innerHTML+=(`subtraction of ${num1} and ${num2} is ${subtraction}<br>`);

//Multiplication 
        var num1 = 3;
        var num2 = 5;
        var multiplication = num1 * num2;
        document.body.innerHTML+=(`multiplication of ${num1} and ${num2} is ${multiplication} <br>`);

//Division
        var num1 = 3;
        var num2 = 5;
        var division = num1 / num2;
        document.body.innerHTML+=(`division of ${num1} and ${num2} is ${division}<br />`);

//Modulus
        var num1 = 3;
        var num2 = 5;
        var modulus = num1 % num2;
        document.body.innerHTML += (`modulus of ${num1} and ${num2} is ${modulus} <br><hr>`);



//QUESTION 3
//a
          var variable ;

//b
document.body.innerHTML+=(`Value after variable declaration is ${variable} <br>`);

//c
           variable = 5;
   

//d 
document.body.innerHTML+=(`Initial value ${variable}<br>`);

//e 
           variable++;

//f
document.body.innerHTML+=(`Value after increment is: ${variable} <br>`);

//g
           variable += 7;

//h. 
document.body.innerHTML+=(`Value after addition is: ${variable}<br>`) ;

//i
           variable--;

//j
document.body.innerHTML+=(`Value after decrement is:${variable} <br>`);

       
//k 
         var reminder = 5 % 3; 

//l 
document.body.innerHTML+=(`The remainder is : ${variable % 3}<br> <hr>`);
       



//QUESTION 4
var ticketPrice = 600;
var buyTicket = 5;
var totalCost = ticketPrice * buyTicket ;
document.body.innerHTML+=(`Total cost to buy ${buyTicket} tickets to a movie is ${totalCost} PKR.<hr><br>`);




//QUESTION 5
document.body.innerHTML+=(`<br><b>TABLE OF 4<br>`);
var number = 4;                                                
for (var i = 1; i <= 10; i++) {                                              
document.body.innerHTML+=(`${number} x ${i} = ${number * i} <br>`);    
    }                                                                            
    
            

//QUESTION 6
document.body.innerHTML+=(`<hr><br> <b>The Temperature Converter <br>`);
var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.body.innerhtml+=(` ${celsius}C is ${fahrenheit}F <br>`);
var fahrenheit = 70;
var celsius = (fahrenheit - 32) * 5 / 9;
document.body.innerHTML+=(`${fahrenheit}F is ${celsius}C <hr>`);


//QUESTION 7
document.body.innerHTML+=(`<br> <b>SHOOPING CART <br>`);
 var item1Price  = 650;
 var item1Quantity = 3;

 var item2Price = 100;
 var item2Quantity = 7;

 var shippingCharges = 100;
 var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
 document.body.innerHTML+=(`Total cost of your order is ${totalCost}.<hr>`);




//QUESTION 8
document.body.innerHTML+=(`<br><b>MARK SHEET<br>`);
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.body.innerHTML+=(`Total marks: ${totalMarks} <br /> Marks obtained: ${marksObtained}<br /> Pecentage: ${percentage}%.<hr/>`);




//QUESTION 9
document.body.innerHTML+=(`<br><b> Currency IN PKR <br>`);
var usDollars = 10;   
var saudiRiyals = 25;
var totalInPakistaniRupees = (usDollars * 104.80) + (saudiRiyals * 28);
document.body.innerHTML+=(`Total Currency in PKR: ${totalInPakistaniRupees}.<br /><hr>`);




//QUESTION 10
document.body.innerHTML+= (`<br><b>ARITHMETIC SEQUENCE <br>`);
var initialize = 10;
var result = (initialize + 5) * 10 / 2;
document.body.innerHTML+=(`The final result is ${result}<br/><hr>`);




//QUESTION 11
document.body.innerHTML+=(`<br /><br /><b> AGE CALCULATOR <br /><br />`)
var currentYear = 2016;
var birthYear = 1992;
var age1 = currentYear - birthYear;
document.body.innerHTML+=(`Current year: ${currentYear}<br /> Birth Year: ${birthYear}<br /> Your age is: ${age1}<br /><hr>`);




// QUESTION 12
document.body.innerHTML+=(`<br /><br /><b>THE GEOMETRIZER <br /><br />`)
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius * radius);
document.body.innerHTML+=(`Radius of a circle:${radius}<br/>  The Circumference is ${circumference}<br/> The area is ${area}<hr>`);
   


//QUESTION 13
document.body.innerHTML+=(` <br /><br /><b> LIFETIME SUPPLY CALCULATOR<br /><br />`)
var favoriteSnack = "chocolate chip";
var currentAge = 15;
var maximumAge = 65;
var AmountPerDay = 3;       
document.body.innerHTML+=(`Favorite Snack: ${favoriteSnack}<br/> Current Age: ${currentAge}<br/> Estimated Maximum Age: ${maximumAge}<br/> Amount of snacks per Day: ${AmountPerDay}<br />You will need 150 ${favoriteSnack} to last you until the ripe old age of ${maximumAge}<br />`); // output: You will need 150 chocolate chip to last you until the ripe old age of 65.





























           





















