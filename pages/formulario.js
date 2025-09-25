import { useState } from "react";

export default function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, mensaje }),
      });

      if (res.ok) {
        setSuccess(true);
        setNombre("");
        setEmail("");
        setMensaje("");
        // 🔹 Redirige a la página de gracias
        window.location.href = "https://lustrix.tech/gracias";
      } else {
        alert("Error al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error en el formulario:", error);
      alert("Hubo un error inesperado.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-3xl font-bold mb-6">Formulario de registro</h1>
      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="block text-left text-sm mb-2">Nombre</label>
          <input 
            type="text" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required 
            className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"
          />
        </div>

        <div className="mb-4">
          <label className="block text-left text-sm mb-2">Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"
          />
        </div>

        <div className="mb-4">
          <label className="block text-left text-sm mb-2">Mensaje</label>
          <textarea 
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {success && <p className="mt-4">✅ Registro enviado. Revisa tu correo.</p>}
    </div>
  );
}

