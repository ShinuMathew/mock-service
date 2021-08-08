const CourseDBAccessor = require('../db-access/course-db-accessor'),
    Enum = require('../common/enum'),
    _ = require('lodash'),
    Error = require('../common/errors');

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
            console.error(`Error occurred in publishCourses Manager :\n ${err}`)
            if (err['detail'].includes("exists")) {
                throw this._constructFailureResponse(Error.CourseAlreadyRegistered, req)
            }
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

    async updateCourse(req) {
        try {
            let result = await this.courseDBAccessor.getSpecificCourse(req.params.id);
            if (result.length == 0)
                return this._constructFailureResponse(Error.CourseNotFound, req)
            let param = [
                req.params.id,
                req.payload.course_name,
                req.payload.course_type
            ]
            result = await this.courseDBAccessor.updateCourse(param)
            let response = {}
            if (Array.isArray(result) && result.length === 0) {
                response.status = Enum.ResponseMessage.SUCCESS
                response.message = "Course updated successfully"
            }
            return response;
        } catch (err) {
            throw err;
        }
    }

    async getSpecificCourse(req) {
        try {
            let result = await this.courseDBAccessor.getSpecificCourse(req.params.id)
            if (result.length === 0)
                throw this._constructFailureResponse(Error.CourseNotFound, req)
            result = _.map(result, (row) => {
                return {
                    course_id: row.courseid,
                    course_name: row.coursename,
                    course_type: row.coursetype
                }
            })
            return result[0]
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
                response = {
                    message: `No Courses found with courseId : ${req.params.id}`
                }
            return response;
        } catch (err) {
            console.error(`Error occurred in deleteSpecificCourse Manager :\n ${err}`)
            throw err;
        }
    }

    async _constructFailureResponse(error, req) {
        try {
            let errResp = _.cloneDeep(error)
            if (error === Error.CourseNotFound)
                errResp.message = errResp.message.replace('${id}', req.params.id)
            else if (error === Error.CourseAlreadyRegistered)
                errResp.message = errResp.message.replace('${id}', req.payload.course_id)

            return errResp;
        } catch (err) {
            return Error.UnexpectedError
        }
    }
}

module.exports = CourseManager;