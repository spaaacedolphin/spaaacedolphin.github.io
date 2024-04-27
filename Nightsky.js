const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.translate(canvas.width/2, canvas.height/2);
ctx.scale(1,-1);
const sun_radius = 30;
function drawSun(){
  ctx.beginPath();
  ctx.arc(0, 0, sun_radius, 0, 2 * Math.PI);
  ctx.fillStyle = "Crimson";
  ctx.fill();
}
const earth_r = 200;
const earth_radius = 15;
function drawEarth(){
  curTime = new Date();
  document.querySelector("#curTime").innerText = curTime;
  //console.log(curTime);
  var curYear = curTime.getFullYear();
  var newYear = new Date(curYear+"-01-01T00:00:00.000");
  var endYear = new Date(curYear+"-12-31T24:00:00.000");
  var oneYear = endYear.getTime() - newYear.getTime();
  //curTime = newYear;
  var fracYear = (curTime.getTime() - newYear.getTime()) / oneYear ;
  document.querySelector("#fracYear").innerText = (fracYear*100).toFixed(10)+"%";
  //console.log(newYear);
  //console.log(endYear);
  //console.log(fracYear);

  var startDay = new Date();
  //startDay.setFullYear(curYear,curTime.getMonth()+1,curTime.getDate());
  startDay.setHours(0);
  startDay.setMinutes(0);
  startDay.setSeconds(0);
  startDay.setMilliseconds(0);
  var fracDay = (curTime.getTime() - startDay.getTime())/(1000*60*60*24);
  document.querySelector("#fracDay").innerText = (fracDay*100).toFixed(10)+"%";
  //console.log(curTime);
  //console.log(startDay);
  //console.log(fracDay);
  var mar_equinox_fracDay = (new Date(curYear+"-03-20T00:00:00.000").getTime() - newYear.getTime())/oneYear;
  var jun_solstice_fracDay = (new Date(curYear+"-06-21T00:00:00.000").getTime() - newYear.getTime())/oneYear;
  var sep_equinox_fracDay = (new Date(curYear+"-09-23T00:00:00.000").getTime() - newYear.getTime())/oneYear;
  var dec_solstice_fracDay = (new Date(curYear+"-12-21T00:00:00.000").getTime() - newYear.getTime())/oneYear;

  console.log(mar_equinox_fracDay);

  earth_x = earth_r*Math.cos(2*Math.PI*fracYear+Math.PI/2);
  earth_y = earth_r*Math.sin(2*Math.PI*fracYear+Math.PI/2);

  if(earth_y>=0){
    earth_angle = Math.acos(earth_x/earth_r);
  }
  else{
    earth_angle = 2*Math.PI - Math.acos(earth_x/earth_r);
  }
  //console.log(earth_angle*(180/Math.PI));
  ctx.beginPath();
  ctx.arc(0,0,earth_r,0,2*Math.PI);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "gray";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0,earth_r-5);
  ctx.lineTo(0,earth_r+5);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "lightcoral";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo((earth_r-5)*Math.cos(2*Math.PI*mar_equinox_fracDay+Math.PI/2),(earth_r-5)*Math.sin(2*Math.PI*mar_equinox_fracDay+Math.PI/2));
  ctx.lineTo((earth_r+5)*Math.cos(2*Math.PI*mar_equinox_fracDay+Math.PI/2),(earth_r+5)*Math.sin(2*Math.PI*mar_equinox_fracDay+Math.PI/2));
  ctx.moveTo((earth_r-5)*Math.cos(2*Math.PI*jun_solstice_fracDay+Math.PI/2),(earth_r-5)*Math.sin(2*Math.PI*jun_solstice_fracDay+Math.PI/2));
  ctx.lineTo((earth_r+5)*Math.cos(2*Math.PI*jun_solstice_fracDay+Math.PI/2),(earth_r+5)*Math.sin(2*Math.PI*jun_solstice_fracDay+Math.PI/2));
  ctx.moveTo((earth_r-5)*Math.cos(2*Math.PI*sep_equinox_fracDay+Math.PI/2),(earth_r-5)*Math.sin(2*Math.PI*sep_equinox_fracDay+Math.PI/2));
  ctx.lineTo((earth_r+5)*Math.cos(2*Math.PI*sep_equinox_fracDay+Math.PI/2),(earth_r+5)*Math.sin(2*Math.PI*sep_equinox_fracDay+Math.PI/2));
  ctx.moveTo((earth_r-5)*Math.cos(2*Math.PI*dec_solstice_fracDay+Math.PI/2),(earth_r-5)*Math.sin(2*Math.PI*dec_solstice_fracDay+Math.PI/2));
  ctx.lineTo((earth_r+5)*Math.cos(2*Math.PI*dec_solstice_fracDay+Math.PI/2),(earth_r+5)*Math.sin(2*Math.PI*dec_solstice_fracDay+Math.PI/2));
  ctx.lineWidth = 1;
  ctx.strokeStyle = "gray";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(earth_x, earth_y);
  ctx.lineTo(earth_x+(earth_radius+10)*Math.cos(2*Math.PI*fracDay+earth_angle),earth_y+(earth_radius+10)*Math.sin(2*Math.PI*fracDay+earth_angle));
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = "red";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(earth_x, earth_y, earth_radius, Math.PI/2+earth_angle, (3/2)*Math.PI+earth_angle);
  ctx.fillStyle = "RoyalBlue";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(earth_x, earth_y, earth_radius, (3/2)*Math.PI+earth_angle, Math.PI/2+earth_angle);
  ctx.fillStyle = "black";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(earth_x+(earth_radius*Math.sin(23.44*(Math.PI/180))*Math.cos(2*Math.PI*dec_solstice_fracDay+Math.PI/2)), earth_y+(earth_radius*Math.sin(23.44*(Math.PI/180))*Math.sin(2*Math.PI*dec_solstice_fracDay+Math.PI/2)),1.3,0,2*Math.PI);
  ctx.fillStyle = "gold";
  ctx.fill();
}
const moon_r = 70;
const moon_radius = 10;
function drawMoon(){
  var moonPhase = SunCalc.getMoonIllumination(curTime).phase;
  document.querySelector("#phase").innerText = (moonPhase*100).toFixed(10)+"%";
  var moon_x = earth_x + moon_r*Math.cos(2*Math.PI*moonPhase+Math.PI+earth_angle);
  var moon_y = earth_y + moon_r*Math.sin(2*Math.PI*moonPhase+Math.PI+earth_angle);

  ctx.beginPath();
  ctx.arc(earth_x,earth_y,moon_r,0,2*Math.PI);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "gray";
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(earth_x + (moon_r-5)*Math.cos(Math.PI+earth_angle), earth_y + (moon_r-5)*Math.sin(Math.PI+earth_angle));
  ctx.lineTo(earth_x + (moon_r+5)*Math.cos(Math.PI+earth_angle), earth_y + (moon_r+5)*Math.sin(Math.PI+earth_angle));
  ctx.moveTo(earth_x + (moon_r-5)*Math.cos(Math.PI/2+Math.PI+earth_angle), earth_y + (moon_r-5)*Math.sin(Math.PI/2+Math.PI+earth_angle));
  ctx.lineTo(earth_x + (moon_r+5)*Math.cos(Math.PI/2+Math.PI+earth_angle), earth_y + (moon_r+5)*Math.sin(Math.PI/2+Math.PI+earth_angle));
  ctx.moveTo(earth_x + (moon_r-5)*Math.cos(Math.PI+Math.PI+earth_angle), earth_y + (moon_r-5)*Math.sin(Math.PI+Math.PI+earth_angle));
  ctx.lineTo(earth_x + (moon_r+5)*Math.cos(Math.PI+Math.PI+earth_angle), earth_y + (moon_r+5)*Math.sin(Math.PI+Math.PI+earth_angle));
  ctx.moveTo(earth_x + (moon_r-5)*Math.cos(1.5*Math.PI+Math.PI+earth_angle), earth_y + (moon_r-5)*Math.sin(1.5*Math.PI+Math.PI+earth_angle));
  ctx.lineTo(earth_x + (moon_r+5)*Math.cos(1.5*Math.PI+Math.PI+earth_angle), earth_y + (moon_r+5)*Math.sin(1.5*Math.PI+Math.PI+earth_angle));
  ctx.lineWidth = 1;
  ctx.strokeStyle = "lightgray";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(moon_x, moon_y, moon_radius, Math.PI/2+earth_angle, (3/2)*Math.PI+earth_angle);
  ctx.fillStyle = "gray";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(moon_x, moon_y, moon_radius, (3/2)*Math.PI+earth_angle, Math.PI/2+earth_angle);
  ctx.fillStyle = "black";
  ctx.fill();
}
function update(){
  ctx.clearRect(-canvas.width/2,-canvas.height/2,canvas.width, canvas.height);
  drawSun();
  drawEarth();
  drawMoon();
}
setInterval(update, 1000);
