function parseCount(string) {
  if (isNaN(string) === true) {
    throw new Error("Невалидное значение");
  } else {
    const numberOfPurchases = Number.parseInt(string);

    return numberOfPurchases;
  }
}

function validateCount(string) {
  try {
    if (parseCount(string) !== NaN) {
      return numberOfPurchases;
    }
  } catch (err) {
    throw new Error("Невалидное значение");
    return err;
  }
}
