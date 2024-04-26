import {YesNoPromptWidget} from "/js/modules/ui/widgets/YesNoPromptWidget.js";
import {MOUSE_EVENTS} from "/js/modules/ui/events/EventEnum.js";
import {RESOLUTION_ACTIONS, PromptResolver} from "/js/modules/ui/widgets/util/PromptResolver.js";
import { MODES } from "/js/modules/modes/ModesEnum.js";
import {ModeManager} from "/js/modules/modes/ModeManager.js";

export class YesNoModeRestartWidget extends YesNoPromptWidget {
    
    constructor(target, rAction, mode, prompt_msg){
        
        let name = ModeManager.GAME_IN_PROGRESS ? `${ModeManager.CURRENT_GAME.mode_id}_restart` : "???_restart";
        
        super(name, target, rAction, prompt_msg);
        this.mode = mode;
    }
    
    //OVERRIDE
    prompt_resolve(choice){
        super.prompt_resolve(choice);
        
        if(choice){
            //handle prompt resolution
            
            PromptResolver.GET_PACKAGE().mode = this.mode;
            PromptResolver.RESOLVE(this.resolutionAction);
        }
        
    }
}