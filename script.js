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
