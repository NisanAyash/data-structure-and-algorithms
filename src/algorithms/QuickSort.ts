import swap from './utils/swap'


function partition(arr: number[], left: number, right: number) {
    let pivot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {

        while (arr[i] < pivot) {
            i++;
        }

        while (arr[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr: number[], left: number, right: number) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}


const arr = [9, 15, 4, 80, 2, 9, 1, 3, 77, 63, 123];


const sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray); 