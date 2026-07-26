import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.8)), url('/rok-bg.jpg')",
        }}
      >
        <div className="flex h-full flex-col items-center justify-center text-center px-5">

          <h1 className="text-6xl font-extrabold tracking-wide">
            ROK AIRLINES
          </h1>

          <p className="mt-5 text-xl text-gray-300">
            Rise of Kingdoms Commander & Kingdom Database
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              href="/governors"
              className="rounded-lg bg-yellow-600 px-6 py-3 font-bold hover:bg-yellow-500"
            >
              Governors
            </Link>


            <Link
              href="/kingdoms"
              className="rounded-lg border border-yellow-500 px-6 py-3 font-bold hover:bg-yellow-500 hover:text-black"
            >
              Kingdoms
            </Link>

          </div>

        </div>
      </section>


      {/* CARDS */}

      <section className="grid md:grid-cols-3 gap-6 p-10">

        <div className="rounded-xl bg-zinc-900 p-6 text-center border border-zinc-700">
          <h2 className="text-2xl font-bold">
            👑 Governors
          </h2>

          <p className="mt-3 text-gray-400">
            Player statistics, KP, Power and rankings.
          </p>
        </div>



        <div className="rounded-xl bg-zinc-900 p-6 text-center border border-zinc-700">

          <h2 className="text-2xl font-bold">
            🏰 Kingdoms
          </h2>

          <p className="mt-3 text-gray-400">
            Kingdom history, KvK records and information.
          </p>

        </div>



        <div className="rounded-xl bg-zinc-900 p-6 text-center border border-zinc-700">

          <h2 className="text-2xl font-bold">
            ⚔️ Commanders
          </h2>

          <p className="mt-3 text-gray-400">
            Commander builds and equipment guides.
          </p>

        </div>


      </section>


    </main>
  );
}