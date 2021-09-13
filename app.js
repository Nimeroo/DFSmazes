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