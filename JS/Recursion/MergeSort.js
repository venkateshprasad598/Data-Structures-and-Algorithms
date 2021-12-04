let mergeArr = [15, 1, 24, 8, 3, 16, 10, 20];
let length = mergeArr.length - 1;
let low = 0;
function mergeIt(mergeArr, low, length) {
  let b = [];

  function mergeSort(arr, l, h) {
    if (l < h) {
      let mid = parseInt((l + h) / 2);
      mergeSort(arr, l, mid);
      mergeSort(arr, mid + 1, h);
      merge(arr, l, mid, h);
    }
  }

  mergeSort(mergeArr, low, length);

  function merge(arr, l, mid, h) {
    let i = l;
    let j = mid + 1;
    let k = l;

    while (i <= mid && j <= h) {
      if (arr[i] <= arr[j]) {
        b[k] = arr[i];
        i++;
      } else {
        b[k] = arr[j];
        j++;
      }
      k++;
    }

    if (i > mid) {
      while (j <= h) {
        b[k] = arr[j];
        j++;
        k++;
      }
    } else {
      while (i <= mid) {
        b[k] = arr[i];
        i++;
        k++;
      }
    }

    for (let m = l; m <= h; m++) {
      arr[m] = b[m];
    }
  }
  console.log(b);
}

mergeIt(mergeArr, low, length);
