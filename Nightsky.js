const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.translate(canvas.width/2, canvas.height/2);
ctx.scale(1,-1);
function drawSun(){
  ctx.beginPath();
  ctx.arc(0, 0, 30, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill()
}
const earth_r = 200;
function drawEarth(){
  curTime = new Date();
  //console.log(curTime);
  var curYear = curTime.getFullYear();
  var newYear = new Date(curYear+"-01-01T00:00:00.000");
  var endYear = new Date(curYear+"-12-31T24:00:00.000");
  var oneYear = endYear.getTime() - newYear.getTime();
  //curTime = newYear;
  var fracYear = (curTime.getTime() - newYear.getTime()) / oneYear ;
  document.querySelector("#fracYear").innerText = "한해 경과율: "+fracYear*100+"%";
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
  document.querySelector("#fracDay").innerText = "하루 경과율: "+fracDay*100+"%";
  //console.log(curTime);
  //console.log(startDay);
  //console.log(fracDay);

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
  ctx.moveTo(earth_x, earth_y);
  ctx.lineTo(earth_x+25*Math.cos(2*Math.PI*fracDay+earth_angle),earth_y+25*Math.sin(2*Math.PI*fracDay+earth_angle));
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = "red";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(earth_x, earth_y, 15, Math.PI/2+earth_angle, (3/2)*Math.PI+earth_angle);
  ctx.fillStyle = "blue";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(earth_x, earth_y, 15, (3/2)*Math.PI+earth_angle, Math.PI/2+earth_angle);
  ctx.fillStyle = "black";
  ctx.fill();
}
const moon_r = 70;
function drawMoon(){
  var moonPhase = SunCalc.getMoonIllumination(curTime).phase;
  document.querySelector("#phase").innerText ="한달 경과율: "+moonPhase*100+"%";
  var moon_x = earth_x + moon_r*Math.cos(2*Math.PI*moonPhase+Math.PI+earth_angle);
  var moon_y = earth_y + moon_r*Math.sin(2*Math.PI*moonPhase+Math.PI+earth_angle);

  ctx.beginPath();
  ctx.arc(earth_x,earth_y,moon_r,0,2*Math.PI);
  ctx.lineWidth = 1;
  ctx.strokeStyle = "gray";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(moon_x, moon_y, 10, Math.PI/2+earth_angle, (3/2)*Math.PI+earth_angle);
  ctx.fillStyle = "gray";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(moon_x, moon_y, 10, (3/2)*Math.PI+earth_angle, Math.PI/2+earth_angle);
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
