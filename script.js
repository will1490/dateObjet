/* Exercise 1
Find the timezones of :
Anchorage (USA)
Reykjavik (Iceland)
Saint-Petersburg (Russia)
And display the date and time of these cities along with the time and date of Brussels.
*/

let date = new Date();
let brusselsTime = date.toLocaleString('en-US', { timeZone: 'Europe/Brussels' });

let anchorageTimezone = 'America/Anchorage';
let reykjavikTimezone = 'Atlantic/Reykjavik';
let stPetersburgTimezone = 'Europe/Moscow';

// Create new date objects
let anchorageDate = new Date().toLocaleString('en-US', { timeZone: anchorageTimezone });
let reykjavikDate = new Date().toLocaleString('en-US', { timeZone: reykjavikTimezone });
let stPetersburgDate = new Date().toLocaleString('en-US', { timeZone: stPetersburgTimezone });

// Display the date and time of cities with Brussels date and time
console.log('Date and time in Anchorage, USA: ' + anchorageDate);
console.log('Date and time in Reykjavik, Iceland: ' + reykjavikDate);
console.log('Date and time in Saint-Petersburg, Russia: ' + stPetersburgDate);
console.log('Date and time in Brussels, Belgium: ' + brusselsTime);

/* Exercise 2
A => Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?
B => Write a function to find how many days have passed since any point in time (after 1970).
*/

// A =>
let birthdate = '1969-08-28';

let daysSinceBirth = Math.floor((new Date() - new Date(birthdate)) / (1000 * 60 * 60 * 24));

console.log('Number of days since my birth: ' + daysSinceBirth);

// B =>
function daysSince(date) {
    // Convert the date string to a timestamp in milliseconds
    const timestamp = new Date(date).getTime();
    
    // Calculate the number of days passed since the timestamp
    let days = Math.floor((new Date() - timestamp) / (1000 * 60 * 60 * 24));
    
    return days;
  }
  console.log('Days since 1945-06-06: ' + daysSince('1945-06-06'));
  
