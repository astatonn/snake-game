class Snake{
    constructor(){
        this.body = [];
        this.dir = 'right';
    }

    start(x,y){
        this.body.push(new Part(x,y));
    }

    update(cell){
        let head = this.body[this.body.length -1];
        if(this.dir=='right'){
            this.body.push(new Part(head.x + cell, head.y));
        }

        this.body.shift();

        this.draw();
    }

    draw(){
        for(let [key, part] of this.body.entries()){
            circle(part.x, part.y, 20);
        }
    }
}


class Part{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
} 