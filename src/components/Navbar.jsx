import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage("planets")} className="planet-btn mb-3 ">Planets</button>
      <span><button onClick={() => setPage("peoples")} className="planet-btn mb-3 mx-2 ">Peoples</button></span>
    </nav>
  );
};

export default Navbar;
