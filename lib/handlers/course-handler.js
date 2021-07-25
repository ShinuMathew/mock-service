const CourseManager = require('../manager/course-manager');

class CourseHandler {
    
    constructor() {
        this.courseManager = new CourseManager();
    }

    async publishCourse(req, res) {
        let result = await this.courseManager.publishCourses(req)
        return res.response(result)
    }

    async getSpecificCourse(req, res) {
        let result = await this.courseManager.getSpecificCourse(req)
        return res.response(result)
    }

    async getCourses(req, res) {        
        let result = await this.courseManager.getAllCourses(req);
        return res.response(result)
    }

    async deleteSpecificCourse(req, res) {
        let result = await this.courseManager.deleteSpecificCourse(req)
        return res.response(result)
    }
}

module.exports = CourseHandler;