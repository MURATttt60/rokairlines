"use client";

import { useState } from "react";
import SearchResults from "./SearchResults";


export default function SearchBar() {


  const [query, setQuery] = useState("");



  return (

    <div className="mx-auto max-w-2xl">


      <input
        type="text"
        placeholder="Search governors..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="
        w-full
        rounded-xl
        border
        border-slate-700
        bg-slate-900
        px-6
        py-4
        text-lg
        text-white
        outline-none
        focus:border-yellow-400
        "
      />



      <SearchResults query={query} />


    </div>

  );

}