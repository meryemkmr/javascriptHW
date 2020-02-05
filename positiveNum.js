
function positiveNumbers(array) {
    newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
        newArray.push(array[i]);
        }
    }
    console.log(newArray);
    }
    positiveNumbers([1, -3, 5, -3, 0]);
    