const course = {
    courseName: "Js in Hindi",
    price: "Rs 999",
    Instructor: "Hitesh"
}

// course.Instructor
const {Instructor: Inst} = course // Destructuring the objects
console.log(Instructor);

const navbar = ({company }) => { //instead of props.company ham aisa likh sakte hai directly 

}

navbar(company = "Mayank")

//Json objects
//How actaul Json objects look
// {
//     "name": "Mayank",
//     "courseName": "Js in marathi",
//     "price": "free"
// }

//mostly APIs se jab ham json receive karenge toh vo array ke form mai aaega toh isse ham handle karenge