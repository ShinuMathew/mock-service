const CourseTypeManager = require("../manager/course-type-manager"),
    logger = require('../../helpers/logger');

class CourseTypeHandler {
    constructor() {
        this.courseTypeManager = new CourseTypeManager();
    }

    async getCourseType(req, res) {        
        let result = await this.courseTypeManager.getCourseTypes()
        return res.response(result)
    }
}

module.exports = CourseTypeHandler;