import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('add two numbers', () => {
    const pipe = new MyAddPipe();
    expect(pipe.transform(11,21)).toEqual(32);
  });
});
