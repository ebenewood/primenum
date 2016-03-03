// function factor ( num ) {
//   numArray = [];
//   for ( i = num; i != 0; i-- ) {
//     if ((num % i) == 0) {
//       alert(num/i);
//       var a = num / i;
//       numArray.push(a);
//     };
//   };
//   return numArray;
// };
//

// function sift (num) {
//     numArray = [];
//   for (i = 2; i <= num; i++) {
//     do {
//       i + i;
//       a = i + i;
//       numArray.push(a);
//       alert('this is a' + a);
//       alert('this is i' + i);
//     } while ((i + i) < num);
//   };
//   return numArray;
// };
//
//
// function sift (num) {
//     numArray = [];
//   for (i = num - num + 2; i < num; i ++) {
//
//   }
// }

function makeNumArr (num) {
  numArray = [];
    for ( i = 2; i <= num; i ++) {
      numArray.push(i);
  };
  return numArray;
};

function remover (array) {
  for (i = 2; i <= array[array.length - 1]; i++) {
    a = i + i;
    do {
        alert('a = ' + a + 'i = ' + i);
        index = array.indexOf(a);
        array.splice(index, 1);
        a += i;
      } while ( a < array[array.length - 1]);
    };
  };

// function searchArray (array) {
//   for ( i = 2; i <= array[array.length]; i ++) {
//     if i = array[
//   }
//
// }
//
// function ar (array) {
//   for ( i = array[array.length]; i <= 0; i--) {
//     for ( j = 2; j <= array.[array.length]; j += j) {
//       if j
//     }
//   }
// }


// function count(num) {
//     i = 1;
//   do {
//     Math.pow(num, i);
//     i ++;
//     alert(i);
//     alert('num' + num);
//     console.log(Math.pow(num, i));
//   } while ( Math.pow(num, i) < 100);
// };


// function sift (array) {
//   for (i = 2; i <= (array[array.length - 1]); i ++) {
//     for (j = 0; j <= array.length; j++) {
//
//     }
//   }
// }
//
//
//
// // Start with an initial array
// var array = ["a", "b", "c"];
//
// // Find and remove item from an array
//
//  = array.indexOf(a);
// if(i != -1) {
// 	array.splice(i, 1);
// }
