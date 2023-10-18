const value = 1000000000;
const need = 100;

function binarySearch(items, target){
    let isFind = false;
    let count = 0;
    let [left, right ]= [0, items];
    for (let i = 0; left < items; i++) {
        count++;
        const mid = Math.floor((left + right) / 2);
        if (mid === target) {
            isFind = true;
            break;
        }else if (mid < target) {
            left = mid +1
        }else{
            right = mid - 1
        }
    }
    return {
        isFind,
        count
    }
}
console.log(binarySearch(value, need));
