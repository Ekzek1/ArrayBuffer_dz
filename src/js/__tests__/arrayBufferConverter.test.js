import ArrayBufferConverter from '../arrayBufferConverter';

test('test class ArrayBufferConverter, function toString ', () => {
  const result = new ArrayBufferConverter();
  expect(result.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
