const joi = require('joi'),
    Enum = require('../../common/enum'),
    _ = require('lodash');
    
const courseId = joi.string().required();

const course = joi.object({
    course_id: joi.string().required(),
    course_name: joi.string().required(),
    course_type: joi.string().required(),
    consent: joi.boolean().required(),
    comment: joi.string().optional()
}).optional();

const courses = joi.array().items(course);

const publishCourseResponse = joi.object({
    status: joi.string().required(),
    message: joi.string().optional()
});

const updateCourseRequest = joi.object({    
    course_name: joi.string().required(),
    course_type: joi.string().required(),
    consent: joi.boolean().required(),
    comment: joi.string().optional()
}).optional();

const deleteCourseResponse = joi.object({
    status: joi.string().required(),
    message: joi.string().optional()
}).optional();

const getCourseResponse = joi.object({
    course_id: joi.string().required(),
    course_name: joi.string().required(),
    course_type: joi.string().required()
}).optional();

const getAllCourseResponse = joi.array().items(getCourseResponse)

module.exports = {
    courseId,
    updateCourseRequest,
    publishCourseResponse,
    courses,
    course,
    getCourseResponse,
    getAllCourseResponse,
    deleteCourseResponse
}