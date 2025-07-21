import React from "react";
import Logo from "../pngwing.com.png";

import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center gap-4 p-4 border-2 border-white pl-1 py-2">
      {/* className="w-full h-screen p-4 " */}
      <img className="w-[35px]" src={Logo} alt="" />

      <Link to="/" class="!text-red-500 text-2xl font-bold">
        Movies
      </Link>

      <Link to="/watchlist" class="!text-red-500 text-2xl font-bold">
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;
