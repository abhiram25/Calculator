var value = [0];
var result = 0;	

var answer = [];

var number = parseFloat(value.join(""));


$(".number").click(function() {
	result = 0;
	$("#display").text(result);
	$("#clear").text("C");
	var digit = $(this).val();
	value.push(digit);
	var number = parseFloat(value.join(""));
	console.log(number);
	value.join("");
	console.log(value);
	$("#display").text(number);
});

$("#clear").click(function() {
	$("#clear").text("AC");
	result = 0;
	value = [];
	answer = []
	$("#display").text(result);
});

$("#dot").click(function() {
	value.push($("#dot").val());
	var number = parseFloat(value.join(""));
	$("#display").append(".");
	console.log(number);

		if (value.prototype.Contains(".")) {
			alert("decimal present");
		}
});

$("#percent").click(function() {
	var number = parseFloat(value.join(""));
	value = [];
	number /= 100;
	console.log(number);
	value.push(number);
	console.log(value);
	$("#display").text(value);
});

$("#plusminus").click(function() {
	var number = parseFloat(value.join(""));
	value = [];
	number -= (number*2);
	console.log(number);
	value.push(number);
	console.log(value);
	$("#display").text(value);
});


$("#equal").click(function() {
	answer.push(number);
	var number = parseFloat(value.join(""));
	console.log(number);
	result += number;
	console.log(result);
	$("#display").text(result);
	answer = [];
	answer.push(result);
	console.log(parseFloat(answer.join("")));
	value = [];
 });


// operations

$("#add").click(function() {
	var number = parseFloat(value.join(""));
	console.log(number);
	value = [];
	answer.push(number);
	console.log(answer);
	var result = answer[0];
	console.log(result);

	for (var i = 1; i < answer.length; i++) {
		result += answer[i];
	}
	console.log(result);
	$("#display").text(result);

});


