const joi = require('joi');

const reportId = joi.string().required();

module.exports = {
    reportId
}