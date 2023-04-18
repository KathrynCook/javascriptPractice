let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnerAge = 18;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`You are runner number ${raceNumber}. You will be racing at 9.30 am.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`You are runner number ${raceNumber}. You will be racing at 11.00 am.`);
} else if (runnerAge < 18) {
  console.log(`You are runner number ${raceNumber}. You will be racing at 12.30 pm.`);
} else {
  console.log('Please see the registration desk.');
}