const ReportHandler = require('../handlers/report-handler'),
    ReportSchema = require('../schemas/api/report-schemas'),
    Joi = require('joi');

class ReportRoutes {

    constructor() {
        this.reportHandler = new ReportHandler();
    }

    registerRoutes(server) {
        const me = this;

        server.route({
            method: "GET",
            path:"/report/{id}",
            options: {
                handler: (req, res) => me.reportHandler.getReport(req, res),
                description: "To get dummy report",
                validate: {
                    params: Joi.object({id : ReportSchema.reportId})
                },
            }
        })
    }
}

module.exports = ReportRoutes;