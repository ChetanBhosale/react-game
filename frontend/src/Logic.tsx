function generateRandomNumberBetween(num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    isNaN(num1) ||
    isNaN(num2)
  ) {
    throw new Error("Both arguments must be valid numbers.");
  }

  if (num2 < num1) {
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }

  const randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
  return randomNumber;
}
export const handleHandMovement = () => {
  //   setInterval(() => {}, generatedTime);
};
