import smallestCommons from '../src/challenges/smallest-common-multiple'
import { assert, expect } from 'chai'

const func = ( a, b ) => smallestCommons([ a, b ])

describe( 'smallestCommons', () => {
	it( 'should return a number', () => { expect( func( 1, 5 ) ).to.be.a( 'number' ) } )
    it( 'should return the smallest common multiple of the range specified by the input', () => {
        expect( func( 1, 5 ) ).to.equal( 60 )
        expect( func( 5, 1 ) ).to.equal( 60 )
        expect( func( 2, 10 ) ).to.equal( 2520 )
        expect( func( 23, 18 ) ).to.equal( 6056820 )
    } )
} )
