import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b16] text-white">


      <Navbar />



      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-8 py-24 text-center">


        <h1 className="text-7xl font-extrabold">
          Rise of Kingdoms
          <span className="block text-yellow-400">
            Analytics
          </span>
        </h1>



        <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
          Explore kingdoms, governors and KvK statistics.
          Track power, kills and battles in one place.
        </p>



        <div className="mt-10">
          <SearchBar />
        </div>


      </section>




      {/* Main Cards */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-8 md:grid-cols-4">


        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-yellow-400">

          <h2 className="text-3xl font-bold">
            🏰 Kingdoms
          </h2>

          <p className="mt-4 text-slate-400">
            Explore kingdoms, power and KvK history.
          </p>

        </div>




        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-yellow-400">

          <h2 className="text-3xl font-bold">
            👑 Governors
          </h2>

          <p className="mt-4 text-slate-400">
            Find top fighters and strongest players.
          </p>

        </div>





        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-yellow-400">

          <h2 className="text-3xl font-bold">
            ⚔️ KvK
          </h2>

          <p className="mt-4 text-slate-400">
            Follow wars, results and rankings.
          </p>

        </div>





        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-yellow-400">

          <h2 className="text-3xl font-bold">
            🏆 Rankings
          </h2>

          <p className="mt-4 text-slate-400">
            Compare players and kingdoms.
          </p>

        </div>



      </section>





      {/* Featured Kingdoms */}
      <section className="mx-auto mt-24 max-w-7xl px-8">


        <h2 className="text-4xl font-bold">
          Featured Kingdoms
        </h2>



        <div className="mt-8 grid gap-6 md:grid-cols-3">



          <div className="rounded-2xl bg-slate-900 p-8">

            <h3 className="text-3xl font-bold text-yellow-400">
              Kingdom 2377
            </h3>

            <p className="mt-4 text-slate-400">
              Power: 120B
            </p>

            <p className="text-slate-400">
              KvK Wins: 8
            </p>

          </div>




          <div className="rounded-2xl bg-slate-900 p-8">

            <h3 className="text-3xl font-bold text-yellow-400">
              Kingdom 3672
            </h3>

            <p className="mt-4 text-slate-400">
              Power: 95B
            </p>

            <p className="text-slate-400">
              KvK Wins: 5
            </p>

          </div>




          <div className="rounded-2xl bg-slate-900 p-8">

            <h3 className="text-3xl font-bold text-yellow-400">
              Kingdom 1452
            </h3>

            <p className="mt-4 text-slate-400">
              Power: 140B
            </p>

            <p className="text-slate-400">
              KvK Wins: 10
            </p>

          </div>


        </div>


      </section>



    </main>
  );
}