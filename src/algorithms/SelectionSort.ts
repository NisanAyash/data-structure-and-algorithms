// O(n^2)

function selectionSort(arr: number[]) {
    for (let selectedIndex = 0; selectedIndex < arr.length; selectedIndex++) {
        let smallestIndex = selectedIndex;

        for (let i = selectedIndex + 1; i < arr.length; i++) {
            if (arr[i] < arr[smallestIndex]) {
                smallestIndex = i;
            }
        }

        if (smallestIndex !== selectedIndex) {
            swap(arr, smallestIndex, selectedIndex);
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

console.log(selectionSort([2, 5, 1, 3, 7]));
