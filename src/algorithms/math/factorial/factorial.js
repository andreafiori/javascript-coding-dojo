export default class Factorial {
  static notRecursive(number) {
    let result = 1;
    for (let i = 2; i <= number; i += 1) {
      result *= i;
    }
    return result;
  }

  static recursive(n) {
    const f = [];
    if (n === 0 || n === 1) return 1;
    if (f[n] > 0) return f[n];
    f[n] = this.recursive(n - 1) * n;
    return f[n];
  }
}
