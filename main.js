console.log('Emi');

// 1. identificar el canvas
const canvas = document.querySelector('#canvas');
console.log(canvas);

// 1.5 definir el tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 2. definir el contexto de una constante
const ctx = canvas.getContext('2d');
console.log(ctx);

const x = canvas.width / 2;
const y = canvas.height / 2;

// Array para almacenar las posiciones de los clics
const clickedCircles = [];

// Declarar variable para la posición dinámica (círculo que sigue el mouse)
let dynamicCircle = null;

/////////
function circuloRojo(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ////////cuadrado
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 5;
    ctx.rect(560, 50, 620, 820);
    ctx.stroke();

    /// circulo
    ctx.beginPath();
    ctx.fillStyle = 'black'; 
    ctx.arc(670, 170, 90, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(580, 160, 180, 210);
    ctx.fill();

    /// circulo
    ctx.beginPath();
    ctx.fillStyle = 'black'; 
    ctx.arc(670, 360, 90, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(680, 200, 80, 250);
    ctx.fill();
    ///////////////////////////

    /// circulo
    ctx.beginPath();
    ctx.fillStyle = 'black'; 
    ctx.arc(870, 170, 90, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(870, 160, 90, 100);
    ctx.fill();

    ///////////////////////////

    /// circulo
    ctx.beginPath();
    ctx.fillStyle = 'black'; 
    ctx.arc(1060, 170, 90, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(970, 160, 90, 100);
    ctx.fill();

    ///////////////////////////

    /// circulo
    ctx.beginPath();
    ctx.fillStyle = 'black'; 
    ctx.arc(1060, 360, 90, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(970, 270, 90, 100);
    ctx.fill();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(970, 350, 180, 200);
    ctx.fill();

    /// circulo
    ctx.beginPath();
    ctx.fillStyle = 'black'; 
    ctx.arc(1060, 555, 90, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(970, 545, 90, 100);
    ctx.fill();

    ///////////////////////////

    /// circulo
    ctx.beginPath();
    ctx.fillStyle = 'black'; 
    ctx.arc(870, 360, 90, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(870, 270, 90, 100);
    ctx.fill();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(780, 350, 90, 100);
    ctx.fill();

    ///////////////////////////

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(870, 545, 90, 100);
    ctx.fill();

    /// circulo
    ctx.beginPath();
    ctx.fillStyle = 'black'; 
    ctx.arc(870, 555, 90, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(680, 465, 180, 180);
    ctx.fill();

    // circulo
    ctx.beginPath();
    ctx.fillStyle = 'black'; 
    ctx.arc(670, 555, 90, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ///////////////////////////

    /// circulo
    ctx.beginPath();
    ctx.fillStyle = 'black'; 
    ctx.arc(870, 745, 90, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(870, 655, 90, 100);
    ctx.fill();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(780, 655, 90, 100);
    ctx.fill();

    ///////////////////////////

    /// circulo
    ctx.beginPath();
    ctx.fillStyle = 'black'; 
    ctx.arc(1060, 745, 90, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(970, 655, 95, 100);
    ctx.fill();

    ///////////////////////////

    /// circulo
    ctx.beginPath();
    ctx.fillStyle = 'black'; 
    ctx.arc(680, 745, 90, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    ///cuadrado
    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.rect(680, 655, 90, 100);
    ctx.fill();

    // Dibujar cada círculo rojo marcado (permanente)
    clickedCircles.forEach(pos => {
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(pos.x, pos.y, 90, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    });
    
    // Dibujar el círculo rojo siguiendo el mouse
    if(dynamicCircle){
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(dynamicCircle.x, dynamicCircle.y, 90, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}

////////
canvas.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect();
    dynamicCircle = { 
        x: event.clientX - rect.left, 
        y: event.clientY - rect.top 
    };
    circuloRojo();
});

// Función para manejar los clics
function handleCanvasClick(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left; // Posición del mouse en el canvas
    const mouseY = event.clientY - rect.top;

    // Guardar la posición del clic en el array
    clickedCircles.push({x: mouseX, y: mouseY});

    // Redibujar todo con el nuevo círculo rojo permanente
    circuloRojo();
}

canvas.addEventListener('click', handleCanvasClick);