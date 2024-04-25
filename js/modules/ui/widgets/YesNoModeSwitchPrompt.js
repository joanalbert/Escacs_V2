import {YesNoPromptWidget} from "/js/modules/ui/widgets/YesNoPromptWidget.js";
import {MOUSE_EVENTS} from "/js/modules/ui/events/EventEnum.js";
import {RESOLUTION_ACTIONS, PromptResolver} from "/js/modules/ui/widgets/util/PromptResolver.js";
import { MODES } from "/js/modules/modes/ModesEnum.js";


export class YesNoModeSwitchPrompt extends YesNoPromptWidget {
    
    constructor(name, target, rAction, mode){
        super(name, target, rAction);
        this.mode = mode;
    }
    
    //OVERRIDE
    prompt_resolve(choice){
        super.prompt_resolve(choice);
        
        if(choice){
            //handle prompt resolution
            PromptResolver.RESOLVE(this.resolutionAction);
        }
        
    }
}