export default function Formulario() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-3xl font-bold mb-6">Formulario de registro</h1>
      <form 
        action="https://formsubmit.co/raulsb221@gmail.com" 
        method="POST"
        className="w-full max-w-md bg-zinc-900 p-6 rounded-lg shadow-lg"
      >
        <input type="hidden" name="_next" value="https://lustrix-landing-hi96.vercel.app/gracias"/>
        <input type="hidden" name="_captcha" value="false"/>
        <div className="mb-4">
          <label className="block text-left text-sm mb-2">Nombre</label>
          <input type="text" name="nombre" required className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"/>
        </div>
        <div className="mb-4">
          <label className="block text-left text-sm mb-2">Email</label>
          <input type="email" name="email" required className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"/>
        </div>
        <div className="mb-4">
          <label className="block text-left text-sm mb-2">Mensaje</label>
          <textarea name="mensaje" className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"></textarea>
        </div>
        <button type="submit" className="w-full py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
          Enviar
        </button>
      </form>
    </div>
  )
}