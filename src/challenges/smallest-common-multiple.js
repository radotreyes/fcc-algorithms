export default function smallestCommons( arr ) {
	/**
	 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range 
	 * between these parameters.
	 * @param   { object }  arr     A two-wide array containing a range for which to find the lowest common multiple.
	 * @return  { number }  common  The smallest common multiple of the parameter range specified in arr.
	 */

	const range = Array.from( Array( Math.abs( arr[ 0 ] - arr[ 1 ] ) + 1 ).keys() )
		.map( key => key + Math.min.apply( null, arr ) )
	return range.reduce( ( a, b ) => lcm( [ a, b ] ) )
}

const lcm = ( pair ) => {
	// create an array of all divisors of a number by
	// creating an array of all numbers between 1 and itself and
	// filtering out those which are not evenly divisible
	const divisors = pair.map( num => {
		return Array.from( Array( pair[ 0 ] ).keys() ).map( key => key + 1 ).filter( key => !( num % key ) )
	} )

	// find the greatest common divisor by 
	// increasing it every time divisors[0] and divisors[1] share a memeber
	let common = 1
	divisors[ 0 ].forEach( num => {
		common = divisors[ 1 ].includes( num ) ? num : common
	} )

	return pair[ 0 ] * pair[ 1 ] / common
}

smallestCommons( [ 5, 1 ] )