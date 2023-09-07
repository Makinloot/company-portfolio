import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const { email, text, firstName, lastName } = req.body;
  const msg = {
    to: "hello@purpledminds.com",
    from: "hello@purpledminds.com",
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
