/*
                                                            **CLASS**
A class is used to define blueprints for objects, and it can contain implementation details like constructors and methods.
Features that the classes propose:
 1.Can have constructors, methods, property initializers.

 2.Supports inheritance via extends.

 3.Can implement interfaces using implements.
*/

/*
                                                            **CONSTRUCTOR**
In TypeScript, a constructor is a special method inside a class that is automatically called when a new object is created using that class. It is used to initialize properties of the object.
A constructor in TypeScript is:

 1. A method named constructor.

 2. Automatically invoked with the new keyword.

 3. Used to assign values to class properties during object creation.
*/

//By default every property/method or class is marked as public.
// class User{
//     public email: string
//     public name: string
//     private readonly city: string = "Mumbai"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//         this.city;
//     }
// }
class User{
    private readonly city: string = "Mumbai"
    constructor(
        public email: string,
        public name: string,
        // private userId: string
        ){
    }
}

const mayank = new User("m@m.com","Mayank")
// mayank.city //Not accessible outside the scope of the class as it is private 

export{}