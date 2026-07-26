import Navbar from "@/components/Navbar";
import Link from "next/link";
import { kingdoms } from "@/database/kingdoms";


export default function KingdomsPage() {

  return (

    <main className="min-h-screen bg-[#070b16] text-white">


      <Navbar />


      <section className="mx-auto max-w-7xl px-8 py-20">


        <h1 className="text-5xl font-extrabold text-yellow-400">
          🏰 Kingdom Explorer
        </h1>


        <p className="mt-4 text-xl text-slate-400">
          Explore Rise of Kingdoms kingdoms and statistics.
        </p>



        <div className="mt-10 grid gap-8 md:grid-cols-3">


          {kingdoms.map((kingdom) => (


            <Link
              key={kingdom.id}
              href={`/kingdoms/${kingdom.id}`}
            >


              <div
                className="
                rounded-2xl
                border
                border-slate-800
                bg-slate-900
                p-8
                transition
                hover:-translate-y-2
                hover:border-yellow-400
                "
              >


                <h2 className="text-3xl font-bold text-yellow-400">
                  {kingdom.name}
                </h2>



                <div className="mt-6 space-y-3 text-slate-300">


                  <p>
                    ⚡ Power:
                    {" "}
                    {kingdom.power}
                  </p>


                  <p>
                    👑 Governors:
                    {" "}
                    {kingdom.governors}
                  </p>


                  <p>
                    🏆 KvK Wins:
                    {" "}
                    {kingdom.kvkWins}
                  </p>


                </div>



                <div
                  className="
                  mt-8
                  inline-block
                  rounded-xl
                  bg-yellow-500
                  px-5
                  py-2
                  font-bold
                  text-black
                  "
                >
                  View Kingdom
                </div>



              </div>


            </Link>


          ))}



        </div>



      </section>


    </main>

  );
}