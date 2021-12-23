// O(n)

function linearSearch(array: number[], n: number): boolean {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return true;
        }
    }

    return false;
}

const arr = [1, 2, 3, 4, 5];

console.log(linearSearch(arr, 3));
console.log(linearSearch(arr, 7));