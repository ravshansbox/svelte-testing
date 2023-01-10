import { expect, test } from 'vitest';
import { toggle } from '../../utils/toggle';

test('toggle', () => {
  const array = [{}, {}, {}];
  const result = toggle(array, array[1]);
  expect(result).not.toBe(array);
  expect(result.length).toBe(2);
  expect(result[0]).toBe(array[0]);
  expect(result[1]).toBe(array[2]);
});
