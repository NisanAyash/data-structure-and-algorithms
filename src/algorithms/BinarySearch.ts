// O(log n)

function binarySearch(arr: number[], n: number) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((high + low) / 2);

        if (arr[mid] === n) {
            return arr[mid];
        } else if (n < arr[mid]) {
            high = arr[mid];
        } else {
            low = arr[mid];
        }
    }

    return -1;
}

const array = [1, 2, 3, 4, 5, 22, 55];

console.log(
    binarySearch(array, 3),
    binarySearch(array, 4),
    binarySearch(array, 7),
    binarySearch(array, 22)
);
