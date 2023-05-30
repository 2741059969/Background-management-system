let arr = [2, 3, 1, 9, 0, 4]
function sortfunc(arr, left, right) {
  let base = arr[left]
  let index = left + 1
  while (index < right) {
    while (arr[right] >= base) {
      console.log(right, 'rihgt')
      right--
    }

    while (arr[index] < base) {
      console.log(index, 'index')
      index++
    }
    if (arr[right] > arr[index]) {
      let temp = arr[right]
      arr[right] = arr[index]
      arr[index] = temp
    }

    index++
    right--
  }
  let temp = arr[left]
  arr[left] = arr[index]
  arr[index] = temp
  console.log(arr)
}
sortfunc(arr, 0, arr.length - 1)
