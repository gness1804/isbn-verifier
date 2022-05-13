const compute = (arr: string[]): boolean => {
  if (arr.length !== 10) return false;
  let modifiedArr = arr;
  if (arr[9] === 'X') modifiedArr[9] = '10';
  let modifiedParsedArr: number[] = modifiedArr.map(parseInt);
  if (modifiedParsedArr.find(char => isNaN(char))) return false;
  return (modifiedParsedArr[0] * 10 + modifiedParsedArr[1] * 9 + modifiedParsedArr[2] * 8 + modifiedParsedArr[3] * 7 + modifiedParsedArr[4] * 6 + modifiedParsedArr[5] * 5 + modifiedParsedArr[6] * 4 + modifiedParsedArr[7] * 3 + modifiedParsedArr[8] * 2 + modifiedParsedArr[9] * 1) % 11 === 0
}

export function isValid(isbn: string): boolean {
  if (!isbn) return false;
  const isbnNoHyphens = isbn.replaceAll('-', '');
  return compute(isbnNoHyphens.split(''))
}
