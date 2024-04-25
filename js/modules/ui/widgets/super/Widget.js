import {UIEventManager} from "/js/modules/ui/events/UIEventManager.js"
import { DOM_Utils } from "/js/modules/ui/DOM/DOM_Utils.js";
export class Widget{
    
    constructor(name, event){
        this.name = name;
        this.event = event;
        this.active = false;
        this.func_ref = null;
        
        this.baseElement = null;
        this.elements = [];
        this.childWidgets = [];
        this.parentWidget = null;
        
        UIEventManager.WIDGET_ADD(this);
    }
    
    toggle(){
        this.active = !this.active;
        (this.active) ? this.toggle_on() : this.toggle_off();
    }
    
    delete(){
        
        if(this.childWidgets.length > 0)
        {
            this.childWidgets.forEach(w => {
                w.delete();
                UIEventManager.WIDGET_REMOVE(w)
            })
                        
            this.childWidgets = [];
        }
        
        if(this.baseElement){
            DOM_Utils.DELETE_ELEMENT(this.baseElement)
        }
    }
    
    addChildWidget(w){
        this.childWidgets.push(w);
        w.parentWidget = this;
    }
      
    makeUI(){
        let widgetsOnScreen = document.querySelectorAll('[widget="true"]');
        let zIndex = (widgetsOnScreen.length < 1) ? 1 : widgetsOnScreen.length;
        this.baseElement.domElement.style.zIndex = `${zIndex}`;
    }
    
    toggle_on(){console.error("you need to override this funcion!")}
    
    toggle_off(){console.error("you need to override this funcion!")}
}