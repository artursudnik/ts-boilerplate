import { fooBar } from './foo-bar';

describe('fooBar', function () {
  it('should return foo-bar string', async function () {
    expect(fooBar()).toEqual('foo-bar');
  });
});
