const day02 = require('./day02')
const day03 = require('./day03')
const day04 = require('./day04')
const Day05 = require('./day05')
const puzzleInputDay05= require('./inputs/day05.input')

console.log('running Advent of Code 2017!')
day02.generateAnswer()
day03.generateAnswers()
day04.generateAnswers.bind(day04)()

const day05generateAnswers = function () {
  const maze1 = new Day05(puzzleInputDay05)
  console.log('Day 05 Answer, Part 1: ', maze1.navigateMaze())

  const maze2 = new Day05(puzzleInputDay05, 2)
  console.log('Day 05 Answer, Part 2: ', maze2.navigateMaze())
}
day05generateAnswers()