export default function Pricing() {
  return (
    <section id="harga" className="py-20 border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Harga yang sederhana</h2>
          <p className="text-gray-600 mt-2">Mulai gratis, upgrade kapan saja sesuai kebutuhan kamu.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white border border-gray-200 p-6">
            <div className="text-sm font-medium text-violet-700 bg-violet-50 inline-block px-3 py-1 rounded-full">Gratis</div>
            <div className="mt-4 text-3xl font-bold text-gray-900">Rp0<span className="text-base text-gray-500 font-normal">/bln</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• Proyek tak terbatas</li>
              <li>• Live preview</li>
              <li>• Komponen UI dasar</li>
            </ul>
            <button className="mt-6 w-full py-2.5 rounded-lg bg-gray-900 text-white hover:bg-black">Mulai Gratis</button>
          </div>

          <div className="rounded-2xl bg-white border-2 border-gray-900 p-6 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs bg-gray-900 text-white px-3 py-1 rounded-full">Paling Populer</span>
            <div className="text-sm font-medium text-blue-700 bg-blue-50 inline-block px-3 py-1 rounded-full">Pro</div>
            <div className="mt-4 text-3xl font-bold text-gray-900">Rp149.000<span className="text-base text-gray-500 font-normal">/bln</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• Semua fitur Gratis</li>
              <li>• Komponen premium</li>
              <li>• Build server-side</li>
              <li>• Integrasi database</li>
            </ul>
            <button className="mt-6 w-full py-2.5 rounded-lg bg-gray-900 text-white hover:bg-black">Pilih Pro</button>
          </div>

          <div className="rounded-2xl bg-white border border-gray-200 p-6">
            <div className="text-sm font-medium text-emerald-700 bg-emerald-50 inline-block px-3 py-1 rounded-full">Tim</div>
            <div className="mt-4 text-3xl font-bold text-gray-900">Kustom</div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• Semua fitur Pro</li>
              <li>• SSO & kontrol akses</li>
              <li>• Dukungan prioritas</li>
            </ul>
            <button className="mt-6 w-full py-2.5 rounded-lg bg-gray-900 text-white hover:bg-black">Hubungi Kami</button>
          </div>
        </div>
      </div>
    </section>
  )
}
