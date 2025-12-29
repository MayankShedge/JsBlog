const score1 = 400

// const balance = new Number(100)
// console.log(balance);
// console.log(score1);

// console.log(balance.toString().length);
// console.log(typeof balance);
// console.log(balance.toFixed(2)); //specified decimals tak uski value batega 

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)); //ek specified range tak values ka precision dega eg: 123.8966 pe toPrecision(3) pe 124 value aaegi aur 23.8966 pe 23.9 aaegi

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


/**************************************** MATHS *******************************************/
// console.log(Math);
// console.log(Math.abs(-4)); // |-4| --> iska ye matlab hai 
// console.log(Math.round(6.3)); //roudoff
// console.log(Math.ceil(4.1)); //top value mil jaegi matlab 4.2 ya 4.8 dono round off to --> 5
// console.log(Math.floor(4.9)); //isme niche vali value milegi matlab 4.1 ho ya 4.9 dono rounded off to 4
// console.log(Math.min(4 ,3 , 6 , 8)); // minimum value dega from set of values 
// console.log(Math.max(4 ,3 , 6 , 8)); // maximum value dega from set of values 

//Math.random()
console.log(Math.random());
console.log((Math.random() * 10 ) + 1) //value 0 bhi ho sakti hai (eg - 0.041 toh aise case ko avoid karne + 1)
console.log(Math.floor(Math.random() * 10 ) + 1) //value 0 bhi ho sakti hai (eg - 0.041 toh aise case ko avoid karne + 1)

const min1 = 10
const max1 = 20
//10 se 20 ke bich values chaiye toh aisa
let age1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1
console.log(age1);

// ========================================
// 🔢 NUMBERS & MATH - COMPLETE GUIDE
// ========================================

/*
JavaScript mein numbers handle karne ke multiple ways hain:
1. Primitive number values
2. Number object wrapper
3. Math object for mathematical operations

Yeh sab production-level calculations, pricing, random generation, etc. mein use hote hain.
*/

// ========================================
// 🟢 NUMBER BASICS
// ========================================

console.log("=== NUMBER BASICS ===\n");

// Primitive number declaration
const score = 400;
console.log("Primitive number:", score);
console.log("Type:", typeof score); // "number"

// Number object wrapper (explicit)
const balance = new Number(100);
console.log("Number object:", balance); // [Number: 100]
console.log("Type:", typeof balance);   // "object"

/*
⚠️ Difference:
- score (primitive) = simple value
- balance (object) = wrapper object with methods

Recommendation: Use primitive numbers unless you need specific Number methods.
*/

// ========================================
// 🔵 NUMBER METHODS (MOST IMPORTANT)
// ========================================

console.log("\n=== NUMBER METHODS ===\n");

// 1️⃣ toString() - Convert number to string
const num = 100;
const numString = num.toString();
console.log("toString():", numString);        // "100"
console.log("Type:", typeof numString);       // "string"
console.log("String length:", numString.length); // 3

// Use case: Display, concatenation, string manipulation
const price = 999;
console.log("Price: Rs." + price.toString()); // "Price: Rs.999"


// 2️⃣ toFixed() - Decimal precision (VERY IMPORTANT)
const balance2 = 100;
console.log("\ntoFixed(2):", balance2.toFixed(2)); // "100.00"

const pi = 3.14159;
console.log("toFixed(2):", pi.toFixed(2));     // "3.14"
console.log("toFixed(4):", pi.toFixed(4));     // "3.1416"

/*
⚠️ Important Notes:
- toFixed() returns STRING, not number!
- Automatically rounds the value
- Perfect for currency/financial calculations
*/

// Use case: E-commerce pricing display
const itemPrice = 123.8966;
console.log("Display price:", "₹" + itemPrice.toFixed(2)); // "₹123.90"


// 3️⃣ toPrecision() - Total significant digits (INTERVIEW FAVORITE)
const otherNumber = 123.8966;

console.log("\ntoPrecision(3):", otherNumber.toPrecision(3)); // "124"
console.log("toPrecision(4):", otherNumber.toPrecision(4));   // "123.9"
console.log("toPrecision(5):", otherNumber.toPrecision(5));   // "123.90"

