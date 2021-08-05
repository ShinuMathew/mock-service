const hapi = require('hapi'),
    CourseRoutes = require('./lib/routes/course-routes'),
    CourseTypeRoutes = require('./lib/routes/course-type-routes'),
    CourseHandler = require('./lib/handlers/course-handler');

const PORT = process.env.PORT || 3000

const init = async () => {

    this.courseRoutes = new CourseRoutes();
    this.courseTypeRoutes = new CourseTypeRoutes();


    const server = new hapi.Server({
        port: PORT,
        host: "localhost",
        routes: {
            cors: true
        },
    })

    await server.start();
    console.log(`Server started successfully at ${PORT}`)
    this.courseRoutes.registerRoutes(server)
    this.courseTypeRoutes.registerRoutes(server)
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
})

init()