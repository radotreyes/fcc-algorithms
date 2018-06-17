import dropElements from '../src/challenges/drop-elements'
import { assert, expect } from 'chai'

const func = dropElements

describe( 'dropElements', () => {
	it( 'should return an array', () => {
		expect( dropElements( [ 1, 2, 3, 4 ], function( n ) {
			return n >= 3
        } ) ).to.be.an( 'array' ) 
    } )
	it( 'should return an with elements dropped until the callback is satisfied', () => {
		expect( dropElements( [ 1, 2, 3, 4 ], function( n ) {
			return n >= 3
		} ) ).to.deep.equal( [ 3, 4 ] )
	} )
} )
