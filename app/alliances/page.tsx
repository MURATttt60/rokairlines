import Navbar from "@/components/Navbar";
import { alliances } from "@/database/alliances";


export default function AlliancesPage() {

  return (

    <main className="min-h-screen bg-[#070b16] text-white">


      <Navbar />


      <section className="mx-auto max-w-7xl px-8 py-20">


        <h1 className="text-5xl font-extrabold text-yellow-400">
          ⚔️ Alliance Explorer
        </h1>


        <p className="mt-4 text-xl text-slate-400">
          Explore Rise of Kingdoms alliances.
        </p>



        <div className="mt-10 grid gap-8 md:grid-cols-3">


          {alliances.map((alliance) => (


            <div
              key={alliance.id}
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
                {alliance.name}
              </h2>



              <div className="mt-6 space-y-3 text-slate-300">


                <p>
                  🏰 Kingdom:
                  {" "}
                  {alliance.kingdom}
                </p>


                <p>
                  ⚡ Power:
                  {" "}
                  {alliance.power}
                </p>


                <p>
                  👥 Members:
                  {" "}
                  {alliance.members}
                </p>


              </div>



              <button
                className="
                mt-8
                rounded-xl
                bg-yellow-500
                px-5
                py-2
                font-bold
                text-black
                "
              >
                View Alliance
              </button>



            </div>


          ))}



        </div>



      </section>



    </main>

  );
}