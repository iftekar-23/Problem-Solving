function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let item of arr) {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }
    }   
    return uniqueArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));