const smallNumber = 23.8966;
console.log("Small toPrecision(3):", smallNumber.toPrecision(3)); // "23.9"

/*
⚠️ Difference: toFixed() vs toPrecision()
- toFixed(2): 123.8966 → "123.90" (2 decimal places)
- toPrecision(3): 123.8966 → "124" (3 total digits)

toPrecision counts ALL digits (before + after decimal)
toFixed counts ONLY after decimal
*/


// 4️⃣ toLocaleString() - Format with locale (VERY USEFUL)
const hundreds = 1000000;
console.log("\nUS format:", hundreds.toLocaleString('en-US'));  // "1,000,000"
console.log("India format:", hundreds.toLocaleString('en-IN')); // "10,00,000"

const salary = 5000000;
console.log("Indian format:", salary.toLocaleString('en-IN'));  // "50,00,000"

/*
Use case: 
- Display prices in user's locale
- International applications
- Financial reports
*/

// More locale examples
const amount = 1234567.89;
console.log("German:", amount.toLocaleString('de-DE'));  // "1.234.567,89"
console.log("French:", amount.toLocaleString('fr-FR'));  // "1 234 567,89"
console.log("Japanese:", amount.toLocaleString('ja-JP')); // "1,234,567.89"


// 5️⃣ Number() - Type conversion
console.log("\nNumber conversions:");
console.log(Number("123"));      // 123
console.log(Number("123.45"));   // 123.45
console.log(Number("123abc"));   // NaN
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN


// 6️⃣ parseInt() & parseFloat()
console.log("\nparseInt & parseFloat:");
console.log(parseInt("123"));       // 123
console.log(parseInt("123.99"));    // 123 (removes decimal)
console.log(parseInt("123abc"));    // 123 (stops at first non-digit)
console.log(parseFloat("123.99"));  // 123.99
console.log(parseFloat("123.99abc")); // 123.99


// 7️⃣ Number.isNaN() - Check if NaN (IMPORTANT)
console.log("\nisNaN checks:");
console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN("hello"));    // false (string is not NaN type)
console.log(Number.isNaN(123));        // false
console.log(isNaN("hello"));           // true (converts first, then checks)

/*
⚠️ Difference:
Number.isNaN() - strict, no type coercion
isNaN() - converts to number first, then checks
*/


// 8️⃣ Number.isInteger() & Number.isFinite()
console.log("\nInteger & Finite checks:");
console.log(Number.isInteger(123));     // true
console.log(Number.isInteger(123.45));  // false
console.log(Number.isFinite(123));      // true
console.log(Number.isFinite(Infinity)); // false


// ========================================
// 🟡 MATH OBJECT - COMPLETE REFERENCE
// ========================================

console.log("\n=== MATH OBJECT METHODS ===\n");

// Math object properties
console.log("Math.PI:", Math.PI);           // 3.141592653589793
console.log("Math.E:", Math.E);             // 2.718281828459045

// 1️⃣ Math.abs() - Absolute value (remove negative sign)
console.log("\nMath.abs():");
console.log(Math.abs(-4));      // 4
console.log(Math.abs(4));       // 4
console.log(Math.abs(-10.5));   // 10.5

// Use case: Distance calculations, differences
const difference = Math.abs(50 - 100); // 50 (not -50)
console.log("Difference:", difference);


// 2️⃣ Math.round() - Round to nearest integer
console.log("\nMath.round():");
console.log(Math.round(6.3));   // 6
console.log(Math.round(6.5));   // 7
console.log(Math.round(6.8));   // 7
console.log(Math.round(-6.5));  // -6 (rounds towards +infinity)


// 3️⃣ Math.ceil() - Round UP (ceiling)
console.log("\nMath.ceil():");
console.log(Math.ceil(4.1));    // 5
console.log(Math.ceil(4.5));    // 5
console.log(Math.ceil(4.9));    // 5
console.log(Math.ceil(-4.9));   // -4

// Use case: Pagination (always round up pages)
const totalItems = 47;
const itemsPerPage = 10;
const totalPages = Math.ceil(totalItems / itemsPerPage); // 5 pages
console.log("Total pages:", totalPages);


