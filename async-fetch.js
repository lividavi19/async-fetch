// get data
async function _get (url, successCallback, failCallback) {
	try {
		const response = await fetch(url);
		const textData = await response.text();
		const jsonData = await response.json();
		const blobData = await response.blob();
		
		if (response.ok) {
			successCallback({
				success: true,
				response: response,
				text: textData,
				json: jsonData,
				blob: blobData
			});
		} else {
			failCallback({
				success: false,
				response: response
			});
		}
	} catch (error) {
		failCallback({
			success: false,
			response: error
		});
	}
}

// post data
async function _post (url, body, successCallback, failCallback) {
	try {
		const response = await fetch(url, {method: `post`, body: body});
		const textData = await response.text();
		const jsonData = await response.json();
		const blobData = await response.blob();

		if (response.ok) {
			successCallback({
				success: true,
				response: response,
				text: textData,
				json: jsonData,
				blob: blobData
			});
		} else {
			failCallback({
				success: false,
				response: response
			});
		}
	} catch (error) {
		failCallback({
			success: false,
			response: error
		});
	}
}

// put data
async function _put (url, body, successCallback, failCallback) {
	try {
		const response = await fetch(url, {method: `put`, body: body});
		const textData = await response.text();
		const jsonData = await response.json();
		const blobData = await response.blob();

		if (response.ok) {
			successCallback({
				success: true,
				response: response,
				text: textData,
				json: jsonData,
				blob: blobData
			});
		} else {
			failCallback({
				success: false,
				response: response
			});
		}
	} catch (error) {
		failCallback({
			success: false,
			response: error
		});
	}
}

// delete data
async function _delete (url, body, successCallback, failCallback) {
	try {
		const response = await fetch(url, {method: `delete`, body: body});
		const textData = await response.text();
		const jsonData = await response.json();
		const blobData = await response.blob();

		if (response.ok) {
			successCallback({
				success: true,
				response: response,
				text: textData,
				json: jsonData,
				blob: blobData
			});
		} else {
			failCallback({
				success: false,
				response: response
			});
		}
	} catch (error) {
		failCallback({
			success: false,
			response: error
		});
	}
}
