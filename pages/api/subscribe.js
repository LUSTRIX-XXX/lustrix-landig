import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      // 1️⃣ Correo al usuario
      await sendgrid.send({
        to: email,
        from: { email: "info@lustrix.tech", name: "LUSTRIX Team" },
        subject: "Bienvenido a LUSTRIX 🚀",
        html: `
          <h1>¡Bienvenido a LUSTRIX!</h1>
          <p>Gracias por registrarte. Haz clic abajo para entrar a la app:</p>
          <a href="https://app.lustrix.tech"
             style="display:inline-block;padding:10px 20px;background:#6a0dad;color:#fff;text-decoration:none;border-radius:5px;">
             Ir a la App
          </a>
        `,
      });

      // 2️⃣ Copia del registro a ti mismo
      await sendgrid.send({
        to: "info@lustrix.tech",
        from: { email: "info@lustrix.tech", name: "LUSTRIX Bot" },
        subject: "Nuevo registro en la landing",
        html: `<p><strong>Email usuario:</strong> ${email}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error en SendGrid:", error);
      res.status(500).json({ error: "Error al enviar el correo" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
