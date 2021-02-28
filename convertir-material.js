const path = require('path');
const fs = require('fs');
const YAML = require('yaml');

const directoryPath = path.join(__dirname, 'material');

var database = [];

fs.readdir(directoryPath, function (err, files) {

    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach(function (file) {
        console.log("File", directoryPath, file);
        const yaml = fs.readFileSync(path.join(directoryPath, file), 'utf8')
        const parsed = YAML.parse(yaml)
        database.push(parsed);
    });

    console.log(database);
    fs.writeFile(path.join(__dirname, "dist", "material.json"), JSON.stringify(database), 'utf-8', ()=>console.log("ok"));
});

