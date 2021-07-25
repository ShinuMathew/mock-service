const gulp = require('gulp'),
    execSync = require('child_process').execSync;


// DB scripts
gulp.task('postgres-prescripts', async function(cb) {

    let host = 'localhost';
    let dbName = 'mock_service'

    execSync(`psql -h ${host} postgres -d postgres -a -f ./setup-scripts/db.sql`, {stdio: 'inherit'})
    execSync(`psql -h ${host} -U postgres -d ${dbName} -a -f ./deploy-scripts/db/mock-service.sql`, {stdio: 'inherit'});
})