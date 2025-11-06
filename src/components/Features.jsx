import { Code, Zap, Shield, Cpu } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Siap Produksi',
    desc: 'Arsitektur frontend-backend terpisah dengan praktik terbaik.',
  },
  {
    icon: Zap,
    title: 'Cepat & Ringan',
    desc: 'Vite + React dan FastAPI untuk performa maksimal.',
  },
  {
    icon: Shield,
    title: 'Aman',
    desc: 'Validasi skema, sanitasi input, dan praktik keamanan standar.',
  },
  {
    icon: Cpu,
    title: 'Terintegrasi AI',
    desc: 'Asisten cerdas membantu kamu membangun fitur end-to-end.',
  },
]

export default function Features() {
  return (
    <section id="fitur" className="py-20 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Fitur Utama</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-sm transition">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-tr from-violet-500 to-blue-500 text-white grid place-items-center mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
