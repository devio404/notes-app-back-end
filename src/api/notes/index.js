const NotesHandler = require('./handler')
const routes = require('./routes')

// berikut ini yang dinamakan objek literal, yaitu sebuah objek yang memiliki key dan value 
module.exports = {
    name: 'notes',
    version: '1.0.0',
    register: async (server, { service }) => {
        const notesHandler = new NotesHandler(service);
        server.route(routes(notesHandler));
    }
};