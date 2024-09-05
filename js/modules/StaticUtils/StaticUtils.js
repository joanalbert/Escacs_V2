import { BoardManager } from "/js/modules/board/BoardManager.js";
import { BoardBuilder } from "/js/modules/board/BoardBuilder.js";
import { MovesManager } from "/js/modules/board/MovesManager.js";
import { PauseWidget} from "/js/modules/ui/widgets/PauseWidget.js";


export class StaticUtils {
        
    static boardBuilder;
    static movesManager;
    static pw;

    static init_board_builder(){
        StaticUtils.boardBuilder = new BoardBuilder(BoardManager.boardDimensions);
    }
    
    static init_moves_manager(){
        StaticUtils.movesManager = new MovesManager();
    }
}