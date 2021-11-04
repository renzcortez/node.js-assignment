# a3

a3 is a node module that uses callback functions and creates custom events using the events core module in Node.js

## Description

The application reads user input from stdin and extracts n1 and n2 from the input. The output are strings separated by newline that logs 'Multiples of {n1} {n2}' to the console as an instance of an EventEmitter and then the sum of all the multiples of n1 and n2, below and including 1000 after 2 seconds.

## Demo

```javascript
sumN1N2('100 1000');
```
```bash
% node index.js
Multiples of 100 1000
6500
```
```javascript
sumN1N2('500 1200');
```
```bash
% node index.js
Multiples of 500 1200
1500
```
```javascript
sumN1N2('2 3');
```
```bash
% node index.js
Multiples of 2 3
417333
```

## Jest Unit Testing

```bash
npm test
```
