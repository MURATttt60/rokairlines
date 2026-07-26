import Navbar from "@/components/Navbar";
import { governors } from "@/database/governors";


export default async function GovernorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {


  const { id } = await params;


  const governor = governors.find(
    (item) => item.id === Number(id)
  );



  if (!governor) {

    return (

      <main className="min-h-screen bg-[#070b16] text-white">

        <Navbar />

        <div className="p-10 text-3xl">
          Governor not found
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

            👑 {governor.name}

          </h1>




          <div className="mt-8 space-y-4 text-xl text-slate-300">


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





          <h2 className="mt-10 text-3xl font-bold text-yellow-400">

            ⚔️ Commanders

          </h2>




          <div className="mt-5 space-y-3">


            {governor.commanders.map((commander) => (


              <div
                key={commander}
                className="
                rounded-xl
                bg-slate-800
                p-4
                text-lg
                "
              >

                ⚔️ {commander}

              </div>


            ))}



          </div>



        </div>



      </section>



    </main>

  );

}