const puzzleInput = require('./inputs/day07.input')

module.exports = {
  parseListIntoProgramStrings: function parseListIntoProgramStrings (programList) {
    const splitByNewlines = programList.split('\n')
    return splitByNewlines.map(programStr => (programStr.trim()))
  },

  getProgramNames: function getProgramsByName (programStringsArray) {
    return programStringsArray.map(programString => {
      return programString.split(' ')[0]
    })
  },

  findProgramId: function findProgramId (name, programArray) {
    return programArray.findIndex(program => (name === program))
  },

  /**
   * @param {str} programString - formatted as 'name (weight) -> carried, programs' 
   * @param {id} program's index in the original array of programs
   */
  parseProgramString: function parseProgramString (programString, id, programNamesArray) {
    const splitBySpaces = programString.split(' ')

    const name = splitBySpaces[0]
    const weightStr = splitBySpaces[1]
    const weight = parseInt(weightStr.substr(1, weightStr.length - 2), 10)

    const carriedProgramsByName = []
    // Carried programs are all elements of the splitBySpaces array that are
    // after the 3rd element ('->') aka index 2
    for (let i = 3; i < splitBySpaces.length; i++) {
      let carriedProgramName = splitBySpaces[i]
      if (carriedProgramName.includes(',')) {
        carriedProgramName = carriedProgramName.slice(0, carriedProgramName.length - 1)
      }
      carriedProgramsByName.push(carriedProgramName)
    }

    const carriedPrograms = carriedProgramsByName.map(name => {
      return this.findProgramId(name, programNamesArray)
    })

    const programObj = {
      id,
      name,
      weight,
      carriedPrograms,
    }
    return programObj
  },

  getPrograms: function getPrograms (programList) {
    const programStrings = this.parseListIntoProgramStrings(programList)
    const programNames = this.getProgramNames(programStrings)
    return programStrings.map((programString, i) => {
      return this.parseProgramString(programString, i, programNames)
    })
  },

  generateAnswers: function generateAnswers () {
    const programs = this.getPrograms(puzzleInput)

    console.log(programs)
  }
}