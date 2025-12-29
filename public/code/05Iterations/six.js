// const coding = ['js','cpp','java','c','python']

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values); // For each by default koi value return nahi karta

//Ab kyuki foreach kuch return nahi karta hai toh apan ko agar kuch particular value filter karni hai array mai se toh voh kaise karenge?
//Voh filter method se hogi
const myNums = [1,2,3,4,5,6,7,8,9,10]
// const result = myNums.filter((num) => (num > 4)) // better way use explicit return to avoid return

//Note that jab ham iss tarah se ye task kare 
// const result = myNums.filter((num) => {
//     num > 4
// })
// ye blank array deta hai recall the arow funcs vala video yahape scope define ho gaya hai toh return keyword lagana padega to return this
// const result = myNums.filter((num) => {
//     return num > 4
// })
// console.log(result);

//Yahi same filter vali chij agar foreach se karni hai toh?
// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
  { title: 'The Silent River', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Code Chronicles', genre: 'Technology', publish: 1992, edition: 2008 },
  { title: 'Mind Over Matter', genre: 'Self-Help', publish: 1999, edition: 2007 },
  { title: 'The History Trail', genre: 'History', publish: 1985, edition: 2010 },
  { title: 'Future of AI', genre: 'Science', publish: 2001, edition: 2019 },
  { title: 'The Art of Focus', genre: 'Motivation', publish: 2003, edition: 2015 },
  { title: 'Digital Dreams', genre: 'Technology', publish: 2008, edition: 2020 },
  { title: 'Whispers of the Wind', genre: 'Poetry', publish: 1994, edition: 2012 },
  { title: 'The Last Kingdom', genre: 'Historical Fiction', publish: 1997, edition: 2013 },
  { title: 'Journey Beyond Earth', genre: 'Science', publish: 2010, edition: 2022 },
  { title: 'Think Like a Monk', genre: 'Self-Help', publish: 2018, edition: 2021 },
  { title: 'The Lost Algorithm', genre: 'Technology', publish: 2015, edition: 2023 },
  { title: 'The Human Condition', genre: 'Philosophy', publish: 1988, edition: 2011 },
  { title: 'Waves of Time', genre: 'Fiction', publish: 2006, edition: 2018 },
  { title: 'Hidden Dimensions', genre: 'Science', publish: 2009, edition: 2021 },
  { title: 'Echoes of Eternity', genre: 'Fantasy', publish: 2000, edition: 2014 },
  { title: 'Breaking Boundaries', genre: 'Biography', publish: 2012, edition: 2022 },
  { title: 'The Green Planet', genre: 'Environment', publish: 2016, edition: 2023 },
];

// const userBooks = books.filter((book) => (book.genre === 'Technology' && book.publish > 2010))

//Multiple conditions
const userBooks = books.filter((book) => (book.genre === 'Technology' && book.publish > 2010))

let userBooks1 = books.filter((book) => (book.publish > 2000))

userBooks1 = books.filter((book) => (book.publish >= 2000 && book.genre === "Technology"))

console.log(userBooks1);
