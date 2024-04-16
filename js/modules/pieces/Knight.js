import {Piece} from "/js/modules/pieces/Piece.js";
import {LegalityRules} from "/js/modules/board/LegalityRules.js";

export class Knight extends Piece {
    
    constructor(pos, color){
        super(pos, color, "knight");
    }

    
    isMoveLegal(move){
        return LegalityRules.ValidKnightMovement(move);
    }
    
    salute(){
        console.log("hello knight");
    }
}