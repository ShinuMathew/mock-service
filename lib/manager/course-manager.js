const CourseDBAccessor = require('../db-access/course-db-accessor'),
    Enum = require('../common/enum'),
    _ = require('lodash');

class CourseManager {

    constructor() {
        this.courseDBAccessor = new CourseDBAccessor();
    }

    async publishCourses(req) {
        try {
            let param = [
                req.payload.course_id,
                req.payload.course_name,
                req.payload.course_type
            ]
            let result = await this.courseDBAccessor.publishCourse(param)
            let response = {}
            if (Array.isArray(result) && result.length === 0) {
                response.status = Enum.ResponseMessage.SUCCESS
                response.message = "Course added successfully"
            }
            return response;
        } catch (err) {
            console.error(`Error occurred in getAllCourses Manager :\n ${err}`)
            throw err;
        }
    }

    async getAllCourses(req) {
        try {
            let result = await this.courseDBAccessor.getAllCourses()
            result = _.map(result, (row) => {
                return {
                    course_id: row.courseid,
                    course_name: row.coursename,
                    course_type: row.coursetype
                }
            })
            return result;
        } catch (err) {
            console.error(`Error occurred in getAllCourses Manager :\n ${err}`)
            throw err;
        }

    }

    async getSpecificCourse(req) {
        try {
            let result = await this.courseDBAccessor.getSpecificCourse(req.params.id)
            result = _.map(result, (row) => {
                return {
                    course_id: row.courseid,
                    course_name: row.coursename,
                    course_type: row.coursetype
                }
            })
            result = result.length > 0 ? result[0] : { message: "No Courses found"}
            return result;
        } catch (err) {
            console.error(`Error occurred in getSpecificCourse Manager :\n ${err}`)
            throw err;
        }
    }

    async deleteSpecificCourse(req) {
        try {
            let result = await this.courseDBAccessor.deleteSpecificCourse(req.params.id)
            let response = {}
            if (Array.isArray(result) && result.length === 0) {
                response.status = Enum.ResponseMessage.SUCCESS
                response.message = `Course ${req.params.id} deleted successfully`
            } else 
                response = { message: `No Courses found with courseId : ${req.params.id}`}            
            return response;
        } catch (err) {
            console.error(`Error occurred in deleteSpecificCourse Manager :\n ${err}`)
            throw err;
        }
    }
}

module.exports = CourseManager;