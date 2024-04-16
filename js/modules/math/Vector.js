
export class Vector{
    
    static OUT = new Vector(-1,-1);
    static ZERO = new Vector(0,0);
    static UP = new Vector(0,-1);
    static RIGHT = new Vector(1,0);

    static ChebyshevDistance(location1, location2){
        let v = location2.subtract(location1);
        return Math.max(Math.abs(v.x), Math.abs(v.y));
    } 

    static Distance(location1, location2){
        let v = location2.subtract(location1);
        return v.magnitude();
    }

    static AngleBetween(a, b){
        let aN = a.normalize();
        let bN = b.normalize();
        let dot = aN.dot(bN);
        let angle = Math.acos(dot);
        return angle / Math.PI * 180;
    }
    
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    
    magnitude(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
    
    normalize(){
        let mag = this.magnitude();
        return new Vector(this.x/mag, this.y/mag);
    }

    normalizeChebyshev(){
        let mag = Math.max(Math.abs(this.x), Math.abs(this.y));
        return new Vector(this.x/mag, this.y/mag);
    }
    
    dot(other){
        return (this.x * other.x) + (this.y * other.y);
    }


    add(v){
        return new Vector(this.x + v.x, this.y + v.y);
    }

    subtract(v){
        return new Vector(this.x - v.x, this.y - v.y);
    }

    scale(factor){
        this.x *= factor;
        this.y *= factor;
    }

    getScaled(factor){
        return new Vector(this.x * factor,
                          this.y * factor);
    }

    roundComponents(){
        return new Vector(Math.round(this.x), Math.round(this.y));
    }

    toInteger(){
        return new Vector(Math.round(this.x), Math.round(this.y));
    }

    equals(other){
        if( !(other instanceof Vector)) return false;
        return (this.x == other.x) && (this.y == other.y);
    }


    angleBetween(other){
        let thisN = this.normalize();
        let otherN = other.normalize();
        
        let dot = thisN.dot(otherN);
        
        return Math.acos(dot) / Math.PI * 180;
    }
}