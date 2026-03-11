using System;
class Computer {
    public string CPU {get; set;}
    public string RAM {get; set;}
    public string Storage {get; set;}
}

class ComputerBuilder {
    private Computer computer = new Computer();

    public ComputerBuilder setCPU(string cpu){
        computer.CPU = cpu;
        return this;
    }

    public ComputerBuilder setRAM(string ram){
        computer.RAM = ram;
        return this;
    }

    public ComputerBuilder setStorage(string storage){
        computer.Storage = storage;
        return this;
    }

    public Computer Build(){
        return computer;
    }
}

class Program {
    static void Main(){
        Computer computer = new ComputerBuilder().setCPU("Intel i7").setRAM("16GB").setStorage("1 TB SSD").Build();


        Console.WriteLine(computer.CPU);
        Console.WriteLine(computer.RAM);
        Console.WriteLine(computer.Storage);
    }

    
}








