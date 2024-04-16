import {Vector} from "/js/modules/math/Vector.js";
import {Piece} from "/js/modules/pieces/Piece.js";
import {MovesManager} from "/js/modules/board/MovesManager.js";
import {BoardBuilder} from "/js/modules/board/BoardBuilder.js";

export class BoardManager{
    
    static cellsMap = new Map();

    static boardDimensions;


    /////////////////////////////////////////////////////////////////////BASIC SETUP
    static initCellsMap(){ //the functions add-remove piece also set this map
        
        console.log("called")
        
        for(let x = 0; x < BoardManager.boardDimensions.width; x++){
           for(let y = 0; y < BoardManager.boardDimensions.height; y++){
               BoardManager.setupCellInMap(x, y);
            } 
        } 
        
        console.log(BoardManager.cellsMap);
    }

    static setupCellInMap(x, y){
        let v = new Vector(x,y);
        let algName = BoardBuilder.getCellAlgebraicName(v);
        BoardManager.cellsMap.set(algName, null);
    }
    ////////////////////////////////////////////////////////////////////////////////
    
   
    ////////////////////////////////////////////////////GRAPHICAL PIECE ADD/REMOVE
    static addCellImage(piece, cell){
        if(!piece) return;
        
        let img = document.createElement("img");
                
        img.setAttribute("cell_id", cell.id);
        img.src = piece.getImage();
        img.classList.add("chessPieceImage");
        
        cell.appendChild(img);
    }
    
    static removeCellImage(cellElement){  
        if(!cellElement) return;
        let img = cellElement.getElementsByTagName("img")[0];
        if(img)cellElement.removeChild(img);
    }

    static refreshBoard(){
        for(let x = 1; x <= BoardManager.boardDimensions.width; x++){
           for(let y = 1; y <= BoardManager.boardDimensions.height; y++){
               let pos = new Vector(x, y);
               let id = BoardBuilder.getCellAlgebraicName(pos);
               
               let cell = document.getElementById(id);
               let piece = BoardManager.cellsMap.get(id);
               
               BoardManager.removeCellImage(cell);
               BoardManager.addCellImage(piece, cell);
            } 
        } 
    }
    ////////////////////////////////////////////////////////////////////////////////
    
    
    
    /////////////////////////////////////////////////////// LOGICAL PIECE ADD/REMOVE    
    static addPiece(p, refresh){
        //this.pieces.push(p);
        let key = BoardBuilder.getCellAlgebraicName(p.position);
        BoardManager.cellsMap.set(key, p);
        
        if(refresh) BoardManager.refreshBoard();
    }
    
    static removePiece(p, refresh){
        let key = BoardBuilder.getCellAlgebraicName(p.position);
        BoardManager.cellsMap.set(key, null);
        
        if(refresh) BoardManager.refreshBoard();
    }

    static clearCell(v, refresh){
        let id = BoardBuilder.getCellAlgebraicName(v);
        let cell = document.getElementById(id);
        let piece = BoardManager.cellsMap.get(id);
        
        if(piece) BoardManager.removePiece(piece);
        
        if(refresh) BoardManager.refreshBoard();
    }

    static resetBoard(){
        for(let x = 1; x <= BoardManager.boardDimensions.width; x++){
           for(let y = 1; y <= BoardManager.boardDimensions.height; y++){
               let pos = new Vector(x, y);
               BoardManager.clearCell(pos, true);
           }
        }
    }
    /////////////////////////////////////////////////////////////////////////////////
    
    static movePiece(id, newPos, refresh){
        let p = BoardManager.cellsMap.get(id);
        if(p){
            let newId = BoardBuilder.getCellAlgebraicName(newPos);
            BoardManager.cellsMap.set(id, null);
            BoardManager.cellsMap.set(newId, p);
            
            p.position = newPos;
            p.moves ++;
            
            if(refresh) BoardManager.refreshBoard();
        }
    }
    
    static getBoardCellElement(pos){
        return document.getElementById(BoardBuilder.getCellAlgebraicName(pos));
    }

    
    static getCellPieceImageFromCell(cell){
        return cell.querySelector(`img[cell_id='${cell.id}']`);
    }

    static getCellPieceImageFromPos(pos){
        let cell = BoardManager.getBoardCellElement(pos);
        return cell.querySelector(`img[cell_id='${cell.id}']`);
    }

}