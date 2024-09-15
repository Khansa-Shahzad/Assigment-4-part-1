function power(a, b) {
    // Handle negative exponents
    if (b < 0) {
        return 1 / power(a, -b);
    }
    
    // Base cases
    if (b === 0) {
        return 1;
    }
    if (b === 1) {
        return a;
    }
    
    // Recursive case
    const halfPower = power(a, Math.floor(b / 2));
    if (b % 2 === 0) {
        return halfPower * halfPower;
    } else {
        return halfPower * halfPower * a;
    }
}

// Example usage
console.log(power(2, 3));  // Output: 8
console.log(power(5, -2)); // Output: 0.04
console.log(power(3, 0));  // Output: 1
console.log(power(2, 10)); // Output: 1024

function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is also divisible by 100
        if (year % 100 === 0) {
            // Check if the year is divisible by 400
            if (year % 400 === 0) {
                return true; // Divisible by 400, hence a leap year
            } else {
                return false; // Divisible by 100 but not by 400, hence not a leap year
            }
        } else {
            return true; // Divisible by 4 but not by 100, hence a leap year
        }
    } else {
        return false; // Not divisible by 4, hence not a leap year
    }
}

// Example usage
console.log(isLeapYear(2024)); // Output: true (2024 is a leap year)
console.log(isLeapYear(1900)); // Output: false (1900 is not a leap year)
console.log(isLeapYear(2000)); // Output: true (2000 is a leap year)
console.log(isLeapYear(2023)); // Output: false (2023 is not a leap year)

function calculateTriangleArea(a, b, c) {
    // Calculate the semi-perimeter
    const S = (a + b + c) / 2;

    // Check if the sides form a valid triangle
    if (a + b > c && a + c > b && b + c > a) {
        // Calculate the area using Heron's formula
        const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
        return area;
    } else {
        // If the sides do not form a valid triangle, return an error message
        return 'The given sides do not form a valid triangle.';
    }
}

// Example usage
console.log(calculateTriangleArea(3, 4, 5)); // Output: 6
console.log(calculateTriangleArea(5, 5, 5)); // Output: 10.825317547305485
console.log(calculateTriangleArea(1, 2, 3)); // Output: The given sides do not form a valid triangle.

// Function to calculate the average of marks
function calculateAverage(marks) {
    const total = marks.reduce((acc, mark) => acc + mark, 0);
    return total / marks.length;
}

// Function to calculate the percentage of marks
function calculatePercentage(marks) {
    const total = marks.reduce((acc, mark) => acc + mark, 0);
    const maximumMarks = 300; // Assuming each subject is out of 100
    return (total / maximumMarks) * 100;
}

// Main function
function main() {
    // Example marks; you can change these values as needed
    const marks = [85, 90, 78];
    
    // Ensure there are exactly 3 subjects
    if (marks.length !== 3) {
        console.log("Please enter marks for exactly 3 subjects.");
        return;
    }

    // Calculate average and percentage
    const average = calculateAverage(marks);
    const percentage = calculatePercentage(marks);

    // Display the results
    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
}

// Call the main function to execute
main();

//custom function to find the index of a single character in a string
function customIndexOf(str, char) {
    //check if the input is valid 
    if (typeof str !== 'string' || typeof char !== 'string' || char.length !== 1 ) {
        throw new Error('Invalid input: str should be a string and char should be a single character')
    }

    //Iterate over the string to find the character
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;// Return the index of the first occurance
        }
    }
}
// Example usage
console.log(customIndexOf('hello world', 'o')); // Output: 4
console.log(customIndexOf('hello world', 'x')); // Output: -1
console.log(customIndexOf('test', 't'));        // Output: 0

function removeVowels(sentence) {
    // Ensure the input is a string and its length is not more than 25 characters
    if (typeof sentence !== 'string' || sentence.length > 25) {
        throw new Error('Input must be a string with a maximum length of 25 characters.');
    }
    
    // Define a regular expression to match all vowels (both uppercase and lowercase)
    const vowels = /[aeiouAEIOU]/g;
    
    // Replace all vowels with an empty string
    const result = sentence.replace(vowels, '');
    
    return result;
}

// Example usage
console.log(removeVowels('Hello World'));  // Output: "Hll Wrld"
console.log(removeVowels('JavaScript'));   // Output: "JvScrpt"
console.log(removeVowels('AEIOU'));         // Output: ""
console.log(removeVowels('Test String'));   // Output: "Tst Strng"


function countConsecutiveVowels(text) {
    // Define a regular expression to find consecutive vowel pairs
    const vowels = 'aeiou';
    let count = 0;

    // Convert the text to lowercase to handle case insensitivity
    text = text.toLowerCase();

    // Iterate through the text to find consecutive vowel pairs
    for (let i = 0; i < text.length - 1; i++) {
        const char1 = text[i];
        const char2 = text[i + 1];

        // Check if both characters are vowels
        if (vowels.includes(char1) && vowels.includes(char2)) {
            count++;
        }
    }

    return count;
}

// Example usage
console.log(countConsecutiveVowels('please read this application and give me gratuity')); // Output: 3

