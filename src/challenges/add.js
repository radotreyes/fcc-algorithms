function add() {
	/**
	 * Return the sum, or if only one argument is provided, return a closure that takes one argument and
	 * returns the sum of that argument and the enclosed variable. 
	 * If the arguments aren't numbers, return undefined.
	 */
	for ( let i = 0; i < arguments.length; i++ ) {
		if ( typeof arguments[ i ] !== 'number' ) return undefined
	}
	return arguments[ 1 ] ? arguments[ 0 ] + arguments[ 1 ] :
		num => typeof num === 'number' ? arguments[ 0 ] + num : undefined
}

// console.log( add( 2, 3 ) )
// console.log( add( 2 )( 3 ) )
// console.log( add( 2 )( '3' ) )
