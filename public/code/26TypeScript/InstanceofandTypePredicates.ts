//Instanceof(can be used in a case where we cannot actually use typeof)
function logValue(x: Date | string){
    if (x instanceof Date) {
        console.log(x.toUTCString())
    }else{
        console.log(x.toUpperCase())
    }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};

//this will return a boolean and not a type of fish or bird
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        pet 
        return "bird food"
    }
}