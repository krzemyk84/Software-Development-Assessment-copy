// Assessment Lukasz Krzeminski QBCC version 1 17.01.2023
var FirstName = prompt("Please enter your first name: "); // prompt and read in the FirstName 
alert("Welcome " + FirstName); // welcome message with prompted FirstName
var menu = 0; // Initialize menu equal 0
while (menu != 3) { // Loop until menu equal 3
  alert("\nMenu:");
  alert("Option 1: Will generate a username in the format of first initial and last name.");
  alert("Option 2: Will calculate the factorial of a number entered by the user.");
  alert("Option 3: Exit");
  menu = Number(prompt("Please enter 1,2 or 3: "));
  if (menu == 1) { // If menu equal 1 
    alert(UserName(FirstName)); //      call the UserName function and print the return username
  }
  else if (menu == 2) { // If menu equal 2  call the Factorial function
    Factorial();
  }
  else if (menu == 3) {// If menu equal 3  call the Exit function
    Exit();
  }
  else {
    alert("Please enter a number between 1 to 3."); // otherwise alert telling the user to only entered a number between 1 to 3.
  }
}

// Level 2
function UserName(name) { // function UserName(name){
  alert("\nHello " + name + "! This is Option 1.")  // 	display welcome message with name. 
  var LastName = prompt("Please enter your last name: ")//            initialize Lastname as a prompt, asking user to enter their      lastname
  name = name.charAt(0) + LastName// set name as the first character of the first name and combine with last name
  return name; // Return name
} // }

function Factorial() {// function Factorial(){
  alert("\n" + FirstName + ", you have selected Option 2") // dispaly the user they have selected option 2
  var number = Number(prompt("Please enter a number: ")); // Initialize number as a prompt and ask the user to enter a number
  number = parseInt(number); // parse prompted number to integer
  if (number > 1) { //                If number greater than zero
    var count = Number(number);   // Initialize count equal number
    var series = String(number); // Initialize series as a string
    var result = count;// Initialize result equal count
    do { // Loop until count equal and less than 1{
      count = count - 1; // Set count = count -1
      series = series + "*" + count; // Set series equal series + "*" + count
      result = result * count; // Set result equal result * count
    }
    while (count > 1) // repeat it till count is greater than 1
    // }
    alert("Result = " + series + " = " + result); // Display the final result like 5 * 4 * 3 * 2 * 1 = 120.

  }
  else if (number == 1) { // if number equals 1 
    alert("Result = 1") // display result = 1
  }
  else {
    alert("Enter a positive whole number greater than 0"); // Else print message “Enter a positive whole number greater than 0”
  }
} // }

function Exit() {  // Function Exit(){
  alert("\nGoodbye, " + FirstName + "!"); // 	Alert user goodbye
}

// 	}