const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587, // Important for Gmail and other services
      secure: false, // false for TLS (STARTTLS)
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"LearnX" <${process.env.MAIL_USER}>`, // Proper FROM format
      to: email,
      subject: title,
      html: body,
    });

    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error while sending mail (mailSender):", error);
    throw error; // throw error so the caller function knows
  }
};

module.exports = mailSender;
