import _ from 'lodash'

// Constants
import { MARKS } from '../constants/cards'

export function createCards(marks, [min, max]) {
  const selectedMarks = _.filter(MARKS, ({ name }) => _.some(marks, (mark) => mark === name))
  const rangeAry = [Math.max(min, 1), Math.min(max, 13) + 1]

  return _.chain(selectedMarks)
  .map(({ mark, name }) => {
    const numbers = _.range(...rangeAry)
    return _.map(numbers, (num) => ({
      mark,
      name,
      num
    }))
  })
  .flatten()
  .value()
}
