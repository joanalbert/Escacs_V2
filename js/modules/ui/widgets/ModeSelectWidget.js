import {MouseWidget} from "/js/modules/ui/widgets/super/MouseWidget.js";
import {MOUSE_EVENTS} from "/js/modules/ui/events/EventEnum.js";




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
    
    create(){
        
    }
    
    delete(){
        
    }
}