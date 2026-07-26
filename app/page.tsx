import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-slate-100">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-[#0F172A] via-[#0B1120] to-[#0B1120] px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-5xl">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            ✈️ Rise of Kingdoms Analytics v1.0
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Krallığınızın ve Valilerinizin <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Gücünü Analiz Edin
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Vali ID'si, Krallık numarası veya İttifak etiketini aratarak detaylı Kill Point (KP), T4/T5 oranları ve KvK istatistiklerine anında ulaşın.
          </p>

          {/* Search Box */}
          <div className="mx-auto mt-10 max-w-3xl">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Örn: Governor ID (12345678) veya Krallık (#2377)..."
                className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-4 text-slate-100 placeholder-slate-500 shadow-2xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 active:scale-95">
                Ara
              </button>
            </div>
            
            {/* Quick Tags */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
              <span>Popüler Aramalar:</span>
              <span className="cursor-pointer rounded-md bg-slate-800/80 px-2.5 py-1 hover:text-blue-400">#2377</span>
              <span className="cursor-pointer rounded-md bg-slate-800/80 px-2.5 py-1 hover:text-blue-400">#1001</span>
              <span className="cursor-pointer rounded-md bg-slate-800/80 px-2.5 py-1 hover:text-blue-400">Top Governors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature / Stats Cards */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700">
            <div className="text-3xl">⚔️</div>
            <h3 className="mt-4 text-xl font-bold text-white">Detaylı KP Analizi</h3>
            <p className="mt-2 text-sm text-slate-400">
              Valilerin T1-T5 arası öldürme sayılarını, ölü oranlarını ve KvK performans skorlarını grafiklerle inceleyin.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700">
            <div className="text-3xl">🏰</div>
            <h3 className="mt-4 text-xl font-bold text-white">Krallık Sıralamaları</h3>
            <p className="mt-2 text-sm text-slate-400">
              Farklı krallıkların toplam gücünü, aktif vali sayılarını ve KvK eşleşme grubundaki durumunu takip edin.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-700">
            <div className="text-3xl">👑</div>
            <h3 className="mt-4 text-xl font-bold text-white">Canlı KvK Takibi</h3>
            <p className="mt-2 text-sm text-slate-400">
              Savaş alanındaki anlık honor puanı güncellemelerini ve krallıklar arası güç dengesini görün.
            </p>
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">🏆 Öne Çıkan Valiler</h2>
              <p className="text-sm text-slate-400">Son taranan krallıklardaki en yüksek performanslı oyuncular</p>
            </div>
            <button className="w-fit text-sm font-semibold text-blue-400 hover:underline">
              Tümünü Gör →
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="border-b border-slate-800 text-xs uppercase text-slate-500">
                <tr>
                  <th className="py-3 px-4">Sıra</th>
                  <th className="py-3 px-4">Vali Adı</th>
                  <th className="py-3 px-4">Krallık</th>
                  <th className="py-3 px-4">Güç</th>
                  <th className="py-3 px-4">Kill Points (KP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                <tr className="hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-bold text-amber-400">#1</td>
                  <td className="py-4 px-4 font-semibold text-white">Murat_RoK</td>
                  <td className="py-4 px-4">#2377</td>
                  <td className="py-4 px-4">120,500,000</td>
                  <td className="py-4 px-4 font-semibold text-blue-400">1,850,000,000</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-bold text-slate-300">#2</td>
                  <td className="py-4 px-4 font-semibold text-white">Airlines_King</td>
                  <td className="py-4 px-4">#2377</td>
                  <td className="py-4 px-4">98,200,000</td>
                  <td className="py-4 px-4 font-semibold text-blue-400">1,200,000,000</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-bold text-amber-600">#3</td>
                  <td className="py-4 px-4 font-semibold text-white">Governor_X</td>
                  <td className="py-4 px-4">#1001</td>
                  <td className="py-4 px-4">85,000,000</td>
                  <td className="py-4 px-4 font-semibold text-blue-400">950,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}