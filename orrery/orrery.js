const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
ctx.translate(canvas.width/2, canvas.height/2);
ctx.scale(1,-1);
const model_scale = 1.5*10**(-6);
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const sun_radius = 35;
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
const mercury_period = 88;
function drawMercury(){
  var start_idx = mercury_data.indexOf(",", mercury_data.indexOf(cur_date))+2;
  var end_idx=start_idx;
  for(i=0;i<3;i++){
    end_idx = mercury_data.indexOf(",",end_idx)+1;
  }
  end_idx--;
  //console.log(end_idx-start_idx);
  var mercury_pos=mercury_data.substring(start_idx, end_idx);
  //console.log("/"+mercury_pos+"/");
  mercury_pos=mercury_pos.split(",");
  for(i=0;i<3;i++){
    var temp = mercury_pos[i].split("E");
    mercury_pos[i]= Number(temp[0])*(10**Number(temp[1]));
    mercury_pos[i]= mercury_pos[i]*model_scale;
  }
  console.log(mercury_pos);
  //console.log("/"+mercury_data.substring(start_idx+123, end_idx+123)+"/");
  //console.log("/"+mercury_data.substring(start_idx+246, end_idx+246)+"/");

  ctx.beginPath();
  ctx.moveTo(mercury_pos[0], mercury_pos[1]);
  for(i=1;i<=mercury_period;i++){
    var orbit_pos = mercury_data.substring(start_idx+123*i, end_idx+123*i);
    orbit_pos=orbit_pos.split(",");
    for(j=0;j<3;j++){
      var temp = orbit_pos[j].split("E");
      orbit_pos[j]= Number(temp[0])*(10**Number(temp[1]));
      orbit_pos[j]= orbit_pos[j]*model_scale;
    }
    ctx.lineTo(orbit_pos[0],orbit_pos[1]);
  }
  ctx.strokeStyle = "gray";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(mercury_pos[0], mercury_pos[1], mercury_radius, 0, 2*Math.PI);
  ctx.fillStyle = "gray";
  ctx.fill();
}

const venus_radius = 9;
const venus_period = 225;
function drawVenus(){
  var start_idx = venus_data.indexOf(",", venus_data.indexOf(cur_date))+2;
  var end_idx=start_idx;
  for(i=0;i<3;i++){
    end_idx = venus_data.indexOf(",",end_idx)+1;
  }
  end_idx--;
  //console.log(end_idx-start_idx);
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
  ctx.moveTo(venus_pos[0], venus_pos[1]);
  for(i=1;i<=venus_period;i++){
    var orbit_pos = venus_data.substring(start_idx+123*i, end_idx+123*i);
    orbit_pos=orbit_pos.split(",");
    for(j=0;j<3;j++){
      var temp = orbit_pos[j].split("E");
      orbit_pos[j]= Number(temp[0])*(10**Number(temp[1]));
      orbit_pos[j]= orbit_pos[j]*model_scale;
    }
    ctx.lineTo(orbit_pos[0],orbit_pos[1]);
  }
  ctx.strokeStyle = "gray";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(venus_pos[0], venus_pos[1], venus_radius, 0, 2*Math.PI);
  ctx.fillStyle = "gold";
  ctx.fill();
}

const earth_radius = 10;
const earth_period = 365;
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
  ctx.moveTo(earth_pos[0], earth_pos[1]);
  for(i=1;i<=earth_period;i++){
    var orbit_pos = earth_data.substring(start_idx+123*i, end_idx+123*i);
    orbit_pos=orbit_pos.split(",");
    for(j=0;j<3;j++){
      var temp = orbit_pos[j].split("E");
      orbit_pos[j]= Number(temp[0])*(10**Number(temp[1]));
      orbit_pos[j]= orbit_pos[j]*model_scale;
    }
    ctx.lineTo(orbit_pos[0],orbit_pos[1]);
  }
  ctx.strokeStyle = "gray";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(earth_pos[0], earth_pos[1], earth_radius, 0, 2*Math.PI);
  ctx.fillStyle = "RoyalBlue";
  ctx.fill();
}

