import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      // 1️⃣ Email al usuario
      await sendgrid.send({
        to: email,
        from: "info@lustrix.tech", // tu remitente verificado
        subject: "Bienvenido a LUSTRIX 🚀",
        html: `
          <h1>¡Bienvenido a LUSTRIX!</h1>
          <p>Gracias por unirte. Ya puedes acceder a la app aquí:</p>
          <a href="https://app.lustrix.tech" 
             style="display:inline-block;padding:10px 20px;background:#6a0dad;color:#fff;text-decoration:none;border-radius:5px;">
             Ir a la App
          </a>
        `,
      });

      // 2️⃣ Email a tu correo con los datos del usuario
      await sendgrid.send({
        to: "info@lustrix.tech", // tu correo
        from: "info@lustrix.tech",
        subject: "Nuevo registro en la landing",
        html: `
          <p><strong>Email:</strong> ${email}</p>
        `,
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error enviando correos" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
