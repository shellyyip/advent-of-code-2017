const assert = require('assert')
const day05 = require('../day05')

describe.only('Day 05', function() {
  it('converts a list of instructions into an array', function() {
    const testInput = `0
      3
      0
      1
      -3
      `
    const expectedResult = [0, 3, 0, 1, -3]
    const result = day05.parseList(testInput)
    assert.deepStrictEqual(result, expectedResult)
  })

  describe('Movement', function() {
    let testInput

    beforeEach(function() {
      testInput = [0, 3, 0, 1, -3]
    })

    it('increases the current position offset by 1', function() {
      const expectedResult = [1, 3, 0, 1, -3]
      const result = day05.updateJumpInstructions(testInput, 0)

      assert.deepStrictEqual(result, expectedResult)
    })

    it('calculates steps needed to reach the exit', function() {
      const testInput = 3
      const expectedResult = 3
      const result = day05.generateAnswers()

      assert.equal(result, expectedResult)
    })
  })
})