const puzzleInput = require('./inputs/day05.input')

module.exports = {
  stepsTaken: 0,

  /**
   * Takes a list of instructions separated by newlines and 
   * returns an array of numerical instructions.
   * 
   * @param {str} list
   * @returns {arr} - array of numbers
   */
  parseList: function(list) {
    const instructionsArray = list.split('\n')
    // Delete any empty string elements created by excessive newlines
    instructionsArray.splice(instructionsArray.indexOf(''), 1)
    return instructionsArray.map((instruction) => {
      return parseInt(instruction.trim(), 10)
    })
  },

  incrementSteps: function (num) {
    this.stepsTaken += num
  },

  /**
   * Takes a list of jump instructions, the current position in 
   * the array, and jump instruction as offset, and returns the
   * new jump instruction list with the current position's offset
   * increased by 1. 
   * 
   * @param {array} list - list of jump instructions as an array
   * @param {number} currPos - current position as index in the array
   */
  updateJumpInstructions: function(instructionsArray, currPos) {
    return instructionsArray
  },

  generateAnswers: function () {
    this.incrementSteps(3)
    return this.stepsTaken
  },
}