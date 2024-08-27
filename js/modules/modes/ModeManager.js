import {StaticUtils} from "/js/modules/StaticUtils/StaticUtils.js";

import { MODES } from "/js/modules/modes/ModesEnum.js";
import {NormalMatch} from "/js/modules/modes/NormalMatch.js";
import {TestMode} from "/js/modules/modes/TestMode.js";

import {BoardBuilder} from "/js/modules/board/BoardBuilder.js";
import {BoardManager} from "/js/modules/board/BoardManager.js";



export class ModeManager {
    
    static GAME_IN_PROGRESS = false;
    
    static CURRENT_GAME = null;

    static LaunchMode(mode){
        
        //if there's a game in progress
        if(ModeManager.CURRENT_GAME != null){
            //throw new Error("not yet buddy")
            BoardManager.resetBoard();
            //BoardManager.resetPieceBoxes();
            //BoardManager.resetMoveTracker();
            StaticUtils.boardBuilder.destroyBoard();
        }
        
        
        let game = ModeManager.INSTANTIATE_GAME(mode);       
        StaticUtils.boardBuilder.buildBoard(game.settings); //we build/rebuild the entire board and ui everytime a mode is launched
        
        
        ModeManager.GAME_IN_PROGRESS = true;
        
        
        
        
        
        ModeManager.CURRENT_GAME = game;
        ModeManager.CURRENT_GAME.setup();
        
        //update board UI based on this mode's settings
        //ModeManager.notify_board_based_on_settings();
        
        
        console.log(`now playing: ${game.mode_id}`);
        console.log(ModeManager.CURRENT_GAME.settings);
    }

    static notify_board_based_on_settings()
    {
        BoardBuilder.NotifyModeSettings(ModeManager.CURRENT_GAME.settings);
    }

    static RestartMode(){
        
        if(ModeManager.GAME_IN_PROGRESS && ModeManager.CURRENT_GAME != null){
            console.log(`now restarting ${ModeManager.CURRENT_GAME.mode_id}`)
            BoardManager.resetBoard();
            BoardManager.resetPieceBoxes();
            BoardManager.resetMoveTracker();
            
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