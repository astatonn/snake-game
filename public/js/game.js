const cellZise = 20;
const boardSize = 10;

let snake;

function setup(){
    const side = cellZise * boardSize;
    const half = parseInt(side/2);
    createCanvas(side, side);
    snake = new Snake();
    snake.start(half,half);
    frameRate(1);
}

function draw(){
    background(200)
    snake.update(cellZise);    
}