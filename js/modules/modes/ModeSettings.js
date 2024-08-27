export class ModeSettings {
        
    construct(){
        this.tracksTime     = null;
        this.tracksMoves    = null;
        this.moveTime       = null;
        this.collectsPieces = null;
        this.boardSize      = null;
    }
    
    BoardSize(vSize){
        this.boardSize = vSize;
        return this;
    }
    
    TracksTime(setting){
        this.tracksTime = setting;
        return this;
    }
    
    TracksMoves(setting){
        this.tracksMoves = setting;
        return this;
    }
    
    MoveTime(setting){
        this.moveTime = setting;
        return this;
    }
    
    CollectsPieces(setting){
        this.collectsPieces = setting;
        return this;
    }
}