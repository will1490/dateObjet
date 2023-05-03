/* Exercise 1
Find the timezones of :
Anchorage (USA)
Reykjavik (Iceland)
Saint-Petersburg (Russia)
And display the date and time of these cities along with the time and date of Brussels.
*/

let date = new Date();
let brusselsTime = date.toLocaleString('fr-BE', { timeZone: 'Europe/Brussels' });

let anchorageTimezone = 'America/Anchorage';
let reykjavikTimezone = 'Atlantic/Reykjavik';
let stPetersburgTimezone = 'Europe/Moscow';

// Create new date objects
let anchorageDate = new Date().toLocaleString('fr-BE', { timeZone: anchorageTimezone });
let reykjavikDate = new Date().toLocaleString('fr-BE', { timeZone: reykjavikTimezone });
let stPetersburgDate = new Date().toLocaleString('fr-BE', { timeZone: stPetersburgTimezone });

// Display the date and time of the cities with Brussels date and time
let affichage = document.querySelector('.affichage');



/* Exercise 2
A => Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?
B => Write a function to find how many days have passed since any point in time (after 1970).
*/

// A =>
let birthDate = '1969-08-28';
let daysSinceBirth = Math.floor((new Date() - new Date(birthDate)) / (1000 * 60 * 60 * 24));

// B =>
function daysSince(date) {
	// Convert the date string to a timestamp in milliseconds
	const timestamp = new Date(date).getTime();
		    
	// Calculate the number of days passed since the timestamp
	let days = Math.floor((new Date() - timestamp) / (1000 * 60 * 60 * 24));
		    
	return days;
}

// Display "affichage"

affichage.innerHTML = 'Exercise 1:<br>' +
    'Date and time in Anchorage, USA: ' + anchorageDate + '<br>' +
    'Date and time in Reykjavik, Iceland: ' + reykjavikDate + '<br>' +
    'Date and time in Saint-Petersburg, Russia: ' + stPetersburgDate + '<br>' +
    'Date and time in Brussels, Belgium: ' + brusselsTime + '<br><br>' +
    'Exercise 2:<br>' +
    'Number of days since my birth: ' + daysSinceBirth + '<br>' +
    'Days since 1975-10-06: ' + daysSince('1975-10-06');
