const CourseTypeDBAccessor = require('../db-access/course-type-db-accessor'),
    _ = require('lodash'),
    logger = require('../../helpers/logger');


class CourseTypeManager {

    constructor() {
        this.courseTypeDBAccessor = new CourseTypeDBAccessor();
    }

    async getCourseTypes() {
        try {
            let result = await this.courseTypeDBAccessor.getAllCourseTypes()
            result = _.map(result, (row) => {
                return {
                    value: row.value,
                    description: row.description
                }
            })
            return result;
        } catch (err) {
            logger.error(`Error occurred in getAllCourses Manager :\n ${err}`)
            throw err;
        }

    }
}

module.exports = CourseTypeManager;