var result = 0;

var temp = 0;

var addClicked = false;

var SubtractClicked = false;

var MultiplyClicked = false;

var DivideClicked = false;

var decimalClick = false;

var numberClick = false;

var firstNumber= 0;

var subtract = 0;

var n=0;

var difference = 0;

var problem = [];

// function operation() {
// }

function multiply() {
        zero = 0;
        n = 0;
        MultiplyClicked = true;
        decimalClick = false;
        pushToProblem("*")
        console.log(problem);
        firstnumber();
        console.log(result);
        temp = 0;
}


function divide() {
        zero = 0;
        n = 0;
        DivideClicked = true;
        decimalClick = false;
        pushToProblem("/")
        firstnumber();
        console.log(result);
        temp = 0;
}

function add() {
        zero = 0;
        addClicked = true;
        decimalClick = false;
        n = 0;
        result = temp;
        pushToProblem("+");
        console.log(problem);
        temp=0;
}

function minus() {
        SubtractClicked = true;
        decimalClick = false;
        subtract++;
        console.log(subtract);
        console.log(result);
        console.log(temp);
        pushToProblem("-");

        if (result===0&&subtract===2) {
                difference -= temp;
                console.log(difference);
                result = difference;
                $("#display p").text(result);
        }

        if (result===0&&subtract>2) {
                difference -= temp;
                console.log(difference);
                $("#display p").text(difference);
        }
        if (result!==0) {
                result -= temp;
                console.log(result);
                $("#display p").text(result);
        }



        if (result===0&&subtract===1) {
                result += temp;
                console.log(result);
        }
        temp = 0;
}

function equal() {
        // operation();
        // if (problem.length > 3) {
                problem.push(temp);
                console.log(problem);
                falsify();
                operation = problem.join("");
                console.log(operation);
                console.log(eval(operation));
                result = eval(operation);
                console.log(result);
                problem = [];
                console.log(problem);
        // }

        // if (addClicked) {
        //         console.log(temp);
        //         result += temp;
        //         console.log(result);
        //         temp = 0;
        //         pushresult();
        //         console.log(problem);
        // }
        // if (MultiplyClicked) {
        //         result *= temp;
        //         console.log(result);
        //         temp = 0;
        //         pushresult();
        //         console.log(problem);
        // }
        // if (DivideClicked) {
        //         result /= temp;
        //         temp = 0;
        //         pushresult();
        //         console.log(problem);
        // }
        // if (SubtractClicked) {
        //         result -= temp;
        //         temp = 0;
        //         pushresult();
        //         console.log(problem);
        // }
        display(result);
        console.log(result);
        temp = result;
        falsify();
}

function minus() {
	SubtractClicked = true;
	decimalClick = false;
	subtract++;
	n=0;
	console.log(subtract);
	console.log(result);
	console.log(temp);
	pushToProblem("-")

	if (result===0&&subtract===2) {
		difference -= temp;
		console.log(difference);
		$("#display p").text(difference);
	}

	if (result===0&&subtract>2) {
		difference -= temp;
		console.log(difference);
		$("#display p").text(difference);
	}
	if (result!==0) {
                console.log(result);
                console.log(temp);
		result -= temp;
		console.log(result);
	}

	if (result===0&&subtract===1) {
		result += temp;
		console.log(result);
	}
	temp = 0;
}


function falsify() {
        addClicked = false;
        NumberClicked = false;
        MultiplyClicked = false;
        DivideClicked = false;
        SubtractClicked = false;
        decimalClick = false;
}

function changeSigns() {

        temp+= -(temp*2);    
        console.log(temp);
        display(temp);
}

function percent() {
        percentClick = true;
        temp/=100;
        console.log(temp);
        display(temp);
}

function addDecimal() {
        display(temp + ".");
        console.log(parseFloat(temp));
        decimalClick = true;
}

function clear() {
        $("#clear").text("AC");
        temp = 0;
        result = 0;
        subtract = 0;
        falsify();
        problem = [''];
        difference = 0;
        display(temp);
        decimalClick = false;
        n=0;
}

function display(content) {
        $("#display p").text(content);
}

function firstnumber() {
        if (result===0) {
        result += temp;
        temp = 0;
        }
}

function pushToProblem(operation) {
        problem.push(temp);
        problem.push(operation);
}

function pushresult() {
        problem = [];
        problem.push(result);
        }




