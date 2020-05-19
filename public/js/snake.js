class Snake{
    constructor(){
        this.body = [];
        this.dir = 'right';
        this.zise = 0;
    }

    start(x,y, size){
        this.body.push(new Part(x,y));
        this.size = size;
    }

    update(cell, max){
        let head = this.body[this.body.length -1];
        if(this.dir=='right'){
            let next = head.x + cell >= max? 0: head.x + cell;
            this.body.push(new Part(next, head.y));
        }
        if(this.dir=='up'){
            let next = head.y - cell <0? max - cell: head.y - cell;
            this.body.push(new Part(head.x, next));
        }
        if(this.dir=='left'){
            let next = head.x - cell <0? max - cell: head.x - cell;
            this.body.push(new Part(next, head.y));
        }
        if(this.dir=='down'){
            let next = head.y + cell >=max? 0: head.y + cell;
            this.body.push(new Part(head.x, next));
        }

        this.body.shift();
        this.draw();
    }

    draw(){
        for(let [key, part] of this.body.entries()){
            square(part.x, part.y, this.size);
        }
    }
}


class Part{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
} 