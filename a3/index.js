const events = require('events');
const eventEmitter = new events.EventEmitter();

//Write a function to find the sum of all the multiples of n below and including 1000
function sumMultiples(n) {
  if (n === 0) {
    return 0;
  }
  result = 0;
  let i = 1;
  while ((n * i) <= 1000) {
    result += n * i;
    i++;
  }
  return result;
}

function sumN1N2(input) {
  //#1 The variable input is a string separated by space that has the input value
  const n1n2 = input.split(' ');
  //Format input which should be used to calculate multiples and log in output
  if (n1n2.length !== 2 || n1n2.some(isNaN)) {
    throw 'Wrong input format!';
  }
  else {
    //#2 Extract n1 and n2 from the input
    const n1 = parseInt(n1n2[0]);
    const n2 = parseInt(n1n2[1]);
    //Find the sum of all the multiples of n1 and n2
    result = (sumMultiples(n1) + sumMultiples(n2)).toString();
    //Log the sum after 2 seconds
    setTimeout(function () { console.log(result) }, 2000);
    //#3 Register an event named MyEvent and bind a function named logInfo to it
    eventEmitter.once('MyEvent', logInfo = function () {
      console.log('Multiples of ' + n1 + ' ' + n2);
    });
    //Emit the event
    eventEmitter.emit('MyEvent');
    return result;
  }
}

exports.sumN1N2 = sumN1N2;
