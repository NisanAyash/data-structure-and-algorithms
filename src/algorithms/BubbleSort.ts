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

function swap(arr: number[], index1: number, index2: number) {
    const tmp = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = tmp;

    return arr;
}

console.log(bubbleSort([5, 1, 2, 3, 4, 7, 140, 17, 12]));
