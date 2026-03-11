using System;

interface IShape{
    void Draw();
}

class Circle : IShape {
    public void Draw(){
        Console.WriteLine("Drawing Circle");
    }
}

class Square : IShape {
    public void Draw(){
        Console.WriteLine("Drawing Square");
    }
}
class shapeFactory {
    public static IShape GetShape(string shapeType){
        if (shapeType == "circle"){
            return new Circle();
        }else if(shapeType == "square"){
            return new Square();
        }
        else return null;
    }
}
class Program {
    static void Main() {
        IShape shap1 = shapeFactory.GetShape("circle");
        shap1.Draw();

        IShape shap2 = shapeFactory.GetShape("square");
        shap2.Draw();

    }
}