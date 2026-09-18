function toggle() {
  let x = document.getElementById("unit_conversions_div");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

let distance_input = document.getElementById("distance_conversion_input");
let distance_units = document.getElementById("distance_units");
let distance_output = document.getElementById("distance_conversion_output");
let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let time_output = document.getElementById("time_conversion_output");
let mass_input = document.getElementById("mass_conversion_input");
let mass_units = document.getElementById("mass_units");
let mass_output = document.getElementById("mass_conversion_output");

function EmptyString_to_0(str){
  if(!str){
    return 0;
  }
  else{
    return str;
  }
}

function update_distance_input() {
  let distance_input_value = EmptyString_to_0(distance_input.value);
  let output;
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
      output = distance_input_value * ((648000.0/Math.PI) * 149597870700.0);
      break;
  }
  distance_output.value = output.toExponential();
}

function update_distance_units() {
  update_distance_input();
}

//-----------------------------//

function day_to_sec(d){
  return d * 86400;
}

function update_time_output(){
  let year_value = EmptyString_to_0(year.value);
  let day_value = EmptyString_to_0(day.value);
  let hour_value = EmptyString_to_0(hour.value);
  let minute_value = EmptyString_to_0(minute.value);
  let second_value = EmptyString_to_0(second.value);
  let output = day_to_sec(year_value * 365.25) + day_to_sec(day_value) + (3600 * hour_value) + (60 * minute_value) + (1*second_value);
  time_output.value = output;
}

//-----------------------------//

function update_mass_input() {
  let mass_input_value = EmptyString_to_0(mass_input.value);
  let output;
  switch (mass_units.value) {
    case "M☉":
      output = mass_input_value * 1.98847e+30;
      break;
    case "MJ":
      output = mass_input_value * 1.89813e+27;
      break;
    case "M🜨":
      output = mass_input_value * 5.9722e+24;
      break;
    case "M☾":
      output = mass_input_value * 7.342e+22;
      break;
  }
  mass_output.value = output.toExponential();
}

function update_mass_units() {
  update_mass_input();
}
