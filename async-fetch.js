// TODO: add request-headers support for each of the following method

// get data
const getData = async (url, successCallback, failCallback) => {
	try {
		const response = await fetch(url);
		
		if (response.ok) {
			const response_text = await response.clone().text();
			const response_json = await response.clone().json();
			const response_blob = await response.clone().blob();
			
			successCallback ({
				response: response,
				text: response_text,
				json: response_json,
				blob: response_blob
			});
		} else {
			failCallback (response);
		}
	} catch (error) {
		failCallback (error);
	}
};

// post data
const postData = async (url, body, successCallback, failCallback) => {
	try {
		const response = await fetch(url, {method: `post`, body: body});

		if (response.ok) {
			const response_text = await response.clone().text();
			const response_json = await response.clone().json();
			const response_blob = await response.clone().blob();
			
			successCallback ({
				response: response,
				text: response_text,
				json: response_json,
				blob: response_blob
			});
		} else {
			failCallback (response);
		}
	} catch (error) {
		failCallback (error);
	}
};

// put data
const putData = async (url, body, successCallback, failCallback) => {
	try {
		const response = await fetch(url, {method: `put`, body: body});

		if (response.ok) {
			const response_text = await response.clone().text();
			const response_json = await response.clone().json();
			const response_blob = await response.clone().blob();
			
			successCallback ({
				response: response,
				text: response_text,
				json: response_json,
				blob: response_blob
			});
		} else {
			failCallback (response);
		}
	} catch (error) {
		failCallback (error);
	}
};

// delete data
const deleteData = async (url, body, successCallback, failCallback) => {
	try {
		const response = await fetch(url, {method: `delete`, body: body});

		if (response.ok) {
			const response_text = await response.clone().text();
			const response_json = await response.clone().json();
			const response_blob = await response.clone().blob();
			
			successCallback ({
				response: response,
				text: response_text,
				json: response_json,
				blob: response_blob
			});
		} else {
			failCallback (response);
		}
	} catch (error) {
		failCallback (error);
	}
};
