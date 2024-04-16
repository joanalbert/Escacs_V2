import {Vector} from "/js/modules/math/Vector.js";

 

export class Piece{
    
    static COLOR = {
        BLACK: "black",
        WHITE: "white"
    }
    
    constructor(pos, color, name){
        this.position = pos; 
        this.color = color;
        this.name = name;
        this.moves = 0;
        this.kills = 0;
                                                     
        this.forward = (this.color == "white") ? Vector.UP : Vector.UP.getScaled(-1);
        this.right = (this.color == "white") ? Vector.RIGHT : Vector.RIGHT.getScaled(-1);
    }
    
        
    getImage(){
        let letter = this.color.charAt(0).toUpperCase();
        return `/img/pieces/${this.name}${letter}.png`;
    }
    
    isSameColorAs(otherPiece){
        return this.color == otherPiece.color;
    }
    
    salute(){
        console.log("hello piece");
    }
}