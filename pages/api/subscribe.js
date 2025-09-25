import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nombre, email, mensaje } = req.body;

    try {
      // 📩 Correo de bienvenida al usuario
      await sgMail.send({
        to: email,
        from: "info@lustrix.tech", // remitente verificado en SendGrid
        subject: "🎉 Bienvenido a LUSTRIX",
        html: `
          <h1>¡Hola ${nombre || "usuario"}!</h1>
          <p>Gracias por registrarte en <b>LUSTRIX</b>.</p>
          <p>Ya puedes acceder a la app desde aquí:</p>
          <a href="https://app.lustrix.tech" style="color:#6d28d9;font-weight:bold">Entrar en la App</a>
        `,
      });

      // 📩 Copia interna a tu correo
      await sgMail.send({
        to: "info@lustrix.tech",
        from: "info@lustrix.tech",
        subject: "📥 Nuevo registro en la landing",
        html: `
          <p><b>Nombre:</b> ${nombre}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Mensaje:</b> ${mensaje}</p>
        `,
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
