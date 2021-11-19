var arr2d2 = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
    [5, 7, 7],
    [5, 7, 7]
];
    

// Challenge 1:
// Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

// Note - Don't assume the array will always be the same size, we must rely on its .length property

var counter = false;

function isPresent(num) {
    for (var i=0; i<arr2d2.length; i++) {
        for (var n=0; n<arr2d2[n].length; n++) {
            if (arr2d2[i][n]==num) {
                counter = true;
            }
        }
    }
    return counter;
}


x = isPresent(8);
console.log(x);



