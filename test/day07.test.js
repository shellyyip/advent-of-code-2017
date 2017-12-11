const assert = require('assert')
const day07 = require('../day07')

let testPuzzleInput, 
testProgramStringsArray, 
testProgramNamesArray,
testProgramObjectsArray
const resetTestInputs = function() {
  testPuzzleInput = `pbga (66)
    xhth (57)
    ebii (61)
    havc (66)
    ktlj (57)
    fwft (72) -> ktlj, cntj, xhth
    qoyq (66)
    padx (45) -> pbga, havc, qoyq
    tknk (41) -> ugml, padx, fwft
    jptl (61)
    ugml (68) -> gyxo, ebii, jptl
    gyxo (61)
    cntj (57)`
  testProgramStringsArray = [
    'pbga (66)',
    'xhth (57)',
    'ebii (61)',
    'havc (66)',
    'ktlj (57)',
    'fwft (72) -> ktlj, cntj, xhth',
    'qoyq (66)',
    'padx (45) -> pbga, havc, qoyq',
    'tknk (41) -> ugml, padx, fwft',
    'jptl (61)',
    'ugml (68) -> gyxo, ebii, jptl',
    'gyxo (61)',
    'cntj (57)'
  ]
  testProgramNamesArray = [
    'pbga', 'xhth', 'ebii', 'havc', 'ktlj', 'fwft', 'qoyq', 'padx', 'tknk', 'jptl', 'ugml', 'gyxo', 'cntj',
  ]
  testProgramObjectsArray = [
    {
      id: 0,
      name: 'pbga',
      weight: 66,
      carriedPrograms: []
    },
    {
      id: 5,
      name: 'fwft',
      weight: 72,
      carriedPrograms: [4, 12, 1]
    }
  ]
}

beforeEach('set up test inputs', function() {
  resetTestInputs()
})

describe.only('Day 07', function() {

  describe('List parsing', function() {
    it('can parse a list into an array of programs', function() {
      const result = day07.parseListIntoProgramStrings(testPuzzleInput) 
      assert.deepEqual(result, testProgramStringsArray)
    })

    it('can parse an array of program strings into an array of names only', function() {
      const result = day07.getProgramNames(testProgramStringsArray) 
      assert.deepEqual(result, testProgramNamesArray)
    })
  })

  describe('Program parsing', function() {

    resetTestInputs()

    it(`can parse a program string with no carried programs into a program object`, function() {
      const result = day07.parseProgramString(testProgramStringsArray[0], 0, testProgramNamesArray)
      assert.deepEqual(result, testProgramObjectsArray[0])
    })

    it(`can parse a program string with carried programs into a program object`, function() {
      const result = day07.parseProgramString(testProgramStringsArray[5], 5, testProgramNamesArray)
      assert.deepEqual(result, testProgramObjectsArray[1])
    })
  })
})