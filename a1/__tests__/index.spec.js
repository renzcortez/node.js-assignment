const a1 = require('../index.js');

describe('findServer function of a1 module', () => {

  test('example server array', () => {
    let input = [
      { "url": "http://doesNotExist.boldtech.co", "priority": 1 },
      { "url": "http://boldtech.co", "priority": 7 },
      { "url": "http://offline.boldtech.co", "priority": 2 },
      { "url": "http://google.com", "priority": 4 }
    ];
    let output = { "url": "http://google.com", "priority": 4 };
    return a1.findServer(input).then(result => {
      expect(result).toEqual(output);
    });
  });

  // test('no server', () => {
  //   let input = [];
  //   let output = 'No servers are online!';
  //   expect(() => {
  //     a1.findServer(input);
  //   }).toThrow();
  // });

  // test('one server and no online', () => {
  //   let input = [
  //     { "url": "http://doesNotExist.boldtech.co", "priority": 1 },
  //   ];
  //   let output = 'No servers are online!';
  //   expect(() => {
  //     a1.findServer(input);
  //   }).toThrow();
  // });

  test('one server and one online', () => {
    let input = [
      { "url": "http://boldtech.co", "priority": 7 }
    ]
    let output = { "url": "http://boldtech.co", "priority": 7 }
    return a1.findServer(input).then(result => {
      expect(result).toEqual(output);
    });
  });

  // test('multiple servers and no online', () => {
  //   let input = [
  //     { "url": "http://doesNotExist.boldtech.co", "priority": 1 },
  //   ];
  //   let output = 'No servers are online!';
  //   const wrapper = () => {
  //     a1.findServer(input);
  //   }
  //   expect(wrapper()).toEqual(output);
  // });

  test('multiple servers and one online', () => {
    let input = [
      { "url": "http://boldtech.co", "priority": 7 },
      { "url": "http://doesNotExist.boldtech.co", "priority": 1 },
      { "url": "http://offline.boldtech.co", "priority": 2 }
    ]
    let output = { "url": "http://boldtech.co", "priority": 7 };
    return a1.findServer(input).then(result => {
      expect(result).toEqual(output);
    });
  });

  test('multiple servers and multiple online', () => {
    let input = [
      { "url": "http://boldtech.co", "priority": 7 },
      { "url": "http://doesNotExist.boldtech.co", "priority": 1 },
      { "url": "http://offline.boldtech.co", "priority": 2 },
      { "url": "http://google.com", "priority": 4 }
    ]
    let output = { "url": "http://google.com", "priority": 4 };
    return a1.findServer(input).then(result => {
      expect(result).toEqual(output);
    });
  });

  test('multiple servers and all online', () => {
    let input = [
      { "url": "http://boldtech.co", "priority": 7 },
      { "url": "https://www.apple.com/ca/", "priority": 3 },
      { "url": "http://google.com", "priority": 4 }
    ]
    let output = { "url": "https://www.apple.com/ca/", "priority": 3 };
    return a1.findServer(input).then(result => {
      expect(result).toEqual(output);
    });
  });

});
