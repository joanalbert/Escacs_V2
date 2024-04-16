import {GameMode} from "/js/modules/modes/GameMode.js";
import {BoardBuilder} from "/js/modules/board/BoardBuilder.js";


export class ModeManager {
    
    static GAME_IN_PROGRESS = false;
    
    static CURRENT_GAME = null;

    static LaunchMode(game){
        
        //before launching any mode, let's first check if a borad is been wuilt or not
        if(!ModeManager.CheckBoardExists()) throw new Error("There's no board to play on! We need to build it first");
        
        ModeManager.GAME_IN_PROGRESS = true;
        
        //if there's a game in progress
        if(ModeManager.CURRENT_GAME != null){
            throw new Error("not yet buddy")
            BoardManager.resetBoard();
        }
        
        ModeManager.CURRENT_GAME = game
        ModeManager.CURRENT_GAME.setup();
        
        console.log(`now playing: ${game.mode_id}`);
    }

    static CheckBoardExists(){
        return BoardBuilder.IS_BUILT;
    }
}