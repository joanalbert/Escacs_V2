import {Piece} from "/js/modules/pieces/Piece.js";
import {LegalityRules} from "/js/modules/board/LegalityRules.js";

export class Bishop extends Piece {
    
    constructor(pos, color){
        super(pos, color, "bishop");
    }

    
    isMoveLegal(move){
        return LegalityRules.Diagonal_V2(move);
    }
    
    salute(){
        console.log("hello bishop");
    }
}