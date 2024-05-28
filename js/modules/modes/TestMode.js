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

export class TestMode extends GameMode{
    
    constructor(){
        super(MODES.TEST_MODE);
    }
    
    //Override
    setup(){
        
        let p = new Queen(new Vector(5,5), Piece.COLOR.WHITE);
        BoardManager.addPiece(p, true);
    }
}