import Navbar from "@/components/Navbar";
import { kingdoms } from "@/database/kingdoms";


export default async function KingdomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {


  const { id } = await params;


  const kingdom = kingdoms.find(
    (item) => item.id === Number(id)
  );



  if (!kingdom) {

    return (

      <main className="min-h-screen bg-[#070b16] text-white">

        <Navbar />

        <div className="p-10 text-3xl">
          Kingdom not found
        </div>

      </main>

    );

  }



  return (

    <main className="min-h-screen bg-[#070b16] text-white">


      <Navbar />


      <section className="mx-auto max-w-5xl px-8 py-20">


        <div
          className="
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          p-10
          "
        >


          <h1 className="text-5xl font-extrabold text-yellow-400">

            🏰 {kingdom.name}

          </h1>



          <div className="mt-8 space-y-4 text-xl text-slate-300">


            <p>
              ⚡ Total Power:
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



        </div>


      </section>


    </main>

  );

}