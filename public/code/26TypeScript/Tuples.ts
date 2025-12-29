//Tuples in typescript are used when the input you want to recieve is in a particular order of data types. The pattern defined while the tuple definition is followed strictly. Order of the array matters very much in the tuples (Restriciting you so that you have order of the data). Very useful in case of API calls or some database array in which some specific order is there. 
const User: (string | number)[] = [1,"Mnk"]
let user: [string,number,boolean]

user = ["Mayank",2329,true]

let rgb: [number, number, number] = [255,123,112]

type USER = [number,string]
const newUser: USER = [112,"mayank0@gmail.com"]

newUser[1] = "mayank0@gmail.com" //Contorversial as the value can be changed after declaration of tuple for a particular index

// newUser.push(true)

export{}