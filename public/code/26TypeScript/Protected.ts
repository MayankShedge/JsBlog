class User{

    protected _courseCount = 1 //Will be available in this class + any other class which inherits this class

    private readonly city: string = "Mumbai"
    constructor(
        public email: string,
        public name: string,
        // private userId: string
        ){
    }

    private deleteToken(){
        console.log("Token Deleted")
    }

    //Get is used to get any property
    get getAppleEmail(): string{
        return `apple${this.email}`
    }  
    
    get courseCount(): number{
        return this._courseCount
    }

    //Setter is used to set the properties 
    set courseCount(courseNumber){
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than one")
        }
        this._courseCount = courseNumber
    } //For setters we cannot have a return type(not even void can be used)
}

class SubUser extends User{
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4;
    }
}

const mayank = new User("m@m.com","Mayank")

export{}