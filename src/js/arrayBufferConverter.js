export default class ArrayBufferConverter {
  constructor() {
    this.buffer = this.load();
  }

  // eslint-disable-next-line class-methods-use-this
  load() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return ((input) => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }

  toString() {
    const result = [];
    const input = new Uint16Array(this.buffer);

    for (let i = 0; i < input.length; i += 1) {
      result.push(String.fromCharCode(input[i]));
    }

    return result.join('');
  }
}
