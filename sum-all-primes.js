function sumPrimes( num ) {
	/**  
	 * Sum all the prime numbers up to and including the provided number. The provided number may not be a prime.
	 * @param   { number }  num     The upper limit for which to calculate the sum of all primes.
	 */

	if ( num <= 1 ) return 0

	// create array of size [num], with values = keys + 1, not including 1
	let primes = Array.from( Array( num ).keys() ).map( x => x + 1 ).filter( x => x !== 1 )
	primes.forEach( ( cur, index ) => { // Sieve of Eratosthenes
		let n = 2 // remove all occurrences of cur * n
		while ( primes[ index + n - 2 ] ) { // keep within the size of the array
			if ( primes.indexOf( cur * n ) >= 0 ) { // remove cur * n if it exists
				primes.splice( primes.indexOf( cur * n ), 1 )
			}
			n += 1 // increment the multiple
		}
	} )

	return primes.reduce( ( x, y ) => x + y )
}

sumPrimes( 10 )
sumPrimes( 100 )
sumPrimes( 1000 )