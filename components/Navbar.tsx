import Link from "next/link";


export default function Navbar() {


  return (

    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-slate-800
      bg-[#070b16]/90
      backdrop-blur
      "
    >


      <div
        className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        px-8
        py-5
        "
      >



        {/* LOGO */}


        <Link
          href="/"
          className="
          text-3xl
          font-extrabold
          text-yellow-400
          "
        >

          🏰 RoK Airlines

        </Link>





        {/* MENU */}



        <nav
          className="
          flex
          gap-7
          text-slate-300
          "
        >


          <Link
            href="/"
            className="hover:text-yellow-400"
          >
            Home
          </Link>



          <Link
            href="/kingdoms"
            className="hover:text-yellow-400"
          >
            🏰 Kingdoms
          </Link>



          <Link
            href="/governors"
            className="hover:text-yellow-400"
          >
            👑 Governors
          </Link>



          <Link
            href="/alliances"
            className="hover:text-yellow-400"
          >
            ⚔️ Alliances
          </Link>



          <Link
            href="/kvk"
            className="hover:text-yellow-400"
          >
            🔥 KvK
          </Link>



          <Link
            href="#"
            className="
            rounded-xl
            bg-yellow-500
            px-4
            py-2
            font-bold
            text-black
            "
          >
            Premium
          </Link>



        </nav>



      </div>


    </header>

  );

}