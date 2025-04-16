const fs = require('fs');

function readJSON() {
    const json = fs.readFileSync('path_to_your_json_file', 'utf8');
    const data = JSON.parse(json);
    console.log(data);
}

readJSON();
