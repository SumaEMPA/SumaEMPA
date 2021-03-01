const path = require('path');
const fs = require('fs');
const YAML = require('yaml');


var database = [];

function processDirectory(dirPath){
    files = fs.readdirSync(dirPath);

    files.forEach(function (file) {

        const filePath = path.join(dirPath, file);

        console.log("File", filePath);
        if(fs.lstatSync(filePath).isDirectory()){
            processDirectory(filePath);
        }
        else{
            const yaml = fs.readFileSync(filePath, 'utf8')
            const parsed = YAML.parse(yaml)
            database.push(parsed);
        }
    });

    console.log(database);
}


processDirectory(path.join(__dirname, 'material'));
fs.writeFile(path.join(__dirname, "dist", "material.json"), JSON.stringify(database), 'utf-8', ()=>console.log("ok"));
