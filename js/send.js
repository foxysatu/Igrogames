const nodemailer = require("nodemailer");
require("dotenv").config();

function sendMessage(name, secName, model, mail){

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
   }
});

const mailOptions = {
   from: "andreybashkirov2003@gmail.com",
   to: mail,
   subject: "Заказ",
   text: `Уважаемый(-ая) ${name} ${secName} вы заказали ${model}`
};

transporter.sendMail(mailOptions, function(error, info){
   if(error){
      console.log(error);
   }else{
      console.log("Email sent: " + info.response);
   }
});
}

function sendMessageTrue(name, secName, model, mail){

   const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
         user: process.env.EMAIL,
         pass: process.env.PASSWORD
      }
   });
   
   const mailOptions = {
      from: "andreybashkirov2003@gmail.com",
      to: mail,
      subject: "Заказ",
      text: `Уважаемый(-ая) ${name} ${secName} ваш заказ на ${model} одобрен`
   };
   
   transporter.sendMail(mailOptions, function(error, info){
      if(error){
         console.log(error);
      }else{
         console.log("Email sent: " + info.response);
      }
   });
   }

exports.send = sendMessage;
exports.sendTrue = sendMessageTrue;