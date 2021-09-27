const { throws } = require('assert');
const { dir } = require('console');
const { get } = require('http');
const { arch } = require('os');
const path = require('path');
const express = require('express')
var wrench = require("wrench");
const app = express()
const fs = require('fs');
const Directorio = require('./clases/directorio');
const { send } = require('process');

// Variables
const rutaRaiz = '//Serverdoc/e/z_Informatica/Z_Documentacio/';
let archivos = []
let directorios = []
var files = wrench.readdirSyncRecursive(rutaRaiz);
    wrench.readdirRecursive(rutaRaiz, function (error, files) {});
files.forEach(file => {
    if(fs.lstatSync((rutaRaiz + file)).isFile()) {
        archivos.push(file)
    } else {
        directorios.push(file)
    }
})

archivos.forEach(file => {
    for(let i = 0; i < directorios.length; i++) {
        if(file.includes(directorios[i])) {
            console.log(file + " -> " + directorios[i])
        }
    }
})

// Config
app.set('view engine', 'ejs')

//HTTPs
app.get('/', (req, res) => {
    res.send(files)
})

app.listen(3000)