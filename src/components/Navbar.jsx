import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-violet-500 to-blue-500 grid place-items-center text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-gray-900">Vibe Coding</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#fitur" className="hover:text-gray-900 transition">Fitur</a>
            <a href="#demo" className="hover:text-gray-900 transition">Demo</a>
            <a href="#harga" className="hover:text-gray-900 transition">Harga</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">Masuk</button>
            <button className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black transition">Coba Gratis</button>
          </div>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-3">
            <a href="#fitur" className="block text-gray-700">Fitur</a>
            <a href="#demo" className="block text-gray-700">Demo</a>
            <a href="#harga" className="block text-gray-700">Harga</a>
            <div className="pt-2 flex gap-2">
              <button className="flex-1 px-4 py-2 rounded-lg text-gray-700 bg-gray-100">Masuk</button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-gray-900 text-white">Coba Gratis</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
