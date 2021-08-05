const CourseTypeRouteHandler = require('../handlers/course-type-handler'),
    CourseTypeSchema = require('../schemas/api/course-type-schemas');

class CourseTypeRoutes {

    constructor() {
        this.courseTypeHandler = new CourseTypeRouteHandler();        
    }

    registerRoutes(server) {
        const me = this;

        server.route({
            method: 'GET',
            path: '/course-type',
            options: {
                handler : (req, res) => me.courseTypeHandler.getCourseType(req, res),
                description : "Get all course types",
                response : {
                    schema : CourseTypeSchema.courseType,
                    failAction: 'log'
                }
            }
        })
    }
}

module.exports = CourseTypeRoutes;