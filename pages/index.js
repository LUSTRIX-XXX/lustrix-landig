import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <header className="w-full py-4 text-center text-3xl font-bold text-purple-500">
        LUSTRIX
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
          Donde la fantasía cobra vida
        </h1>
        <p className="text-purple-400 mb-6 text-lg italic">
          "Sé el protagonista de tus propias historias"
        </p>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl">
          <strong>LUSTRIX es la primera plataforma interactiva erótica impulsada por Inteligencia Artificial,</strong> diseñada para que tus fantasías más íntimas tomen vida.
          Aquí, tú no solo observas, <strong>tú eres el protagonista</strong>: creas tus propias historias, eliges cómo evolucionan y disfrutas de experiencias únicas hechas a tu medida.
          Privada, segura y pensada para el placer, LUSTRIX te ofrece un espacio donde la imaginación sexual se transforma en realidad digital.
        </p>

        <Link href="/formulario">
          <a className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition">
            Empieza gratis
          </a>
        </Link>

        <div className="grid gap-6 mt-12 max-w-2xl">
          <div className="p-4 bg-zinc-900 rounded-lg shadow border border-purple-500/20">
            <h2 className="font-bold">🎭 Historias con IA</h2>
            <p className="text-gray-400 text-sm">
              Relatos únicos adaptados a tus gustos.
            </p>
          </div>
          <div className="p-4 bg-zinc-900 rounded-lg shadow border border-purple-500/20">
            <h2 className="font-bold">🔒 Privacidad total</h2>
            <p className="text-gray-400 text-sm">
              Tus datos e historias son privados.
            </p>
          </div>
          <div className="p-4 bg-zinc-900 rounded-lg shadow border border-purple-500/20">
            <h2 className="font-bold">⚡ Próximamente</h2>
            <p className="text-gray-400 text-sm">
              Clips generados con IA y avatares digitales.
            </p>
          </div>
        </div>
      </main>
      <footer className="py-6 text-xs text-gray-500 text-center">
        © 2025 LUSTRIX. Todos los derechos reservados.
      </footer>
    </div>
  )
}