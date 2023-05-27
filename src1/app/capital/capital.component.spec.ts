

import { CountCapital } from './capital.component';

describe('CountCapital', () => {

  it('should return capital letters', () => {
    const ret = CountCapital("VeDanT")
    expect(ret).toBe(3);
  });
});
