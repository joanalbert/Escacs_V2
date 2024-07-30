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

/*settings*/
import {ModeSettings} from "/js/modules/modes/ModeSettings.js";

export class TestMode extends GameMode{
    
    constructor(_settings){
        super(MODES.TEST_MODE);
        
        this.settings = (_settings == null) ? this.loadDefaultSettings() : _settings
    }
    
    //Override
    setup(){
        
        let p = new Queen(new Vector(5,5), Piece.COLOR.WHITE);
        BoardManager.addPiece(p, true);
        
        p = new Queen(new Vector(6,5), Piece.COLOR.BLACK);
        BoardManager.addPiece(p, true);
        
        p = new Queen(new Vector(7,5), Piece.COLOR.BLACK);
        BoardManager.addPiece(p, true);
        
        p = new Queen(new Vector(8,5), Piece.COLOR.BLACK);
        BoardManager.addPiece(p, true);
    }
    
    //Override
    loadDefaultSettings(){
        let settings = new ModeSettings()
                           .TracksMoves(false)
                           .TracksTime(false)
                           .CollectsPieces(false);
        return settings;
    }
}