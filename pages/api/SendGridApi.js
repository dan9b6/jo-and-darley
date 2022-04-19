import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "dan_burts@outlook.com", // Your email where you'll receive emails
      from: "wem3106@jodarleyandco.com", // your website email address here
      subject: `Enquiry - Website Contact Form`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Contact Message - Web Form</title>
          <meta name="description" content="Contact Message - Web Form">
          <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        
          <link rel="stylesheet" href="css/styles.css?v=1.0">
        
        </head>
        
        <body>
          <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                </div>
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>You've been contacted by ${req.body.firstName} ${req.body.lastName}</h3>
                <div style="font-size: 16px;">
                <p>📞 Phone:</p>
                <p>${req.body.phone}</p>
                <p>✉️ Email:</p>
                <p>${req.body.email}</p>
                <p>📩 Message:</p>
                <p>${req.body.message}</p>
                <br>
                </div>
                <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Jo Darley & Co<br>Contact Form<br></p>
                <div class="footer-links" style="display: flex;justify-content: center;align-items: center;"></div>
                </div>
        </body>
        </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json(req.body);
}

export default sendEmail;
