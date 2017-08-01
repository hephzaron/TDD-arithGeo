'use strict'

module.exports = {
    /*classify an input array into geometric
     and arrthemtic sequence and check for invalid inputs*/
    aritGeo: (array) => {

        // initialize variables j and k
        let j = 0;
        let k = 1;

        // use a for loop to test for equality between difference in nth and (n-1)th term
        for (let i = 0; i < array.length - 1; i++) {

            // perform test for arithmetic progression and increment j for each equality
            if ((array[1] - array[0]) == (array[i + 1] - array[i])) {
                j++;

                // perform test  for geometrc progression and increment k for each equality
            } else if ((array[1] / array[0]) == (array[i + 1] / array[i])) {
                k++;
            }

        }

        // compare incremental value with array length
        if (j == array.length - 1) {
            return ("Arithmetic");
        } else if (k == array.length - 1) {
            return ("Geometric");
        } else if (array.length === 0) {
            return ("0");
        } else if (!array.some(isNaN) === false) {
            return ("numbers only")
        } else if (array.length < 2) {
            return ("not a sequence")
        } else if (Array.isArray(array) === false) {
            return ("not an array")
        } else if (array[0] == 0) {
            return ("array[0] != 0 in geometric sequence");
        } else {
            return ("-1");
        }
    }
}