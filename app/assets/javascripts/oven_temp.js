var oven_calc = function() { 
	var c = parseInt(document.getElementById('c_txt').value); 
	return document.getElementById("f_txt").value = Math.round(c * 9 / 5 + 32);
}

//function oven_calc() { 
//	var c = parseInt(document.getElementById('c_txt').value); 
//	var total
//	total = c * 9 / 5 + 32; 

//	var calc = Math.round(total);
//   document.getElementById("f_txt").value = calc;
//}
