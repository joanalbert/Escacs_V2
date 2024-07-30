import {Vector} from "/js/modules/math/Vector.js";
import {BoardBuilder} from "/js/modules/board/BoardBuilder.js";
import {BoardManager} from "/js/modules/board/BoardManager.js";

import {Piece} from "/js/modules/pieces/Piece.js";
import {Rook} from "/js/modules/pieces/Rook.js";
import {Knight} from "/js/modules/pieces/Knight.js";

export class BoardMove{
    
    static MIN_LENGTH_ALLOWED = 1;
    
    constructor(o, d, piece, ePiece, mManager){
        
        this.movesManager = mManager;
        
        //locations involved
        this.origin = o;
        this.destination = d;
        
        //pieces involved
        this.piece = piece;
        this.eatenPiece = ePiece;
        
        //status
        this.validated = false;
        this.finished = false;
        this.status = "INVALID";
        
        //obstruction point
        this.obstructingPiece = null;
        
    }
    
    
    validate(){
        //
        let validStart    = this.checkPieceAtOrigin();
        let isValidLength = this.checkPathLength();
        if(!validStart || !isValidLength){
            this.status = "INVALID";
            return;
        }
        
       
        //
        let legal = this.piece.isMoveLegal(this);
        if(!legal){
            this.status = "ILLEGAL";
            return;
        }
        
        let obstructed = this.checkPathObstructed();
        if(obstructed){
            this.status = "OBSTRUCTED";
            this.handleObstruction();
            if(this.status == "OBSTRUCTED") return;
        }
        
        this.validated = true;
        
        this.status = "VALID";
        return;
    }
    
    
    
    checkPieceAtOrigin(){
        return this.piece ? true : false;
    }
    
    checkPieceAtDestination(){
        return this.eatenPiece ? true : false;
    }
    
       
    checkPathLength(){
        let dist = Vector.ChebyshevDistance(this.origin, this.destination);
        return dist >= BoardMove.MIN_LENGTH_ALLOWED;
    }
    
    checkPathObstructed(){
        
        if(this.piece.name == "knight") return false;
        
        let path = this.destination.subtract(this.origin);
        let distance = Vector.ChebyshevDistance(this.origin, this.destination);
        let direction = path.normalize().roundComponents();
        let obstructed = false;
        
        for(let i = 1; i <= distance; i++){
            
            let v = direction.getScaled(i);
            let checkPos = this.origin.add(v);
            let algName = BoardBuilder.getCellAlgebraicName(checkPos);
            let debugCell = document.getElementById(algName);
            let piece = BoardManager.cellsMap.get(algName);
            
            if(piece){
                this.obstructingPiece = piece;
                obstructed = true;
                break;
            }
                       
        }
        
        return obstructed;
    }

    

    handleObstruction(){
        if(this.obstructingPiece.isSameColorAs(this.piece)) this.status = "OBSTRUCTED";
        else{
            this.status = "VALID";
            this.destination = this.obstructingPiece.position;
            this.eatenPiece = this.obstructingPiece;
        }
    }
    
    execute(){
        if(!this.validated)
            console.warn("WARNING: Executing non-validated move.\nExpect undefined behavior\n")
        
        let kill = false;
        
        //remove eaten piece
        if(this.eatenPiece){
            
            //SETTING CHECK: tracks moves
            kill = true;
            this.notifyMoveTracker(this);
            
            
            BoardManager.removePiece(this.eatenPiece, false, true);
            this.piece.kills ++;
            console.log("kill!");
        }
        
        //move our piece
        let id = BoardBuilder.getCellAlgebraicName(this.piece.position);
        BoardManager.movePiece(id, this.destination, false);
        
        //SETTING CHECK: tracks moves (if the setting has already been checked
        //                             we can ignore it)
        if(!kill) this.notifyMoveTracker(this);
        
        //refresh the board
        BoardManager.refreshBoard();
        
        
        this.status = "FINISHED";
        this.finished = true;
    }

    notifyMoveTracker(move){
        BoardManager.TrackMove(move);
    }
}


