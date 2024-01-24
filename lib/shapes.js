class Shapes {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    setText(text) {
        this.text = text;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
    setShape(shape) {
        this.shape = shape;
    }
    setShapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    }
};

class Circle extends Shapes {
    render(){
        return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" /></svg>`
    };
};

class Square extends Shapes {
    render(){
        return `<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" />`
    };
};

class Triangle extends Shapes {
    render(){
        return `<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg"><polygon points="0,100 50,25 50,75 100,0" />`
    };
};


module.exports = Shapes;