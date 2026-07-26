import Link from "next/link";

import { governors } from "@/database/governors";
import { kingdoms } from "@/database/kingdoms";
import { alliances } from "@/database/alliances";


export default function SearchResults({
  query,
}: {
  query: string;
}) {


  if (!query) {
    return null;
  }



  const search = query.toLowerCase();



  const governorResults = governors.filter((governor) =>
    governor.name.toLowerCase().includes(search)
    ||
    governor.kingdom.toLowerCase().includes(search)
  );



  const kingdomResults = kingdoms.filter((kingdom) =>
    kingdom.name.toLowerCase().includes(search)
    ||
    kingdom.id.toString().includes(search)
  );



  const allianceResults = alliances.filter((alliance) =>
    alliance.name.toLowerCase().includes(search)
    ||
    alliance.kingdom.toLowerCase().includes(search)
  );




  return (

    <div className="mt-6 space-y-4">



      {governorResults.map((governor) => (

        <Link
          key={"g"+governor.id}
          href={`/governors/${governor.id}`}
        >

          <div
            className="
            rounded-xl
            border
            border-slate-800
            bg-slate-900
            p-5
            hover:border-yellow-400
            "
          >

            <h3 className="text-xl font-bold text-yellow-400">
              👑 {governor.name}
            </h3>

            <p className="text-slate-300">
              Kingdom {governor.kingdom}
              {" | "}
              KP {governor.kp}
            </p>

          </div>

        </Link>

      ))}




      {kingdomResults.map((kingdom) => (

        <Link
          key={"k"+kingdom.id}
          href={`/kingdoms/${kingdom.id}`}
        >

          <div
            className="
            rounded-xl
            border
            border-slate-800
            bg-slate-900
            p-5
            hover:border-yellow-400
            "
          >

            <h3 className="text-xl font-bold text-yellow-400">
              🏰 {kingdom.name}
            </h3>

            <p className="text-slate-300">
              Power {kingdom.power}
              {" | "}
              KvK Wins {kingdom.kvkWins}
            </p>

          </div>

        </Link>

      ))}




      {allianceResults.map((alliance) => (

        <Link
          key={"a"+alliance.id}
          href={`/alliances/${alliance.id}`}
        >

          <div
            className="
            rounded-xl
            border
            border-slate-800
            bg-slate-900
            p-5
            hover:border-yellow-400
            "
          >

            <h3 className="text-xl font-bold text-yellow-400">
              ⚔️ {alliance.name}
            </h3>


            <p className="text-slate-300">
              Kingdom {alliance.kingdom}
              {" | "}
              Power {alliance.power}
            </p>


          </div>

        </Link>

      ))}



    </div>

  );

}