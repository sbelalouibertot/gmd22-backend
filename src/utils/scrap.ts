const regex = {
  ONLY_NUMBERS: /^[0-9]+$/,
  NUMBERS_AT_START: /^[0-9]/,
  ONLY_FRACTION: /^[0-9]\/[0-9]+$/,
  CONTENT_IN_PARENTHESES: /\(.[^(]*\)/g,
  CONCATENATED_LINK_WORK: /D\'/,
  PLURAL: /[ceéfgot]s+$/,
}

const formatUnit = (unitStr: string): string =>
  unitStr.replace('c.à.c', 'cuillère à café').replace('c.à.s', 'cuillère à soupe')

const formatOutput = (str: string[]): string =>
  capitalizeFirstLetter(
    str
      .map(word => (regex.PLURAL.test(word) ? word.slice(0, -1) : word))
      .join(' ')
      .toLowerCase(),
  )

export const spreadIngredient = (ingredientStr: string): [string, number, string?] | undefined => {
  const words = ingredientStr
    .replace(regex.CONTENT_IN_PARENTHESES, '')
    .trim()
    .split(' ')
    .map(word => capitalizeFirstLetter(word.toLowerCase()))

  if (!words.length) {
    return
  }

  if (words.length === 1 || !regex.NUMBERS_AT_START.test(ingredientStr)) {
    const [...ingredient] = words
    return [formatOutput(ingredient), 1]
  }

  if (words.length >= 3 && regex.CONCATENATED_LINK_WORK.test(words[2])) {
    const [linkWord, rest] = words[2].replace("D'", 'De ').split(' ')
    words.splice(2, 1, ...[linkWord, rest])
  }

  if (words.length === 2 || words.length === 3) {
    const [quantity, ...ingredient] = words

    if (regex.ONLY_NUMBERS.test(quantity) || regex.ONLY_FRACTION.test(quantity)) {
      return [formatOutput(ingredient), parseFloat(quantity)]
    }
  }

  if (words.length >= 4) {
    const [quantity, unit, linkWord, ...ingredient] = words
    if (
      (regex.ONLY_NUMBERS.test(quantity) || regex.ONLY_FRACTION.test(quantity)) &&
      linkWord === 'De'
    ) {
      return [formatOutput(ingredient), eval(quantity), formatUnit(unit.toLowerCase())]
    }
  }
  return
}

export const capitalizeFirstLetter = (input: string): string =>
  input.charAt(0).toUpperCase() + input.slice(1)
