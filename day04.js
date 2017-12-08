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

  /**
   * Checks if a passphrase has anagrams by sorting each word in the
   * passphrase by letter, then checking the sorted passphrase for
   * duplicate words.
   * e.g. Passphrase 'ooii oioi' is transformed to 'iioo iioo' for
   * comparison. containsNoDuplicates will return true, therefore the
   * original passphrase had anagrams!
   */
  containsNoAnagrams: function (string) {
    const words = string.split(' ')
    const sortedPassphrase = words.map(word => {
      // First, split each word into an array of letters & sort the letters 
      const sortedWord = word.split('').sort()
      // Then, put each word back together, and put them all back into passphrase format
      return sortedWord.reduce((acc, letter) => {
        return acc + letter
      })
    }).reduce((acc, word) => {
      return `${acc} ${word}`
    })

    // Run containsNoDuplicates function on the passphrase-formatted str
    return this.containsNoDuplicates(sortedPassphrase)
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

  countValidPassphrases: function(passphraseArray, verificationFunction) {
    const validPassphrases = passphraseArray.filter(passphrase => {
      return verificationFunction(passphrase)
    })
    return validPassphrases.length
  },

  generateAnswers: function() {
    const parsedPassphraseList = this.parsePassphraseList(puzzleInput)
    const answerPart01 = this.countValidPassphrases(
      parsedPassphraseList,
      this.containsNoDuplicates
    )
    console.log('Day 04 Answer, Part 1: ', answerPart01)
    
    const answerPart02 = this.countValidPassphrases(
      parsedPassphraseList,
      this.containsNoAnagrams.bind(this)
    )
    console.log('Day 04 Answer, Part 2: ', answerPart02)
  },
}