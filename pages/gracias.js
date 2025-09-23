import Link from 'next/link'

export default function Gracias() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-3xl font-bold mb-6">¡Gracias por tu interés en LUSTRIX!</h1>
      <p className="text-gray-300 mb-6">Nos pondremos en contacto contigo muy pronto.</p>
      <Link href="https://lustrix-landing-hi96.vercel.app">
        <a className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition">
          Ir a la web
        </a>
      </Link>
    </div>
  )
}