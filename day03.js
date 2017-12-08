module.exports = {
  /**
   * Solution from https://www.reddit.com/r/adventofcode/comments/7h7ufl/2017_day_3_solutions/dqoxrb7/
   * Explanation: if we imagine the spiral as a sequence of nested squares* with an increasing length of their sides, curR is the length of the side we're currently on (3, 5, 7, ...). Steps to reach the center can be calculated as steps to the nearest axis (vertical/horizontal lines crossing the center) plus steps down the axis to the center. It's easy to see that the latter part is just numR, or the ordinal number of the square we're currently moving on (1, 2, 3, ...).

   But the steps to reach the axis are trickier to find: if we reset the counter back to 1 when we enter the next square (cycle) and reset it again to 0 when we reach each corner (innerOffset), the difference between it and numR gives us exactly the number of steps to the nearest axis.
   */
  findManhattanSteps: function(n) {
    const root = Math.ceil(Math.sqrt(n))
    const curR = root % 2 !== 0 ? root : root + 1
    const numR = (curR - 1) / 2
    const cycle = n - ((curR - 2) ** 2)
    // Set inner offset to 0 if expression on left returns NaN (if n = 1)
    const innerOffset = cycle % (curR - 1) || 0

    return numR + Math.abs(innerOffset - numR);
  },

  generateAnswerPartOne: function() {
    const puzzleInput = 368078
    console.log('Day 03 Answer, Part 1: ', this.findManhattanSteps(puzzleInput))
  },

  generateAnswers: function() {
    this.generateAnswerPartOne()
    // Part Two can be looked up here! https://oeis.org/A141481
  }

}