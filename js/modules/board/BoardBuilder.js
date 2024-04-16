import {Vector} from "/js/modules/math/Vector.js"; 

export class BoardBuilder{
    
    static IS_BUILT = false;
    
    constructor(dimensions){
        this.dimensions = dimensions;
    }
    
    build(){
        BoardBuilder.IS_BUILT = true;
        return this.buildBoard();
    }
    
    buildBoard(){
       let board = this.makeBoard();

       for(let y = 1; y <= this.dimensions.height; y++){
           let row = this.makeRow();

           for(let x = 1; x <= this.dimensions.width; x++){
               let cell = this.makeCell(x,y);               
               row.appendChild(cell);        
           }

           board.appendChild(row);
       }

       document.getElementById("board_container").appendChild(board);
         
       return board;  
    }

     makeBoard(){
        let board = document.createElement("div");
        board.classList.add("chessBoard");
        return board;
    }

     makeRow(){
        let row = document.createElement("div");
        row.classList.add("chessRow");
        return row;
    }

     makeCell(x,y){
        let cell = document.createElement("div");
        let color = ((x+y) % 2 == 0) ? "white" : "black";
        let colorNot = ((x+y) % 2 == 0) ? "black" : "white";
         
        cell.classList.add("chessCell");
        cell.style.backgroundColor = color;
         
        cell.position = new Vector(x, y);
        cell.id = BoardBuilder.getCellAlgebraicName(cell.position);
        cell.classList.add("chessCell"); 
        //cell.innerText = `${x},${y}`; 
                       
        return cell;
    }
    
    static  getCellAlgebraicName(pos){
        var lletra = String.fromCharCode(64+(pos.x+1));
        return lletra+Math.abs((pos.y+1)-9);
    }
}



