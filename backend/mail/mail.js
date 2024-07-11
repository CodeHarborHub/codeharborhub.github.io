const nodeMailer=require('nodemailer')
require('dotenv').config() 
const mailing=async(name,userMail,message)=>{ 
let HTML=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title> 
</head>
<body> 
        <main style="width: 100%;min-height: 100vh;padding: 1rem;background-color: rgb(255 255 80 / 47%);position: relative;">
            <div style="margin: auto;width:90%;background-color: white;max-width: 800px;padding: 1.2rem;border-radius: 0.6rem; box-shadow: 0 1px 5px rgb(0,0,0);position: relative;justify-content: center;align-items: center;">
        <h1 style="margin-top: 2rem;font-family: monospace;">Thank You for Contacting Us!</h1>
        <p style="margin-top: 2rem; font-family: sans-serif;font-size: 1rem;"> 
        <span  style="margin-top: 2rem; font-family: sans-serif;font-size: 1rem;"><span style="font-weight:700;">Your Message:</span> ${message}</span><br><br>
        Thank you for reaching out to us. Your message is very important to our team, and we appreciate your interest in CodeHarborHub.

        At CodeHarborHub, we are dedicated to providing you with the resources and tools to enhance your learning journey. Whether you are interested in learning new programming languages, exploring various technologies, or tackling challenging coding problems, we have something for everyone.
        
        Here’s what you can explore at CodeHarborHub:
        <ul>
        <li><b>Courses:</b> Our comprehensive courses cover a wide range of programming languages and technologies, designed to help you build a solid foundation and advance your skills.</li><br>
        <li><b>Practice Challenges:</b> Put your knowledge to the test with our challenging coding problems. These exercises are crafted to sharpen your problem-solving abilities and prepare you for real-world scenarios.</li><br>
       <li><b>Community Support:</b> Join our vibrant community of learners and experts. Share your progress, ask questions, and collaborate with others to achieve your learning goals.</li><br>
    </ul><br>
       We are inspired by your enthusiasm and commitment to learning. Thank you for visiting us, and we look forward to supporting you on your educational journey.
       <br><br>
        <span style="font-family: monospace;"><b>Best regards,</b><br>
        The CodeHarborHub Team.</span>
            </p> <br>
            <p style="font-family: monospace;font-weight: 700;">
                Read our Course Documentation <a href="https://codeharborhub.github.io/docs/">https://codeharborhub.github.io/docs</a>...🚀<br><br>
                Join Our Community <a href="https://codeharborhub.github.io/community">https://codeharborhub.github.io/community</a>..🌐<br><br>
                Visit on our Blogs <a href="https://codeharborhub.github.io/blog">https://codeharborhub.github.io/blog</a>..🛑
            </p>
<br><br>
    <p style="font-family: monospace;text-align: center;">Join Today :)</p>
        </div>
    </main>
</body>
</html>`
let mails=userMail
const sender=nodeMailer.createTransport({
    service:process.env.SERIVE,
    host:process.env.HOST,
    port:process.env.PORT,
    auth:{
        user:process.env.USER_MAIL_ADDRESSS,
        pass:process.env.PASS
    },
})
const html= HTML
const receiver={
    from:process.env.USER_MAIL_ADDRESSS,
    to:mails,
    subject:`Thank you for Contacting ${name}`,
    text:'Contact Us',
    html:html, 
} 
    try{
        await sender.sendMail(receiver)
        return true;
    }catch(err){
        return false;
    }  
}
module.exports=mailing