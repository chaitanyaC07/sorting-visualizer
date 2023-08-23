export function insertionSort(arr, animations) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      animations.push([j - 1, j]);
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }
  // return arr;
}
