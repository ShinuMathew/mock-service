const Constants = require('../constants/constants'),
    loadSql = require('../sql/load-sql');

let sqlCache = {};

sqlCache[Constants.TableName.Courses] = {
    insertCourse : loadSql('../sql/courses/insert-course.sql'),
    updateCourse : loadSql('../sql/courses/update-course.sql'),
    selectSpecificCourse : loadSql('../sql/courses/select-course.sql'),
    selectAllCourses : loadSql('../sql/courses/select-all-course.sql'),
    deleteSpecificCourse : loadSql('../sql/courses/delete-course.sql'),
}

sqlCache[Constants.TableName.CoursesType] = {
    getAllCourseType : loadSql('../sql/course-type/get-all-course-types.sql')
}

module.exports = sqlCache;