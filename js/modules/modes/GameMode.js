import {MODES} from "/js/modules/modes/ModesEnum.js";
import {ModeSettings} from "/js/modules/modes/ModeSettings.js";

export class GameMode {
    
    
    constructor(id, settings){
        this.mode_id = id;
        this.settings = settings;
    }
    
        
    setup(){
        throw new Error("you're not supposed to call that from here!")
    }
    
    loadDefaultSettings(){
        throw new Error("you're not supposed to call that from here!");
    }
}