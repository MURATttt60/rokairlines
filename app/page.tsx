import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.85)), url('/rok-bg.jpg')",
        }}
      >
        <div className="flex h-full flex-col items-center justify-center text-center px-6">

          <h1 className="text-6xl font-extrabold tracking-widest">
            ROK AIRLINES
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Rise of Kingdoms Database & Statistics Platform
          </p>

          <p className="mt-2 text-gray-400">
            Governors • Kingdoms • Commanders • KvK Records
          </p>


          <div className="mt-8 flex gap-5">

            <Link
              href="/governors"
              className="rounded-lg bg-yellow-600 px-7 py-3 font-bold transition hover:bg-yellow-500"
            >
              Governors
            </Link>


            <Link
              href="/kingdoms"
              className="rounded-lg border border-yellow-500 px-7 py-3 font-bold transition hover:bg-yellow-500 hover:text-black"
            >
              Kingdoms
            </Link>


          </div>

        </div>
      </section>



      {/* Feature Cards */}
      <section className="grid gap-6 p-10 md:grid-cols-3">


        <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 text-center">

          <div className="text-4xl">
            👑
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            Governors
          </h2>

          <p className="mt-3 text-gray-400">
            Track player statistics, power, kill points and achievements.
          </p>

        </div>



        <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 text-center">

          <div className="text-4xl">
            🏰
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            Kingdoms
          </h2>

          <p className="mt-3 text-gray-400">
            Explore kingdoms, KvK history, rankings and battle records.
          </p>

        </div>




        <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-6 text-center">

          <div className="text-4xl">
            ⚔️
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            Commanders
          </h2>

          <p className="mt-3 text-gray-400">
            Discover commander builds, talents and equipment guides.
          </p>

        </div>


      </section>



      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 text-center text-gray-500">

        ROK Airlines © 2026  
        <br />
        Rise of Kingdoms Community Database

      </footer>


    </main>
  );
}