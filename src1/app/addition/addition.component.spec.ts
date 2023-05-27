import { ArrayAddition } from "./addition.component";

describe('ArrayAddition', () => {

  it('should return sum of numbers in an array', () => {
    const brr : number[] = [11,21,51,101];
    const ret = ArrayAddition(brr)
    expect(ret).toBe(184);
  });
});
