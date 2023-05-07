/* EXERCISE 1
Find the timezones of :
Anchorage (USA)
Reykjavik (Iceland)
Saint-Petersburg (Russia)
And display the date and time of these cities along with the time and date of Brussels.
*/

// Create new date objects
let dayDate = new Date();

let anchorageDate = dayDate.toLocaleString('fr-BE', { timeZone: 'America/Anchorage' });
let reykjavikDate = dayDate.toLocaleString('fr-BE', { timeZone: 'Atlantic/Reykjavik' });
let stPetersburgDate = dayDate.toLocaleString('fr-BE', { timeZone: 'Europe/Moscow' });
let brusselsTime = dayDate.toLocaleString('fr-BE', { timeZone: 'Europe/Brussels' });
// Display the date and time of the cities with Brussels date and time
let affichageExo1 = document.querySelector('.affichageExo1');
affichageExo1.innerHTML = 'Date and time in Anchorage, USA: ' + anchorageDate + '<br>' +
    'Date and time in Reykjavik, Iceland: ' + reykjavikDate + '<br>' +
    'Date and time in Saint-Petersburg, Russia: ' + stPetersburgDate + '<br>' +
    'Date and time in Brussels, Belgium: ' + brusselsTime ;


// EXERCISE 2

// A => Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?
let birthDate = '1969-08-28';
let daysSinceBirth = Math.floor((new Date() - new Date(birthDate)) / (1000 * 60 * 60 * 24));

// B => Write a function to find how many days have passed since any point in time (after 1970).
function daysSince(date) {
	// Convert the date string to a timestamp in milliseconds
	const christmas1975 = new Date(date).getTime();
		    
	// Calculate the number of days passed since the timestamp
	let days = Math.floor((new Date() - christmas1975) / (1000 * 60 * 60 * 24));
    return days;
}
// Display "affichage"
let affichageExo2 = document.querySelector('.affichageExo2');
affichageExo2.innerHTML = 
    'Number of days since my birth: ' + daysSinceBirth + ' days '+ '<br>' +
    'Number of days since the timestamp(christmas1975) : ' + daysSince('1975-12-25') + ' days';


//EXERCISE 3

// A => Using timestamps, find the exact time and date we will be in 80000 hours.
let myBirth = new Date('1969-08-28');
let futureDate = new Date(myBirth.getTime() + (80000 * 60 * 60 * 1000));

// B => Write a function to display the time and date for any amount of hours given in the future.
function getFutureDate(hours) {
  let nowDate = new Date();
  let newFutureDate = new Date(nowDate.getTime() + (hours * 60 * 60 * 1000));
  let resultDate = newFutureDate.toLocaleString('fr-BE'), options;
  console.log(`In ${hours} hours, it will be ${resultDate}.`);
  return resultDate;
}

// C => Create a number input for the hours and listen for keyup events, 
//dynamically display the date in the number of hours given by the input.
// Get the HTML elements
let hoursInput = document.querySelector('#hours-input');
let dateOutput = document.querySelector('#date-output');
//dateOutput.appendChild(hoursInput);


// Add event listener to the input
hoursInput.addEventListener('keyup', function() {
  const hours = parseInt(hoursInput.value);
  let resultDate = getFutureDate(hours);
  dateOutput.textContent = resultDate;
  console.log("hours recorded !");
});

// Display
let affichageExo3 = document.querySelector('.affichageExo3');
affichageExo3.innerHTML = 
'Time and date 80000 hours after my birth : ' + futureDate.toLocaleDateString('fr-BE') + '<br>' +
'Time and date after given hours (120000): ' + getFutureDate(120000) + '<br>';

// EXERCICE 4  

