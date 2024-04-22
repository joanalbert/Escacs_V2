import {Piece} from "/js/modules/pieces/Piece.js";
import {BoardManager} from "/js/modules/board/BoardManager.js";
import {BoardBuilder} from "/js/modules/board/BoardBuilder.js";

export class BoardEffects{
    
    
    
    static ToggleSelect(piece){  
        if(!piece) return;
        let img = BoardManager.getCellPieceImageFromPos(piece.position);
        img.classList.toggle("chessPieceImageSelected");
    }
    
    
    
    
}