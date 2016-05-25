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


$(".number").click(function() {
	$("#clear").text("C");
	if (decimalClick===false) {
	temp = (temp * 10);
	temp += parseFloat($(this).val());
	console.log(temp);
	$("#display p").text(temp);
} else {
	console.log(n);
	console.log(decimalClick);
	if (numberClick = true) {
	n++;
}


	temp += ($(this).val()/Math.pow(10,n));
	console.log(temp);
	$("#display p").text(temp);
}


});

$("#clear").click(function() {
	$("#clear").text("AC");
	temp = 0;
	result = 0;
	subtract = 0;
	decimalClick = false;
	DivideClicked = false;
	SubtractClicked = false;
	addClicked = false;
	MultiplyClicked = false;
	numberClick = false;
	problem = [''];
	$("#display p").text(temp);
});

//Display a zero every time it is clicked, while decimalClick is true.

$("#dot").click(function() {

	$("#display p").text(temp + ".");
	console.log(parseFloat(temp));
	decimalClick = true;
});


$("#percent").click(function() {
	percentClick = true;
	temp/=100;
	console.log(temp);
	$("#display p").text(temp);
});

$("#plusminus").click(function() {
	temp+= -(temp*2);
	console.log(temp);
	$("#display p").text(temp);
});


$("#equal").click(function() {

	if (problem.length > 3) {
		problem.push(temp);
		console.log(problem);
		addClicked = false;
		MultiplyClicked = false;
		DivideClicked = false;
		SubtractClicked = false;
		operation = problem.join("");
		console.log(operation);
		console.log(eval(operation));
		result = eval(operation);
		console.log(result);
		problem = [];
		problem.push(result);
	}

	if (addClicked===true) {
		result += temp;
		console.log(result);
		temp = 0;
		problem = [];
		problem.push(result);
		console.log(problem);
	}
	if (MultiplyClicked === true) {
		result *= temp;
		console.log(result);
		temp = 0;
		problem = [];
		problem.push(result);
		console.log(problem);
	}
	if (addClicked===true) {
		result += temp;
	}


	if (DivideClicked === true) {
		result /= temp;
		temp = 0;
		problem = [];
		problem.push(result);
		console.log(problem);
	}
	if (SubtractClicked === true) {
		result -= temp;
		temp = 0;
		problem = [];
		problem.push(result);
		console.log(problem);
	}

	
	$("#display p").text(result);
	console.log(result);
	temp = result;
	result = 0;
	addClicked = false;
	NumberClicked = false;
	MultiplyClicked = false;
	DivideClicked = false;
	SubtractClicked = false;
	decimalClick = false;
 });


// operations

$("#add").click(function() {
	zero = 0;
	addClicked = true;
	decimalClick = false;
	n = 0;
	result += temp;
	console.log(result);
	problem.push(temp);
	problem.push("+");
	console.log(problem);
	temp=0;

	
});

$("#subtract").click(function() {
	SubtractClicked = true;
	decimalClick = false;
	subtract++;
	console.log(subtract);
	console.log(result);
	console.log(temp);
	problem.push(temp);
	problem.push("-");

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
		result -= temp;
		console.log(result);
		$("#display p").text(result);
	}

	

	if (result===0&&subtract===1) {
		result += temp;
		console.log(result);
	}


	temp = 0;

	if (MultiplyClicked===true) {
		difference -= temp;
		console.log(difference);
	}



});

$("#multiply").click(function() {
	zero = 0;
	n = 0;
	MultiplyClicked = true;
	decimalClick = false;
	problem.push(temp);
	problem.push("*");
	console.log(problem);
	if (result===0) {
	result += temp;
	temp = 0;
	} 
	// else {
	// // 	result*=temp;
	// // 	$("#display p").text(result);
	// // }


	if (subtract===1) {
		difference -= temp;
		console.log(difference);
	}

	console.log(result);
	temp = 0;
});

$("#divide").click(function() {
	zero = 0;
	n = 0;
	DivideClicked = true;
	decimalClick = false;
	problem.push(temp);
	problem.push("/");

	if (result===0) {
	result += temp;
	temp = 0;
	} 
	// else {
	// 	result/=temp;
	// 	$("#display p").text(result);
	// }


	console.log(result);
	temp = 0;

	});



