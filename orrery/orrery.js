const canvas = document.querySelector("#canvas");
const rescale_btn = document.querySelector("#rescale_btn");
const mark_toggle_btn = document.querySelector("#mark_toggle_btn");
const Ap = document.getElementById("Ap");
const Pe = document.getElementById("Pe");
const An = document.getElementById("An");
const Dn = document.getElementById("Dn");
var device=1;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  canvas.width=7000;
  canvas.height=7000;
  rescale_btn.style.fontSize="64px";
  rescale_btn.style.padding="20px 40px";
  mark_toggle_btn.style.fontSize="64px";
  mark_toggle_btn.style.padding="20px 40px";
  device=2;
}
const ctx = canvas.getContext("2d");
ctx.translate(canvas.width/2, canvas.height/2);
ctx.scale(1,-1);
const model_scale = 1.4*10**(-6);
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const mercury_radius = 4;
const mercury_period = 88;
const venus_radius = 9;
const venus_period = 225;
const earth_radius = 10;
const earth_period = 365;
const mars_radius = 5;
const mars_period = 687;
const jupiter_radius = 25.9;
const jupiter_period = 4333;
const saturn_radius = 24.7;
const saturn_period = 10756;
const uranus_radius = 19.1;
const uranus_period = 30685;
const neptune_radius = 18.9;
const neptune_period = 60189;

const turbo_map = [[48,18,59],[50,21,67],[51,24,74],[52,27,81],[53,30,88],[54,33,95],[55,36,102],[56,39,109],[57,42,115],[58,45,121],[59,47,128],[60,50,134],[61,53,139],[62,56,145],[63,59,151],[63,62,156],[64,64,162],[65,67,167],[65,70,172],[66,73,177],[66,75,181],[67,78,186],[68,81,191],[68,84,195],[68,86,199],[69,89,203],[69,92,207],[69,94,211],[70,97,214],[70,100,218],[70,102,221],[70,105,224],[70,107,227],[71,110,230],[71,113,233],[71,115,235],[71,118,238],[71,120,240],[71,123,242],[70,125,244],[70,128,246],[70,130,248],[70,133,250],[70,135,251],[69,138,252],[69,140,253],[68,143,254],[67,145,254],[66,148,255],[65,150,255],[64,153,255],[62,155,254],[61,158,254],[59,160,253],[58,163,252],[56,165,251],[55,168,250],[53,171,248],[51,173,247],[49,175,245],[47,178,244],[46,180,242],[44,183,240],[42,185,238],[40,188,235],[39,190,233],[37,192,231],[35,195,228],[34,197,226],[32,199,223],[31,201,221],[30,203,218],[28,205,216],[27,208,213],[26,210,210],[26,212,208],[25,213,205],[24,215,202],[24,217,200],[24,219,197],[24,221,194],[24,222,192],[24,224,189],[25,226,187],[25,227,185],[26,228,182],[28,230,180],[29,231,178],[31,233,175],[32,234,172],[34,235,170],[37,236,167],[39,238,164],[42,239,161],[44,240,158],[47,241,155],[50,242,152],[53,243,148],[56,244,145],[60,245,142],[63,246,138],[67,247,135],[70,248,132],[74,248,128],[78,249,125],[82,250,122],[85,250,118],[89,251,115],[93,252,111],[97,252,108],[101,253,105],[105,253,102],[109,254,98],[113,254,95],[117,254,92],[121,254,89],[125,255,86],[128,255,83],[132,255,81],[136,255,78],[139,255,75],[143,255,73],[146,255,71],[150,254,68],[153,254,66],[156,254,64],[159,253,63],[161,253,61],[164,252,60],[167,252,58],[169,251,57],[172,251,56],[175,250,55],[177,249,54],[180,248,54],[183,247,53],[185,246,53],[188,245,52],[190,244,52],[193,243,52],[195,241,52],[198,240,52],[200,239,52],[203,237,52],[205,236,52],[208,234,52],[210,233,53],[212,231,53],[215,229,53],[217,228,54],[219,226,54],[221,224,55],[223,223,55],[225,221,55],[227,219,56],[229,217,56],[231,215,57],[233,213,57],[235,211,57],[236,209,58],[238,207,58],[239,205,58],[241,203,58],[242,201,58],[244,199,58],[245,197,58],[246,195,58],[247,193,58],[248,190,57],[249,188,57],[250,186,57],[251,184,56],[251,182,55],[252,179,54],[252,177,54],[253,174,53],[253,172,52],[254,169,51],[254,167,50],[254,164,49],[254,161,48],[254,158,47],[254,155,45],[254,153,44],[254,150,43],[254,147,42],[254,144,41],[253,141,39],[253,138,38],[252,135,37],[252,132,35],[251,129,34],[251,126,33],[250,123,31],[249,120,30],[249,117,29],[248,114,28],[247,111,26],[246,108,25],[245,105,24],[244,102,23],[243,99,21],[242,96,20],[241,93,19],[240,91,18],[239,88,17],[237,85,16],[236,83,15],[235,80,14],[234,78,13],[232,75,12],[231,73,12],[229,71,11],[228,69,10],[226,67,10],[225,65,9],[223,63,8],[221,61,8],[220,59,7],[218,57,7],[216,55,6],[214,53,6],[212,51,5],[210,49,5],[208,47,5],[206,45,4],[204,43,4],[202,42,4],[200,40,3],[197,38,3],[195,37,3],[193,35,2],[190,33,2],[188,32,2],[185,30,2],[183,29,2],[180,27,1],[178,26,1],[175,24,1],[172,23,1],[169,22,1],[167,20,1],[164,19,1],[161,18,1],[158,16,1],[155,15,1],[152,14,1],[149,13,1],[146,11,1],[142,10,1],[139,9,2],[136,8,2],[133,7,2],[129,6,2],[126,5,2],[122,4,3]];
function getColor(x){
  x = Math.round(x*(2/Math.PI)*3600)+128;
  if(x>255){
    x=255;
    console.log("over");
  }
  else if (x<0) {
    x=0;
    console.log("under");
  }
  return turbo_map[x];
}

