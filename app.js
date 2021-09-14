const maze = document.getElementById("maze");
const ctx = maze.getContext("2d");

class Maze {
    constructor(rows, columns, area) {
        this.rows = rows;
        this.columns = columns;
        this.area = area
        this.grid = [];
        this.array = [];
    }

    create(){
        let currNode;
        for(let row = 0; row < this.rows; row++){
            let rowArray = []
            for(let col = 0; col < this.columns; col++){
                let section = new Section(this.area, this.grid, this.size);
                rowArray.push(section);
            }
            this.grid.push(rowArray)
        }
        currNode = this.grid[0][0];
    }
}

class Section{
    constructor(parentArea, parentGrid, rowIndex, columnIndex){
        this.parentArea = parentArea;
        this.parentGrid = parentGrid;
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
        this.visited = false;
        this.sides = {
            top: true,
            bottom: true,
            right: true,
            left: true,
        }
    }

    createTopWall(size, columns, rows, x, y){
        ctx.beginPath();
        ctx.moveTo(x , y);
        ctx.lineTo(x + size / columns, y);
        ctx.stroke()
    }

    createBottomWall(size, columns, rows, x, y){
        ctx.beginPath()
        ctx.moveTo(x , y + size / rows);
        ctx.lineTo(x + size / columns, y + size / rows);
        ctx.stroke();
    }

    createRightWall(size, columns, rows, x, y){
        ctx.beginPath();
        ctx.moveTo(x, y + size / rows);
        ctx.lineTo(x + size / columns, y + size / rows);
        ctx.stroke();
    }

    createLeftWall(size, columns, rows, x, y){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + size / rows);
        ctx.stroke();
    }

    drawSection(size, columns, rows){
        let x = this.columnIndex * size / columns;
        let y = this.columnIndex * size / rows;
        
        ctx.fillStyle = "black";
        ctx.strokeStyle = "white";

        let wall;
        switch(wall) {
            case this.sides.top : this.drawTopWall(size, columns, rows, x, y);
            case this.sides.bottom : this.drawBottomWall(size, columns, rows, x, y);
            case this.sides.right : this.drawRightWall(size, columns, rows, x, y);
            case this.sides.left : this.drawLeftWall(size, columns, rows, x, y);
        }
        if(this.visited) ctx.fillRect(x, y, size / columns, size / rows)
    }
}

