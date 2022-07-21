require('dotenv').config()
const express = require('express')
const AWS              = require('aws-sdk')

const app = express()
const PORT = process.env.PORT

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.post('/email', async (req, res) => {
    console.log(req.body)

    const sendEmailResponse = await sendEmail(req.body.subject, req.body.body)
    console.log(sendEmailResponse)
    if(sendEmailResponse)
        res.send({success: true})
    else
        res.send({success: false})
})

AWS.config.update({region: 'us-east-2'})

/**
 * sendEmail: sends an email given the specified status object
 * @param {Status} data Ameritrade Status Object
 */
const sendEmail = async (subject, body) => {

  var params = {
      Destination: { 
        CcAddresses: [],
        ToAddresses: ['me@williamsilberste.in']
      },
      Message: {
        Body: {
          Html: {
           Charset: "UTF-8",
           Data: body
          },
          Text: {
           Charset: "UTF-8",
           Data: "createEmailText"
          }
         },
         Subject: {
          Charset: 'UTF-8',
          Data: subject
         }
        },
      Source: 'website@williamsilberste.in',
      ReplyToAddresses: []
  }

  var sendPromise = await new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

  try {
    console.log(sendPromise)
    if(sendPromise.MessageId != '')
        return true;
    return false;
  } catch (err) {
    console.log(err)
    return false;
  }

//   sendPromise.then(
//   function(data) {
//     console.log("Message sent")
//       console.log(data.MessageId);
//       return true;
//   }).catch(
//       function(err) {
//       console.error(err, err.stack);
//       return false;
//   });
}

app.listen(PORT, () => console.log(`Starting server on port ${PORT}`))