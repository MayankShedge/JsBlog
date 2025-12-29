let myDate1 = new Date()
// console.log(myDate1.toString());
// console.log(myDate1.toISOString());
// console.log(myDate1.toDateString());
// console.log(myDate1.toJSON());
// console.log(myDate1.toLocaleDateString());
// console.log(myDate1.toLocaleString());

// console.log(typeof myDate); //object 

// let myCreatedDate = new Date(2023 , 0 , 23) //ek custom date declare krna
// console.log(myCreatedDate.toDateString()); //months 0 se start hote hai in js

// let myNewCreatedDate = new Date(2023 , 0 , 23 , 5 , 3)
// console.log(myNewCreatedDate.toLocaleString()); 

// let NewCreatedDate = new Date("2023-01-14") //yyyy-mm-dd isme month first se start hoga
// console.log(NewCreatedDate.toLocaleString()); 

// let NewlyCreatedDate = new Date("01-14-2023") //mm-dd-yyyy
// console.log(NewlyCreatedDate.toLocaleString()); 

// let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1 Jan 1970 se leke current date tak milisecond value

// console.log(NewCreatedDate.getTime()); //Same vo miliseconds mai value dega from the date you declared se 

console.log(Math.floor(Date.now()/1000));

let newDate1 = new Date()
// console.log(newDate1);
// console.log(newDate1.getFullYear());
// console.log(newDate1.getMonth());
// console.log(newDate1.getDate());
// console.log(newDate1.getHours());
// console.log(newDate1.getMinutes());
// console.log(newDate1.getSeconds());
// console.log(newDate1.getMilliseconds());
// console.log(newDate1.getTime());
// console.log(newDate1.getDay());

let dateString1 = `${newDate.getDay()} and the time is ${newDate.getTime()}`
console.log(dateString1);

//Manual customization
newDate.toLocaleString('default',{
    weekday: "long",
    // timeZone: 
})

// ========================================
// 📅 DATE OBJECT - COMPLETE GUIDE
// ========================================

/*
JavaScript Date object is used for working with dates and times.
Dates internally stored as milliseconds since January 1, 1970, 00:00:00 UTC (Unix Epoch).

Important points:
- Month indexing: 0 (January) to 11 (December)
- Day indexing: 0 (Sunday) to 6 (Saturday)
- Date object is mutable
*/

// ========================================
// 🟢 DATE CREATION & DISPLAY METHODS
// ========================================

console.log("=== DATE CREATION ===\n");

// Current date and time
let myDate = new Date();
console.log("Current date object:", myDate);
console.log("Type:", typeof myDate); // "object"

// Different display formats
console.log("\n--- Display Formats ---");
console.log("toString():", myDate.toString());
// "Fri Nov 03 2025 03:53:00 GMT+0530 (India Standard Time)"

console.log("toDateString():", myDate.toDateString());
// "Fri Nov 03 2025"

console.log("toTimeString():", myDate.toTimeString());
// "03:53:00 GMT+0530 (India Standard Time)"

console.log("toISOString():", myDate.toISOString());
// "2025-11-02T22:23:00.000Z" (UTC format)

console.log("toJSON():", myDate.toJSON());
// "2025-11-02T22:23:00.000Z" (same as toISOString)

console.log("toLocaleDateString():", myDate.toLocaleDateString());
// "11/3/2025" (US format) or locale-specific

console.log("toLocaleTimeString():", myDate.toLocaleTimeString());
// "3:53:00 AM" (locale-specific)

console.log("toLocaleString():", myDate.toLocaleString());
// "11/3/2025, 3:53:00 AM" (date + time, locale-specific)

/*
⚠️ Important:
- toString() → Full readable string with timezone
- toISOString() → Standard ISO format (used in APIs)
- toLocaleString() → User-friendly display format
- toJSON() → JSON serialization (for data transfer)
*/


// ========================================
// 🔵 CREATING CUSTOM DATES
// ========================================

console.log("\n=== CUSTOM DATE CREATION ===\n");

// Method 1: Year, Month (0-11), Day
let myCreatedDate = new Date(2023, 0, 23);
console.log("Custom date (Y, M, D):", myCreatedDate.toDateString());
// "Mon Jan 23 2023"

/*
⚠️ CRITICAL: Months are 0-indexed!
0 = January, 1 = February, ..., 11 = December
*/

// Method 2: Year, Month, Day, Hour, Minute, Second
let myNewCreatedDate = new Date(2023, 0, 23, 5, 3, 30);
console.log("Custom date + time:", myNewCreatedDate.toLocaleString());
// "1/23/2023, 5:03:30 AM"

// Method 3: String format YYYY-MM-DD (Month 1-12)
let NewCreatedDate = new Date("2023-01-14");
console.log("String format (YYYY-MM-DD):", NewCreatedDate.toLocaleString());
// "1/14/2023, 12:00:00 AM"

