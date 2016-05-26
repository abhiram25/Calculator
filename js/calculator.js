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
	clear();
});

//Display a zero every time it is clicked, while decimalClick is true.

$("#dot").click(function() {
	addDecimal();
});


$("#percent").click(function() {
 	percent();
});

$("#plusminus").click(function() {
	changeSigns();
});


$("#equal").click(function() {
	equal();
});

$("#add").click(function() {
 	add();
});

$("#subtract").click(function() {
	minus();
});
	
$("#multiply").click(function() {
	multiply();
});

$("#divide").click(function() {
	divide();
	});

$("#equal").click(function() {
	equal();
 });