// 4️⃣ Math.floor() - Round DOWN (floor)
console.log("\nMath.floor():");
console.log(Math.floor(4.1));   // 4
console.log(Math.floor(4.5));   // 4
console.log(Math.floor(4.9));   // 4
console.log(Math.floor(-4.9));  // -5

// Use case: Age calculation, discount logic
const exactAge = 25.9;
const displayAge = Math.floor(exactAge); // 25
console.log("Display age:", displayAge);


// 5️⃣ Math.min() & Math.max() - Find minimum/maximum
console.log("\nMath.min() & Math.max():");
console.log(Math.min(4, 3, 6, 8));      // 3
console.log(Math.max(4, 3, 6, 8));      // 8
console.log(Math.min(10, -5, 20, 0));   // -5
console.log(Math.max(-10, -20, -5));    // -5

// Use case: Price comparison, temperature range
const prices = [100, 250, 80, 150];
const minPrice = Math.min(...prices);   // 80
const maxPrice = Math.max(...prices);   // 250
console.log("Price range:", minPrice, "-", maxPrice);


// 6️⃣ Math.pow() - Power/Exponent
console.log("\nMath.pow():");
console.log(Math.pow(2, 3));    // 8 (2^3)
console.log(Math.pow(5, 2));    // 25 (5^2)
console.log(Math.pow(10, 3));   // 1000 (10^3)
console.log(2 ** 3);            // 8 (alternative ** operator)


// 7️⃣ Math.sqrt() - Square root
console.log("\nMath.sqrt():");
console.log(Math.sqrt(16));     // 4
console.log(Math.sqrt(25));     // 5
console.log(Math.sqrt(2));      // 1.414...


// 8️⃣ Math.trunc() - Remove decimal part
console.log("\nMath.trunc():");
console.log(Math.trunc(4.9));   // 4 (removes decimal)
console.log(Math.trunc(-4.9));  // -4
console.log(Math.trunc(4.1));   // 4


// ========================================
// 🔴 MATH.RANDOM() - MOST IMPORTANT
// ========================================

console.log("\n=== MATH.RANDOM() - DETAILED ===\n");

// Basic random number (0 to 1, excluding 1)
console.log("Basic random:", Math.random()); // 0.xxxxx

// Random 0-10 (with possible 0)
console.log("Random 0-10:", Math.random() * 10);

// Random 1-10 (avoiding 0)
console.log("Random 1-10:", (Math.random() * 10) + 1);

// Random integer 1-10
console.log("Random int 1-10:", Math.floor(Math.random() * 10) + 1);

/*
⚠️ FORMULA for random number in range [min, max]:

Math.floor(Math.random() * (max - min + 1)) + min

Explanation:
1. Math.random() → 0 to 0.999...
2. * (max - min + 1) → scale to range
3. Math.floor() → convert to integer
4. + min → shift to correct starting point
*/

// Example: Random age between 10-20
const min = 10;
const max = 20;
const age = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random age (10-20):", age);

