let o = prompt("1-Lab; 2-HW; Click on Enter to output")

while (o != 0) {
    
    if (o == 1) {
        let t = prompt("Choose task");
        if (t == 1) {
            console.log("Variables and data types");
            let userName = "Ivan";
            let userAge = 25;
            let hasDriverLicense = true;
    
            console.log("User name:", userName);
            console.log("User age:", userAge);
            console.log("Has a driver's license:", hasDriverLicense);
    
            console.log("Type of userName:", typeof userName);
            console.log("Type of userAge:", typeof userAge);
            console.log("Type of hasDriverLicense:", typeof hasDriverLicense);
    
        } else if (t == 2) {
            console.log("Number Comparison");
            let num1 = prompt("Enter the first number:");
            let num2 = prompt("Enter the second number:");
    
            num1 = Number(num1);
            num2 = Number(num2);
    
            if (num1 > num2) {
                console.log("The first number is larger:", num1);
            } else if (num1 < num2) {
                console.log("The second number is larger:", num2);
            } else {
                console.log("The numbers are equal");
            }
    
        } else if (t == 3) {
            console.log("Logical operators");
            let age = 20;
            let hasDriverLicense = true;
            let isStudent = true;
    
            if (age >= 18 && hasDriverLicense) {
                console.log("Allowed to drive");
            } else if (isStudent && !hasDriverLicense) {
                console.log("Need to get a license");
            } else {
                console.log("Not allowed to drive");
            }
    
        } else if (t == 4) {
            console.log("Simple calculator");
            let num1 = Number(prompt("Enter the first number:"));
            let num2 = Number(prompt("Enter the second number:"));
            let operator = prompt("Enter an operator (+, -, *, /):");
    
            switch (operator) {
                case '+':
                    console.log("Result:", num1 + num2);
                    break;
                case '-':
                    console.log("Result:", num1 - num2);
                    break;
                case '*':
                    console.log("Result:", num1 * num2);
                    break;
                case '/':
                    if (num2 !== 0) {
                        console.log("Result:", num1 / num2);
                    } else {
                        console.log("Error: division by zero");
                    }
                    break;
                default:
                    console.log("Unknown operator");
            }
    
        } else if (t == 5) {
            console.log("Checking for parity");
            let number = prompt("Enter a number:");
    
            if (number % 2 === 0) {
                console.log("Even");
            } else {
                console.log("Odd");
            }
    
        } else if (t == 6) {
            console.log("Password Check");
            let storedPassword = "myPassword123";
            let inputPassword = prompt("Enter the password:");
    
            if (inputPassword === storedPassword) {
                console.log("Access granted");
            } else {
                console.log("Invalid password");
            }
    
        } else if (t == 7) {
            console.log("Checking the season");
            let month = Number(prompt("Enter the month number (from 1 to 12):"));
    
            if (month === 12 || month === 1 || month === 2) {
                console.log("Winter");
            } else if (month >= 3 && month <= 5) {
                console.log("Spring");
            } else if (month >= 6 && month <= 8) {
                console.log("Summer");
            } else if (month >= 9 && month <= 11) {
                console.log("Autumn");
            } else {
                console.log("Invalid month");
            }
    
        } else if (t == 8) {
            console.log("Checking the age");
            let age = Number(prompt("Enter your age:"));
    
            if (age < 18) {
                console.log("You are a teenager");
            } else if (age >= 18 && age <= 64) {
                console.log("You are an adult");
            } else if (age >= 65) {
                console.log("You are a senior");
            }
    
        } else if (t == 9) {
            console.log("Switch operator");
            let day = prompt("Enter the day of the week:").toLowerCase();
    
            switch (day) {
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday":
                    console.log("Weekday");
                    break;
                case "saturday":
                case "sunday":
                    console.log("Weekend");
                    break;
                default:
                    console.log("Invalid input");
            }
    
        } else if (t == 10) {
            console.log("Conditional (ternary) operator");
            let temperature = Number(prompt("Enter the temperature:"));
    
            let result = (temperature < 0) ? "Cold" : "Warm";
            console.log(result);
    
        } else {
            console.log("Error, Try to reload to try again");
        }
    }
    else if (o == 2) {
        let t = prompt("Choose task");
        if (t == 1) {
            console.log("Determine the maximum of two numbers");
            let n1 = prompt("First number");
            let n2 = prompt("Second number");
            if (n1 == n2) {
                console.log("Equal");
            } else if (n1 > n2) {
                console.log(n1);
            } else {
                console.log(n2);
            }
        } else if (t == 2) {
            console.log("Range Check");

            let nHW2 = prompt("Input number");
            if (nHW2 >= 10 && nHW2 <= 20) {
                console.log("In range");
            } else {
                console.log("Out range");
            }
        } else if (t == 3) {
            console.log("Simple time of day message");

            let nHW3 = prompt("Input the time");
            if (nHW3 >= 0 && nHW3 <= 5) {
                console.log("Night");
            }
            else if (nHW3 >= 6 && nHW3 <= 11) {
                console.log("Morning");
            }
            else if (nHW3 >= 12 && nHW3 <= 17) {
                console.log("Day");
            }
            else if (nHW3 >= 18 && nHW3 <= 23) {
                console.log("Evening");
            } else {
                console.log("Incorrect");
            }
        } else if (t == 4) {
            console.log("Numbers from 1 to N");
            let nHW4 = prompt("Enter number");
            for (let i = 1; i <= nHW4; i++) {
                console.log(i);
            }
        } else if (t == 5) {
            console.log("Age verification for movie");

            let nHW5 = prompt("Enter age");
            if (nHW5 >= 0 && nHW5 <= 12) { console.log("We recommend children's movies"); }
            else if (nHW5 >= 13 && nHW5 <= 17) { console.log("We recommend teen movies"); }
            else if (nHW5 == 22) {
                console.log("You're Maxim");
            }
            else if (nHW5 >= 18 && nHW5 != 22) { console.log("We recommend documentaries"); }
            else { }
        } else if (t == 6) {
            console.log("Sum of even number");
            let nHW6 = prompt("Enter number")
            let sum = 0;
            for (let i = 1; i <= nHW6; i++) {
                if (i % 2 == 0) {
                    sum += i;
                }
            } console.log(sum)
        } else if (t == 7) {
            console.log("Comparison of three numbers");
            nHW7 = prompt("First number")
            n1HW7 = prompt("Second number")
            n2HW7 = prompt("Last number")
            if (nHW7 == n1HW7 && nHW7 == n2HW7) {
                console.log("All equal");
            }
            else if (nHW7 == n1HW7 || nHW7 == n2HW7 || n1HW7 == n2HW7) {
                console.log("One of the numbers is different");
            } else {
                console.log("All numbers is different");
            }
        } else if (t == 8) {
            console.log("Multiplication table by 5");

            for (let i = 1; i <= 10; i++) {
                console.log(5*i);
            }
        } else if(t==9){
            console.log("Elevation to a degree");
            let nHW9 = prompt("Enter number")
            let n1HW9 = prompt("Enter degree")
            let t=nHW9;
            for (let i = 0; i<n1HW9; i++) {
                nHW9*=t;
            }console.log(nHW9);
        }else if(t==10){
            console.log("Countdown");
            let nHW10 = prompt("Enter number")
            for (let i = nHW10; i >= 1; i--) {
                console.log(i);
            }
        }else{
            console.log("Incorrect");
        }
    } else if (o == 0) {
        alert("Bye");
    }
    else {
        alert("Incorrect");
    }
    o = prompt("1-Lab; 2-HW")
}

