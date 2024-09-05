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
        
        //refresh static board builder
        StaticUtils.init_board_builder();
        
        //reset the logic board map and destroy the board ui
        if(ModeManager.GAME_IN_PROGRESS) BoardManager.resetBoard();
        if(BoardBuilder.IS_BUILT) StaticUtils.boardBuilder.destroyBoard();
        
    
        //rebuild board ui everytime a mode is launched
        let game = ModeManager.INSTANTIATE_GAME(mode);       
        StaticUtils.boardBuilder.buildBoard(game.settings);
        
        //after we've rebuilt the board, we refresh the static moves manager
        //this also renews the click listeners for the board
        StaticUtils.init_moves_manager();
                
        //update modemanager flags
        ModeManager.GAME_IN_PROGRESS = true;
        ModeManager.CURRENT_GAME = game;
        
        //run the current mode's setup
        ModeManager.CURRENT_GAME.setup();
        
                
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