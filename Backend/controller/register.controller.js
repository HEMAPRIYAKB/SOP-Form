const register_Detail = require("../model/register.model");
const nodemailer = require('nodemailer');
require('dotenv').config(); 

exports.registerDetail = async(req,res)=>{
    try {
        const data = await register_Detail.registerDetail.create({
            email:req.body.email,
            fullname:req.body.fullname,
            age:req.body.age,
            education:req.body.education,
            institution:req.body.institution,
            study:req.body.study,
            experience:req.body.experience,
            admit:req.body.admit,
            program:req.body.program,
            country:req.body.country,
            goals:req.body.goals,
            listening:req.body.listening,
            reading:req.body.reading,
            speaking:req.body.speaking,
            writing:req.body.writing,
            payform:req.body.payform,
            feesform:req.body.feesform,
            gicform:req.body.gicform,
            gicpayform:req.body.gicpayform,
        })
    
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.mail,
                pass: process.env.app_password
            }
        });
        const mailOptions = {
            from: process.env.mail,
            to: `${req.body.email}`,
            subject: 'Your SOP Generation Info',
            text: `Check your Details\n\n
            Email:  ${req.body.email} \n
            fullname:  ${req.body.fullname} \n
            age:  ${req.body.age} \n
            education:  ${req.body.education} \n
            institution:  ${req.body.institution} \n
            study:  ${req.body.study} \n
            experience:  ${req.body.experience} \n
            admit:  ${req.body.admit} \n
            program:  ${req.body.program} \n
            country:  ${req.body.country} \n
            goals:   ${req.body.goals} \n
            listening:  ${req.body.listening} \n
            reading:   ${req.body.reading} \n
            speaking:   ${req.body.speaking} \n
            writing:   ${req.body.writing} \n
            payform:   ${req.body.payform} \n
            feesform:   ${req.body.feesform} \n
            gicform:   ${req.body.gicform} \n
            gicpayform:   ${req.body.gicpayform}`
        };

        transporter.sendMail(mailOptions, async(error, info) => {
            if (error) {
                console.log("Oh no",error);
            } else {
                console.log('Email sent: ' + info.response);
                console.log({ message:'SOP datas sent to your mail' });
            }
        });

        await data.save();
        res.status(200).json({ message:"Data saved successfully" });

    }catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong' });
    }
}