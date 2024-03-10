var output = [];
var number = 1
function fizzbuzz() {


    while (number <= 100) {
        if (number % 3 === 0 && number % 5 === 0) {
            output.push("fizzbuzz");
        }
        else if (number % 3 === 0) {
            output.push("fizz");
        }
        else if (number % 5 === 0) {
            output.push("buzz")
        }
        else {
            output.push(number);
        }
        number++;
    }


    console.log(output);
}

fizzbuzz();

