import {Vector} from "/js/modules/math/Vector.js";
import {BoardManager} from "/js/modules/board/BoardManager.js";
import {BoardBuilder} from "/js/modules/board/BoardBuilder.js";
import {BoardMove} from "/js/modules/board/BoardMove.js"
import {BoardEffects} from "/js/modules/board/BoardEffects.js"

export class MovesManager{
    
    constructor(){
       
        this.moveHistory = []; 
        
        //move data
        this.origin = null;
        this.destination = null;
        this.movPiece = null;
        this.eatPiece = null;
        
               
        
        this.eventSetup();
    }
    
    
    
    eventSetup(){
        let cells = document.getElementsByClassName("chessCell");
        for(let cell of cells){
            cell.addEventListener("click", (e) => {    
                this.handleCellClick(e.target);                
           }); 
        }
    }
    
    handleCellClick(clickedCell){
        let pos = clickedCell.position;
                
        
        //selection process
        if(!this.origin){
            this.origin = pos;
            this.movPiece = BoardManager.cellsMap.get(clickedCell.id);
            
            BoardEffects.ToggleSelect(this.movPiece);
        }
        else {
            this.destination = pos;
            this.eatPiece = BoardManager.cellsMap.get(clickedCell.id);
            
            BoardEffects.ToggleSelect(this.movPiece);
        }
        /////
        
        
        //move execution
        if(this.destination && this.origin){
            let move = new BoardMove(this.origin, this.destination,
                                     this.movPiece, this.eatPiece, this);
              
            move.validate();
            if(move.status == "VALID") move.execute();
            
            
            this.resetMove(move);
            //this.moveHistoryAddEntry(move); //bound to change eventually
        }
    }
    
    
    resetMove(move){
        console.log(move.status);
        console.log("done\n");
                
        this.origin = null;
        this.destination = null;
        this.movPiece = null;
        this.eatPiece = null;
    }       
    
    moveHistoryNewEntry(move){
        this.moveHistory.push(move);
    }
    
}