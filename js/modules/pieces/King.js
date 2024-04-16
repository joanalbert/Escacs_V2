import {Piece} from "/js/modules/pieces/Piece.js";
import {LegalityRules} from "/js/modules/board/LegalityRules.js";

export class King extends Piece {
    
    constructor(pos, color){
        super(pos, color, "king");
    }

    
    isMoveLegal(move){
        return LegalityRules.MaxMoveLength(move, 1);
    }
    
    salute(){
        console.log("hello king");
    }
}