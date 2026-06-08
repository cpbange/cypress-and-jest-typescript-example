import { add } from './math';

describe('add function', () => {
  test('adds positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('adds mixed numbers', () => {
    expect(add(-2, 3)).toBe(1);
  });

  test('adds zero', () => {
    expect(add(0, 5)).toBe(5);
  });
});
