function toggle() {
  var x = document.getElementById("unit_conversions_div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

var distance_input = document.getElementById("distance_conversion_input");
var distance_units = document.getElementById("distance_units");
var distance_output = document.getElementById("distance_conversion_output");
var year = document.getElementById("year");
var month = document.getElementById("month");
var day = document.getElementById("day");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var time_output = document.getElementById("time_conversion_output");
var mass_input = document.getElementById("mass_conversion_input");
var mass_units = document.getElementById("mass_units");
var mass_output = document.getElementById("mass_conversion_output");

function isEmptyString(str) {
  return str.length === 0;
}

function EmptyString_to_0(str){
  if(isEmptyString(str)){
    return 0;
  }
  else{
    return str;
  }
}

function update_distance_input() {
  var distance_input_value = EmptyString_to_0(distance_input.value);
  var output;
  switch (distance_units.value) {
    case "km":
      output = distance_input_value * 1000;
      break;
    case "au":
      output = distance_input_value * 149597870700;
      break;
    case "ly":
      output = distance_input_value * 9460730472580800;
      break;
    case "pc":
      output = distance_input_value * ((648000/Math.PI) * 149597870700);
      break;
  }
  distance_output.value = output;
}

function update_distance_units() {
  update_distance_input();
}

//-----------------------------//

function update_year() {
  update_time_output()
}

function update_month() {
  update_time_output()
}

function update_day() {
  update_time_output()
}

function update_hour() {
  update_time_output()
}

function update_minute() {
  update_time_output()
}

function update_second() {
  update_time_output()
}

function day_to_sec(d){
  return d * 86400;
}

function update_time_output(){
  var year_value = EmptyString_to_0(year.value);
  var month_value = EmptyString_to_0(month.value);
  var day_value = EmptyString_to_0(day.value);
  var hour_value = EmptyString_to_0(hour.value);
  var minute_value = EmptyString_to_0(minute.value);
  var second_value = EmptyString_to_0(second.value);
  var output = day_to_sec(year_value * 365.2425) + day_to_sec(month_value * 30.436875) + day_to_sec(day_value) + (3600 * hour_value) + (60 * minute_value) + (1*second_value);
  time_output.value = output;
}

//-----------------------------//

function update_mass_input() {
  var mass_input_value = EmptyString_to_0(mass_input.value);
  var output;
  switch (mass_units.value) {
    case "M☉":
      output = mass_input_value * 1.98847*(10**30);
      break;
    case "MJ":
      output = mass_input_value * 1.89813*(10**27);
      break;
    case "M🜨":
      output = mass_input_value * 5.9722*(10**24);
      break;
    case "M☾":
      output = mass_input_value * 7.342*(10**22);
      break;
  }
  mass_output.value = output;
}

function update_mass_units() {
  update_mass_input();
}
