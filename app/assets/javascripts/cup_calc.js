//一度、ｍｌに換算してから表示させる。
//国を選択すればそれぞれの換算ページになるように条件分岐させる。
//曜日取得
//var countries = document.getElementById('city_id_1', 'city_id_2');

//条件分岐
//switch (countries) {
// case same
// when 'city_id_1' == 'city_id_2' then
//  alert("Choose another country"); break;
  
//  case 1: document.write("今日は月曜日です！"); break;
//  case 2: document.write("今日は火曜日です！"); break;
//  case 3: document.write("今日は水曜日です！"); break;
//  case 4: document.write("今日は木曜日です！"); break;
//  case 5: document.write("今日は金曜日です！"); break;
//  default : document.write("今日は土曜日です！"); break;
//}

function calculate(){

	// cups
	var cupsCalc = parseInt(document.getElementById('cups_jp').value); 
	document.getElementById("cups").value = cupsCalc / 200 * 236.6;
    document.getElementById("cups_fl_oz").value = cupsCalc / 200 * 236.6 * 8;
    document.getElementById("cups_pints").value = cupsCalc / 200 * 236.6 / 2;
    document.getElementById("cups_quarts").value = cupsCalc / 200 * 236.6 / 4;
	document.getElementById("cups_milliliters").value = cupsCalc * 236.6;
	document.getElementById("cups_liters").value = cupsCalc * 236.6 / 1000;
    
    //table spoon
    var tablespoonCalc = parseInt(document.getElementById('tablespoons_jp').value); 
	document.getElementById("tablespoons").value = tablespoonCalc;
	document.getElementById("tablespoons_milliliters").value = tablespoonCalc * 15;
	document.getElementById("tablespoons_liters").value = tablespoonCalc * 15 / 1000;
	
    //tea spoon
    var teaspoonCalc = parseInt(document.getElementById('teaspoons_jp').value); 
	document.getElementById("teaspoons").value = teaspoonCalc;
	document.getElementById("teaspoons_milliliters").value = teaspoonCalc * 5;
	document.getElementById("teaspoons_liters").value = teaspoonCalc * 5 / 1000;
	
    //cc ml
    var ccmlCalc = parseInt(document.getElementById('milliliters_jp').value); 
	document.getElementById("milliliters_fluid_ounces").value = ccmlCalc * 29.5735296;
	document.getElementById("milliliters_pints").value = ccmlCalc * 473.176473;
	document.getElementById("milliliters_jiggers").value = ccmlCalc * 44.3602943;
	document.getElementById("milliliters_gills").value = ccmlCalc * 118.294118;
	
    //liters
    var litersCalc = parseInt(document.getElementById('milliliters_jp').value); 
	document.getElementById("liters_quarts").value = litersCalc * 946.352946 / 1000;
	document.getElementById("liters_gallons").value = litersCalc * 3.78541178;
    
}



// After window finishes loading, we set the event handlers
//window.onload = function() {
//  document.getElementById('calculate_button').onclick = anyrecipe.volume_converter.calculate;
//  document.getElementById('toggle_button').onclick = anyrecipe.volume_converter.toggle_numbers;
//  document.getElementById('clear_button').onclick = alert('onclick2');
//  anyrecipe.volume_converter.bind_all_inputs();
//  anyrecipe.volume_converter.initialize();
//};
