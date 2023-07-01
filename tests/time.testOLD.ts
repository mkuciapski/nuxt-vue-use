import { test, expect, vi, beforeEach } from 'vitest'

function getCurrentTime() {
  return new Date().toTimeString().slice(0, 5)
}

function warnLater(message) {
  setTimeout(() => {
    console.log(message)
  }, 2000)
}

beforeEach(() => {
  vi.useFakeTimers()
})

test('time', () => {
  vi.setSystemTime(new Date('2000-01-01 15:00'))
  expect(getCurrentTime()).toBe('15:00')
  vi.useRealTimers()
})

test('later', async () => {
  const logSpy = vi.spyOn(console, 'log')

  warnLater('2 seconds passed')

  expect(logSpy).to.not.toBeCalled()

  vi.advanceTimersToNextTimer()

  //   await new Promise((resolve) =>
  //     setTimeout(() => {
  //       resolve(null)
  //     }, 2000)
  //   )
  expect(logSpy).toBeCalledWith('2 seconds passed')
})
