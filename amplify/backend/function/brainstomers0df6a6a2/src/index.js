
const aws = require('aws-sdk');
const ses = new aws.SES();


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  for (const streamedItem of event.Records) {
    if (streamedItem.eventName === 'INSERT') {
      //pull off items from stream
      const candidateName = streamedItem.dynamodb.NewImage.Name.S
      const candidateEmail = streamedItem.dynamodb.NewImage.Email.S
      const candidateSubject = streamedItem.dynamodb.NewImage.Subject.S
      const candidateMessage = streamedItem.dynamodb.NewImage.Message.S

      await ses
        .sendEmail({
          Destination: {
            ToAddresses: [process.env.SES_EMAIL],
          },
          Source: process.env.SES_EMAIL,
          Message: {
            Subject: { Data: 'Candidate Submission ' },
            Body: {
              Text: { Data: `Subject:${candidateSubject} \n My name is ${candidateName}.\n You can reach me at ${candidateEmail} \nMessage:${candidateMessage}` },
            },
          },
        })
        .promise()
    }
  }
  return { status: 'done' }
}