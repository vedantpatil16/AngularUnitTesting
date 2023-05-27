import { CheckPassword } from "./password.component";

describe('CheckPassword', () => {

  it('should return true if password is correct', () => {
    const ret = CheckPassword("MarvellousInfo@1121")
    expect(ret).toBe(true);
  });
});

