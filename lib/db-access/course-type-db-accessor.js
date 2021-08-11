const PGClient = require('../client/pg-client'),  
    Constants = require('../constants/constants'),
    fs = require('fs'),
    logger = require('../../helpers/logger');

class CourseTypeDBAccessor {

    constructor() {
        this.pgClient = new PGClient(this._getConfig())        
        this.sqlQueries = require('../sql')
    }

    _getConfig() {
        let config = require('../configs/config').local.database;
        config.database = 'mock_service';
        return config;
    }

    async getAllCourseTypes() {
        try {
            let query = this.sqlQueries[Constants.TableName.CoursesType].getAllCourseType
            let result = await this.pgClient.runStatement(query, [])
            return result
        } catch (err) {
            logger.error(`Error occurred in getAllCourseTypes DBAccessor :\n ${err}`)
            throw err;
        }
    }
}

module.exports = CourseTypeDBAccessor;