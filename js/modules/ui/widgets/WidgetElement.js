import {DOM_Utils} from "/js/modules/ui/DOM/DOM_Utils.js";

export class WidgetElement{
    constructor(element){
        this.domElement = element;
    }
    
    setAttribute(attribute, value){
        this.domElement.setAttribute(attribute, value);
        return this;
    }
    
    setInnerText(text){
        this.domElement.innerText = text;
        return this;
    }
    
    setInnerHTML(text){
        this.domElement.innerHTML = text;
        return this;
    }
    
    addClass(style_class){
        this.domElement.classList.add(style_class);
        return this;
    }
    
    removeClass(style_class){
        this.domElement.classList.remove(style_class);
        return this;
    }
    
    addStyle(rule, value){
        this.domElement.style.setProperty(rule, value);
        return this;
    }
    
    addToDom(parent){
        if(parent instanceof WidgetElement)
            DOM_Utils.APPEND_ELEMENT(this.domElement, parent.domElement);
        else
            DOM_Utils.APPEND_ELEMENT(this.domElement, parent);
        
        return this;
    }
}