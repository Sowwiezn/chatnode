const http = require('http')
const fs = require('fs')
const path = require('path')

const pathToIndex = path.join(__dirname, 'hg', 'index.html')
const indexHtmlFile = fs.readFileSync(pathToIndex)
const pathJs = path.join(__dirname, 'hg', 'js.js')
const fileJs = fs.readFileSync(pathJs)
const pathNode = path.join(__dirname, 'hg', 'style.css')
const fileNode = fs.readFileSync(pathNode)

const server = http.createServer((req, res) =>{
    switch(req.url){
        case '/': return res.end(indexHtmlFile)
        case '/js.js': return res.end(fileJs)
        case '/stule.css': return res.end(fileNode)
    }
    res.statusCode = 404
    return res.end('Errore 404')
})


server.listen(3000)