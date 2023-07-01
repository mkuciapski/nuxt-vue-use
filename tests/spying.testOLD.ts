import greeting from '../utils/greeting'
import { test, expect, vi } from 'vitest'

test('greeting', () => {
  //expect(greeting('World')).toBe(undefined)
  const spy = vi.spyOn(console, 'log')
  greeting('World')
  expect(spy).toBeCalledWith('Hello, World')
  expect(spy).toBeCalledTimes(1)

  spy.mockReset()

  greeting('Michal')
  expect(spy).toBeCalledTimes(1)
  expect(spy).toBeCalledWith('Hello, Michal')

  expect(spy).toMatchInlineSnapshot(`
    [MockFunction log] {
      "calls": [
        [
          "Hello, Michal",
        ],
      ],
      "results": [
        {
          "type": "return",
          "value": undefined,
        },
      ],
    }
  `)
})