/*
⚠️ Note: When using string format "YYYY-MM-DD",
months are 1-based (January = 1, December = 12)
*/

// Method 4: String format MM-DD-YYYY
let NewlyCreatedDate = new Date("01-14-2023");
console.log("String format (MM-DD-YYYY):", NewlyCreatedDate.toLocaleString());
// "1/14/2023, 12:00:00 AM"

// Method 5: Timestamp (milliseconds since Jan 1, 1970)
let timestampDate = new Date(1609459200000);
console.log("From timestamp:", timestampDate.toLocaleString());


// ========================================
// 🟡 TIMESTAMPS - VERY IMPORTANT
// ========================================

console.log("\n=== TIMESTAMPS ===\n");

// Get current timestamp (milliseconds since Jan 1, 1970 UTC)
let myTimeStamp = Date.now();
console.log("Current timestamp (ms):", myTimeStamp);
// Example: 1730591580000

// Get timestamp of specific date
console.log("Specific date timestamp:", NewCreatedDate.getTime());

// Convert milliseconds to seconds (common in APIs)
console.log("Timestamp in seconds:", Math.floor(Date.now() / 1000));
// Example: 1730591580

/*
Use cases:
- Database timestamps
- API request/response timing
- Performance measurement
- Unique ID generation
- Sorting dates
*/

// Calculate time difference
let startDate = new Date("2023-01-01");
let endDate = new Date("2023-12-31");
let differenceMs = endDate - startDate;
let differenceDays = differenceMs / (1000 * 60 * 60 * 24);
console.log("Days difference:", differenceDays);


// ========================================
// 🟠 DATE GETTER METHODS
// ========================================

console.log("\n=== DATE GETTER METHODS ===\n");

let newDate = new Date();

console.log("Full date object:", newDate);
console.log("getFullYear():", newDate.getFullYear());     // 2025
console.log("getMonth():", newDate.getMonth());           // 10 (November, 0-indexed)
console.log("getDate():", newDate.getDate());             // 3 (day of month)
console.log("getDay():", newDate.getDay());               // 0-6 (Sunday=0)
console.log("getHours():", newDate.getHours());           // 0-23
console.log("getMinutes():", newDate.getMinutes());       // 0-59
console.log("getSeconds():", newDate.getSeconds());       // 0-59
console.log("getMilliseconds():", newDate.getMilliseconds()); // 0-999
console.log("getTime():", newDate.getTime());             // Timestamp

/*
⚠️ Common confusion:
- getMonth() returns 0-11 (not 1-12)
- getDate() returns day of month (1-31)
- getDay() returns day of week (0-6, Sunday=0)
*/

// Practical usage
let dateString = `Today is day ${newDate.getDay()} and timestamp is ${newDate.getTime()}`;
console.log("\n" + dateString);

// Month name mapping
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
console.log("Current month:", monthNames[newDate.getMonth()]);

// Day name mapping
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Current day:", dayNames[newDate.getDay()]);


// ========================================
// 🔴 DATE SETTER METHODS
// ========================================

console.log("\n=== DATE SETTER METHODS ===\n");

let modifiableDate = new Date();
console.log("Original:", modifiableDate.toLocaleString());

modifiableDate.setFullYear(2024);
console.log("After setFullYear(2024):", modifiableDate.toLocaleString());

modifiableDate.setMonth(5); // June (0-indexed)
console.log("After setMonth(5):", modifiableDate.toLocaleString());

modifiableDate.setDate(15);
console.log("After setDate(15):", modifiableDate.toLocaleString());

modifiableDate.setHours(14);
modifiableDate.setMinutes(30);
modifiableDate.setSeconds(45);
console.log("After time change:", modifiableDate.toLocaleString());


// ========================================
// 🟣 LOCALESTRING CUSTOMIZATION
// ========================================

console.log("\n=== LOCALE STRING CUSTOMIZATION ===\n");

let customDate = new Date();

// Custom format with options
let formatted = customDate.toLocaleString('default', {
    weekday: "long",      // "Monday"
    year: "numeric",      // "2025"
    month: "long",        // "November"
    day: "numeric",       // "3"
    hour: "2-digit",      // "03"
    minute: "2-digit",    // "53"
    second: "2-digit",    // "00"
    timeZoneName: "short" // "IST"
});

console.log("Custom format:", formatted);

// Different locale examples
console.log("\n--- Different Locales ---");
console.log("US:", customDate.toLocaleString('en-US'));
console.log("UK:", customDate.toLocaleString('en-GB'));
console.log("India:", customDate.toLocaleString('en-IN'));
console.log("Germany:", customDate.toLocaleString('de-DE'));
console.log("Japan:", customDate.toLocaleString('ja-JP'));

