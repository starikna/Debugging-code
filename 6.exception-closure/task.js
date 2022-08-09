function parseCount(string) {
  const numberOfPurchases = Number.parseInt(string);
  if (isNaN(numberOfPurchases)) {
    throw new Error("Невалидное значение");
  }
  return numberOfPurchases;
}

function validateCount() {
  try {
    parseCount(string);
    return numberOfPurchases;
  } catch (err) {
    throw new Error("Невалидное значение");
    return err;
  }
}
