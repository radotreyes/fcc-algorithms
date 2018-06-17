export default function steamrollArray( arr ) {
	// I'm a steamroller, baby
	const flatten = arr => arr.reduce( ( flat, next ) => {
        return flat.concat( Array.isArray( next ) ? flatten( next ) : next ) 
    }, [] )

    return flatten( arr )
}

steamrollArray( [ 1, [ 2 ], [ 3, [ [ 4 ] ] ] ] )