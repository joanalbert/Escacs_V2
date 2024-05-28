import {Piece} from "/js/modules/pieces/Piece.js";
import {LegalityRules} from "/js/modules/board/LegalityRules.js";

export class Pawn extends Piece {
    
    constructor(pos, color){
        super(pos, color, "pawn");
    }

    
    isMoveLegal(move){
        let mov = LegalityRules.MaxMoveLength(move, ((this.moves == 0) ? 2 : 1) ) &&
                  LegalityRules.IsForward(move) &&
                  move.eatenPiece == null;
        
        let kill = LegalityRules.MaxMoveLength(move,1) &&
                   LegalityRules.Diagonal_V2(move)     &&
                   move.eatenPiece != null;
                
        return mov || kill;
    }
    
    salute(){
        console.log("hello pawn");
    }
}