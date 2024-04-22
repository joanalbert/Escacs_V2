import {MouseWidget} from "/js/modules/ui/widgets/super/MouseWidget.js";
import {MOUSE_EVENTS} from "/js/modules/ui/events/EventEnum.js";
import { MODES } from "/js/modules/modes/ModesEnum.js";
import { DOM_ELEMENTS, CSS_PROPERTIES, DOM_Utils } from "/js/modules/ui/DOM/DOM_Utils.js";
import {UIEventManager} from "/js/modules/ui/events/UIEventManager.js";

export class YesNoPromptWidget extends MouseWidget{
    
    constructor(target){
        super("Yes/No Prompt Widget", MOUSE_EVENTS.CLICK, target);    
    }
    
    //OVERRIDE
    toggle(e){
       if(!this.target) console.warn("mouse widget without a target")
       if(e.target == this.target) super.toggle();  
    }
    
    //OVERRIDE
    toggle_on(){
        console.log(this.name + " we're on!");
        this.create();
    }
    
    //OVERRIDE
    toggle_off(){
        console.log(this.name + " we're off!");        
        this.delete();
    }
    
    delete(){
        super.delete();   
    }
    
    create(){
        
        let background = DOM_Utils.CREATE_ELEMENT(DOM_ELEMENTS.DIV)
            .setAttribute("id","yesnoprompt_background")
            .addStyle(CSS_PROPERTIES.BG_COLOR, "rgba(1,0,0,0.8)")
            .addStyle(CSS_PROPERTIES.POSITION, "absolute")
            .addStyle(CSS_PROPERTIES.ZINDEX, "1")
            .addClass("w-100")
            .addClass("h-100")
            .addToDom(DOM_Utils.DOM_BODY);
        
        
        this.baseElement = background;
        this.baseElement.setAttribute("widget", true);
        
        this.makeUI();
        this.widgetEvents();
        
    }
    
    widgetEvents(){
        
    }
    
    makeUI(){
        
        
        
        super.makeUI();
    }
}