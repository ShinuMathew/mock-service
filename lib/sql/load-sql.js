const path = require('path'),
    fs = require('fs');

module.exports = function(modulePath) {
    let sqlFilePath = path.join(__dirname, modulePath)
    return fs.readFileSync(sqlFilePath).toString();
}