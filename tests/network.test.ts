import { test, expect, vi, beforeAll, afterAll } from 'vitest'
import { getPostBody } from '../utils/network'

test('should fetch', async () => {
  const result = await getPostBody(1)

  expect(result).toMatchInlineSnapshot(`
    "quia et suscipit
    suscipit recusandae consequuntur expedita et cum
    reprehenderit molestiae ut ut quas totam
    nostrum rerum est autem sunt rem eveniet architecto"
  `)
})
