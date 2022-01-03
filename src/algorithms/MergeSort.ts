const mergeSort = (arr: number[]) => {

    if (arr.length < 2) {
        return arr;
    }

    const median = Math.floor(arr.length / 2);
    const leftArray: number[] = mergeSort(arr.slice(0, median));
    const rightArray: number[] = mergeSort(arr.slice(median));
    return merge(leftArray, rightArray);
}

function merge(leftArray: number[], rightArray: number[]) {
    const sortedArray = [];

    let leftArrayIndex = 0;
    let rightArrayIndex = 0;

    while (
        leftArrayIndex < leftArray.length &&
        rightArrayIndex < rightArray.length
    ) {
        if (leftArray[leftArrayIndex] < rightArray[rightArrayIndex]) {
            sortedArray.push(leftArray[leftArrayIndex]);
            ++leftArrayIndex;
        } else {
            sortedArray.push(rightArray[rightArrayIndex]);
            ++rightArrayIndex;
        }
    }

    while (leftArrayIndex < leftArray.length) {
        sortedArray.push(leftArray[leftArrayIndex]);
        ++leftArrayIndex;
    }

    while (rightArrayIndex < rightArray.length) {
        sortedArray.push(rightArray[rightArrayIndex]);
        ++rightArrayIndex;
    }

    return sortedArray;
}



const arr = [9, 15, 4, 80, 2, 9, 1, 3, 77, 63, 123];
const sortedArray = mergeSort(arr);
console.log(sortedArray)
