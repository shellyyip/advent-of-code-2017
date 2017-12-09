const assert = require('assert')
const Day05 = require('../day05')

describe('Day 05', function() {

  let day05  
  beforeEach((function() {
    day05 = new Day05()
  }))

  it('converts a list of instructions into an array', function() {
    const testInput = `0
      3
      0
      1
      -3
      `
    const expectedResult = [0, 3, 0, 1, -3]
    const result =  day05.parseList(testInput)
    assert.deepStrictEqual(result, expectedResult)
  })

  describe('Movement', function() {
    it('increases the current position offset by 1', function() {
      const testInput = [0, 3, 0, 1, -3]
      const expectedResult = [1, 3, 0, 1, -3]
      const result = day05.updateJumpInstructions(testInput, 0)

      assert.deepStrictEqual(result, expectedResult)
    })

    it('can calculate the next position when given the current position', function(){
      const testInput = [0, 3, 0, 1, -3]
      const expectedResult = 4
      const result = day05.calculateNewPosition(testInput, 1)

      assert.equal(result, expectedResult)
    }),

    it('can tell when it is outside the maze', function() {
      const testInput = [5, 3, 0, 1, -3]
      const expectedResult = true
      const newPosition = day05.calculateNewPosition(testInput, 0)
      const result = day05.hasEscapedMaze(testInput, newPosition)

      assert.equal(result, expectedResult)
    }),

    it('knows when it is still inside the maze', function() {
      const testInput = [4, 3, 0, 1, -3]
      const expectedResult = false 
      const newPosition = day05.calculateNewPosition(testInput, 0)
      const result = day05.hasEscapedMaze(testInput, newPosition)

      assert.equal(result, expectedResult) 
    })

    describe('Part 01', function() {
      it('calculates steps needed to reach the exit', function() {
        const testInput = `0
          3
          0
          1
          -3
          `
        day05 = new Day05(testInput)
        const expectedResult = 5
        const result = day05.navigateMaze()

        assert.equal(result, expectedResult)
      })
    })

    describe('Part 02', function() {
      it('calculates steps needed to reach the exit', function() {
        const testInput = `0
          3
          0
          1
          -3
          `
        day05 = new Day05(testInput, 2)
        const expectedResult = 10
        const result = day05.navigateMaze()

        assert.equal(result, expectedResult)
      }) 
    })
  })
})