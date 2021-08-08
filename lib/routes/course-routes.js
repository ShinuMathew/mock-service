const CourseHandler = require('../handlers/course-handler'),
    CourseSchema = require('../schemas/api/course-schemas'),
    Joi = require('joi'),
    _ = require('lodash');

class CoursesRoutes {

    constructor() {
        this.courseHandler = new CourseHandler();        
    }

    registerRoutes(server) {
        const me = this;

        server.route({
            method: "POST",
            path: "/course",            
            options: {                
                handler: (req, res) => me.courseHandler.publishCourse(req, res),
                description: "To publish new course",
                validate: {
                    payload: CourseSchema.course
                },
                response: {
                    schema: CourseSchema.publishCourseResponse,
                    failAction: 'log'
                }
            }
        })

        server.route({
            method: "PUT",
            path: "/course/{id}",            
            options: {                
                handler: (req, res) => me.courseHandler.updateCourse(req, res),
                description: "To publish new course",
                validate: {
                    params: Joi.object({id : CourseSchema.courseId}),
                    payload: CourseSchema.updateCourseRequest
                },
                response: {
                    schema: CourseSchema.publishCourseResponse,
                    failAction: 'log'
                }
            }
        })

        server.route({
            method: "DELETE",
            path: "/course/{id}",
            options: {
                handler: (req, res) => me.courseHandler.deleteSpecificCourse(req, res),
                description: "Get specifc course",
                validate: {
                    params: Joi.object({id : CourseSchema.courseId})
                },
                response: {
                    schema: CourseSchema.deleteCourseResponse,
                    failAction: 'log'
                }
            }
        })

        server.route({
            method: "GET",
            path: "/course/{id}",
            options: {
                handler: (req, res) => me.courseHandler.getSpecificCourse(req, res),
                description: "Get specifc course",
                validate: {
                    params: Joi.object({id : CourseSchema.courseId})
                },
                response: {
                    schema: CourseSchema.getCourseResponse,
                    failAction: 'log'
                }
            }
        })

        server.route({
            method: "GET",
            path: "/course",
            options: {
                handler: (req, res) => me.courseHandler.getCourses(req, res),
                description: "Get all courses",                
                response: {
                    schema: CourseSchema.getAllCourseResponse,
                    failAction: 'log'
                }
            }
        })
    }
}

module.exports = CoursesRoutes;