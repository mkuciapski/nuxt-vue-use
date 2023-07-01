import { test, expect } from 'vitest'

test('1  + 1', () => {
  expect(sum(1, 1)).toEqual(2)
})

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}