var mark = false;
function toggleMark(){
  mark = !(mark);
  if(mark){
    mark_toggle_btn.innerHTML="Hide marks";
  }
  else{
    mark_toggle_btn.innerHTML="Show marks";
  }
}

function drawMark(type,x,y){
  if(!(mark)){
    return;
  }
  ctx.scale(1,-1);
  ctx.drawImage(type,x-8,-y-8,16,16);
  ctx.scale(1,-1);
  return;
}

function distance_to_sun(r){
  return (r[0]**2+r[1]**2+r[2]**2)**(1/2);
}

var btn_cnt = 0;
var orbit_width = 1;
function rescale(){
  ctx.clearRect(device*(-canvas.width/2),device*(-canvas.height/2),device*canvas.width,device*canvas.height);
  switch (btn_cnt%3) {
    case 0:
      canvas.scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});
      ctx.scale(0.2,0.2);
      orbit_width=1.5;
      rescale_btn.innerHTML="Change to 8 Plantes View";
      break;
    case 1:
      canvas.scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});
      ctx.scale(0.5,0.5);
      orbit_width=3;
      rescale_btn.innerHTML="Change to 4 Plantes View";
      break;
    case 2:
      canvas.scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});
      ctx.scale(10,10);
      orbit_width=1;
      rescale_btn.innerHTML="Change to 6 Plantes View";
      break;
  }
  btn_cnt++;
}

const sun_radius = 32;
function drawSun(){
  cur_date = new Date();
  cur_date = cur_date.getFullYear()+"-"+months[cur_date.getMonth()]+"-"+cur_date.getDate().toString().padStart(2,"0");
  console.log(cur_date);
  ctx.beginPath();
  ctx.arc(0, 0, sun_radius, 0, 2 * Math.PI);
  ctx.fillStyle = "Crimson";
  ctx.fill();
}

