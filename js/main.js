/*static utils*/
import {StaticUtils} from "/js/modules/StaticUtils/StaticUtils.js";

/*core modules*/
import {BoardBuilder} from "/js/modules/board/BoardBuilder.js";
import {BoardManager} from "/js/modules/board/BoardManager.js";
import {MovesManager} from "/js/modules/board/MovesManager.js";
import {ModeManager} from "/js/modules/modes/ModeManager.js";
import {Vector} from "/js/modules/math/Vector.js";

/*modes*/
import {GameMode} from "/js/modules/modes/GameMode.js";
import {NormalMatch} from "/js/modules/modes/NormalMatch.js";
import {TestMode} from "/js/modules/modes/TestMode.js";
import { MODES } from "/js/modules/modes/ModesEnum.js";

/*pieces*/
import {Piece} from "/js/modules/pieces/Piece.js";
import {Rook} from "/js/modules/pieces/Rook.js";
import {Knight} from "/js/modules/pieces/Knight.js";
import {Bishop} from "/js/modules/pieces/Bishop.js";
import {Pawn} from "/js/modules/pieces/Pawn.js";
import {King} from "/js/modules/pieces/King.js";
import {Queen} from "/js/modules/pieces/Queen.js";

/*UI*/
import {UIEventManager} from "/js/modules/ui/events/UIEventManager.js";
import {Widget} from "/js/modules/ui/widgets/super/Widget.js";
import {PauseWidget} from "/js/modules/ui/widgets/PauseWidget.js";


//UI TESTING
let pw = new PauseWidget();
UIEventManager.EVENT_SETUP();


let dimensions = {
    "width": 8,
    "height": 8
}

BoardManager.boardDimensions = dimensions;


//the mode launch builds the board
ModeManager.LaunchMode(MODES.NORMAL_MATCH, StaticUtils.boardBuilder); 
console.log(ModeManager.GAME_IN_PROGRESS);

