const puzzleInput = require('./inputs/day04.input')

module.exports = {
  containsNoDuplicates: string => {
    const words = string.split(' ')
    // For each word, filter the array by that word
    // If the length of the resulting filtered array is greater
    // than 1, that means there were duplicates and return false
    for (let i = 0; i < words.length; i++) {
      const occurrences = words.filter(word => (word === words[i]))
      if (occurrences.length > 1) return false
    }
    return true
  },

  containsNoAnagrams: string => {
    const words = string.split(' ')
  },

  /**
   * Takes a list of passphrases separated by newlines and returns
   * an array of arrays of passphrases.
   */
  parsePassphraseList: list => {
    const splitByNewlines = list.split('\n')
    const result = splitByNewlines.map(item => {
      return item.trim()
    })
    
    // Delete any empty string elements created by excessive newlines
    result.splice(result.indexOf(''), 1)
    return result
  },

  countValidPassphrases: function(passphraseArray) {
    const validPassphrases = passphraseArray.filter(passphrase => {
      return this.containsNoDuplicates(passphrase)
    })
    return validPassphrases.length
  },

  generateAnswers: function() {
    const answerPart01 = this.countValidPassphrases(this.parsePassphraseList(puzzleInput))
    console.log('Day 04 Answer, Part 1: ', answerPart01)
  },
}