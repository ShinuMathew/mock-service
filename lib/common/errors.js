'use strict'

module.exports = {
    CourseNotFound : {
        "statusCode" : 404,
        "error" : "CourseNotFound",
        "message" : "Course Not Found for the id : ${id}"
    },
    CourseAlreadyRegistered : {
        statusCode : 400,
        error : "CourseAlreadyRegistered",
        message : "Course with the id : ${id} already exists"
    },
    UnexpectedError : {
        statusCode : 500,
        error : "UnexpectedError",
        message : "An unexpected error occurred. Please try again later."
    },
    ReportNotFound : {
        "statusCode" : 404,
        "error" : "ReportNotFound",
        "message" : "Report Not Found for the id : ${id}"
    },
}