const express = require('express');
// const port = 4000;
const app = express();
const cors = require('cors')
var nodemailer = require('nodemailer')
require("dotenv").config()
const path = require('path')

const bodyParser=require("body-parser")

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname +  "/public")));

const port  = process.env.PORT || 4000;

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/public'));
// });


app.post(('/send_mail'), cors(), async(req,res)=>{

    const {to,subject,message} = req.body

    console.log(req.body)
    var transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port:process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass:process.env.MAIL_PASS
        }
    });

    var mailOptions = {
        from: process.env.MAIL_FROM,
        to: req.body.to,
        subject:req.body.subject,
        html:`
        <p>${message}</p>
        `
    }

   await transporter.sendMail(mailOptions, function(err,info){
        if(err){
            res.json({
                msg:'fail'
            })
        } else {
            res.json({
                msg:'success'
            })
        }
    })
})

app.listen(port, () =>{
    console.log(`Server is running at port ${port}`)
    // console.log(JSON.stringify(data))
});


