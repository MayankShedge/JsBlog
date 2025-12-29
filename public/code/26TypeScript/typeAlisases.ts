type User = {
    name: string;
    email: string;
    isActive: boolean
}

//The advantage of creating a type like this is when we have methods like createUser(), getUserDetails(), modifyUser() we want all the information to be passed on.(something like creating a new customised type of our own) Eg: type Mystring = string

function createUser(user: User): User{
    return {name: "", email: "", isActive: false}
}

createUser({name: "", email: "", isActive: false})

export{}