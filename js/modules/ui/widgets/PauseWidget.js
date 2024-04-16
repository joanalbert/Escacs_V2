import {KeyWidget} from "/js/modules/ui/widgets/super/KeyWidget.js";
import {MOUSE_EVENTS, KEY_EVENTS} from "/js/modules/ui/events/EventEnum.js";
import {KEYS} from "/js/modules/ui/events/KeysEnum.js";
import { DOM_ELEMENTS, CSS_PROPERTIES, DOM_Utils } from "/js/modules/ui/DOM/DOM_Utils.js";
import {WidgetElement} from "/js/modules/ui/widgets/WidgetElement.js";
import {ModeSelectWidget} from "/js/modules/ui/widgets/ModeSelectWidget.js";
import {UIEventManager} from "/js/modules/ui/events/UIEventManager.js"

export class PauseWidget extends KeyWidget{
    
    constructor(){
        super("Pause", KEYS.ESCAPE, KEY_EVENTS.KEYDOWN);
    }
    
    //OVERRIDE
    toggle(e){
       if(e.key == this.key) super.toggle();  
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
    
    
    //////////CREATE DELETE//////////
    delete(){
        if(this.baseElement){
            DOM_Utils.DELETE_ELEMENT(this.baseElement)
        }
            
    }
    create(){
       let background = DOM_Utils.CREATE_ELEMENT(DOM_ELEMENTS.DIV)
            .setAttribute("id","pause_background")
            .addStyle(CSS_PROPERTIES.BG_COLOR, "rgba(1,0,0,0.8)")
            .addStyle(CSS_PROPERTIES.POSITION, "absolute")
            .addStyle(CSS_PROPERTIES.ZINDEX, "1")
            .addClass("w-100")
            .addClass("h-100")
            .addToDom(DOM_Utils.DOM_BODY);
        
        
        this.baseElement = background;
        
        this.makeUI();
        this.widgetEvents();
        
        console.log(this.elements)
    }
    ///////////////////////////
    
    
    //WIDGET EVENTS
    widgetEvents(){
        
        let modeWidget = new ModeSelectWidget(this.elements["pause_btn_4"].domElement);
        UIEventManager.LATE_EVENT_SETUP();
        
        
    }
    
    
    ////////////// WIDGET-SPECIFIC UI
    makeUI(){
        this.container();
        this.button1();
        this.button2();
        this.button3();
        this.button4();
        this.header();
    }
    
    //MAIN CONTAINER
    container(){
        let name = "pause_container";
        
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
    

    button1(){
        let name = "pause_btn_1";
        
        let e = DOM_Utils.CREATE_ELEMENT(DOM_ELEMENTS.BUTTON)
            .setAttribute("name", name)
            .setInnerHTML("<strong>SALIR</strong>")
            .addClass("w-25")
            .addClass("m-1")
            .addToDom(this.elements["pause_container"]);
        
        this.elements[name] = e;
    }
    
    button2(){
        let name = "pause_btn_2";
        
        let e = DOM_Utils.CREATE_ELEMENT(DOM_ELEMENTS.BUTTON)
            .setAttribute("name", name)
            .setInnerHTML("<strong>REINICIAR</strong>")
            .addClass("w-25")
            .addClass("m-1")
            .addToDom(this.elements["pause_container"]);
        
        this.elements[name] = e;
    }
    
    button3(){
        let name = "pause_btn_3";
        
        let e = DOM_Utils.CREATE_ELEMENT(DOM_ELEMENTS.BUTTON)
            .setAttribute("name", name)
            .setInnerHTML("<strong>OPCIONES</strong>")
            .addClass("w-25")
            .addClass("m-1")
            .addToDom(this.elements["pause_container"]);
        
        this.elements[name] = e;
    }
    
    button4(){
        let name = "pause_btn_4";
        
        let e = DOM_Utils.CREATE_ELEMENT(DOM_ELEMENTS.BUTTON)
            .setAttribute("name", name)
            .setInnerHTML("<strong>CAMBIAR MODO</strong>")
            .addClass("w-25")
            .addClass("m-1")
            .addToDom(this.elements["pause_container"]);
        
        this.elements[name] = e;
    }
    
    header(){
        let name = "pause_header";
        
        let e = DOM_Utils.CREATE_ELEMENT(DOM_ELEMENTS.DIV)
            .setAttribute("name", name)
            .addClass("bg-warning")
            .addClass("w-25")
            .addClass("p-2")
            .addClass("pb-4")
            .addClass("d-flex")
            .addClass("flex-column")
            .addClass("align-items-center")
            .setInnerHTML("<h2>ESCACS</h2>")
            .addToDom(this.elements["pause_container"]);
        
        this.elements[name] = e;
    }
}