import {WidgetElement} from "/js/modules/ui/widgets/WidgetElement.js";

export const DOM_ELEMENTS = {
    DIV: "div",
    INPUT: "input",
    BUTTON: "button"
}

export const CSS_PROPERTIES = {
    BG_COLOR: "background-color",
    POSITION: "position",
    ZINDEX: "z-index"
}

export class DOM_Utils{
    
    static DOM_BODY = document.getElementsByTagName("body")[0];
    
    static CREATE_ELEMENT(element_type){
        let element = document.createElement(element_type);
        return new WidgetElement(element);
    }
    
    static DELETE_ELEMENT(element){
        element.domElement.remove();
    }

    static APPEND_ELEMENT(element, parent){
        parent.insertBefore(element, parent.firstChild);
    }


    static CLEAR_PIECE_BOXES(){
        let b = document.getElementById("box_black");
        let w = document.getElementById("box_white");
        
        while (b.lastElementChild) {
            b.removeChild(b.lastElementChild);
        }
        
        while (w.lastElementChild) {
            w.removeChild(w.lastElementChild);
        }
    }

    static CLEAR_MOVE_TRACKER(){
        let list = document.getElementById("move_tracker_list");
        list.innerHTML="";
    }
}