import { MODES } from "/js/modules/modes/ModesEnum.js";

export const RESOLUTION_ACTIONS = {
    MODE_SWITCH: 1,
}

export class PromptResolver{
    

    static RESOLVE(action){
        
        
        switch(action){
            case 1:
                //mode switch
                console.log("SWITCHING MODE...");
                break;
        }
    }
}