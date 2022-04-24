Describe: createAnArray();

Test: "It should to return a number of range(number is expected more than 0)."
Code: 
const ArrayLength = number;
createAnArray(number);
Expected Output: N


Test: "Should return an array in range of number that user enetered."
Code:
const ArrayLength = 4;
createAnArray(4);
Expected Output:[0,1,2,3,4]

Describe: replaceSpecialNumbers();

Test:"Take a created array and transform it to array of strings."
Code:
var a = arr.toString().split(",");
Expected output: ["0", "1", "2", "3", "4"]

Test: "Move through the array of strings and replace '3'."
Code:
for (let i=0; i<=a.length-1; i+=1){
  if(a[i].includes("3")){
    newArray.push("Won't you be my neighbor!");
  } 
Expected output: ["0", "1", "2", "Won't you be my neighbor!", "4"]

Test: "Move through the array of strings and replace '2'."
Code:  
else if(a[i].includes("2")){
  newArray.push("Boo!");
} 
Expected output:["0", "1", "Boo!", "Won't you be my neighbor!", "4"]

Test: "Move through the array of strings and replace '1'."
Code:    
else if(a[i].includes("1")){
  newArray.push("Beep!");
}
Expected output: ["0", "Beep!", "Boo!", "Won't you be my neighbor!", "4"]

Test: "Pushing the symbol into array that don't need to be replaced."

Code:
else if((a[i].includes("3")=== false)&&(a[i].includes("2") === false) && (a[i].includes("1") === false)) {
  newArray.push(a[i]);
}
Expected output: ["0", "Beep!", "Boo!", "Won't you be my neighbor!", "4"]


# _Mr. Roboger's Neighborhood_

#### Authored by: _**Liliia Kryvelova**_

https://github.com/liliia87/project3.git

#### _An application that takes the number from the user and returnsa range of numbers from 0 to the user inputted number with the certain subtitutions._

## Technologies Used
*_Html_
*_JQuery_
*_JavaScript_

## Description

_The web applications has a user input, where user can insert the number for the length of array;_
_Next step is "Click" on the button;_
_The web application will return a range of numbers from 0 to the user's inputted number with the replaced numbers._

## Setup/Installation Requirements

*_Clone this git on your local computer_
*_For clonning: use button Clone -> from repository._
*_Copy the clone command(SSH format or HTTPS)._
*_From a terminal on your local computer, use command "cd" to find the directory where you want to clone this repository._
*_Type the command ($ git clone HTTPs)._
*_If you clone successfully , a new sub-directory appears on your local computer._
*_In the directory you will find(index.html, folder->css, folder->js)._
*_Run the index.html (double click on it and the page should appear in web browser)._
*_If you are willing to debug or change something in the project, the best way is to open it through the VisuaStudio._


## Known Bugs

*_For now, there aren't known bugs_

## License

_contact lilia.krivelyova@gmail.com_
