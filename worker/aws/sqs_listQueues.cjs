// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html#listTopics-property
var AWS = require('aws-sdk');

/**
 * Returns a list of aws sqs queues url from a given region
 * @param {string} accessKeyId 
 * @param {string} secretAccessKey 
 * @param {string} region 
 * @return {object} 
 */
function listQueues(accessKeyId, secretAccessKey, region) {
    AWS.config.update({accessKeyId, secretAccessKey, region});
    var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

    var params = {
        MaxResults: 50
    };

    let result
    sqs.listTopics(params, function(err, data) {
        if (err) {
            throw new Error("error :", err)
        } else {
            // data : {QueueUrls: ["url1", "url2", ...], NextToken}
            result = data.QueueUrls; 
        }
    });
    
    return result;
}

module.exports.listQueues = listQueues;