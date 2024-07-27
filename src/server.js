const Hapi = require("@hapi/hapi");
const notes = require("./api/notes");
const NotesService = require("./services/InMemory/NotesServices");

const init = async () => {
  const notesService = new NotesService(); // buat instance dari NotesService

  const server = Hapi.server({
    port: 3000,
    host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      service: notesService
    }
  })

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();



// const init = async () => {
//   const server = Hapi.server({
//     port: 3000,
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
//     routes: {
//       cors: {
//         origin: ['*'],
//       },
//     },
//   });

//   server.route(routes);

//   await server.start();
//   console.log(`Server berjalan pada ${server.info.uri}`);
// };

