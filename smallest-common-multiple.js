function smallestCommons( arr ) {
	/**
	 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range 
	 * between these parameters.
	 * @param   { object }  arr     A two-wide array containing a range for which to find the lowest common multiple.
	 * @return  { number }  common  The smallest common multiple of the parameter range specified in arr.
	 */

	// get the common multiple between the original pair
	let lcmPair = arr.map( num => {
		return {
			num,
			factor: 2,
		}
	})

	console.log( lcmPair )
	// let smallerNumFactor = 2
	// let biggerNumFactor = 2
	// while ( true ) {
	// 	lcm[ 0 ] = lcm[ 0 ] * smallerNumFactor
	// 	if ( lcm[ 0 ] === lcm[ 1 ] ) {
	// 		break
	// 	}
	// 	else if ( lcm[ 0 ] > lcm[ 1 ] ) {
	// 		lcm[ 1 ] = lcm[ 1 ] * biggerNumFactor
	// 		biggerNumFactor =
	// 	}

	// }

	// create a new array containing the complete number range

	// let set = Array.from( Array( largest ).keys() ).map( x => x + 1 )

	// // check if everything is divisible
	// set = set.filter()

	// console.log( set )
	return arr
}


smallestCommons( [ 2, 3 ] )