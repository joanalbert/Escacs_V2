import {Widget} from "/js/modules/ui/widgets/super/Widget.js";


export class UIEventManager{
    
    static WIDGETS = [];
    static SETUP_WIDGETS = [];
    
    static WIDGET_ADD(widget){
        UIEventManager.WIDGET_CHECK(widget); 
        UIEventManager.WIDGETS.push(widget);
    }

    static WIDGET_REMOVE(widget){
        UIEventManager.WIDGET_CHECK(widget); 
        let w = UIEventManager.SETUP_WIDGETS.find( (e) => e === widget); 
        if(!w) throw new Error("bad widget");
        document.removeEventListener(w.event, w.func_ref);
        
        UIEventManager.SETUP_WIDGETS = UIEventManager.SETUP_WIDGETS.filter( w => w !== widget)
        UIEventManager.WIDGETS = UIEventManager.WIDGETS.filter( w => w !== widget)
    }
 
    static EVENT_SETUP(){
     
        UIEventManager.WIDGETS.forEach(w=>{
            console.log("event setup for widget: " +w.name);
            
            let func_ref = w.toggle.bind(w);
            w.func_ref = func_ref;
            
            document.addEventListener(w.event, func_ref);
            
            UIEventManager.SETUP_WIDGETS.push(w);
        })
        
    }

    static LATE_EVENT_SETUP(){
        UIEventManager.WIDGETS.forEach(w=>{
            
            if(UIEventManager.SETUP_WIDGETS.includes(w)) return;
            
            let func_ref = w.toggle.bind(w);
            w.func_ref = func_ref;
            
            document.addEventListener(w.event, func_ref);
            
            UIEventManager.SETUP_WIDGETS.push(w);
        })
        
        console.log(UIEventManager.SETUP_WIDGETS);
        console.log(UIEventManager.WIDGETS);
    }

    
    static WIDGET_CHECK(widget){
        let isWidget = widget instanceof Widget;
        if (!isWidget) throw new Error("UIEventsManager: attempted to use a non-widget object");
    }
}