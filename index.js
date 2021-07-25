const hapi = require('hapi');
const CourseRoutes = require('./lib/routes/course-routes'),
    CourseHandler = require('./lib/handlers/course-handler');

const PORT = process.env.PORT || 3000

const init = async () => {
    const server = new hapi.Server({
        port: PORT,
        host: "localhost",
        routes: {
            cors: true
        },
    })

    await server.start();
    console.log(`Server started successfully at ${PORT}`)

    this.courseRoutes = new CourseRoutes()
    this.courseRoutes.registerRoutes(server)

}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init()