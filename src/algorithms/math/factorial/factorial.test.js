import Factorial from './factorial';

describe('factorial', () => {
  it('should calculate factorial with a not recursive method', () => {
    expect(Factorial.notRecursive(0)).toBe(1);
    expect(Factorial.notRecursive(1)).toBe(1);
    expect(Factorial.notRecursive(5)).toBe(120);
    expect(Factorial.notRecursive(8)).toBe(40320);
    expect(Factorial.notRecursive(10)).toBe(3628800);
  });

  it('should calculate factorial with a recursive method', () => {
    expect(Factorial.recursive(0)).toBe(1);
    expect(Factorial.recursive(1)).toBe(1);
    expect(Factorial.recursive(5)).toBe(120);
    expect(Factorial.recursive(8)).toBe(40320);
    expect(Factorial.recursive(10)).toBe(3628800);
  });
});
