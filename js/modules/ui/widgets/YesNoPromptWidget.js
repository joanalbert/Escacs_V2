import {Widget} from "/js/modules/ui/widgets/super/Widget.js";
import {MouseWidget} from "/js/modules/ui/widgets/super/MouseWidget.js";
import {MOUSE_EVENTS} from "/js/modules/ui/events/EventEnum.js";
import { MODES } from "/js/modules/modes/ModesEnum.js";
import { DOM_ELEMENTS, CSS_PROPERTIES, DOM_Utils } from "/js/modules/ui/DOM/DOM_Utils.js";
import {UIEventManager} from "/js/modules/ui/events/UIEventManager.js";
import {RESOLUTION_ACTIONS} from "/js/modules/ui/widgets/util/PromptResolver.js";


export class YesNoPromptWidget extends MouseWidget{
    
    constructor(name, target, rAction){
        super(name, MOUSE_EVENTS.CLICK, target);    
        this.resolutionAction = rAction;
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
    
    //OVERRIDE
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
        
        let yes_btn = this.elements["prompt_btn_yes"].domElement;
        yes_btn.addEventListener("click", (e) => this.prompt_resolve(true));
        
        let no_btn = this.elements["prompt_btn_no"].domElement;
        no_btn.addEventListener("click", (e) => this.prompt_resolve(false));
    }
    
    prompt_resolve(choice){
        
        console.log(choice);
        
        if(choice)
        {
            //get top-of-the-chain widget
            let top = this;
            while(top.parentWidget != null) top = top.parentWidget;


            //untoggle top-of-the-chain widget
            if(top.active) {
                const superToggle = Widget.prototype.toggle.bind(top);
                superToggle();
            }
            
        }
        else
        {
            //manually untoggle this prompt
            const superToggle = Widget.prototype.toggle.bind(this);
            superToggle();
        }
        
        
    }
    
    makeUI(){
        
        this.prompt_container();
        this.prompt_btn_yes();
        this.prompt_btn_no();
        this.prompt_text();
        
        super.makeUI();
    }
    
    prompt_container(){
        let name = "prompt_container";
        
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
    
    prompt_text(){
        let name = "prompt_text";
        
        let mode_text = this.name.split("_");
        mode_text.pop();
        mode_text = mode_text.join(" ");
        
        let e = DOM_Utils.CREATE_ELEMENT(DOM_ELEMENTS.DIV)
            .setAttribute("name", name)
            .addClass("bg-warning")
            .addClass("w-25")
            .addClass("p-2")
            .addClass("pb-4")
            .addClass("d-flex")
            .addClass("flex-column")
            .addClass("align-items-center")
            .setInnerHTML(`<h2>Cambiar al modo: ${mode_text}?</h2>`)
            .addToDom(this.elements["prompt_container"]);
        
        this.elements[name] = e;
    }
    
    prompt_btn_yes(){
        
        let e = DOM_Utils.CREATE_ELEMENT(DOM_ELEMENTS.BUTTON)
            .setAttribute("name", "prompt_btn_yes")
            .setInnerHTML("<strong>YES</strong>")
            .addClass("w-25")
            .addClass("m-1")
            .addToDom(this.elements["prompt_container"]);
        this.elements["prompt_btn_yes"] = e;
    }
    
    prompt_btn_no(){
        let e = DOM_Utils.CREATE_ELEMENT(DOM_ELEMENTS.BUTTON)
            .setAttribute("name", "prompt_btn_no")
            .setInnerHTML("<strong>NO</strong>")
            .addClass("w-25")
            .addClass("m-1")
            .addToDom(this.elements["prompt_container"]);
        this.elements["prompt_btn_no"] = e;
    }
}