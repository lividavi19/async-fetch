// get data
async function _get (url, success, fail) {
	try {
		const response = await fetch(url);
		if (response.ok) {
			success(response);
		} else {
			fail(response);
		}
	} catch (error) {
		fail(error);
	}
}

// post data
async function _post (url, body, success, fail) {
	try {
		const response = await fetch(url, {method: `post`, body: body});
		if (response.ok) {
			success(response);
		} else {
			fail(response);
		}
	} catch (error) {
		fail(error);
	}
}

// put data
async function _put (url, body, success, fail) {
	try {
		const response = await fetch(url, {method: `put`, body: body});
		if (response.ok) {
			success(response);
		} else {
			fail(response);
		}
	} catch (error) {
		fail(error);
	}
}

// delete data
async function _delete (url, body, success, fail) {
	try {
		const response = await fetch(url, {method: `delete`, body: body});
		if (response.ok) {
			success(response);
		} else {
			fail(response);
		}
	} catch (error) {
		fail(error);
	}
}