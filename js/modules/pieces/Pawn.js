import {Piece} from "/js/modules/pieces/Piece.js";
import {LegalityRules} from "/js/modules/board/LegalityRules.js";

export class Pawn extends Piece {
    
    constructor(pos, color){
        super(pos, color, "pawn");
    }

    
    isMoveLegal(move){
        return LegalityRules.MaxMoveLength(move, ((this.moves == 0) ? 2 : 1) ) &&
               LegalityRules.IsForward(move);
    }
    
    salute(){
        console.log("hello pawn");
    }
}