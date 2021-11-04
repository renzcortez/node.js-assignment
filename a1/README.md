# a1

a1 is a node module that determines the availability of a given list of servers and then returns an available server with the lowest priority number.

## Installation

Install the dependencies of a1.

```bash
sudo npm install
```

## Demo

```bash
% node
> let input = [
      { "url": "http://doesNotExist.boldtech.co", "priority": 1 },
      { "url": "http://boldtech.co", "priority": 7 },
      { "url": "http://offline.boldtech.co", "priority": 2 },
      { "url": "http://google.com", "priority": 4 }
    ];
> const a1 = require('./index.js');
> result = a1.findServer(input);
> console.log(result);
Promise {
  { url: 'http://google.com', priority: 4 },
  [Symbol(async_id_symbol)]: 666,
  [Symbol(trigger_async_id_symbol)]: 665,
  [Symbol(destroyed)]: { destroyed: false }
}
>
```

## Jest Unit Testing

```bash
npm test
```
