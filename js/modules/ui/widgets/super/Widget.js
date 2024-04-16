import {UIEventManager} from "/js/modules/ui/events/UIEventManager.js"

export class Widget{
    
    constructor(name, event){
        this.name = name;
        this.event = event;
        this.active = false;
        this.func_ref = null;
        
        this.baseElement = null;
        this.elements = [];
        this.childWidgets = [];
        
        UIEventManager.WIDGET_ADD(this);
    }
    
    toggle(){
        this.active = !this.active;
        (this.active) ? this.toggle_on() : this.toggle_off();
    }
    
    toggle_on(){console.error("you need to override this funcion!")}
    
    toggle_off(){console.error("you need to override this funcion!")}
}