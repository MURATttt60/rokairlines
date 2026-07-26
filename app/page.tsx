import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)), url('/rok-bg.jpg')",
        }}
      >

        <div className="text-center">

          <h1 className="text-6xl font-bold">
            ROK AIRLINES
          </h1>

          <p className="mt-5 text-xl text-gray-300">
            Rise of Kingdoms Database
          </p>


          <div className="mt-8 flex justify-center gap-5">

            <Link
              href="/governors"
              className="bg-yellow-600 px-8 py-3 rounded-lg font-bold"
            >
              Governors
            </Link>


            <Link
              href="/kingdoms"
              className="border border-yellow-500 px-8 py-3 rounded-lg font-bold"
            >
              Kingdoms
            </Link>


          </div>

        </div>

      </section>

    </main>
  );
}