const path = require('path');
const fs = require('fs');
const YAML = require('yaml');

function forEachFileRec(dirPath, fn){
    files = fs.readdirSync(dirPath);
    files.forEach(function (file) {
        const filePath = path.join(dirPath, file);
        if(fs.lstatSync(filePath).isDirectory())
            forEachFileRec(filePath, fn);
        else
            fn(filePath);
    });
}

var Database = [];

function processMaterialFile(path){
    console.log("Adding " + path);
    try{
        const yaml = fs.readFileSync(path, 'utf8')
        const parsed = YAML.parse(yaml)
        Database.push(parsed);
    }
    catch(e){
        console.error(e);
    }
}


var Programs = {};
const staticPath = path.join(__dirname, 'static');

function replaceExtension(path){
    return path.slice(staticPath.length).slice(0,-3) + "md";
}

function extractFileName(filePath){
    return path.basename(filePath, ".yml");
}

function processProgramFile(path){
    if(!path.endsWith(".yml")){
        return;
    }
    console.warn("Adding " + path);
    try{
        const yaml = fs.readFileSync(path, 'utf8')
        const parsed = YAML.parse(yaml)
        const año = parsed['año'];
        const nombreArchivo = extractFileName(path);
        Programs[año] = Programs[año] || [];
        Programs[año].push({
            url: replaceExtension(path),
            codigo: `${año}/${nombreArchivo}`,
            nombre: parsed.nombre,
            instrumentos: parsed.instrumentos
        })
    }
    catch(e){
        console.error(e);
    }
}

forEachFileRec(path.join(__dirname, 'material'), processMaterialFile);
//console.log(Database);
fs.writeFile(path.join(__dirname, "dist", "material.json"), JSON.stringify(Database), 'utf-8', ()=>console.log("Database saved"));

forEachFileRec(path.join(staticPath, 'programas'), processProgramFile);
//console.log(Programs)
fs.writeFile(path.join(__dirname, "src", "generated/materias.json"), JSON.stringify(Programs), 'utf-8', ()=>console.log("Programs saved"));
