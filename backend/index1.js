// kreirati vlastite GET,POST,PUT,DELETE

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//-------

app.get('/knjige', (request, response) => {
    return response.send('Popis knjiga');
    });

    app.post('/addknjiga', (request, response) => {
        //naslov,autor,god_izdanja,izdavac
        const data = request.body;
        const naslov = data.naslov;
        const autor = data.autor;
        const god_izdanja = data.god_izdanja;
        const izdavac = data.izdavac;        

        return response.send('Dodavanje knjige:' +naslov+ +autor+ +god_izdanja+ +izdavac);        
    });
       
 /*  
    app.put('/updatekontakt', (request, response) => {
        const data = request.body;
        console.log(data.kontakt);
        return response.send('PUT metoda -> Change '+data.kontakt);
    });
    app.delete('/deletekontakt', (request, response) => {
        const data = request.body;
        console.log('Delete '+data.kontakt);
        return response.send('Delete '+data.kontakt);
    });
*/

//-------
app.listen(3001, () => {
    console.log("Server running on port 3000");
    });