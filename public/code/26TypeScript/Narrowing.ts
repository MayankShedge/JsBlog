function detectTypes(val: number | string){
    //this use case also called as type guard
    if(typeof val === "string"){
       return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}

//we will not cover the "" case here so it needs to be covered
function printAll(strs: string | string[] | null){
    if (strs) {
        if (typeof strs === "object") {
            for(const s of strs){
                console.log(s)
            }
        }else if (typeof strs === "string") {
            console.log(strs)
        }
    }
}