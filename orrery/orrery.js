const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.translate(canvas.width/2, canvas.height/2);
ctx.scale(1,-1);
const model_scale = 10**(-6);
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const sun_radius = 25;
function drawSun(){
  cur_date = new Date();
  cur_date = cur_date.getFullYear()+"-"+months[cur_date.getMonth()]+"-"+cur_date.getDate();
  //console.log(cur_date);
  ctx.beginPath();
  ctx.arc(0, 0, sun_radius, 0, 2 * Math.PI);
  ctx.fillStyle = "Crimson";
  ctx.fill();
}

const mercury_radius = 4;
function drawMercury(){
  var start_idx = mercury_data.indexOf(",", mercury_data.indexOf(cur_date))+2;
  var end_idx=start_idx;
  for(i=0;i<3;i++){
    end_idx = mercury_data.indexOf(",",end_idx)+1;
  }
  end_idx--;
  var mercury_pos=mercury_data.substring(start_idx, end_idx);
  //console.log(earth_pos);
  mercury_pos=mercury_pos.split(",");
  for(i=0;i<3;i++){
    var temp = mercury_pos[i].split("E");
    mercury_pos[i]= Number(temp[0])*(10**Number(temp[1]));
    mercury_pos[i]= mercury_pos[i]*model_scale;
  }
  console.log(mercury_pos);
  ctx.beginPath();
  ctx.arc(mercury_pos[0], mercury_pos[1], mercury_radius, 0, 2*Math.PI);
  ctx.fillStyle = "gray";
  ctx.fill();
}

const venus_radius = 9;
function drawVenus(){
  var start_idx = venus_data.indexOf(",", venus_data.indexOf(cur_date))+2;
  var end_idx=start_idx;
  for(i=0;i<3;i++){
    end_idx = venus_data.indexOf(",",end_idx)+1;
  }
  end_idx--;
  var venus_pos=venus_data.substring(start_idx, end_idx);
  //console.log(earth_pos);
  venus_pos=venus_pos.split(",");
  for(i=0;i<3;i++){
    var temp = venus_pos[i].split("E");
    venus_pos[i]= Number(temp[0])*(10**Number(temp[1]));
    venus_pos[i]= venus_pos[i]*model_scale;
  }
  console.log(venus_pos);
  ctx.beginPath();
  ctx.arc(venus_pos[0], venus_pos[1], venus_radius, 0, 2*Math.PI);
  ctx.fillStyle = "gold";
  ctx.fill();
}

const earth_radius = 10;
function drawEarth(){
  var start_idx = earth_data.indexOf(",", earth_data.indexOf(cur_date))+2;
  var end_idx=start_idx;
  for(i=0;i<3;i++){
    end_idx = earth_data.indexOf(",",end_idx)+1;
  }
  end_idx--;
  var earth_pos=earth_data.substring(start_idx, end_idx);
  //console.log(earth_pos);
  earth_pos=earth_pos.split(",");
  for(i=0;i<3;i++){
    var temp = earth_pos[i].split("E");
    earth_pos[i]= Number(temp[0])*(10**Number(temp[1]));
    earth_pos[i]= earth_pos[i]*model_scale;
  }
  console.log(earth_pos);
  ctx.beginPath();
  ctx.arc(earth_pos[0], earth_pos[1], earth_radius, 0, 2*Math.PI);
  ctx.fillStyle = "RoyalBlue";
  ctx.fill();
}

const mars_radius = 5;
function drawMars(){
  var start_idx = mars_data.indexOf(",", mars_data.indexOf(cur_date))+2;
  var end_idx=start_idx;
  for(i=0;i<3;i++){
    end_idx = mars_data.indexOf(",",end_idx)+1;
  }
  end_idx--;
  var mars_pos=mars_data.substring(start_idx, end_idx);
  mars_pos=mars_pos.split(",");
  //console.log(mars_pos);
  for(i=0;i<3;i++){
    var temp = mars_pos[i].split("E");
    mars_pos[i]= Number(temp[0])*(10**Number(temp[1]));
    mars_pos[i]= mars_pos[i]*model_scale;
  }
  console.log(mars_pos);
  ctx.beginPath();
  ctx.arc(mars_pos[0], mars_pos[1], mars_radius, 0, 2*Math.PI);
  ctx.fillStyle = "orange";
  ctx.fill();
}
function update(){
  ctx.clearRect(-canvas.width/2,-canvas.height/2,canvas.width, canvas.height);
  drawSun();
  drawMercury();
  drawVenus();
  drawEarth();
  drawMars();
}
setInterval(update, 1000);
