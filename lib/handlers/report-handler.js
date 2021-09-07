const ReportManager = require('../manager/report-manager');

class ReportHandler {

    constructor() {
        this.reportManager = new ReportManager();
    }

    getReport(req, res) {
        try {
            let result = this.reportManager.getReport(req.params.id);
            return res.response(result)
        } catch (err) {
            return res.response(err).code(err.statusCode)
        }
    }


}

module.exports = ReportHandler;