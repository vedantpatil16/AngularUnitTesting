import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('check if number is odd', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(11 , "Odd")).toBe(true);
  });

  it('check if number is even', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(10 , "Even")).toBe(true);
  });

  it('check if number is prime', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(11 , "Prime")).toBe(true);
  });
  
  it('check if number is perfect', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(28 , "Perfect")).toBe(true);
  });

});



