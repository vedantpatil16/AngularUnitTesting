import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('multiply numbers', () => {
    const pipe = new MyMultPipe();
    const no1=11;
    const no2=21;
    expect(pipe.transform(no1,no2)).toEqual(231)
  });
});
