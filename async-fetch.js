/*
	Written by Livingstone
*/

/* TODO: for each of the utility functions below, handle data output based on Content-Type
	Check response Content-Type
	const contentType = response.headers.get('Content-Type');
	let responseData;
	if (contentType && contentType.includes('application/json')) {}
*/

// Get data
const getData = async (url, options, successCallback, failCallback) => {
	try {
		const response = await fetch(url, {
			headers : options.headers,
			body : options.body
		});

		// Check if response is ok
		if (response.ok) {
			successCallback({
				response,
				json : await response.clone().json(),
				text : await response.clone().text(),
				blob : await response.blob()
			});
		} else {
			failCallback(response);
		}
	} catch (error) {
		failCallback(error);
	}
};

// Post data
const postData = async (url, options, successCallback, failCallback) => {
	try {
		const response = await fetch(url, {
			method : `post`,
			headers : options.headers,
			body : options.body
		});

		// Check if response is ok
		if (response.ok) {
			successCallback({
				response,
				json : await response.clone().json(),
				text : await response.clone().text(),
				blob : await response.blob()
			});
		} else {
			failCallback(response);
		}
	} catch (error) {
		failCallback(error);
	}
};

// Put data
const putData = async (url, options, successCallback, failCallback) => {
	try {
		const response = await fetch(url, {
			method : `put`,
			headers : options.headers,
			body : options.body
		});

		// Check if response is ok
		if (response.ok) {
			successCallback({
				response,
				json : await response.clone().json(),
				text : await response.clone().text(),
				blob : await response.blob()
			});
		} else {
			failCallback(response);
		}
	} catch (error) {
		failCallback(error);
	}
};

// Delete data
const deleteData = async (url, options, successCallback, failCallback) => {
	try {
		const response = await fetch(url, {
			method : `delete`,
			headers : options.headers,
			body : options.body
		});

		// Check if response is ok
		if (response.ok) {
			successCallback({
				response,
				json : await response.clone().json(),
				text : await response.clone().text(),
				blob : await response.blob()
			});
		} else {
			failCallback(response);
		}
	} catch (error) {
		failCallback(error);
	}
};