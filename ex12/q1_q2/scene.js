const canvas = document.getElementById("sceneCanvas");
const ctx = canvas.getContext("2d");

function drawPond(x, y, width, height) {
  ctx.beginPath();
  ctx.fillStyle = "lightblue";
  ctx.ellipse(x, y, width, height, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawBoat(x, y, width, height) {
  ctx.beginPath();
  ctx.fillStyle = "brown";
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(
    x + width / 4,
    y - height / 2,
    x + (width * 3) / 4,
    y - height / 2,
    x + width,
    y
  );
  ctx.lineTo(x + width, y + height);
  ctx.bezierCurveTo(
    x + (width * 3) / 4,
    y + (height * 3) / 2,
    x + width / 4,
    y + (height * 3) / 2,
    x,
    y + height
  );
  ctx.closePath();
  ctx.fill();
}

function drawDuck(x, y, bodyRadius, headRadius) {
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(x, y, bodyRadius, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "orange";
  ctx.arc(x - bodyRadius / 2, y - bodyRadius / 2, headRadius, 0, Math.PI * 2);
  ctx.fill();
}

function drawSun(x, y, radius) {
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();

  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    const lineLength = radius * 0.5;
    ctx.moveTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
    ctx.lineTo(
      x + Math.cos(angle) * (radius + lineLength),
      y + Math.sin(angle) * (radius + lineLength)
    );
  }
  ctx.strokeStyle = "orange";
  ctx.stroke();
}

function drawHouse(x, y, width, height) {
  ctx.beginPath();
  ctx.fillStyle = "orange";
  ctx.fillRect(x, y, width, height);

  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y);
  ctx.lineTo(x + width / 2, y - height / 2);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.fillRect(x + width / 4, y + height / 2, width / 4, height / 4);
  ctx.fillStyle = "brown";
  ctx.fillRect(x + width / 2, y + height / 2, width / 4, height / 4);
}

function drawFlower(ctx, x, y) {
  ctx.fillStyle = "pink";
  let petalRadius = 20;
  for (let i = 0; i < 6; i++) {
    let angle = (Math.PI / 3) * i;
    let petalX = x + Math.cos(angle) * petalRadius;
    let petalY = y + Math.sin(angle) * petalRadius;
    ctx.beginPath();
    ctx.arc(petalX, petalY, petalRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "green";
  ctx.fillRect(x - 5, y + 40, 10, 40);

  ctx.fillStyle = "darkgreen";
  function drawLeaf(leafX, leafY, scaleX, scaleY) {
    ctx.beginPath();
    ctx.ellipse(leafX, leafY, 15 * scaleX, 10 * scaleY, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  drawLeaf(x - 12, y + 40, 1, 1);
  drawLeaf(x + 12, y + 40, 1, 1);
}

function drawStones(x, y) {
  const stones = [
    { x: x, y: y, radius: 20 },
    { x: x + 25, y: y + 10, radius: 12 },
    { x: x + 50, y: y - 5, radius: 25 },
  ];

  stones.forEach((stone) => {
    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.strokeStyle = "blue";
    ctx.arc(stone.x, stone.y, stone.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
}

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
function drawBird(ctx, x, y) {
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.strokeStyle = "blue";
  ctx.arc(x, y, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x + 35, y - 15, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x + 42, y - 22, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.translate(x + 73, y - 10);
  ctx.rotate(Math.PI);

  ctx.beginPath();
  ctx.fillStyle = "orange";
  ctx.moveTo(0, 0);
  ctx.lineTo(20, 10);
  ctx.lineTo(20, -10);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

function drawScene(boatX = 300) {
  drawPond(350, 300, 150, 70);
  drawBoat(boatX, 300, 100, 20);
  drawSun(700, 100, 50);
  drawHouse(100, 400, 100, 100);
  drawFlower(ctx, 600, 450);
  drawStones(130, 580);
  drawBird(ctx, 650, 400);
}

drawScene();
animateBoat();
