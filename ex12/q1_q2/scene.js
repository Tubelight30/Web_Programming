const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');

// Function to draw the pond (Oval)
function drawPond(x, y, width, height) {
    ctx.beginPath();
    ctx.fillStyle = 'lightblue';
    ctx.ellipse(x, y, width, height, 0, 0, Math.PI * 2);
    ctx.fill();
}

// Function to draw the boat (Polygon with curved edges)
function drawBoat(x, y, width, height) {
    ctx.beginPath();
    ctx.fillStyle = 'brown';
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + width / 4, y - height / 2, x + width * 3 / 4, y - height / 2, x + width, y);
    ctx.lineTo(x + width, y + height);
    ctx.bezierCurveTo(x + width * 3 / 4, y + height * 3 / 2, x + width / 4, y + height * 3 / 2, x, y + height);
    ctx.closePath();
    ctx.fill();
}

// Function to draw ducks (Two Circles of Different Sizes)
function drawDuck(x, y, bodyRadius, headRadius) {
    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.arc(x, y, bodyRadius, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'orange';
    ctx.arc(x - bodyRadius / 2, y - bodyRadius / 2, headRadius, 0, Math.PI * 2);
    ctx.fill();
}

// Function to draw the sun (A Large Circle with Multiple Straight Lines Extending Outward)
function drawSun(x, y, radius) {
    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    for (let i = 0; i < 16; i++) {
        const angle = (i / 16) * Math.PI * 2;
        const lineLength = radius * 0.5;
        ctx.moveTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
        ctx.lineTo(x + Math.cos(angle) * (radius + lineLength), y + Math.sin(angle) * (radius + lineLength));
    }
    ctx.strokeStyle = 'orange';
    ctx.stroke();
}

// Function to draw the house (A Rectangle with a Triangle on Top)
function drawHouse(x, y, width, height) {
    ctx.beginPath();
    ctx.fillStyle = 'orange';
    ctx.fillRect(x, y, width, height);

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width / 2, y - height / 2);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.fillRect(x + width / 4, y + height / 2, width / 4, height / 4);
    ctx.fillStyle = 'brown';
    ctx.fillRect(x + width / 2, y + height / 2, width / 4, height / 4);
}

// Function to draw the flower (An Ellipse with a Vertical Line and Two Curved Shapes)
function drawFlower(x, y, stemHeight, petalWidth, petalHeight) {
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.fillRect(x + petalWidth / 2 - 2, y, 4, stemHeight);
    ctx.fillStyle = 'pink';
    ctx.ellipse(x + petalWidth / 2, y + stemHeight, petalWidth, petalHeight, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.arc(x + petalWidth / 2, y + stemHeight, petalHeight / 2, 0, Math.PI * 2);
    ctx.fill();
}

// Function to draw stones (Multiple Small Circles)
function drawStones(x, y, count, radius) {
    for (let i = 0; i < count; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'gray';
        ctx.arc(x + i * (radius * 2 + 5), y, radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Animation function for the boat
function animateBoat() {
    let boatX = 300;
    function moveBoat() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawScene(boatX);
        boatX += 1;
        if (boatX > canvas.width) boatX = 300;
        requestAnimationFrame(moveBoat);
    }
    moveBoat();
}

// Main drawing function
function drawScene(boatX = 300) {
    drawPond(350, 300, 150, 70);
    drawBoat(boatX, 300, 100, 20);
    drawDuck(650, 400, 20, 10);
    drawSun(700, 100, 50);
    drawHouse(100, 400, 100, 100);
    drawFlower(600, 450, 100, 40, 20);
    drawStones(50, 500, 5, 10);
}

drawScene();
animateBoat();