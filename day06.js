const puzzleInput = require('./inputs/day06.input')

module.exports = function(bankList) {
  this.duplicatedConfig

  this.parseList = function parseList (str) {
    const splitByTab = str.split('\t')
    return splitByTab.map(el => (parseInt(el)))
  }

  this.findIndexOfLargestBank = function findIndexOfLargestBank (bankArray) {
    // Set initial values to the first bank
    let largestBankIndex = 0
    let largestBankValue = bankArray[0] 
    // Start from the second position in the array
    for (let i = 1; i < bankArray.length; i++) {
      let currentBankValue = bankArray[i]
      if (currentBankValue > largestBankValue) {
        largestBankIndex = i
        largestBankValue = currentBankValue 
      }
    }
    return largestBankIndex
  }

  this.findLargestBank = function findLargestBank (bankArray) {
    return bankArray[this.findIndexOfLargestBank(bankArray)] 
  }

  this.hasConfigBeenSeen = function hasConfigBeenSeen (configsArray, configToBeMatched) {
    if (configsArray.length === 0) { return false }
    // For each config in the configs array, compare each element 
    // against the config to be matched as strings
    const configToBeMatchedStr = JSON.stringify(configToBeMatched)
    for (let i = 0; i < configsArray.length; i++) {
      const currConfigStr = JSON.stringify(configsArray[i])
      if (currConfigStr === configToBeMatchedStr) {
        this.duplicatedConfig = currConfigStr
        return true
      }
    }
    return false
  }

  /**
   * @param {array} bankArray 
   * @param {num} index - position whose value should be redistributed
   * 
   * @returns {array} new bank array with redistributed blocks
   */
  this.redistributeBlocks = function redistributeBlocks (bankArray) {
    const largestBankIndex = this.findIndexOfLargestBank(bankArray)
    let largestBankValue = this.findLargestBank(bankArray)

    // First, "pick up" all blocks in the largest bank index by setting
    // that position to value 0
    bankArray.splice(largestBankIndex, 1, 0)

    for (let i = (largestBankIndex + 1); true; i++) {
      // If i = array length, we've "passed" the end of the array, so 
      // loop back to beginning
      if (i === bankArray.length) { i = 0 }
      const currValue = bankArray[i]
      bankArray.splice(i, 1, (currValue + 1))
      largestBankValue -= 1

      // When we have no more blocks to distribute, return completed array
      if (largestBankValue <= 0) { return bankArray }
    }
  }

  this.runRedistributionCycles = function runRedistributionCycles (bankArray, configToMatch = false) {
    // If a configToMatch is provided, run until we find a configuration
    // that matches this config
    let configurations = []
    if (configToMatch) { configurations.push(configToMatch) }
    let cycles = 0
    let currConfigSeen = false
    do {
      const currConfig = this.redistributeBlocks(bankArray) 
      cycles += 1
      currConfigSeen = this.hasConfigBeenSeen(configurations, currConfig) 

      if (currConfigSeen === false) {
        const currConfigCopy = currConfig.slice()
        configurations.push(currConfigCopy)
      }
    } while (currConfigSeen === false) 

    if (configToMatch) {
      return cycles - 1
    } else {
      return cycles
    }
  }

  this.generateAnswers = function generateAnswers () {
    const puzzleInputArray = this.parseList(puzzleInput)
    console.log('Day 06 Answer, Part 01: ', this.runRedistributionCycles(puzzleInputArray))

    const duplicatedConfigArray = this.duplicatedConfig.split(' ')
    console.log('Day 06 Answer, Part 02', this.runRedistributionCycles(puzzleInputArray, duplicatedConfigArray))
  }
}