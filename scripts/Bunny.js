var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2; var y = canvas.height-30;
var dx = 0; var dy = 0;
var ballRadius = 20;
var gravity = 1; var jumpForce = 5
var onGround = true; var speedLimit = 3

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
var obstaclesList = {}; var obstaclesNumber = 0
function createObstacle(size) {
    obstaclesList[obstaclesNumber+1] = {v:-1,x:canvas.width-size.x,size:size};
}
function drawObstacle(n) {
    OData = obstaclesList[n]
    if (OData.x + OData.size.x < 0) {
        OData.x = canvas.width
    } else {OData.x -= dx};
    ctx.beginPath();
    ctx.rect(OData.x, canvas.height-OData.size.y, OData.size.x, OData.size.y);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
}
createObstacle({x:20,y:40});
function draw() {
    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius ){
        dy = 0;
        onGround = true;
    }
    else {
        dy += gravity/10
    };
    if (dx > speedLimit-1) {dx -= 0.01}; if (dx > speedLimit) {dx -= 0.1*dx}
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawObstacle(1);
    drawBall();
    y += dy;
}

Boton.addEventListener("click",function() {
    if (onGround == true) {
        onGround = false
        dy += -jumpForce;
        dx += jumpForce/2.5;
    };
});

setInterval(draw, 10);