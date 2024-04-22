import {MouseWidget} from "/js/modules/ui/widgets/super/MouseWidget.js";
import {MOUSE_EVENTS} from "/js/modules/ui/events/EventEnum.js";
import { MODES } from "/js/modules/modes/ModesEnum.js";
import { DOM_ELEMENTS, CSS_PROPERTIES, DOM_Utils } from "/js/modules/ui/DOM/DOM_Utils.js";
import {UIEventManager} from "/js/modules/ui/events/UIEventManager.js";


export class ModeSelectWidget extends MouseWidget{
    
    constructor(target){
        super("Mode Select", MOUSE_EVENTS.CLICK, target);
        
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
            .setAttribute("id","modeselect_background")
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
        
        
        this.container();
        this.buttons();
        
        super.makeUI();
    }
    
    
    //MAIN CONTAINER
    container(){
        let name = "modeselect_container";
        
        let container = DOM_Utils.CREATE_ELEMENT(DOM_ELEMENTS.DIV)
            .setAttribute("name", name)
            .addClass("container")
            //.addClass("bg-warning")
            .addClass("p-2")
            .addClass("d-flex")
            .addClass("flex-column")
            .addClass("align-items-center")
            .addToDom(this.baseElement);
        
        this.elements[name] = container;
    }
    

    buttons(){
        
        let arrModes = Object.values(MODES);
        
        
        for(let i = 0; i < arrModes.length; i++){
            let name = `modeselect_btn_${i}`;
            let e = DOM_Utils.CREATE_ELEMENT(DOM_ELEMENTS.BUTTON)
                .setAttribute("name", name)
                .setInnerHTML(`<strong>${arrModes[i]}</strong>`)
                .addClass("w-25")
                .addClass("m-1")
                .addToDom(this.elements["modeselect_container"]);
            this.elements[name] = e;
        }
        
    }
    
    
    
}