const mars_radius = 5;
const mars_period = 687;
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
  ctx.moveTo(mars_pos[0], mars_pos[1]);
  for(i=1;i<=mars_period;i++){
    var orbit_pos = mars_data.substring(start_idx+123*i, end_idx+123*i);
    orbit_pos=orbit_pos.split(",");
    for(j=0;j<3;j++){
      var temp = orbit_pos[j].split("E");
      orbit_pos[j]= Number(temp[0])*(10**Number(temp[1]));
      orbit_pos[j]= orbit_pos[j]*model_scale;
    }
    ctx.lineTo(orbit_pos[0],orbit_pos[1]);
  }
  ctx.strokeStyle = "gray";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(mars_pos[0], mars_pos[1], mars_radius, 0, 2*Math.PI);
  ctx.fillStyle = "orange";
  ctx.fill();
}

const jupiter_radius = 25.9;
const jupiter_period = 4333;
function drawJupiter(){
  var start_idx = jupiter_data.indexOf(",", jupiter_data.indexOf(cur_date))+2;
  var end_idx=start_idx;
  for(i=0;i<3;i++){
    end_idx = jupiter_data.indexOf(",",end_idx)+1;
  }
  end_idx--;
  var jupiter_pos=jupiter_data.substring(start_idx, end_idx);
  jupiter_pos=jupiter_pos.split(",");
  //console.log(mars_pos);
  for(i=0;i<3;i++){
    var temp = jupiter_pos[i].split("E");
    jupiter_pos[i]= Number(temp[0])*(10**Number(temp[1]));
    jupiter_pos[i]= jupiter_pos[i]*model_scale;
  }
  console.log(jupiter_pos);

  ctx.beginPath();
  ctx.moveTo(jupiter_pos[0], jupiter_pos[1]);
  for(i=1;i<=jupiter_period;i++){
    var orbit_pos = jupiter_data.substring(start_idx+123*i, end_idx+123*i);
    orbit_pos=orbit_pos.split(",");
    for(j=0;j<3;j++){
      var temp = orbit_pos[j].split("E");
      orbit_pos[j]= Number(temp[0])*(10**Number(temp[1]));
      orbit_pos[j]= orbit_pos[j]*model_scale;
    }
    ctx.lineTo(orbit_pos[0],orbit_pos[1]);
  }
  ctx.strokeStyle = "gray";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(jupiter_pos[0], jupiter_pos[1], jupiter_radius, 0, 2*Math.PI);
  ctx.fillStyle = "peru";
  ctx.fill();
}

const saturn_radius = 24.7;
const saturn_period = 10756;
function drawSaturn(){
  var start_idx = saturn_data.indexOf(",", saturn_data.indexOf(cur_date))+2;
  var end_idx=start_idx;
  for(i=0;i<3;i++){
    end_idx = saturn_data.indexOf(",",end_idx)+1;
  }
  end_idx--;
  var saturn_pos=saturn_data.substring(start_idx, end_idx);
  saturn_pos=saturn_pos.split(",");
  //console.log(mars_pos);
  for(i=0;i<3;i++){
    var temp = saturn_pos[i].split("E");
    saturn_pos[i]= Number(temp[0])*(10**Number(temp[1]));
    saturn_pos[i]= saturn_pos[i]*model_scale;
  }
  console.log(saturn_pos);

  ctx.beginPath();
  ctx.moveTo(saturn_pos[0], saturn_pos[1]);
  for(i=1;i<=saturn_period;i++){
    var orbit_pos = saturn_data.substring(start_idx+123*i, end_idx+123*i);
    orbit_pos=orbit_pos.split(",");
    for(j=0;j<3;j++){
      var temp = orbit_pos[j].split("E");
      orbit_pos[j]= Number(temp[0])*(10**Number(temp[1]));
      orbit_pos[j]= orbit_pos[j]*model_scale;
    }
    ctx.lineTo(orbit_pos[0],orbit_pos[1]);
  }
  ctx.strokeStyle = "gray";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(saturn_pos[0], saturn_pos[1], saturn_radius, 0, 2*Math.PI);
  ctx.fillStyle = "NavajoWhite";
  ctx.fill();
}

function update(){
  ctx.clearRect(-canvas.width/2,-canvas.height/2,canvas.width, canvas.height);
  drawSun();
  drawMercury();
  drawVenus();
  drawEarth();
  drawMars();
  drawJupiter();
  drawSaturn();
}
setInterval(update, 1000);
canvas.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
