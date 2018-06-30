// function hello_dudes() {
//     var arr = [1, 3, 4, 5, 7, 4, 56, 7, 21];
//     var max = arr[0];
//     var min = arr[0];
//     var sum = 0;
//     for (var i = 0 ; i < arr.length ; i ++) {
//         if (min > arr[i]) {
//             min = arr[i];
//         }
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//         sum += arr[i]
//     }
//     var avg = sum / arr.length
//     console.log("The minimum is " + min + ", The maximum is " + max + ", and the average is " + avg)
// }
//
// hello_dudes()

// function fizzbuzz(num) {
//     var fb = ""
//     for (var i = 1 ; i <= num ; i ++) {
//         console.log(i)
//         if (i % 3 == 0) {
//             fb += "Fizz, "
//         }
//         if (i % 5 == 0) {
//             fb += "Buzz, "
//         }
//         if (i % 3 == 0 && i % 5 == 0) {
//             fb += "FizzBuzz!, "
//         }
//         else {
//             fb += i + ", "
//         }
//     }
//     console.log(fb)
//     return fb
// }
//
// fizzbuzz(100)

// function bubblesort() {
//     var arr = [2, 5, 7, 4, 1, 8, 3, 6, 9, 0];
//     var len = arr.length;
//     var swapcount = 0
//     var sorted = false
//     console.log(arr)
//     while (sorted == false) {
//         for (var il = 0, ir = 1 ; ir < len ; il ++, ir ++) {
//             console.log('|' + arr[il] + ' ' + arr[ir] + '|')
//             if (arr[il] > arr[ir]) {
//                 var temp = arr[il];
//                 arr[il] = arr[ir];
//                 arr[ir] = temp;
//                 swapcount ++
//             }
//         }
//         console.log('     ')
//         if (swapcount == 0) {
//             sorted = true
//         }
//         if (swapcount > 0) {
//             swapcount = 0
//             len --
//         }
//     }
//     console.log(arr)
// }
//
// bubblesort()
