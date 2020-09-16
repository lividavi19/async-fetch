// get data
async function _get (url, successCallback, failCallback) {
	try {
		const response = await fetch(url);
		if (response.ok) {
			successCallback(response);
		} else {
			failCallback(response);
		}
	} catch (error) {
		failCallback(error);
	}
}

// post data
async function _post (url, body, successCallback, failCallback) {
	try {
		const response = await fetch(url, {method: `post`, body: body});
		if (response.ok) {
			successCallback(response);
		} else {
			failCallback(response);
		}
	} catch (error) {
		failCallback(error);
	}
}

// put data
async function _put (url, body, successCallback, failCallback) {
	try {
		const response = await fetch(url, {method: `put`, body: body});
		if (response.ok) {
			successCallback(response);
		} else {
			failCallback(response);
		}
	} catch (error) {
		failCallback(error);
	}
}

// delete data
async function _delete (url, body, successCallback, failCallback) {
	try {
		const response = await fetch(url, {method: `delete`, body: body});
		if (response.ok) {
			successCallback(response);
		} else {
			failCallback(response);
		}
	} catch (error) {
		failCallback(error);
	}
}
