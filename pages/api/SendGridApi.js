// pages/api/SendGridApi.js
import sendgrid from "@sendgrid/mail";
// If your Node/Next env doesn't have fetch in API routes, uncomment this:
// import fetch from "node-fetch";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  // 1. only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    message,
    recaptchaToken, // this comes from the frontend
  } = req.body;

  // 2. check captcha token is present
  if (!recaptchaToken) {
    return res.status(400).json({ error: "Missing reCAPTCHA token" });
  }

  // 3. verify with Google
  try {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;

    const captchaRes = await fetch(verifyUrl, { method: "POST" });
    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return res.status(400).json({ error: "reCAPTCHA failed" });
    }
  } catch (err) {
    console.error("reCAPTCHA verify error:", err);
    return res.status(500).json({ error: "reCAPTCHA verification error" });
  }

  try {
    await sendgrid.send({
      to: "hair@jodarleyandco.com",
      from: "wem3106@jodarleyandco.com",
      subject: `Enquiry - Website Contact Form`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Contact Message - Web Form</title>
          <meta name="description" content="Contact Message - Web Form">
          <meta name="author" content="SitePoint">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        </head>
        <body style="font-family: helvetica, Arial, sans-serif;">
          <div style="margin: 20px;">
            <h3>You've been contacted by ${firstName || ""} ${
        lastName || ""
      }</h3>
            <div style="font-size: 16px;">
              <p><strong>📞 Phone:</strong><br/>${phone || "-"}</p>
              <p><strong>✉️ Email:</strong><br/>${email || "-"}</p>
              <p><strong>📩 Message:</strong><br/>${message || "-"}</p>
            </div>
            <br>
            <p style="font-size: 16px; padding-bottom: 20px; border-bottom: 1px solid #D1D5DB;">
              Jo Darley & Co<br/>Contact Form<br/>
            </p>
          </div>
        </body>
        </html>`,
    });

    // match your old behavior
    return res.status(200).json(req.body);
  } catch (error) {
    console.error("SendGrid error:", error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
