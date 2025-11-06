import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 text-violet-700 px-3 py-1 text-sm mb-4">
              <Star size={16} />
              <span>Platform AI untuk developer modern</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              Bangun aplikasi lebih cepat dengan bantuan AI
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Mulai dari ide hingga live preview hanya dalam hitungan menit. Desain indah, performa cepat, dan alur kerja yang menyenangkan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="px-5 py-3 bg-gray-900 text-white rounded-lg hover:bg-black">Mulai Sekarang</button>
              <a href="#demo" className="px-5 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">Lihat Demo</a>
            </div>
            <div className="mt-6 text-sm text-gray-500">Tidak perlu kartu kredit • Batalkan kapan saja</div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="h-full w-full grid place-items-center text-center p-6">
                <p className="text-gray-700 font-medium">Preview interaktif akan tampil di sini</p>
                <p className="text-gray-500 text-sm">Terintegrasi dengan backend untuk pengalaman lengkap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
