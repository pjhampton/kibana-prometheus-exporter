import formatter, { convertStateToScalar } from './formatter';

describe('prometheusStyleFormatter', () => {
  test('should throw an error when no metrics are passed in', () => {
    const metrics = new Map();
    expect(() => formatter(metrics)).toThrow();
  });
});

describe('convertStateToScalar', () => {
  test('should return 1 for "available" state', () => {
    expect(convertStateToScalar('available')).toBe(1);
  });

  test('should return 0.5 for "degraded" state', () => {
    expect(convertStateToScalar('degraded')).toBe(0.5);
  });

  test('should return 0 for "unavailable" state', () => {
    expect(convertStateToScalar('unavailable')).toBe(0);
  });

  test('should return -1 for unknown state', () => {
    expect(convertStateToScalar('unknown')).toBe(-1);
  });

  test('should return -1 for unknown state', () => {
    expect(convertStateToScalar('madness')).toBe(-1);
  });

  test('should return -1 for "Available" state as it should be case sensitive', () => {
    expect(convertStateToScalar('Available')).toBe(-1);
  });
});