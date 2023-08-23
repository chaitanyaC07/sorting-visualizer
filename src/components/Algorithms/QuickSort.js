// export function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

// //   const pivot = arr[0];
// //   const left = [];
// //   const right = [];

// //   for (let i = 1; i < arr.length; i++) {
// //     if (arr[i] < pivot) {
// //       left.push(arr[i]);
// //     } else {
// //       right.push(arr[i]);
// //     }
// //   }

// //   return [...quickSort(left), pivot, ...quickSort(right)];
// // }

// export function quickSort(arr, low, high, animations) {
//   if (low < high) {
//     const partitionIndex = partition(arr, low, high, animations);

//     quickSort(arr, low, partitionIndex - 1, animations);
//     quickSort(arr, partitionIndex + 1, high, animations);
//   }
// }

// function partition(arr, low, high, animations) {
//   const pivotValue = arr[high];
//   const cnt = 0;
//   for (let i = low + 1; i <= high; i++) {
//     if (arr[i] <= pivotValue) {
//       cnt++;
//     }
//   }

//   let pivotIndex = low + cnt;
//   swap(arr[pivotIndex], arr[low]);

//   let i = low;
//   let j = high;

//   while (i < pivotIndex && j > pivotIndex) {
//     while (arr[i] < pivot) {
//       i++;
//     }
//     while (arr[j] > pivot) {
//       j--;
//     }
//     if (i < pivotIndex && j > pivotIndex) {
//       swap(arr[i++], arr[j--]);
//     }
//   }
//   return pivotIndex;
// }

// export function quickSort(array, animations) {
//   if (array.length <= 1) {
//     return array;
//   }

//   const pivot = array[array.length - 1];
//   const leftArr = [];
//   const rightArr = [];
//   for (const el of array.slice(0, array.length - 1)) {
//     el <= pivot ? leftArr.push(el) : rightArr.push(el);
//     animations.push([el, pivot]); //To colour the compared values
//     // animations.push([ el, pivot]); //To take the colours off
//   }

//   let sortArray = [...quickSort(leftArr), pivot, ...quickSort(rightArr)];

//   return [animations, sortArray];
// }

export function quickSort(arr, low, high, animations) {
  if (low < high) {
    const partitionIndex = partition(arr, low, high, animations);

    quickSort(arr, low, partitionIndex - 1, animations);
    quickSort(arr, partitionIndex + 1, high, animations);
  }
}

function partition(arr, low, high, animations) {
  const pivotValue = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivotValue) {
      i++;

      // Generate animations for swapping elements
      animations.push([j, i]);

      // Swap arr[i] and arr[j]
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // Generate animations for swapping pivot and arr[i+1]
  animations.push([high, i + 1]);

  // Swap pivot (arr[high]) and arr[i+1]
  const temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}
