const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

// criação do transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.email_user,   // seu e-mail Gmail
        pass: process.env.email_pass // senha de app (não a senha da conta)
},
tls: {
    secure:false,
    ignoreTLS: true,
    rejectUnauthorized: false, // ignorar certificado digital - APENAS EM DESENVOLVIMENTO
}

}),


moduleexports = router;

const mailOptions = {
    ffrom: "rm98659@estudante.fieb.edu.br",
    to : "rm98659@estudante.fieb.edu.br" ,
    subject: "assunto" ,
    text: "mensagem em formato texto",
    html: "<h1>mensagem em formato HTML</h1>"

};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        // em caso de erro informações serão exibidas no console
        console.log(error);
    } else {
        // as informaçaões a respeito do envio realizado serão exibidos no console
        console.log(info);
        //sucesso ao enviar o e-mail
        console.log("email enviado");
    
    }
})