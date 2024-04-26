import { MODES } from "/js/modules/modes/ModesEnum.js";
import {NormalMatch} from "/js/modules/modes/NormalMatch.js";
import {TestMode} from "/js/modules/modes/TestMode.js";

import {BoardBuilder} from "/js/modules/board/BoardBuilder.js";
import {BoardManager} from "/js/modules/board/BoardManager.js";



export class ModeManager {
    
    static GAME_IN_PROGRESS = false;
    
    static CURRENT_GAME = null;

    static LaunchMode(mode){
        
        //before launching any mode, let's first check if a borad has been built or not
        if(!ModeManager.CheckBoardExists()) throw new Error("There's no board to play on! We need to build it first");
        
        ModeManager.GAME_IN_PROGRESS = true;
        
        //if there's a game in progress
        if(ModeManager.CURRENT_GAME != null){
            //throw new Error("not yet buddy")
            BoardManager.resetBoard();
        }
        
        let game = ModeManager.INSTANTIATE_GAME(mode);
        
        ModeManager.CURRENT_GAME = game
        ModeManager.CURRENT_GAME.setup();
        
        console.log(`now playing: ${game.mode_id}`);
    }

    static RestartMode(){
        
        if(ModeManager.GAME_IN_PROGRESS && ModeManager.CURRENT_GAME != null){
            console.log(`now restarting ${ModeManager.CURRENT_GAME.mode_id}`)
            BoardManager.resetBoard();
            ModeManager.CURRENT_GAME.setup();
        }
        
    }

    static INSTANTIATE_GAME(mode){
        
        let game = null;
        
        switch(mode){
            case MODES.NORMAL_MATCH:
                game = new NormalMatch();
                break;
            case MODES.TEST_MODE:
                game = new TestMode();
                break;
            default:
                throw new Error("TRIED TO LAUNCH a non-existing game mode");
                break;
        }
        
        return game;
    }

    static CheckBoardExists(){
        return BoardBuilder.IS_BUILT;
    }
}