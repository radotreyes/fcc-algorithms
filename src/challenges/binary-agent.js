export default function binaryAgent( str ) {
	/**
	 * Return an English translated sentence of the passed binary string.
	 * The binary string will be space separated.
	 * 
	 * @param   { string }  str     A space-separated string of binary numbers.
	 * @returns { string }          An English-language string.
	 */

    return str.split( ' ' ).map( binary => String.fromCharCode( parseInt( binary, 2 ) ) ).join( '' )
}

binaryAgent( '01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111' )