// Date only formats
console.log("\n--- Date Only ---");
console.log("Long:", customDate.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
}));
console.log("Short:", customDate.toLocaleDateString('en-US', { 
    year: '2-digit', 
    month: '2-digit', 
    day: '2-digit' 
}));


// ========================================
// 🧠 INTERVIEW QUESTIONS
// ========================================

/*
Q1: Date object ka typeof kya return karta hai?
A: "object" - Date ek object hai

Q2: Month indexing kaise hoti hai Date object mein?
A: 0-indexed (0=January, 11=December)
   Exception: String format "YYYY-MM-DD" mein 1-indexed

Q3: getDate() aur getDay() mein kya difference hai?
A: getDate() → Day of month (1-31)
   getDay() → Day of week (0=Sunday, 6=Saturday)

Q4: Date.now() kya return karta hai?
A: Current timestamp in milliseconds since Jan 1, 1970 UTC

Q5: Timestamp ko seconds mein convert kaise kare?
A: Math.floor(Date.now() / 1000)

Q6: Do dates ka difference calculate kaise kare?
A: date2 - date1 (result in milliseconds)
   Days: (date2 - date1) / (1000 * 60 * 60 * 24)

Q7: toISOString() ka use kya hai?
A: Standard UTC format string (used in APIs, databases)
   Format: "2025-11-02T22:23:00.000Z"

Q8: Date object mutable hai ya immutable?
A: Mutable! Setter methods original date ko modify karte hain.

Q9: Invalid date kaise detect kare?
A: isNaN(date.getTime()) or date.toString() === "Invalid Date"

Q10: Unix timestamp kya hota hai?
A: Seconds since January 1, 1970, 00:00:00 UTC
    JavaScript mein milliseconds store hota hai
*/


// ========================================
// 💼 PRODUCTION USE CASES
// ========================================

console.log("\n=== PRODUCTION USE CASES ===\n");

/*
1. USER REGISTRATION TIMESTAMP
   - Store registration date
   - Calculate account age
*/

function registerUser(username) {
    const registrationDate = new Date();
    const timestamp = registrationDate.getTime();
    
    return {
        username,
        registeredAt: registrationDate.toISOString(),
        timestamp,
        displayDate: registrationDate.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };
}

console.log("User registration:", registerUser("Mayank"));


/*
2. AGE CALCULATOR
   - Calculate exact age from birthdate
*/

function calculateAge(birthDateString) {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

console.log("\nAge:", calculateAge("2000-05-15"), "years");


/*
3. COUNTDOWN TIMER
   - Event countdown
   - Offer expiry
*/

function getCountdown(targetDateString) {
    const target = new Date(targetDateString);
    const now = new Date();
    const diff = target - now;
    
    if (diff < 0) return "Event has passed!";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

console.log("\nCountdown:", getCountdown("2025-12-31"));


/*
4. DATE RANGE VALIDATOR
   - Booking systems
   - Event scheduling
*/

function isDateInRange(checkDate, startDate, endDate) {
    const check = new Date(checkDate);
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    return check >= start && check <= end;
}

console.log("\nDate in range?", isDateInRange("2025-06-15", "2025-01-01", "2025-12-31"));


/*
5. BUSINESS DAYS CALCULATOR
   - Skip weekends
   - Working days
*/

function addBusinessDays(startDate, daysToAdd) {
    const date = new Date(startDate);
    let added = 0;
    
    while (added < daysToAdd) {
        date.setDate(date.getDate() + 1);
        // Skip weekends (0=Sunday, 6=Saturday)
        if (date.getDay() !== 0 && date.getDay() !== 6) {
            added++;
        }
    }
    
    return date.toDateString();
}

console.log("\n5 business days from today:", addBusinessDays(new Date(), 5));


/*
6. TIME AGO FORMATTER
   - Social media posts
   - Comments
*/

function timeAgo(dateString) {
    const past = new Date(dateString);
    const now = new Date();
    const diffMs = now - past;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    
    if (diffSec < 60) return `${diffSec} seconds ago`;
    if (diffMin < 60) return `${diffMin} minutes ago`;
    if (diffHour < 24) return `${diffHour} hours ago`;
    if (diffDay < 7) return `${diffDay} days ago`;
    
    return past.toLocaleDateString();
}

console.log("\nTime ago:", timeAgo(new Date(Date.now() - 3600000))); // 1 hour ago


/*
7. DATE FORMATTING FOR DISPLAY
   - Blog posts
   - Articles
*/

function formatPublishDate(date) {
    const d = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    return d.toLocaleDateString('en-US', options);
}

console.log("\nPublish date:", formatPublishDate(new Date()));