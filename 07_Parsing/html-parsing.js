// Import cheerio untuk HTML parsing
import { load } from 'cheerio';


// Contoh HTML sederhana
const html = `
<html>
  <body>
    <h1>Welcome</h1>
    <ul>
      <li>First</li>
      <li>Second</li>
    </ul>
  </body>
</html>
`;

// Load HTML ke dalam cheerio (seperti jQuery di Node.js)
const $ = load(html);

// Mengambil teks dari elemen <h1>
console.log('Heading:', $('h1').text());

// Looping semua <li> dan menampilkan teksnya
$('li').each((i, el) => {
  console.log(`List ${i + 1}:`, $(el).text());
});