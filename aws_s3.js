// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:9a40d2a3-7c51-4b65-bf4d-762e3411bfca',
});
var bucket = new AWS.S3({params: {Bucket: 'artk-dist'}});

bucket.listObjectsV2(function (err, data) {
    if (err) {
        document.getElementById('status').innerHTML =
        'Could not load objects from S3 error: ' + err;
    } else {
        document.getElementById('status').innerHTML =
        'Loaded ' + data.Contents.length + ' items from S3';
        for (var i = 0; i < data.Contents.length; i++) {
        document.getElementById('objects').innerHTML +=
            '<li>' + data.Contents[i].Key + '</li>';
        }
    }
}); 