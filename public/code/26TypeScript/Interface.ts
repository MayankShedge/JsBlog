//Scenario:- There is a user with some properties like email, userID, googleLogin, databaseID and we trying to start trial for the user with whatever services we provide and we want to give him discount code

//Interfaces dosen't have details of how method will work but but these are basic overview of whenever we are creating a user these are the methods which are compulsory. Interfaces can be said loose form of class(very broad or superficial view)
interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

//Bina upar main interface ko touch kiye ek aur property/ method yaha add kar diya(This is called reopnening of interface)
interface User {
    githubToken: string
}

//Also interfaces provide the advantage of being inherited(provides Inheritance)
interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const mayank:  Admin = {dbId:22, email: "m@m.com",
    userId: 2329,
    role: "admin",
    githubToken: "github",
    startTrial: () => {
        return "trail started"
    },
    getCoupon: (name: "FreeBies",off: 10) => {
        return 10
    }
}

mayank.email = "m@ms.cm"


interface TakePhoto{
    cameraMode: string
    filter: string
    burst: string
}

interface Story{
    createStory(): void
}

class Instagram implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

export{}