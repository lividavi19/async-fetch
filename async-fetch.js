// get data
const _get = async (url, successCallback, failCallback) => {
	try {
		const response = await fetch(url);
		
		if (response.ok) {
			const textData = await response.clone().text();
			const jsonData = await response.clone().json();
			const blobData = await response.clone().blob();
			
			successCallback ({
				response: response,
				text: textData,
				json: jsonData,
				blob: blobData
			});
		} else {
			failCallback (response);
		}
	} catch (error) {
		failCallback (error);
	}
};

// post data
const _post = async (url, body, successCallback, failCallback) => {
	try {
		const response = await fetch(url, {method: `post`, body: body});

		if (response.ok) {
			const textData = await response.clone().text();
			const jsonData = await response.clone().json();
			const blobData = await response.clone().blob();
			
			successCallback ({
				response: response,
				text: textData,
				json: jsonData,
				blob: blobData
			});
		} else {
			failCallback (response);
		}
	} catch (error) {
		failCallback (error);
	}
};

// put data
const _put = async (url, body, successCallback, failCallback) => {
	try {
		const response = await fetch(url, {method: `put`, body: body});

		if (response.ok) {
			const textData = await response.clone().text();
			const jsonData = await response.clone().json();
			const blobData = await response.clone().blob();
			
			successCallback ({
				response: response,
				text: textData,
				json: jsonData,
				blob: blobData
			});
		} else {
			failCallback (response);
		}
	} catch (error) {
		failCallback (error);
	}
};

// delete data
const _delete = async (url, body, successCallback, failCallback) => {
	try {
		const response = await fetch(url, {method: `delete`, body: body});

		if (response.ok) {
			const textData = await response.clone().text();
			const jsonData = await response.clone().json();
			const blobData = await response.clone().blob();
			
			successCallback ({
				response: response,
				text: textData,
				json: jsonData,
				blob: blobData
			});
		} else {
			failCallback (response);
		}
	} catch (error) {
		failCallback (error);
	}
};
