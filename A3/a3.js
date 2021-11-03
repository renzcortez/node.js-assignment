const events = require('events');
const eventEmitter = new events.EventEmitter();


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter n1 and n2 separated by a whitespace:', input => {

  const n1n2 = input.split(' ');
  if (n1n2.length !== 2 || n1n2.some(isNaN)) {
    console.error('Wrong input format!');
  }
  else {
    const n1 = parseInt(n1n2[0]);
    const n2 = parseInt(n1n2[1]);

    setTimeout(function () {sumN1N2(n1, n2).then((result) =>
      { console.log(result); })}, 2000);

    //Create an event handler:
    const logInfo = function () {
      console.log('Multiples of ' + n1 + ' ' + n2);
    }

    //Assign the event handler to an event:
    eventEmitter.on('MyEvent', logInfo);
    //Fire the event:
    eventEmitter.emit('MyEvent');

  }
  readline.close();

});


function sumMultiples(n) {

  result = 0;
  let i = 1;
  while ((n * i) <= 1000) {
    result += n * i;
    i++;
  }
  return result;

}


 async function sumN1N2(n1, n2) {

   const result = await Promise.all([sumMultiples(n1), sumMultiples(n2)])
   .then((response) => {
     return response[0] + response[1];
   })
   return result;
 }
