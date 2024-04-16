import {Piece} from "/js/modules/pieces/Piece.js";
import {LegalityRules} from "/js/modules/board/LegalityRules.js";

export class Rook extends Piece {
    
    constructor(pos, color){
        super(pos, color, "rook");
    }

    
    isMoveLegal(move){
        return LegalityRules.NotDiagonal_V2(move);
    }
    
    salute(){
        console.log("hello rook");
    }
}