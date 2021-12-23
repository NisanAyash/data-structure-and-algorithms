import swap from './utils/swap'

// O(n^2)

function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}


console.log(bubbleSort([5, 1, 2, 3, 4, 7, 140, 17, 12]));
