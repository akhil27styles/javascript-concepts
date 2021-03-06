
( function () {

	/**
	 * Async Await Example
	 */
	async function getTodoData() {
		const todoData = await fetch( 'https://jsonplaceholder.typicode.com/todos/' );
		return todoData;
	}

	getTodoData()
		.then( res => res.json() )
		.then( ( result ) => {
		console.warn( result );
	} );

	/**
	 * Promise.all()
	 *
	 * Send all request at one time
	 * The Promise.all() method returns a single Promise that resolves
	 * when all of the promises passed as an iterable have resolved
	 */
	const promise1 = Promise.resolve(3);
	const promise2 = 42;
	const promise3 = new Promise( ( resolve, reject ) => {
		setTimeout( () => {
			resolve( 'Third: response received' );
		},2000 )
	} );

	async function getABC() {
		/**
		 * Promise.all() allows us to send all
		 * requests at the same time.The Promise.all() method returns a single Promise that resolves when all of the promises passed as an iterable have resolved
		 * @type {[number, number, any]}
		 */
		let results = await Promise.all([promise1, promise2, promise3])

		return results;
	}

	getABC().then( result => {
		console.warn( result );
	} )

	/**
	 * Try and catch
	 */
	async function getPosts() {
		try {
			const postsData = await await fetch( 'https://jsonplaceholder.typicode.com/posts/' );
			return postsData;
		}
		catch ( error ) {
			console.warn( 'error', error );
		}
	}

	getPosts()
		.then( res => res.json() )
		.then( ( result ) => {
			console.warn( result );
		} );

} )();
