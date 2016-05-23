var result = 0;

var temp = 0;

var addClicked = false;

var SubtractClicked = false;

var MultiplyClicked = false;

var DivideClicked = false;

var decimalClick = false;

var numberClick = false;

var firstNumber= 0;

var zeroClicked = false;


var n=0;

$(".number").click(function() {
	$("#clear").text("C");
	if (decimalClick===false) {
	temp = (temp * 10);
	temp += parseFloat($(this).val());
	console.log(temp);
	$("#display").text(temp);
} else {
	console.log(n);
	console.log(decimalClick);
	if (numberClick = true) {
	n++;
}


	temp += ($(this).val()/Math.pow(10,n));
	console.log(result);
	console.log(temp);
	$("#display").text(temp);
}

});

$("#clear").click(function() {
	$("#clear").text("AC");
	temp = 0;
	result = 0;
	decimalClick = false;
	DivideClicked = false;
	SubtractClicked = false;
	addClicked = false;
	MultiplyClicked = false;
	numberClick = false;
	$("#display").text(temp);
});

$("#dot").click(function() {
	$("#display").text(temp + ".");
	console.log(parseFloat(temp));
	decimalClick = true;

});

$("#percent").click(function() {
	percentClick = true;
	temp/=100;
	console.log(temp);
	$("#display").text(temp);
});

$("#plusminus").click(function() {
	temp+= -(temp*2);
	console.log(temp);
	$("#display").text(temp);
});


$("#equal").click(function() {
	if (addClicked===true) {
		result += temp;
	}
	if (MultiplyClicked === true) {
		result *= temp;
	}
	if (DivideClicked === true) {
		result /= temp;
	}
	if (SubtractClicked === true) {
		result -= temp;
	}
	console.log(result);
	$("#display").text(result);
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
	addClicked = true;
	decimalClick = false;
	console.log(n);
	n = 0;
	console.log(n);
	result += temp;
	console.log(result);
	temp=0;
	$("#display").text(result);
});

$("#subtract").click(function() {
	SubtractClicked = true;
	decimalClick = false;

	if (result===0) {
		firstNumber += temp;
		result = firstNumber;
		firstNumber = 0;
		temp = 0;
	}

	result -= temp;
	$("#display").text(result);
	console.log(result);
});

$("#multiply").click(function() {
	MultiplyClicked = true;
	decimalClick = false;
	if (result===0) {
	result += temp;
	temp = 0;
	} else {
		result*=temp;
		$("#display").text(result);
	}



	console.log(result);
	temp = 0;
});

$("#divide").click(function() {
	DivideClicked = true;
	decimalClick = false;

	if (result===0) {
	result += temp;
	temp = 0;
	} else {
		result/=temp;
		$("#display").text(result);
	}


	console.log(result);
	temp = 0;

	});


