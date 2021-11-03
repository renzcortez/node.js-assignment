const avail = require('avail');

//Unit Test #1: Example Server Array
test("Returns http://google.com with the lowest priority", () => {
  const servers = [
    {
      "url": "http://doesNotExist.boldtech.co",
      "priority": 1
    },
    {
      "url": "http://boldtech.co",
      "priority": 7
    },
    {
      "url": "http://offline.boldtech.co",
      "priority": 2
    },
    {
      "url": "http://google.com",
      "priority": 4
    }
  ]
  expect(avail.findServer(servers)).toBe('http://google.com');
});



// const servers = [
//   {
//     "url": "http://doesNotExist.boldtech.co",
//     "priority": 1
//   },
//   {
//     "url": "http://boldtecch.co",
//     "priority": 7
//   },
//   {
//     "url": "http://offline.boldtech.co",
//     "priority": 2
//   },
//   {
//     "url": "http://google.com",
//     "priority": 4
//   }
// ]

servers = [
  {
    "url": "http://boldtecch.co",
    "priority": 7
  },
  {
    "url": "https://www.apple.com/ca/",
    "priority": 2
  },
  {
    "url": "http://google.com",
    "priority": 4
  }
]

avail = require('./index');
ca = avail.findServer(servers);
console.log(ca);
