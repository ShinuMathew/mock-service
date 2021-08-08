const PGClient = require('../client/pg-client'),  
    Constants = require('../constants/constants'),
    fs = require('fs');

class CourseDBAccessor {

    constructor() {    
        this.pgClient = new PGClient(this._getConfig())        
        this.sqlQueries = require('../sql')
    }

    _getConfig() {
        let config = require('../configs/config').local.database;
        config.database = 'mock_service';
        return config;
    }

    async publishCourse(params) {
        try {
            let query = this.sqlQueries[Constants.TableName.Courses].insertCourse
            let result = await this.pgClient.runStatement(query, params)
            return result
        } catch (err) {
            console.error(`Error occurred in publishCourse DBAccessor :\n ${err}`)
            throw err;
        }
    }

    async updateCourse(params) {
        try {
            let query = this.sqlQueries[Constants.TableName.Courses].updateCourse
            let result = await this.pgClient.runStatement(query, params)
            return result
        } catch (err) {
            console.error(`Error occurred in updateCourse DBAccessor :\n ${err}`)
            throw err;
        }
    }

    async getAllCourses() {
        try {
            let query = this.sqlQueries[Constants.TableName.Courses].selectAllCourses
            let result = await this.pgClient.runStatement(query, [])
            return result
        } catch (err) {
            console.error(`Error occurred in getAllCourses DBAccessor :\n ${err}`)
            throw err;
        }
    }

    async getSpecificCourse(id) {
        try {
            let query = this.sqlQueries[Constants.TableName.Courses].selectSpecificCourse
            let result = await this.pgClient.runStatement(query, [id])
            return result
        } catch (err) {
            console.error(`Error occurred in getSpecificCourses DBAccessor :\n ${err}`)
            throw err;
        }
    }

    async deleteSpecificCourse(id) {
        try {
            let query = this.sqlQueries[Constants.TableName.Courses].deleteSpecificCourse
            let result = await this.pgClient.runStatement(query, [id])
            return result
        } catch (err) {
            console.error(`Error occurred in deleteSpecificCourse DBAccessor :\n ${err}`)
            throw err;
        }
    }
}

module.exports = CourseDBAccessor;