function countConsecutiveVowels(text) {
    const vowels = 'aeiou';
    let count = 0;

    text = text.toLowerCase();

    for (let i = 0; i < text.length - 1; i++) {
        const pair = text.slice(i, i + 2);

        switch (pair) {
            case 'aa':
            case 'ae':
            case 'ai':
            case 'ao':
            case 'au':
            case 'ea':
            case 'ee':
            case 'ei':
            case 'eo':
            case 'eu':
            case 'ia':
            case 'ie':
            case 'ii':
            case 'io':
            case 'iu':
            case 'oa':
            case 'oe':
            case 'oi':
            case 'oo':
            case 'ou':
            case 'ua':
            case 'ue':
            case 'ui':
            case 'uo':
            case 'uu':
                count++;
                break;
        }
    }

    return count;
}

// Example usage
console.log(countConsecutiveVowels('please read this application and give me gratuity')); // Output: 3


// Function to convert kilometers to meters
function kilometersToMeters(kilometers) {
    return kilometers * 1000;
}

// Function to convert kilometers to feet
function kilometersToFeet(kilometers) {
    return kilometers * 3280.84;
}

// Function to convert kilometers to inches
function kilometersToInches(kilometers) {
    return kilometers * 39370.1;
}

// Function to convert kilometers to centimeters
function kilometersToCentimeters(kilometers) {
    return kilometers * 100000;
}

// Main function to handle input and output
function convertDistance() {
    // Input distance in kilometers
    const kilometers = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

    // Validate the input
    if (isNaN(kilometers) || kilometers < 0) {
        console.log("Please enter a valid positive number for kilometers.");
        return;
    }

    // Perform conversions
    const meters = kilometersToMeters(kilometers);
    const feet = kilometersToFeet(kilometers);
    const inches = kilometersToInches(kilometers);
    const centimeters = kilometersToCentimeters(kilometers);

    // Print results
    console.log(`Distance in meters: ${meters}`);
    console.log(`Distance in feet: ${feet}`);
    console.log(`Distance in inches: ${inches}`);
    console.log(`Distance in centimeters: ${centimeters}`);
}

// Call the main function to execute
convertDistance();


// Function to calculate overtime pay
function calculateOvertimePay(hoursWorked) {
    const regularHours = 40;
    const overtimeRate = 12.00;

    if (hoursWorked > regularHours) {
        // Calculate the number of overtime hours
        const overtimeHours = hoursWorked - regularHours;
        // Calculate the overtime pay
        const overtimePay = overtimeHours * overtimeRate;
        return overtimePay;
    } else {
        // No overtime pay if hours worked is 40 or less
        return 0;
    }
}

// Main function to handle input and output
function main() {
    // Input hours worked
    const hoursWorked = parseInt(prompt("Enter the number of hours worked by the employee:"));

    // Validate the input
    if (isNaN(hoursWorked) || hoursWorked < 0) {
        console.log("Please enter a valid positive number for hours worked.");
        return;
    }

    // Calculate overtime pay
    const overtimePay = calculateOvertimePay(hoursWorked);

    // Print the result
    console.log(`Overtime Pay: Rs ${overtimePay.toFixed(2)}`);
}

// Call the main function to execute
main();


// Function to calculate the number of currency notes for a given amount
function calculateNotes(amount) {
    // Define note denominations
    const notes = {
        100: 0,
        50: 0,
        10: 0
    };

    // Calculate the number of 100 rupee notes
    notes[100] = Math.floor(amount / 100);
    amount %= 100;

    // Calculate the number of 50 rupee notes
    notes[50] = Math.floor(amount / 50);
    amount %= 50;

    // Calculate the number of 10 rupee notes
    notes[10] = Math.floor(amount / 10);
    amount %= 10;

    // Check if there is any remaining amount that cannot be given in 10 rupee notes
    if (amount > 0) {
        return "The amount cannot be fully represented with the available denominations.";
    }

    return notes;
}

// Main function to handle input and output
function main() {
    // Input amount in hundreds
    const amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):")) * 100;

    // Validate the input
    if (isNaN(amount) || amount <= 0) {
        console.log("Please enter a valid positive number for the amount.");
        return;
    }

    // Calculate the number of notes needed
    const notes = calculateNotes(amount);

    // Print the result
    if (typeof notes === 'string') {
        console.log(notes);
    } else {
        console.log(`Number of 100 rupee notes: ${notes[100]}`);
        console.log(`Number of 50 rupee notes: ${notes[50]}`);
        console.log(`Number of 10 rupee notes: ${notes[10]}`);
    }
}

// Call the main function to execute
main();




function showAlert(imageName) {
    alert('Thanks for purchasing a mobile from us ' + imageName);
}



document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    let counterValue = 0;

    const updateCounter = () => {
        counterElement.textContent = counterValue;
    };

    document.getElementById('increase').addEventListener('click', () => {
        counterValue += 1;
        updateCounter();
    });

    document.getElementById('decrease').addEventListener('click', () => {
        counterValue -= 1;
        updateCounter();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.getElementById('interactive-image');

    // URLs of images
    const firstImageSrc = 'path/to/first-image.jpg';
    const secondImageSrc = 'path/to/second-image.jpg';

    // Set up event listeners
    imageElement.addEventListener('mouseover', () => {
        imageElement.src = secondImageSrc;
    });

    imageElement.addEventListener('mouseout', () => {
        imageElement.src = firstImageSrc;
    });
});

