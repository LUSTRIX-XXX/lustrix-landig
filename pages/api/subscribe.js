import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      // 📩 Email para el usuario (bienvenida)
      await sgMail.send({
        to: email,
        from: "info@lustrix.tech", // el remitente verificado en SendGrid
        subject: "🎉 Bienvenido a LUSTRIX",
        html: `
          <h1>¡Gracias por unirte a LUSTRIX!</h1>
          <p>Ya puedes acceder a la app desde aquí:</p>
          <a href="https://app.lustrix.tech">Entrar en la App</a>
        `,
      });

      // 📩 Email para ti (aviso interno)
      await sgMail.send({
        to: "info@lustrix.tech",
        from: "info@lustrix.tech",
        subject: "📥 Nuevo registro en la landing",
        html: `<p>Nuevo usuario registrado: <strong>${email}</strong></p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error al enviar correo:", error);
      res.status(500).json({ error: "Error enviando correos" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
