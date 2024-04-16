import {Widget} from "/js/modules/ui/widgets/Widget.js";
import {MOUSE_EVENTS, KEY_EVENTS} from "/js/modules/ui/events/EventEnum.js";
import {KEYS} from "/js/modules/ui/events/KeysEnum.js";

export class InventoryWidget extends Widget{
    
    constructor(){
        super("Inventory", KEYS.i, KEY_EVENTS.KEYDOWN);
    }
    
    //OVERRIDE
    toggle(e){
       if(e.key == this.key) super.toggle();  
    }
    
    //OVERRIDE
    toggle_on(){
        console.log(this.name + " we're on!");
    }
    
    //OVERRIDE
    toggle_off(){
        console.log(this.name + " we're off!");
    }
}