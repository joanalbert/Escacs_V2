import {Widget} from "/js/modules/ui/widgets/super/Widget.js";
import {MOUSE_EVENTS} from "/js/modules/ui/events/EventEnum.js";



export class MouseWidget extends Widget{
    
    constructor(name, event, target){
        super(name, event)
        this.target = target;
    }
    
    
}