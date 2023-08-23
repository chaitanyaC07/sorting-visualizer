export function mergeSort(arr, left, right, animations) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);

  mergeSort(arr, left, mid, animations);
  mergeSort(arr, mid + 1, right, animations);

  merge(arr, left, mid, right, animations);
}

function merge(arr, left, mid, right, animations) {
  const leftSize = mid - left + 1;
  const rightSize = right - mid;

  const leftArr = new Array(leftSize);
  const rightArr = new Array(rightSize);

  for (let i = 0; i < leftSize; i++) {
    leftArr[i] = arr[left + i];
  }
  for (let j = 0; j < rightSize; j++) {
    rightArr[j] = arr[mid + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftSize && j < rightSize) {
    if (leftArr[i] <= rightArr[j]) {
      animations.push([k, leftArr[i]]);
      arr[k++] = leftArr[i++];
    } else {
      animations.push([k, rightArr[j]]);
      arr[k++] = rightArr[j++];
    }
  }

  while (i < leftSize) {
    animations.push([k, leftArr[i]]);
    arr[k++] = leftArr[i++];
  }

  while (j < rightSize) {
    animations.push([k, rightArr[j]]);
    arr[k++] = rightArr[j++];
  }
}
