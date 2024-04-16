import {MODES} from "/js/modules/modes/ModesEnum.js";

export class GameMode {
    
    
    constructor(id){
        this.mode_id = id;
        
    }
    
    
    
    setup(){
        throw new Error("you're not supposed to call that from here!")
    }
    
}