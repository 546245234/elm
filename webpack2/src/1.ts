class Person {
    constructor(private name: string, private age: number) {

    }

    show() {
        console.log(`我叫${this.name}，我${this.age}岁`);
    }
}

let p = new Person('blue', 18);

p.show();
