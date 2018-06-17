function orbitalPeriod( arr ) {
	const MU = 398600.4418 // km
	const RADIUS_OF_EARTH = 6367.4447 // km^3 * s^-2

	const T = altitude => {
		return Math.round( 2 * Math.PI * Math.sqrt( Math.pow( altitude + RADIUS_OF_EARTH, 3 ) / MU ) )
	}

	return arr.map( body => {
		return {
			name: body.name,
			orbitalPeriod: T( body.avgAlt )
		}
	} )
}

console.log( orbitalPeriod( [ {
	name: 'sputnik',
	avgAlt: 35873.5553
} ] ) )