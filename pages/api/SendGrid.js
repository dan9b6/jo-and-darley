const sg = require("@sendgrid/mail");

sg.setApiKey(process.env.NEXT_PUBLIC_SG_API_KEY);

export default (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.firstName} ${body.firstName}\r\n
  Email: ${body.email}\r\n
  Contact Number: ${body.phone}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: "danbh7296@gmail.com",
    from: "contact@jodarleyandco.com",
    subject: "New Web Form Message",
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  sg.send(data);
  res.status(200).json({ status: "Ok" });
};
