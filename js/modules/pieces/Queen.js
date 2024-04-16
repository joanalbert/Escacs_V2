import {Piece} from "/js/modules/pieces/Piece.js";
import {LegalityRules} from "/js/modules/board/LegalityRules.js";

export class Queen extends Piece {
    
    constructor(pos, color){
        super(pos, color, "queen");
    }

    
    isMoveLegal(move){
        return LegalityRules.NotDiagonal(move) || LegalityRules.Diagonal(move);
    }
    
    salute(){
        console.log("hello queen");
    }
}