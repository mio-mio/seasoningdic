/*
function check()
{
	txt = document.myFORM.num.value;
	data = txt.match(/[^0-9]/g);
	if (data) alert("数値以外が含まれています みたいな感じ。正規表現");
}
*/

function calc() { 
	var value1 = parseInt(document.getElementById('moto_watt').value); 
	var value2 = parseInt(document.getElementById('real_watt').value); 
	var value3 = parseInt(document.getElementById('moto_time').value); 
	var total
	total = value1 * value3 / value2; 

	var calc = Math.round(total);
    document.getElementById("real_time").value = calc;
}