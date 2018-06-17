export default function dropElements( arr, func ) {
    /**
     * Given a callback function, iterate through an array and remove all elements that do not satisfy the callback
     * until we reach one that does. Then, return the remaining array.
     * 
     * NOTE: 
     * When testing this function, use deep equality to compare the outputs.
     * Testing with strict equality will result in failed tests, since arrays/objects in general are always passed by reference.
     *
     * @param   { array }   arr     An array of numbers.
     * @param   { func }    func    A callback returning a boolean.
     * @returns { array }   arr     An array containing all remaining elements.
     */

    while( arr.length && !func( arr[0] ) ) {
        arr.shift()
    }

    return arr
}

// console.log( dropElements( [ 1, 2, 3, 4 ], function( n ) {
//     return n >= 3
// } ) )

// console.log( [ 3, 4 ] )
