const a3 = require('../index.js');

describe("sumN1N2 function in a3 module", () => {

  test('both zero', () => {
    let input = '0 0';
    let output = '0';
    return expect(a3.sumN1N2(input)).toBe(output);
  });

  test('Sample Case 0', () => {
    let input = '100 1000';
    let output = '6500';
    return expect(a3.sumN1N2(input)).toBe(output);
  });

  test('Sample Case 1', () => {
    let input = '500 1200';
    let output = '1500';
    return expect(a3.sumN1N2(input)).toBe(output);
  });

  test('one zero one nonzero', () => {
    let input = '0 5';
    let output = '100500';
    return expect(a3.sumN1N2(input)).toBe(output);
  });

  test('both nonzero', () => {
    let input = '2 3';
    let output = '417333';
    return expect(a3.sumN1N2(input)).toBe(output);
  });

  test('both above 1000', () => {
    let input = '1001 1002';
    let output = '0';
    return expect(a3.sumN1N2(input)).toBe(output);
  });

  test('both 1000', () => {
    let input = '1000 1000';
    let output = '2000';
    return expect(a3.sumN1N2(input)).toBe(output);
  });

});
