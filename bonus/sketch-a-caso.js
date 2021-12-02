/* 
quando ho finito il bootcamp di boolean avevo un po di tempo e youtube mi
bombardava con la pubblicità di questo corso di domestika. Purtroppo non ho 
ancora avuto il tempo di copmpletarlo, ma è molto figo, e mi ha dato 2 basi 
di js. 
Vi lascio questo come bonus perchè è quello su cui ho sperimentato un 
poco io, inoltre devo ancora finire PlayStation...
*/

/*
non credo che possiate eseguirlo senza installare le librerie di canvas-sketch 
quindi allego anche un output di questo script
*/

const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#42c8ff';
    context.fillRect(0, 0, width, height);


    const cy = height * 0.5;
    const cx = width * 0.5;
    const w = width * 0.6;
    const h = height * 0.6;
    
    let mirror = -1;
    let number = random.rangeFloor(10, 30);
    

    // for(let i = 0; i < 2; i++){
    //   for(let j = 0; j < 2; j++){
    //     context.beginPath();
    //     context.rect(i * cx, j * cy, cx, cy);
    //     context.stroke();
    //   }
    // }

    // context.save();
    // context.translate(cx, cy);

    // context.fillStyle = 'black';

    // context.rotate(0.3);

    // context.beginPath();
    // context.fillRect(0, 0, w, h);
    // context.stroke();
    // context.restore();

    context.strokeStyle = '#4a3440';
    
    for(let i = 0; i < 2; i++){
      for(let j = 0; j < 2; j++){
        context.save();

        if(i == 1){
          mirror = 1;
        }
        context.translate(i * width, j * height);
        context.rotate(mirror * Math.PI / 2 * (i + j));
        
        for(let k = 0; k < number; k++){
          context.beginPath();
          context.arc(0, 0, random.range(0.5 * w, w), 0, 0.5 * Math.PI);
          // context.rect(0, 0, w, h);
          context.stroke();

          let test = k;
          while(test > 2) {
            test = test - 3;
          }
          if(test == 0){
            let x = random.range(0.5 * cx, cx);
            let y = random.range(0.1 * cy, cy);

            for(let l = 0; l < number / 3; l++){
              context.beginPath();
              context.arc(x, y, random.range(0.01 * cx, 0.05 * cx), 0, 2 * Math.PI);
              context.stroke();
            }
          }
        }
        context.restore();
      }
    }
  
    for(let i = 0; i < random.rangeFloor(5, 10); i++){
      
      context.lineWidth = random.rangeFloor(1, 5);

      context.beginPath();
      context.arc(width * 0.5, height * 0.5, random.rangeFloor(0.01 * w, 0.25 * w), 0, Math.PI * 2);
      context.stroke();
    }

  };
};

canvasSketch(sketch, settings);
