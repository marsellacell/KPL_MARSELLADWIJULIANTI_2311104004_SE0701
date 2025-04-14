// Import built-in module untuk parsing query string
import querystring from 'querystring';
// Import built-in module untuk parsing URL
import { parse as parseUrl } from 'url';

// JSON Parsing
const jsonString = '{"name":"Marsella","age":20}';
// Mengubah JSON string menjadi objek JavaScript
const json = JSON.parse(jsonString);
console.log('JSON:', json);

// Query String Parsing
// Mengubah string query seperti dari URL menjadi objek key-value
const parsedQuery = querystring.parse('name=Marsella&age=20');
console.log('Query String:', parsedQuery);

// URL Parsing
// Menguraikan URL menjadi bagian-bagiannya, dan mengambil parameter query
const parsedUrl = parseUrl('http://localhost:3000?search=test', true);
console.log('URL Query:', parsedUrl.query);