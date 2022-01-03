import swap from './utils/swap'


function partition(items: number[], left: number, right: number) {
    let pivot = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items: number[], left: number, right: number) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}


const items = [9, 15, 4, 80, 2, 9, 1, 3, 77, 63, 123];


const sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); 