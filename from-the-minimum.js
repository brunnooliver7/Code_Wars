function minValue(values) {
  return +[...values]
    .sort()
    .map((value, i, arr) => {
      if (!arr[i - 1] || arr[i - 1] !== arr[i]) 
      return value
    })
    .filter(value => !!value)
    .reduce((prev, curr) => prev.toString() + curr.toString());
}