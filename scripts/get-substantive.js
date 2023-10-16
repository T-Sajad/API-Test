import fs from 'node:fs';

const url = 'https://substantive.pythonanywhere.com/';
const options = {
  method: 'GET',
  headers: {
    Host: 'substantive.pythonanywhere.com',
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  const jsonData = JSON.parse(result);
  fs.writeFileSync(
    './data/get-substantive.json',
    JSON.stringify(jsonData, null, 2)
  );
} catch (error) {
  console.error(error);
}
