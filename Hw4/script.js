// const canvas = document.querySelector('.canvas');
// const cnt = canvas.getContext('2d');


// cnt.beginPath();
// cnt.moveTo(70 , 70);
// cnt.lineTo(140 , 140);
// cnt.moveTo(140 , 70);
// cnt.lineTo(70 , 140);
// cnt.stroke();

// cnt.beginPath();
// cnt.moveTo(20 , 20);
// cnt.lineTo(20 , 40);
// cnt.lineTo(40 , 40);
// cnt.lineTo(40 ,20);

// cnt.closePath();
// cnt.stroke();
// cnt.beginPath();
// cnt.moveTo(20 , 20);
// cnt.lineTo(80 , 20);
// cnt.lineTo(50 , 60);
// cnt.closePath();
// cnt.stroke();


// cnt.beginPath();
// cnt.moveTo(20 , 40);
// cnt.lineTo(80 , 40);
// cnt.moveTo(60 ,20);
// cnt.lineTo(80 , 40);
// cnt.lineTo(60 , 60);
// cnt.strokeStyle = 'red';
// cnt.lineWidth = 5;
// cnt.stroke();


// cnt.fillStyle = "red";
// cnt.strokeStyle = 'green';
// cnt.lineWidth = 5;
// cnt.fillRect(20 , 20 ,70 ,70);
// cnt.strokeRect(20 ,20 ,70 ,70);
// cnt.clearRect(40 ,40 ,30 ,30);

// cnt.beginPath();
// cnt.arc(60 ,60 ,50 ,0, Math.PI );
// cnt.fillStyle = 'red';
// cnt.fill();
// cnt.closePath();
// cnt.stroke();


//  cnt.fillStyle = 'red';
// cnt.fillRect(20 ,20 , 50 ,50);
// cnt.fillStyle = 'green';
// cnt.fillRect(20 ,80 , 50 ,50);


//  cnt.beginPath();
// cnt.moveTo(140 , 70);
// cnt.lineTo(140 , 140);
// cnt.moveTo(130 , 70);
// cnt.lineTo(130 , 140);
// cnt.moveTo(120 , 70);
// cnt.lineTo(120 , 140);
// cnt.moveTo(110 , 70);
// cnt.lineTo(110 , 140);
// cnt.moveTo(100 , 70);
// cnt.lineTo(100 , 140);
// cnt.moveTo(90 , 130);
// cnt.lineTo(150 , 130);
// cnt.moveTo(90 , 120);
// cnt.lineTo(150 , 120);
// cnt.moveTo(90 , 110);
// cnt.lineTo(150 , 110);
// cnt.moveTo(90 , 100);
// cnt.lineTo(150 , 100);
// cnt.moveTo(90 , 90);
// cnt.lineTo(150 , 90);
// cnt.moveTo(90 , 80);
// cnt.lineTo(150 , 80);
// cnt.stroke();


// const canvas = document.querySelector('.canvas');
// const cnt = canvas.getContext('2d');

// for (let a = 18; a < 300; a += 18){
//     fan(a, cnt);
    
// }
// function fan (x , cnt){
//     cnt.strokeStyle = 'red';
//     cnt.moveTo(0 ,x);
//     cnt.lineTo(300 ,x);cnt.lineWidht = 0.2; cnt.stroke();
// }





const canvas = document.querySelector('canvas'),
      ctx    = canvas.getContext('2d');

      canvas.width = 700
      canvas.height = 500

const btnNext = document.querySelector('.btn-next'),
      btnBack = document.querySelector('.btn-back');
const [...imgMass] = document.querySelectorAll('img'); 

let imgCounter = 1;

btnNext.addEventListener('click', nextSlide);
btnBack.addEventListener('click', backSlide);

ctx.drawImage(imgMass[0], 0, 0, 700, 500) 

function nextSlide() {

    ctx.beginPath()
    ctx.drawImage(imgMass[imgCounter], 0, 0, 700, 500);

    if (imgCounter == imgMass.length - 1) {
        imgCounter = 0
    } else {
        imgCounter += 1
    }
}

function backSlide() {

    ctx.beginPath()
    ctx.drawImage(imgMass[imgCounter], 0, 0, 700, 500);

    if (imgCounter <= 0) {
        imgCounter = imgMass.length - 1
    } else {
        imgCounter -= 1
    }
}