function drawPlanet(planet_data,planet_radius,planet_period,planet_color){
  var start_idx = planet_data.indexOf(",", planet_data.indexOf(cur_date))+2;
  var end_idx=start_idx;
  for(i=0;i<3;i++){
    end_idx = planet_data.indexOf(",",end_idx)+1;
  }
  end_idx--;
  //console.log(end_idx-start_idx);
  var planet_pos=planet_data.substring(start_idx, end_idx);
  //console.log("/"+mercury_pos+"/");
  planet_pos=planet_pos.split(",");
  for(i=0;i<3;i++){
    var temp = planet_pos[i].split("E");
    planet_pos[i]= Number(temp[0])*(10**Number(temp[1]));
    planet_pos[i]= planet_pos[i]*model_scale;
  }
  console.log(planet_pos);
  //console.log("/"+mercury_data.substring(start_idx+123, end_idx+123)+"/");
  //console.log("/"+mercury_data.substring(start_idx+246, end_idx+246)+"/");

  var prev_pos = [planet_pos[0],planet_pos[1],planet_pos[2]];
  var ap_pos = [0,0,0];
  var pe_pos = [10**10,10**10,10**10];
  for(i=1;i<=planet_period;i++){
    ctx.beginPath();
    ctx.moveTo(prev_pos[0],prev_pos[1]);
    var orbit_pos = planet_data.substring(start_idx+123*i, end_idx+123*i);
    orbit_pos=orbit_pos.split(",");
    for(j=0;j<3;j++){
      var temp = orbit_pos[j].split("E");
      orbit_pos[j]= Number(temp[0])*(10**Number(temp[1]));
      orbit_pos[j]= orbit_pos[j]*model_scale;
    }
    var color = getColor(Math.asin(orbit_pos[2]/distance_to_sun(orbit_pos)));
    ctx.strokeStyle="rgb("+color[0]+","+color[1]+","+color[2]+")";
    //console.log(ctx.strokeStyle);
    ctx.lineTo(orbit_pos[0],orbit_pos[1]);
    ctx.stroke();

    if(prev_pos[2]*orbit_pos[2]<0 && planet_period!=earth_period){
      if(orbit_pos[2]>prev_pos[2]){
        drawMark(An,orbit_pos[0],orbit_pos[1]);
      }
      else{
        drawMark(Dn,orbit_pos[0],orbit_pos[1]);
      }
    }
    if(distance_to_sun(orbit_pos)>distance_to_sun(ap_pos)){
      ap_pos = orbit_pos;
    }
    else if(distance_to_sun(orbit_pos)<distance_to_sun(pe_pos)){
      pe_pos = orbit_pos;
    }

    prev_pos = orbit_pos;
  }
  //ctx.strokeStyle = "gray";
  drawMark(Ap,ap_pos[0],ap_pos[1]);
  drawMark(Pe,pe_pos[0],pe_pos[1]);

  ctx.beginPath();
  ctx.arc(planet_pos[0], planet_pos[1], planet_radius, 0, 2*Math.PI);
  ctx.fillStyle = planet_color;
  ctx.fill();
}

function drawMercury(){
  drawPlanet(mercury_data,mercury_radius,mercury_period,"gray");
}

function drawVenus(){
  drawPlanet(venus_data,venus_radius,venus_period,"gold");
}

function drawEarth(){
  drawPlanet(earth_data,earth_radius,earth_period,"RoyalBlue");
}

function drawMars(){
  drawPlanet(mars_data,mars_radius,mars_period,"orange");
}

function drawJupiter(){
  drawPlanet(jupiter_data,jupiter_radius,jupiter_period,"#b07f35");
}

function drawSaturn(){
  drawPlanet(saturn_data,saturn_radius,saturn_period,"#eabc48");
}

function drawUranus(){
  drawPlanet(uranus_data,uranus_radius,uranus_period,"#5580aa");
}

function drawNeptune(){
  drawPlanet(neptune_data,neptune_radius,neptune_period,"#366896");
}

var clicked=0;
var clicked_x=0;
var clicked_y=0;
var clicked_t=0;
function defineVar(x,y,t){
  clicked_x=x;
  clicked_y=y;
  clicked_t=t;
  clicked++;
}
canvas.onclick = function (event) {
  const rect = canvas.getBoundingClientRect()
  f_clicked_x = event.clientX - rect.left
  f_clicked_y = event.clientY - rect.top
  f_clicked_x -= canvas.width/2;
  f_clicked_y = canvas.height/2 - f_clicked_y;
  //console.log(f_clicked_x,f_clicked_y)
  f_clicked_t = new Date();
  f_clicked_t = f_clicked_t.getTime();
  defineVar(f_clicked_x,f_clicked_y,f_clicked_t);
  console.log("clicked");
}

const c = 299.792458;
function drawLight(){
  var cur_t = new Date();
  cur_t = cur_t.getTime();
  var r = c*(cur_t-clicked_t)*model_scale;
  console.log(clicked_x,clicked_y,r);
  ctx.beginPath();
  ctx.arc(clicked_x, clicked_y, r, 0, 2*Math.PI);
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = "rgba(255,234,0,0.5)";
  ctx.stroke();
}

function update(){
  ctx.clearRect(device*(-canvas.width/2),device*(-canvas.height/2),device*canvas.width, device*canvas.height);
  ctx.lineWidth = orbit_width;
  drawSun();
  drawMercury();
  drawVenus();
  drawEarth();
  drawMars();
  drawJupiter();
  drawSaturn();
  drawUranus();
  drawNeptune();
  //console.log(clicked);
  if((clicked%2)==1){
    drawLight();
  }
}
setInterval(update, 1000);
canvas.scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});
