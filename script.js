let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

// Factorial function
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                // Check if the string ends with a factorial symbol "!"
                if (string.endsWith('!')) {
                    let number = parseInt(string.slice(0, -1)); // Extract the number before "!"
                    if (isNaN(number)) {
                        input.value = 'Error'; // In case it's not a valid number
                    } else {
                        string = factorial(number); // Calculate the factorial
                        console.log('Factorial Result:', string); // Log the factorial result
                        alert('Factorial Result: ' + string); // Show factorial result in an alert
                    }
                } else {
                    string = eval(string); // Evaluate the expression if no factorial
                    console.log('Result:', string); // Log the result to the console
                    alert('Result: ' + string); // Show the result in an alert box
                }
                input.value = string;
            } catch (error) {
                console.error('Error:', error); // Log error if invalid expression
                alert('Error: Invalid Expression'); // Alert for invalid expression
                input.value = 'Error';
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (e.target.innerHTML == '!') {
            // Append "!" to the input string to indicate factorial operation
            string += '!';
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
