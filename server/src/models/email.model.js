import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const { email, text, firstName, lastName } = req.body;
  const msg = {
    to: "hello@purpledminds.com", // Change to your recipient
    from: "hello@purpledminds.com", // Change to your verified sender
    subject: `From ${email}`,
    text: `Name: ${firstName} ${lastName}, ${text}`,
  };
  try {
    await sgMail.send(msg);
    res.status(200).send("email successfully sent");
  } catch (error) {
    res.status(400).send(`error: ${error}`);
  }
}

export { sendEmail };
