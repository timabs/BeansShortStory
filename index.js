const {readFile} = require('fs').promises;

const { read } = require('fs');
const myModule = require('./my-module');
const express = require('express');
const app = express();



app.get("/", async (request, response) => {
        try {
            const html = await readFile('./home.html', 'utf8');
            response.send(html);
        } catch (err) {
            console.error(err);
            respond.stats(500).send ("Sorry, something BUSTED...");
        }
            
    });


app.listen(process.env.PORT || 3000, () => {
    console.log('App available on http://localhost:3000');
});