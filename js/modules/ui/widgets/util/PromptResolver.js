import { MODES } from "/js/modules/modes/ModesEnum.js";
import { ModeManager } from "/js/modules/modes/ModeManager.js";

export const RESOLUTION_ACTIONS = {
    MODE_SWITCH:  "MODE_SWITCH",
    MODE_RESTART: "MODE_RESTART"
}

export class PromptResolver{
    
    
    static PACKAGE = {}
    
    static GET_PACKAGE(){
        return PromptResolver.PACKAGE;
    }

    static RESET_PACKAGE(){
        PromptResolver.PACKAGE = {};
    }

    static RESOLVE(action){
        
        
        switch(action){
            case RESOLUTION_ACTIONS.MODE_SWITCH:
                    let mode = PromptResolver.PACKAGE.mode;
                    console.log(`NOW LAUNCHING ${mode}... `);
                    ModeManager.LaunchMode(mode);
                break;
            case RESOLUTION_ACTIONS.MODE_RESTART:
                //
                ModeManager.RestartMode();    
                break;
                
            default:
                console.log("we defaulted");
                break;
        }
        
        
        PromptResolver.RESET_PACKAGE();
    }
}