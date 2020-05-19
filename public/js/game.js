const cellZise = 20;
const boardSize = 10;

let snake;
const side = cellZise * boardSize;
const half = side/2;
let counter = 0;
function setup(){   
    createCanvas(side, side);
    snake = new Snake();
    snake.start(half,half, cellZise);
    //frameRate(1);
}

function draw(){
    if(counter >= 15){    
        background(200);
        boardLines(); 
        snake.update(cellZise, side);   
        counter =0;       
    }
    userInput(); 
    counter++;
}

function boardLines(){
    for(let row=0; row <= side; row+=cellZise){
        line(0,row,side, row);
        line(row,0,row, side);
    }
}

function userInput(){
    if(keyIsDown(UP_ARROW)){
        //console.log('UP');
        snake.dir = 'up';
    }
    if(keyIsDown(RIGHT_ARROW)){
        snake.dir = 'right';
    }
    if(keyIsDown(DOWN_ARROW)){
        snake.dir = 'down';
    }
    if(keyIsDown(LEFT_ARROW)){
        snake.dir = 'left';
    }
}