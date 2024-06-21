export function generateRandomNumber(start: number, end: number) {
  if (start > end) {
    [start, end] = [end, start]; // Swap if start is greater than end
  }
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
