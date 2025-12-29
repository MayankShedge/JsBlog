abstract class TakePhoto{ //Abstract classes make a diffrence that they cannot be instanciated i.e an object can't be created for these classes
    constructor(
        public cameraMode: string,
        public filter: string
    ){
    }

    abstract getSepia(): void

    getReelTime(): number{
        //some complex calculation
        return 8
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst: number 
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("Sepia")
    }
}

const mayank = new Instagram("test","Test",3)

export{}

