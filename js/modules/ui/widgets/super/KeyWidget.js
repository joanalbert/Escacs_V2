import {Widget} from "/js/modules/ui/widgets/super/Widget.js";
import {KEY_EVENTS} from "/js/modules/ui/events/EventEnum.js";



export class KeyWidget extends Widget{
    
    constructor(name, key, event){
        super(name, event)
        this.key = key;
    }
    

}