import {Vector} from "/js/modules/math/Vector.js";
import {BoardMove} from "/js/modules/board/BoardMove.js";
import {BoardBuilder} from "/js/modules/board/BoardBuilder.js";
import {BoardManager} from "/js/modules/board/BoardManager.js";

export class LegalityRules{
 
    static GetMoveNormal(move){
        let p = move.piece;
        let path = move.destination.subtract(move.origin);
        return path.normalize();
    }
    
    
        
    static MaxMoveLength(move, mLength){
        let d = Vector.ChebyshevDistance(move.origin, move.destination);
        return d <= mLength; 
    }

    static IsForward(move){
        let dir = LegalityRules.GetMoveNormal(move);
        return dir.equals(move.piece.forward);
    } 

    static NotDiagonal(move){
        let dir = LegalityRules.GetMoveNormal(move);
        let dot = move.piece.forward.dot(dir);
        return (dot % 1 == 0);
    }
    
    static NotDiagonal_V2(move){
        return !LegalityRules.Diagonal_V2(move);
    }
    
    static Diagonal_V2(move){
        let dir = LegalityRules.GetMoveNormal(move);
        let angle = move.piece.forward.angleBetween(dir);
        return Math.abs(angle - 90) == 45;
    }

    static Diagonal(move){
        return !LegalityRules.NotDiagonal(move);
    }
    
    static StraightLine(move){
        let dir = LegalityRules.GetMoveNormal(move);
        let dot = move.piece.forward.dot(dir);
        console.log(dot);
        return false;
    }

    static ValidKnightMovement(move){
        let path = move.destination.subtract(move.origin);
        
        let x = Math.abs(path.x);
        let y = Math.abs(path.y);
        
        if (x==2 && y==1 || x==1 && y ==2){
            
            let id = BoardBuilder.getCellAlgebraicName(move.destination);
            let pieceAtDestination = BoardManager.cellsMap.get(id);
            
            if (pieceAtDestination && !pieceAtDestination.isSameColorAs(move.piece)) return true; 
            else if (!pieceAtDestination) return true; 
            
        }
        return false;
    }
}