import { sillyFunction } from '../src/silly';
describe('silly function', () => {
  test('returns true', () => {
    expect(sillyFunction()).toEqual(true);
  });
});
