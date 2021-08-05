const joi = require('joi'),
    Enum = require('../../common/enum'),
    _  = require('lodash');

const courseType = joi.object({
    value: joi.string().required(),
    description: joi.string().required()
})

module.exports = {
    courseType
}