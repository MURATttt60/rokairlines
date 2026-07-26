import Navbar from "@/components/Navbar";
import Link from "next/link";
import { governors } from "@/database/governors";


export default function GovernorsPage() {

  return (

    <main className="min-h-screen bg-[#070b16] text-white">


      <Navbar />


      <section className="mx-auto max-w-7xl px-8 py-20">


        <h1 className="text-5xl font-extrabold text-yellow-400">
          👑 Top Governors
        </h1>


        <p className="mt-4 text-xl text-slate-400">
          Discover the strongest Rise of Kingdoms players.
        </p>



        <div className="mt-10 grid gap-8 md:grid-cols-3">



          {governors.map((governor) => (


            <Link
              key={governor.id}
              href={`/governors/${governor.id}`}
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
                  {governor.name}
                </h2>



                <div className="mt-6 space-y-3 text-slate-300">


                  <p>
                    🏰 Kingdom:
                    {" "}
                    {governor.kingdom}
                  </p>


                  <p>
                    ⚡ Power:
                    {" "}
                    {governor.power}
                  </p>


                  <p>
                    🔥 KP:
                    {" "}
                    {governor.kp}
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

                  View Profile

                </div>



              </div>


            </Link>


          ))}



        </div>



      </section>



    </main>

  );
}