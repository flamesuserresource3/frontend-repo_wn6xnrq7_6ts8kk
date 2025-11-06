import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <section id="demo" className="py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <h2 className="text-2xl font-bold mb-2">Demo Interaktif</h2>
              <p className="text-gray-600 mb-4">Contoh sederhana counter dengan React untuk menunjukkan interaksi client-side.</p>
              <DemoCounter />
            </div>
          </div>
        </section>
        <Features />
        <Pricing />
        <Footer />
      </main>
    </div>
  )
}

import { useState } from 'react'

function DemoCounter() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setCount((c) => Math.max(0, c - 1))}
        className="px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50"
      >
        -
      </button>
      <div className="min-w-[4rem] text-center text-xl font-semibold">{count}</div>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black"
      >
        +
      </button>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Vibe Coding. Semua hak cipta dilindungi.</p>
        <div className="text-sm text-gray-500 flex gap-4">
          <a href="#" className="hover:text-gray-900">Kebijakan Privasi</a>
          <a href="#" className="hover:text-gray-900">Ketentuan Layanan</a>
          <a href="#" className="hover:text-gray-900">Kontak</a>
        </div>
      </div>
    </footer>
  )
}
