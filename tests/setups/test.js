const request = require('request'),
    _ = require('lodash');

async function mapTestCaseName() {
    let report = require(`../../resources/mock-data/${"your requested id"}.json`);
    let runId = report._source.testrail_runid;
    getRunDetails(runId, report)
}

function getRunDetails(runId, report) {

    const options = {
        // Url and Options go here
    }
    request.get(options, function (err, response, body) {
        let caseIdNameMap = JSON.parse(response.body).map(function (ele) {
            return {
                caseId: ele.case_id,
                title: ele.title
            }
        })
        let reportClone = _.cloneDeep(report);
        let passedTest = _.cloneDeep(reportClone["_source"]["suites"][0]["passed"]["tests"])
        let failedTest = _.cloneDeep(reportClone["_source"]["suites"][0]["failed"]["tests"])
        let skippedTest = _.cloneDeep(reportClone["_source"]["suites"][0]["skipped"]["tests"])
        passedTest = passedTest.map(test => {
            let caseName = caseIdNameMap.filter(t => t.caseId == test.CaseIds)[0].title
            test.Title = caseName ? caseName : "" 
            return test
        })
        failedTest = failedTest.map(test => {
            let caseName
            try {
                caseName = caseIdNameMap.filter(t => t.caseId == test.CaseIds)[0].title
            } catch (e) {
                caseName = ""
            }
            test.Title = caseName ? caseName : "" 
            return test
        })
        skippedTest = skippedTest.map(test => {
            let caseName = caseIdNameMap.filter(t => t.caseId == test.CaseIds)[0].title
            test.Title = caseName ? caseName : "" 
            return test
        })

        reportClone["_source"]["suites"][0]["passed"]["tests"] = passedTest
        reportClone["_source"]["suites"][0]["failed"]["tests"] = failedTest
        reportClone["_source"]["suites"][0]["skipped"]["tests"] = skippedTest

        console.log(JSON.stringify(reportClone))
        
    })

}

mapTestCaseName();