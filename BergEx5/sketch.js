
//berg by mfclarke
//object
let berg;

//texturesphere
let bergUV2;
let bergUV2A;
let bergUV2B;

//textures object
let bergUV3;
let bergUV4;
let bergUV5;
let bergUV6;
let bergUV7;
let bergUV8;
let bergUV9;
let bergUV10;

//timer
let timer = 6600;
let nextChange = timer;
//subBottom Date
let table;
let url = "DataTest7.csv";

function preload() {
berg = loadModel("berg13.obj", true);
table = loadTable(url,"csv","header");

//loading sphere texture images

 bergUV2 = loadImage("UA1.png");
 bergUV2A = loadImage("UA3.png");
 bergUV2B = loadImage("UA2.png");

 //loading
 
bergUV3 = loadImage("Data-0.png");
bergUV4 = loadImage("Data-1.png");
bergUV5 = loadImage("Data-2.png");
bergUV6 = loadImage("Data-3.png");
 bergUV7 = loadImage("Data-4.png"); 
 bergUV8 = loadImage("Data-5.png");
 bergUV9 = loadImage ("Data-6.png");
 bergUV10 = loadImage("Data-7.png");
}

function setup() {
  createCanvas(650, 600, WEBGL);
   strokeWeight(.07);


}


let maxYear = 0;
  


function draw() {
  background(0);


  rotateY(frameCount * 0.002);
  if (millis() > timer * 4) {
   rotateY(frameCount * 0.02);
   nextChange = millis() + timer;
 }
 if (millis() > timer * 10) {
   rotateY(frameCount * 0.1);
   nextChange = millis() + timer;
 }
 if (millis() > timer * 25) {
   rotateY(frameCount * 0.2);
   nextChange = millis() + timer;
 }

// if (millis() > timer * 35) {
  //rotateX(frameCount * 0.5);
  //nextChange = millis() + timer;
//}





  if (millis() > timer) { 
 scale(1);
 nextChange = millis() + timer;
    }

    if (millis() > timer * 1.3) {
      scale(4);
      nextChange = millis() + timer;
    }
    if (millis() > timer * 2.2) {
      scale(2);
      nextChange = millis() + timer;
    }
if (millis() > timer * 4) {
      scale(1);
      nextChange = millis() + timer;
    }
    if (millis() > timer * 5) {
      scale(.45);
      nextChange = millis() + timer;
    }
    if (millis() > timer * 6.2) {
      scale(6);
      nextChange = millis() + timer;
    }
    if (millis() > timer * 7.5) {
      scale(.2);
      nextChange = millis() + timer;
    }
 if (millis() > timer * 9.5) {
      scale(6);
      nextChange = millis() + timer;
    }
 if (millis() > timer * 11) {
      scale(.2);
      nextChange = millis() + timer;
    }
if (millis() > timer * 13) {
      scale(2);
      nextChange = millis() + timer;
    }

    if (millis() > timer * 16) {
      scale(3);
      nextChange = millis() + timer;
    }
    if (millis() > timer * 18) {
      scale(.03);
      nextChange = millis() + timer;
    }
    if (millis() > timer * 20) {
      scale(8);
      nextChange = millis() + timer;
    }
    if (millis() > timer * 25) {
      scale(10);
      nextChange = millis() + timer;
    }

    if (millis() > timer * 28) {
      scale(.7);
      nextChange = millis() + timer;
    }

    if (millis() > timer * 32) {
      scale(.1);
      nextChange = millis() + timer;
    }

    if (millis() > timer * 37) {
      scale(.4);
      nextChange = millis() + timer;
    }

    if (millis() > timer * 45) {
      scale(9);
      nextChange = millis() + timer;
    }
    
    
    
    



  model(berg);
 orbitControl(2);
  rotateZ(PI);
  texture(bergUV2);
  if (millis() > timer * 20) {
    texture(bergUV2A);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 28) {
    texture(bergUV2B);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 50) {
    texture(bergUV2);
    nextChange = millis() + timer;
  }
  
       
 
   translate(0, 0, 0);
  sphere(1200);

  texture(bergUV3);

  if (millis() > timer * 1.3) {
    texture(bergUV4);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 2.2) {
    texture(bergUV5);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 4) {
    texture(bergUV6);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 5) {
    texture(bergUV7);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 6.2) {
    texture(bergUV4);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 10) {
    texture(bergUV5);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 20) {
    texture(bergUV9);
    nextChange = millis() + timer;
  }
  if (millis() > timer * 22) {
    texture(bergUV10);
    nextChange = millis() + timer;
  }

  if (millis() > timer * 50) {
    texture(bergUV4);
    nextChange = millis() + timer;
  }
 

  
    let temperatures = table.getColumn(1);
  drawColor(temperatures.slice(10,maxYear));
  
  if (maxYear < temperatures.length) {
  	maxYear = maxYear + 1; 
  } 
 
}


function drawColor(data) {
  let x = 0;
  
  // loop through data
  for(let t of data) {
    
    // map data to color
    let col = map(t, min(data), max(data), 30,  255);

        stroke(col, 30, 255); 
   
  }
  if (millis() > timer * 20) {
    stroke(255); 
    nextChange = millis() + timer;
  }
  if (millis() > timer * 45) {
    stroke(100);
    nextChange = millis() + timer;
  }
  

}

//bring in live data; learn material properties; rerender video to shift between arctic & antarctica; move vertices; smooth the cursur movement; lighting; camera
