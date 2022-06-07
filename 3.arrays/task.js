function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx])
  ); // boolean
}

function advancedFilter(arr) {
  let resultArr = arr
    .filter((number) => number > 0)
    .filter((number) => number % 3 === 0)
    .map((number) => number * 10);

  // Ваш код

  return resultArr; // array
}
