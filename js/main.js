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
let board = new BoardBuilder(dimensions).build();
let movesManager = new MovesManager();

ModeManager.LaunchMode(MODES.NORMAL_MATCH);
console.log(ModeManager.GAME_IN_PROGRESS);



/*let rook = new Rook(new Vector(4,5), "white");
let rook2 = new Rook(new Vector(6,3), "black");

let bishop = new Bishop(new Vector(3, 6), "white");

let pawn1 = new Pawn(new Vector(1, 7), "white");
let pawn2 = new Pawn(new Vector(1, 1), "black");

let king = new King(new Vector(7,7), "white");
let queen = new Queen(new Vector(5,7), "black");

let knight = new Knight(new Vector(2,7), "black");

BoardManager.addPiece(rook, true);
BoardManager.addPiece(rook2, true);
BoardManager.addPiece(bishop, true);
BoardManager.addPiece(pawn1, true);
BoardManager.addPiece(pawn2, true);
BoardManager.addPiece(king, true);
BoardManager.addPiece(queen, true);
BoardManager.addPiece(knight, true);*/