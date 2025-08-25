const mergeUnsortedArray = (arr1, arr2) => {
    const mergedArr = arr1.concat(arr2);
    //[3, 2, 1, 5, 6]
    for (let i = 0; i < mergedArr.length - 1; i++){
        let counter = i;
        while (counter < mergedArr.length - 1){
            if (mergedArr[counter] > mergedArr[counter+1]){
                let temp = mergedArr[counter];
                mergedArr[counter] = mergedArr[counter+1];
                mergedArr[counter+1] = temp;
            }
            counter++;
        }
    }
    return mergedArr;
}

const mergeSortedArray = (arr1, arr2) => {
    const mergedArray = [];
    let firstItem = arr1[0];
    let secondItem = arr2[0];
    let i = 1;
    let j = 1;

    while (firstItem || secondItem){
        if (firstItem < secondItem){
            mergedArray.push(firstItem);
            firstItem = arr1[i];
            i++;
        } else {
            mergedArray.push(secondItem);
            secondItem = arr2[j];
            j++;
        }
    }
    return mergedArray;
}

console.log(mergeSortedArray([0,1,2,4], [4,6,30,31]));