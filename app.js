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
}