// Multiple examples
console.log("\nRandom number examples:");
for (let i = 0; i < 5; i++) {
    const randomAge = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Attempt ${i + 1}:`, randomAge);
}


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: toFixed() aur toPrecision() mein kya difference hai?
A: toFixed() decimal places control karta hai.
   toPrecision() total significant digits control karta hai.
   Example: 123.8966
   - toFixed(2) → "123.90" (2 decimals)
   - toPrecision(3) → "124" (3 total digits)

Q2: Math.ceil() aur Math.floor() ka difference?
A: Math.ceil() rounds UP, Math.floor() rounds DOWN
   ceil(4.1) = 5, floor(4.9) = 4

Q3: Math.random() se specific range mein number kaise generate kare?
A: Math.floor(Math.random() * (max - min + 1)) + min

Q4: toFixed() ka return type kya hai?
A: String! Not number. Convert karna padega if calculation needed.

Q5: Number.isNaN() aur isNaN() mein kya difference?
A: Number.isNaN() strict hai, no coercion
   isNaN() converts first then checks
   isNaN("hello") → true, Number.isNaN("hello") → false

Q6: Kaise check karein ki value valid number hai?
A: Number.isFinite(value) && !Number.isNaN(value)

Q7: Math.round(-6.5) ka result kya hoga?
A: -6 (JavaScript rounds towards +infinity in tie-breaking)

Q8: toLocaleString() ka use kya hai?
A: Number ko locale-specific format mein display karna
   1000000 → "10,00,000" (Indian) ya "1,000,000" (US)

Q9: parseInt("123.99") ka result?
A: 123 (decimal remove ho jaata hai)

Q10: Random number 1-100 generate karne ka formula?
A: Math.floor(Math.random() * 100) + 1
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

console.log("\n=== PRODUCTION USE CASES ===\n");

/*
1. E-COMMERCE PRICING
   - Display prices with proper formatting
   - Calculate discounts
   - Tax calculations
*/

function calculatePrice(basePrice, taxRate, discount) {
    const tax = basePrice * taxRate;
    const discountAmount = basePrice * (discount / 100);
    const finalPrice = basePrice + tax - discountAmount;
    
    return {
        basePrice: basePrice.toFixed(2),
        tax: tax.toFixed(2),
        discount: discountAmount.toFixed(2),
        finalPrice: finalPrice.toFixed(2),
        display: `₹${finalPrice.toLocaleString('en-IN', { 
            minimumFractionDigits: 2,
            maximumFractionDigits: 2 
        })}`
    };
}

const productPrice = calculatePrice(1000, 0.18, 10);
console.log("Product pricing:", productPrice);


/*
2. PAGINATION LOGIC
   - Calculate total pages
   - Generate page numbers
*/

function calculatePagination(totalItems, itemsPerPage) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pages = [];
    
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    
    return {
        totalPages,
        pages,
        itemsPerPage
    };
}

const pagination = calculatePagination(47, 10);
console.log("\nPagination:", pagination);


/*
3. RANDOM GENERATORS
   - OTP generation
   - Random user selection
   - Lottery systems
*/

function generateOTP(length = 6) {
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("\nGenerated OTP:", generateOTP(6));
console.log("Generated OTP (4-digit):", generateOTP(4));

// Random color generator
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

console.log("Random color:", generateRandomColor());


/*
4. RATING SYSTEM
   - Star ratings
   - Average calculations
*/

function calculateAverageRating(ratings) {
    const sum = ratings.reduce((acc, curr) => acc + curr, 0);
    const average = sum / ratings.length;
    
    return {
        average: average.toFixed(1),
        rounded: Math.round(average),
        totalReviews: ratings.length
    };
}

const productRatings = [4, 5, 3, 5, 4, 5];
console.log("\nProduct rating:", calculateAverageRating(productRatings));


/*
5. DISTANCE CALCULATION
   - Location-based services
   - Delivery radius
*/

function calculateDistance(x1, y1, x2, y2) {
    const dx = Math.abs(x2 - x1);
    const dy = Math.abs(y2 - y1);
    const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    
    return distance.toFixed(2);
}

console.log("\nDistance:", calculateDistance(0, 0, 3, 4), "units");


/*
6. DISCOUNT CALCULATOR
   - Sale prices
   - Promotional offers
*/

function applyDiscount(originalPrice, discountPercent) {
    const discount = originalPrice * (discountPercent / 100);
    const finalPrice = originalPrice - discount;
    const savings = discount;
    
    return {
        original: `₹${originalPrice.toLocaleString('en-IN')}`,
        discount: `${discountPercent}%`,
        savings: `₹${savings.toFixed(2)}`,
        final: `₹${finalPrice.toFixed(2)}`
    };
}

console.log("\nDiscount calculation:", applyDiscount(5000, 20));


/*
7. LOAN EMI CALCULATOR
   - Monthly installments
   - Interest calculations
*/

function calculateEMI(principal, ratePercent, months) {
    const rate = ratePercent / (12 * 100);
    const emi = (principal * rate * Math.pow(1 + rate, months)) / 
                (Math.pow(1 + rate, months) - 1);
    
    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;
    
    return {
        emi: `₹${emi.toFixed(2)}`,
        totalAmount: `₹${totalAmount.toFixed(2)}`,
        totalInterest: `₹${totalInterest.toFixed(2)}`
    };
}

console.log("\nLoan EMI:", calculateEMI(500000, 10, 60));
