import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Link from "next/link";

import { kingdoms } from "@/database/kingdoms";
import { governors } from "@/database/governors";
import { alliances } from "@/database/alliances";
import { kvkRanking } from "@/database/kvk";


export default function Home() {


  const topKingdoms = kingdoms.slice(0, 3);
  const topGovernors = governors.slice(0, 3);
  const topAlliances = alliances.slice(0, 3);
  const topPlayers = kvkRanking.slice(0, 3);



  return (

    <main className="min-h-screen bg-[#070b16] text-white">


      <Navbar />



      {/* HERO */}

      <section className="mx-auto max-w-7xl px-8 py-20 text-center">


        <h1 className="text-6xl font-extrabold text-yellow-400">

          🏰 RoK Airlines

        </h1>


        <p className="mt-5 text-xl text-slate-400">

          Rise of Kingdoms Analytics Explorer

        </p>



        <div className="mt-10">

          <SearchBar />

        </div>


      </section>





      {/* LIVE KVK */}


      <section className="mx-auto max-w-7xl px-8">


        <div
          className="
          rounded-3xl
          border
          border-red-900
          bg-slate-900
          p-8
          "
        >


          <h2 className="text-4xl font-bold text-red-400">

            🔥 Live KvK

          </h2>


          <p className="mt-4 text-xl text-slate-300">

            Kingdom 2377 ⚔️ Kingdom 3672

          </p>


          <p className="mt-2 text-slate-400">

            Battle status: Active

          </p>


        </div>


      </section>






      {/* KINGDOMS */}


      <section className="mx-auto max-w-7xl px-8 py-16">


        <h2 className="text-4xl font-bold text-yellow-400">

          🏰 Top Kingdoms

        </h2>



        <div className="mt-8 grid gap-6 md:grid-cols-3">


          {topKingdoms.map((kingdom)=>(


            <Link
              key={kingdom.id}
              href={`/kingdoms/${kingdom.id}`}
            >


              <div
                className="
                rounded-2xl
                bg-slate-900
                p-6
                hover:border-yellow-400
                border
                border-slate-800
                "
              >


                <h3 className="text-2xl font-bold">

                  {kingdom.name}

                </h3>


                <p className="mt-3 text-slate-300">

                  Power: {kingdom.power}

                </p>


                <p className="text-slate-300">

                  KvK Wins: {kingdom.kvkWins}

                </p>


              </div>


            </Link>


          ))}


        </div>


      </section>






      {/* GOVERNORS */}



      <section className="mx-auto max-w-7xl px-8">


        <h2 className="text-4xl font-bold text-yellow-400">

          👑 Top Governors

        </h2>



        <div className="mt-8 grid gap-6 md:grid-cols-3">


          {topGovernors.map((governor)=>(


            <Link
              key={governor.id}
              href={`/governors/${governor.id}`}
            >


              <div
                className="
                rounded-2xl
                bg-slate-900
                p-6
                border
                border-slate-800
                hover:border-yellow-400
                "
              >


                <h3 className="text-2xl font-bold">

                  👑 {governor.name}

                </h3>


                <p className="mt-3 text-slate-300">

                  KP: {governor.kp}

                </p>


                <p className="text-slate-300">

                  Power: {governor.power}

                </p>


              </div>


            </Link>


          ))}


        </div>


      </section>






      {/* ALLIANCES */}



      <section className="mx-auto max-w-7xl px-8 py-16">


        <h2 className="text-4xl font-bold text-yellow-400">

          ⚔️ Top Alliances

        </h2>



        <div className="mt-8 grid gap-6 md:grid-cols-3">


          {topAlliances.map((alliance)=>(


            <Link
              key={alliance.id}
              href={`/alliances/${alliance.id}`}
            >


              <div
                className="
                rounded-2xl
                bg-slate-900
                p-6
                border
                border-slate-800
                hover:border-yellow-400
                "
              >


                <h3 className="text-2xl font-bold">

                  ⚔️ {alliance.name}

                </h3>


                <p className="mt-3 text-slate-300">

                  Power: {alliance.power}

                </p>


                <p className="text-slate-300">

                  Members: {alliance.members}

                </p>


              </div>


            </Link>


          ))}


        </div>


      </section>





      {/* KV K RANKING */}



      <section className="mx-auto max-w-7xl px-8 pb-20">


        <h2 className="text-4xl font-bold text-yellow-400">

          🔥 KvK Ranking

        </h2>


        <div className="mt-8 space-y-4">


          {topPlayers.map((player)=>(


            <div
              key={player.rank}
              className="
              rounded-xl
              bg-slate-900
              p-5
              "
            >

              #{player.rank} {player.name}

              {" | "}

              KP: {player.kp}


            </div>


          ))}


        </div>


      </section>



    </main>

  );

}