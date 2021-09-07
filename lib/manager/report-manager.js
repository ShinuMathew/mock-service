const Error = require('../common/errors'),
    _ = require('lodash');

class ReportManager {

    constructor() {

    }

    getReport(id) {
        try {
            let report = require(`../../resources/mock-data/${id}.json`)
            return report
        } catch (err) {
            let errMsg = _.cloneDeep(Error.ReportNotFound)
            errMsg.message.replace("${id}", id)
            throw errMsg
        }
    }

}

module.exports = ReportManager;