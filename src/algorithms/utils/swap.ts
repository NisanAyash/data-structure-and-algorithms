export default function swap(arr: number[], index1: number, index2: number) {
    const tmp = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = tmp;

    return arr;
}