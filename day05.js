
/**
 * Instruction = element in the instruction array
 * Offset = value of the instruction 
 * 
 * @param {*} puzzleInput 
 */
module.exports = function Day05 (instructionsList, part = 1) {
  this.stepsTaken = 0
  this.currPos = 0
  this.instructionsList = instructionsList
  this.instructionsArray
  this.part = part

  /**
   * Takes a list of instructions separated by newlines and 
   * returns an array of numerical instructions.
   * 
   * @param {str} list
   * @returns {arr} - array of numbers
   */
  this.parseList = function parseList (list) {
    const instructionsArray = list.split('\n')
    // Delete any empty string elements created by excessive newlines
    instructionsArray.splice(instructionsArray.indexOf(''), 1)
    return instructionsArray.map((instruction) => {
      return parseInt(instruction.trim(), 10)
    })
  }

  this.incrementSteps = function (num) {
    this.stepsTaken += num
  }

  /**
   * Takes a list of jump instructions, the current position in 
   * the array, and jump instruction as offset, and returns the
   * new jump instruction list with the current position's offset
   * increased by 1. 
   * 
   * @param {array} list - list of jump instructions as an array
   * @param {number} pos - position to be updated
   * 
   * @returns {array} new instruction array
   */
  this.updateJumpInstructions = function(instructionsArray, pos) {
    const offset = instructionsArray[pos] 
    let newInstruction 
    if (this.part === 2 && offset >= 3) {
      newInstruction = offset - 1 
    } else {
      newInstruction = offset + 1
    }

    instructionsArray.splice(pos, 1, newInstruction)
    return instructionsArray
  }

  /**
   * Takes a list of jump instructions, the current position in that array,
   * and an instruction, and returns the new position in the array.
   * 
   * @param {array} list - list of jump instructions as an array
   * @param {number} currPos - current position as index in the array
   * 
   * @returns {number} new position in the array
   */
  this.calculateNewPosition = function(instructionsArray, currPos) {
    // Add current position index and value in that index (the jump offset)
    return currPos + instructionsArray[currPos]
  }

  this.hasEscapedMaze = function(instructionsArray, currPos) {
    return currPos >= instructionsArray.length
  }

  this.makeAJump = function(part) {
    // Make the jump
    let prevPos = this.currPos
    this.currPos = this.calculateNewPosition(this.instructionsArray, this.currPos)
    // Update the position we just jumped from
    this.instructionsArray = this.updateJumpInstructions(this.instructionsArray, prevPos)
    // Jump complete! Increment steps by 1 
    this.incrementSteps(1)
  }

  /**
   * Put it all together
   */
  this.navigateMaze = function() {
    this.instructionsArray = this.parseList(this.instructionsList)

    do {
      this.makeAJump()
    } while (!this.hasEscapedMaze(this.instructionsArray, this.currPos))

    return this.stepsTaken
  }
}