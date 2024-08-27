import {Vector} from "/js/modules/math/Vector.js"; 
import {ModeSettings} from "/js/modules/modes/ModeSettings.js";

export class BoardBuilder{
    
    static IS_BUILT = false;
    
    constructor(dimensions){
        this.dimensions = dimensions;
    }
    

    destroyBoard(){
        console.log("deleting board");
        let board = document.getElementsByClassName("chessBoard")[0];
        board.remove();
    }
        
    buildBoard(modeSettings){       
       let board = this.makeBoard();
        
       //piece box top    
       if(modeSettings.collectsPieces){     
            let box = this.makePieceBox_top(); 
            board.appendChild(box);
       }
       //
        
       //build actual grid    
       for(let y = 1; y <= this.dimensions.height; y++){
           let row = this.makeRow();

           for(let x = 1; x <= this.dimensions.width; x++){
               let cell = this.makeCell(x,y);               
               row.appendChild(cell);        
           }

           board.appendChild(row);
       }
    
       //piece box bottom
        if(modeSettings.collectsPieces){  
            let box2 = this.makePieceBox_bottom(); 
            board.appendChild(box2);   
       }
       //    

        
       //move tracker box    
       if(modeSettings.tracksMoves){    
            let moveTracker = BoardBuilder.makeMoveTrackerContainer();
            board.appendChild(moveTracker);    
       }
       //
        
       document.getElementById("board_container").appendChild(board);
       BoardBuilder.IS_BUILT = true;
        
        
       return board;  
    }

     makeBoard(){
        console.log("making board");
        let board = document.createElement("div");
        board.classList.add("chessBoard");
                  
        return board;
    }

    makePieceBox_top(){
        let box = document.createElement("div");
        
        box.id = "box_black";
        box.classList.add("pieceBoxTop");
        return box;
    }

    makePieceBox_bottom(){
        let box = document.createElement("div");
        
        box.id = "box_white";
        box.classList.add("pieceBoxBottom");
        box.classList.add("pieceBoxTop");
        return box;
    }

    
     makeRow(){
        let row = document.createElement("div");
        row.classList.add("chessRow");
        row.classList.add("w-50");
        return row;
    }

     makeCell(x,y){
        let cell = document.createElement("div");
        let color = ((x+y) % 2 == 0) ? "white" : "black";
        let colorNot = ((x+y) % 2 == 0) ? "black" : "white";
         
        cell.classList.add("chessCell");
        cell.style.backgroundColor = color;
         
        cell.position = new Vector(x, y);
        cell.id = BoardBuilder.getCellAlgebraicName(cell.position);
        cell.classList.add("chessCell"); 
        //cell.innerText = `${x},${y}`; 
                       
        return cell;
    }
    
    static  getCellAlgebraicName(pos){
        var lletra = String.fromCharCode(64+(pos.x+1));
        return lletra+Math.abs((pos.y+1)-9);
    }

    static NotifyModeSettings(settings){
        
        //piece boxes
        let box_white = document.getElementById("box_white");
        let box_black = document.getElementById("box_black");
        box_white.style.visibility = (settings.collectsPieces ? "" : "hidden");
        box_black.style.visibility = (settings.collectsPieces ? "" : "hidden");
        
        //move tracker
        let tracker = document.getElementById("move_tracker_container");
        tracker.style.visibility = settings.tracksMoves ? "" : "hidden";
        
    }


    //MOVE TRACKER STATICS
    static makeMoveTrackerContainer(){
        let c = document.createElement("div");
        c.id = "move_tracker_container"
        
        let board = document.getElementById("board_container");
        
        let height       = 450;
        let parentHeight = 750;
        let height_parentHeight_ratio = (height/parentHeight) * 100;
        let halfHeight = ((0.5*parentHeight) / parentHeight) * 100;
        let top = halfHeight - height_parentHeight_ratio/2;
        
        c.style.height = `${height}px`;
        c.style.width  = "260px";
        c.style.background  = "red";
        
        c.style.position = "absolute";
        c.style.top = `${top}%`;
        c.style.left = `0px`;
        
        c.style.overflowY = "scroll";
        
        
        //list
        let list = document.createElement("list");
        list.id = "move_tracker_list";
        list.style.margin = "2px";
        list.style.width = "100%";
        list.style.listStyle = "none";
               
        c.appendChild(list);
        
        
        return c;
    }

    static makeTrackerListItem(){
        let li = document.createElement("li");
        li.style.padding = "2px";
        li.style.background = "green";
        li.style.color = "white";
        li.style.fontWeight = "bolder";
        li.style.margin = "2px";
        li.innerHTML = "heddddllo";
        return li;
    }

    static appendMoveTrackerEntry(move){
        let li   = this.makeTrackerListItem();
        let list = document.getElementById("move_tracker_list");
        
        let killer = move.piece;
        let killed = move.eatenPiece;
        
        let txt_ori  = BoardBuilder.getCellAlgebraicName(move.origin);
        let txt_dest  = BoardBuilder.getCellAlgebraicName(move.destination);
        let txt_mover = `${move.piece.color} ${move.piece.name} (${txt_ori})`;
        let txt_eaten = move.eatenPiece ? `${move.eatenPiece.color} ${move.eatenPiece.name}` : null;
        
        let txt = txt_mover;
        
        if(move.eatenPiece) txt += ` takes ${txt_eaten} (${txt_dest})`
        else txt += ` moves to ${txt_dest}`
                    
        li.innerText = txt;
        list.appendChild(li);
        
        //scroll container to the end
        let c = document.getElementById("move_tracker_container");
        c.scrollTo(0, c.scrollHeight);
    }

}



