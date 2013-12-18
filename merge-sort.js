//merge sort exercise in JavaScript
//Code Fellows class Fall 2013

function mergeSort(array){
    console.log("start");
    //split array
    //if array is length of 1 or 0, it's already sorted
    if(array.length < 2) return array;

    //find midpoint
    var pivot = Math.floor(array.length / 2);

    //left will return the array exclusive of pivot
    var left = array.slice(0, pivot);
    var right = array.slice(pivot);
console.log(left);
    //sort each chunk using merge sort - recursive
    var leftSorted = mergeSort(left);
    var rightSorted = mergeSort(right);

    //combine chunks back into a single array and return it
    var sortedResult = [];

    while(!leftSorted.isEmpty() && !rightSorted.isEmpty()){
        if(leftSorted.isEmpty) {
            sortedResult.concat(rightSorted);
            rightSorted = []; // or break;
        }

        if(rightSorted.isEmpty) {
            sortedResult.concat(leftSorted);
            leftSorted = [];
        }

        var elem = (leftSorted[0] < rightSorted[0] ? leftSorted.shift() : rightSorted.shift());
        sortedResult.push(elem);
    }
    return sortedResult;
}