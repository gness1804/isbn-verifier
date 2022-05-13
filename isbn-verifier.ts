const compute = (arr: string[]): boolean => {
  if (arr.length !== 10) return false;
  let modifiedParsedArr: number[] = arr
    .map((char, index) => {
      if (index === 9 && char === 'X') return '10';
      return char;
    })
    .map(char => parseInt(char, 10))

  if (modifiedParsedArr.find(char => isNaN(char))) return false;
  return (modifiedParsedArr.reduce((acc, curr, index) => acc + curr * (10 - index), 0)) % 11 === 0
}

export function isValid(isbn: string): boolean {
  if (!isbn) return false;
  return compute(isbn.replaceAll('-', '').split(''))
}
