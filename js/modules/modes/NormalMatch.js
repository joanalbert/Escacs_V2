import {GameMode} from "/js/modules/modes/GameMode.js";
import {MODES} from "/js/modules/modes/ModesEnum.js";

import {Vector} from "/js/modules/math/Vector.js";

/*pieces*/
import {Piece} from "/js/modules/pieces/Piece.js";
import {Rook} from "/js/modules/pieces/Rook.js";
import {Knight} from "/js/modules/pieces/Knight.js";
import {Bishop} from "/js/modules/pieces/Bishop.js";
import {Pawn} from "/js/modules/pieces/Pawn.js";
import {King} from "/js/modules/pieces/King.js";
import {Queen} from "/js/modules/pieces/Queen.js";

/*board*/
import {BoardManager} from "/js/modules/board/BoardManager.js";


export class NormalMatch extends GameMode {
    
    constructor(){
        super(MODES.NORMAL_MATCH)
    }
    
    //Override
    setup(){    
        //pìeces setup
        this.pawns(Piece.COLOR.WHITE);
        this.pawns(Piece.COLOR.BLACK);
        
        this.others(Piece.COLOR.WHITE);
        this.others(Piece.COLOR.BLACK);
    }
    
    pawns(color){
        
        let y = (color == Piece.COLOR.WHITE ) ? 7 : 2;
        
        for(let x = 1; x <= 8; x++){
            let p = new Pawn(new Vector(x,y), color);
            BoardManager.addPiece(p, true);
        }
    }
    
    others(color){
        let y = (color == Piece.COLOR.WHITE ) ? 8 : 1;
        
        let rook  = new Rook(new Vector(1, y), color);
        let rook2 = new Rook(new Vector(8, y), color);
        
        let knight  = new Knight(new Vector(2, y), color); 
        let knight2 = new Knight(new Vector(7, y), color); 
        
        let bishop  = new Bishop(new Vector(3, y), color);
        let bishop2 = new Bishop(new Vector(6, y), color);
        
        let x = (color == Piece.COLOR.WHITE ) ? 4 : 5;
        let queen = new Queen(new Vector(x,y), color);
        
        x = (color == Piece.COLOR.WHITE ) ? 5 : 4;
        let king = new King(new Vector(x,y), color);
        
        
        BoardManager.addPiece(rook, true);
        BoardManager.addPiece(rook2, true);
        
        BoardManager.addPiece(knight, true);
        BoardManager.addPiece(knight2, true);
        
        BoardManager.addPiece(bishop, true);
        BoardManager.addPiece(bishop2, true);
        
        BoardManager.addPiece(queen, true);
        BoardManager.addPiece(king, true);
    }
}






