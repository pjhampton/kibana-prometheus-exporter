
import expect from 'expect.js';
import formatter from '../routes/formatter';

describe('prometheus formatter', () => {

  it('formatter should be a function', () => {
    expect(formatter).to.be.a('function');
  });

});
