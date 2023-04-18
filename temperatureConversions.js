const kelvin = 273;
// Today's temperature forecast in Kelvin, will stay constant
const celsius = kelvin - 273;
// Conversion to celsius from kelvin, will be constant
let fahrenheit = celsius * (9/5) + 32;
// Conversion to fahrenheit from celsius, allows for changes so the number can be rounded
fahrenheit = Math.floor(fahrenheit);
// Rounding fahreheit down to a whole number
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// Logging results to the console
let newton = celsius * (33/100);
// Converstion to Newton from celsius, allows for number to be rounded
newton = Math.floor(newton);
// Rounding newton down to a whole number
console.log(`The temperature is ${newton} degrees Newton.`);
// logging results to the console