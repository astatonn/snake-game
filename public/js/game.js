const cellZise = 20;
const boardSize = 40;
const frame = 5;

let snake;
const side = cellZise * boardSize;
const half = side/2;
let counter = 0;
let fruit;
function setup(){   
    createCanvas(side, side);
    snake = new Snake();
    snake.start(parseInt(half),parseInt(half), cellZise);
    setFruit();
    //frameRate(1);
}

function setFruit(){
    fruit = new Part(parseInt(random(0,boardSize)) * cellZise, parseInt(random(0,boardSize))*cellZise);
}

function draw(){
    fill('white')
    if(counter >= frame){    
        background(200);
        boardLines(); 
        if(eating(snake, fruit)){
            snake.hasEaten = true;
            setFruit();
        }

        if(snake.collision()){
            snake.start(half,half, cellZise);
        }

        snake.update(cellZise, side);   
        counter =0;    
        fill('red');
        square(fruit.x, fruit.y, cellZise);   
    }
    userInput(); 
    counter++;
}

function eating(snake, fruit){
    let head = snake.body[snake.body.length -1 ];
    let x = head.x == fruit.x;
    let y = head.y == fruit.y;
    if(x&y){
        console.log('The Snake has eaten!!!');
    }
    return x&y;
}

function boardLines(){
    for(let row=0; row <= side; row+=cellZise){
        line(0,row,side, row);
        line(row,0,row, side);
    }
}

function userInput(){
    if(keyIsDown(UP_ARROW) && snake.dir != 'down'){
        //console.log('UP');
        snake.dir = 'up';
    }
    if(keyIsDown(RIGHT_ARROW) && snake.dir != 'left'){
        snake.dir = 'right';
    }
    if(keyIsDown(DOWN_ARROW) && snake.dir != 'up'){
        snake.dir = 'down';
    }
    if(keyIsDown(LEFT_ARROW) && snake.dir != 'right'){
        snake.dir = 'left';
    }
}