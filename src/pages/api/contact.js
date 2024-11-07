import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // e.g., Gmail, Outlook, etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App-specific password or email password
      },
    });

    // Configure the email options
    const mailOptions = {
      from: email,
      to: "amaanshaikh.gg@gmail.com", // Your email address to receive messages
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send message" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
