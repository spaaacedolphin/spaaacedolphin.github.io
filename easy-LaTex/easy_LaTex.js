//document.querySelector();
const inner_LaTex_area = document.getElementById("inner_LaTex_area")
const input_area = document.getElementById("input_area");
const case_change_btn = document.getElementById("case_change_btn");

var latest_focus_elem;
var latest_focus_pos;

function set_focused(element) {
  latest_focus_elem = element;
  latest_focus_pos = element.selectionStart
  console.log(latest_focus_elem.id);
  console.log(latest_focus_pos);
}

function toggle_btn_do(element) {
  var toggle_div = document.getElementById(element.id.replace("_btn",""));
  //console.log(toggle_div.id);
  if (toggle_div.style.display != "none"){
    toggle_div.style.display = "none";
  }
  else{
    toggle_div.style.display = "initial";
  }
}

function type_symbols(element) {
  //console.log(element.innerHTML);
  var text = latest_focus_elem.value;
  var idx = latest_focus_pos
  //console.log("idx_i:"+idx);
  latest_focus_elem.value = text.slice(0,idx)+element.innerHTML+text.substr(idx);
  latest_focus_pos = idx + 1;
  //console.log("idx_f:"+latest_focus_pos);
}

var LaTex_txt_count = 1;

function addMath() {
  inner_LaTex_area.insertAdjacentHTML("beforeend","<label for=\""+LaTex_txt_count+"\">Math-"+LaTex_txt_count+"</label> <input type=\"text\" id=\""+LaTex_txt_count+"\" class=\"LaTex_txt\" onfocusout=\"set_focused(this)\"></input><br>");
  LaTex_txt_count += 1;
}

function addText() {
  inner_LaTex_area.insertAdjacentHTML("beforeend","<label for=\""+LaTex_txt_count+"\">Text-"+LaTex_txt_count+"</label> <input type=\"text\" id=\""+LaTex_txt_count+"\" class=\"LaTex_txt\" onfocusout=\"set_focused(this)\"></input><br>");
  LaTex_txt_count += 1;
}
//<input type="text" id="LaTex_txt" onfocusout="set_focused(this)"></input>

var case_count = 0;
function change_case() {
  if(case_count%2==0){
    case_change_btn.innerHTML = "lowercase";
    for (var i = 0; i <= 14; i++) {
      var symbol_i = document.getElementById("symbol_"+i);
      symbol_i.innerHTML = symbol_i.innerHTML.toUpperCase();
    }
  }
  else{
    case_change_btn.innerHTML = "uppercase";
    for (var i = 0; i <= 14; i++) {
      var symbol_i = document.getElementById("symbol_"+i);
      symbol_i.innerHTML = symbol_i.innerHTML.toLowerCase();
    }
  }
  case_count += 1;
}

var operator_input_count = 0;

function type_fraction(element) {
  //console.log(element.id);
  var element_id = element.id.split('_');
  var focus_of_input_id = '!';
  for (var i = 0; i < element_id.length-1; i++) {
    focus_of_input_id += '_' + element_id[i];
  }
  focus_of_input_id = focus_of_input_id.replace("!_",'');
  var idx = element_id.at(-2).split('-')[1];
  focus_of_input_id = focus_of_input_id.slice(0,focus_of_input_id.length-(idx.length+1));
  console.log(focus_of_input_id);
  var focus_of_input_elem = document.getElementById(focus_of_input_id);
  var text = focus_of_input_elem.value;
  //console.log(text);
  var numerator_input =  document.getElementById(element.id+"@numerator");
  var denominator_input = document.getElementById(element.id+"@denominator");
  var numerator = numerator_input.value;
  var denominator = denominator_input.value;
  focus_of_input_elem.value = text.slice(0,idx)+"/f{"+numerator+"}{"+denominator+"}"+text.substr(idx);
  document.getElementById(element.id+"@div").remove();
}

function fraction_input() {
  input_area.insertAdjacentHTML("beforeend",`
    <div id="`+latest_focus_elem.id+'-'+latest_focus_pos+'_'+operator_input_count+"@div"+`">
      <label for="">numerator</label> <input type="text" id="`+latest_focus_elem.id+'-'+latest_focus_pos+'_'+operator_input_count+"@numerator"+`" class="LaTex_txt" onfocusout="set_focused(this)"></input>
      <hr>
      <label for="">denominator</label> <input type="text" id="`+latest_focus_elem.id+'-'+latest_focus_pos+'_'+operator_input_count+"@denominator"+`" class="LaTex_txt" onfocusout="set_focused(this)"></input><br>
      <button type="button" id="`+latest_focus_elem.id+'-'+latest_focus_pos+'_'+operator_input_count+`" onclick="type_fraction(this)">confirm</button>
    </div>
  `);
}

function exponentiation_input() {
  input_area.insertAdjacentHTML("beforeend",`
    <div>

    </div>
  `);
}

function type_operators(element) {
  operator_input_count += 1;
  switch (element.id) {
    case "a/b":
      fraction_input();
      break;
    case "^":
      exponentiation_input();
      break;
  }
}
