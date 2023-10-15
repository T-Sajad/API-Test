import fs from 'node:fs';

const url = 'https://substantive.pythonanywhere.com/';
const options = {
	method: 'GET',
	headers: {
		'Host': 'substantive.pythonanywhere.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();

	// Parse the JSON string into a JavaScript object
	const jsonData = JSON.parse(result);

	// Write the parsed data to a file
	fs.writeFileSync('./data/get-substantive.json', JSON.stringify(jsonData, null, 2));
} catch (error) {
	console.error(error);
}