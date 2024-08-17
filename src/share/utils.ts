export const add = (inputString: string): number => {
  if (inputString === "") {
    return 0;
  }

  let delimiter = /,|\n/;
  if (inputString.startsWith("//")) {
    const parts = inputString.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    inputString = parts[1];
  }

  const numArray = inputString.split(delimiter).map((item) => parseInt(item));
  const negatives = numArray.filter((n) => n < 0);

  if (negatives.length) {
    throw new Error(`Negative inputString not allowed: ${negatives.join(",")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
};
