// O(n^2)

function insertionSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];

        let j = i - 1;

        for (j; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = current;
    }

    return arr;
}

console.log(insertionSort([7, 6, 2, 9, 1, 13, 24]));
