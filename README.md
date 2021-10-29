# Mr. Robogers

## By:
Isaac Overstreet

## Description:
This application was made to certain numbers into words such as "Beep!" "Boop!" and "Won't you be my neighbor?".
This is how a robot (Mr. Rogers as a robot) would talk.
Put in a number up to 40 and it will return with the correct wording.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Setup/Installation Requirements
1. Navigate to https://github.com/mrunderoad/mrrobogers
2. Clone or Fork the repository onto your local machine.
3. Enter the folder and click on the index.html file to view in your browser.

## Known Bugs

The only bug i have found is that after number 40 it stops working. I believe it is because 4 is higher that 3 so it cannot replace the number.

## License
MIT licensing @https://opensource.org/licenses/MIT

Copyright (c) 10/29/2021 Isaac Overstreet

### Describe: beepBoop()

Test: It should check for a 1 and return it as 'Beep!'
Code: "1"
Expected output: "Beep!"

Test: It should check for a 2 and return it as 'Boop!'
Code: "2"
Expected output: "Boop!"

Test: It should check for a 3 and return it as 'Won't you be my neighbor?'
Code: "3"
Expected output: "Won't you be my neighbor?"

Test: If user inputs 5 it will display (0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5)
Code: "5"
Expected output: "0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5"

Test: If user inputs 13, 21, 32 ect. it results in the correct names.
Code: "12, 21, or 32"
Expected Output: "Boop!", "Boop!", "Won't you be my neighbor"

Test: Make program get all numbers working correctly up to 40. 
Code: "10"
Expected output: "0, Beep!, Boop!, Won't you be my neighbor?, 5, 6, 7, 8, 9, Beep!" etc... to 40.