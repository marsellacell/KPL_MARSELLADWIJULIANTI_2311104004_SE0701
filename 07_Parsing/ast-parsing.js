// Import Acorn untuk membuat AST dari kode JavaScript
import * as acorn from 'acorn';

// Contoh kode JavaScript yang akan di-parse
const code = `
function greet(name) {
  return "Hello, " + name;
}
`;

// Parsing kode menjadi Abstract Syntax Tree (AST)
const ast = acorn.parse(code, { ecmaVersion: 2020 });

// Menampilkan struktur AST dalam format JSON
console.log(JSON.stringify(ast, null, 2));