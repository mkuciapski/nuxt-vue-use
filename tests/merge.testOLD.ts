import { test, expect } from 'vitest'
import { deepMerge } from '../utils/merge'

test.skip('shallow merge', () => {
  const merged = deepMerge({ name: 'Michał', github: 'al' }, { github: 'mk' })

  expect(merged).toEqual({
    name: 'Michał',
    github: 'mk',
  })
})

test.skip('shallow merge for arrays', () => {
  const merged = deepMerge(['vue'], ['react'])

  expect(merged).toEqual(['vue', 'react'])
})

test.skip('deep merge with snaphots', () => {
  const merged = deepMerge(
    { name: 'Michał', accounts: { github: 'al' }, languages: ['ts', 'js', 'c#'] },
    { accounts: { twitter: 'mk' } }
  )

  expect(merged).toMatchInlineSnapshot(`
    {
      "accounts": {
        "github": "al",
        "twitter": "mk",
      },
      "languages": [
        "ts",
        "js",
        "c#",
      ],
      "name": "Michał",
    }
  `)

  // expect(merged).toEqual({
  //   name: 'Michał',
  //   accounts: {
  //     github: 'al',
  //     twitter: 'mk',
  //   },
  // })
})

test.skip('throws errors merge different types', () => {
  expect(() => deepMerge(['MK', 'a'], { name: 'mk' })).toThrowError('Cannot merge different types')
})
