export default function truthCheck( collection, pre ) {
	/**
     * Check if a predicate is truthy on all elements of a collection.
     * @param   { array }  collection  A collection of objects
     * @param   { string }  predicate   The property for which to check truthiness all members of the collection.
     */

    return collection.every( member => member[pre] ? true : false )
}

// console.log( truthCheck([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': ' '}], 'sex') )