import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage("planets")} className="planet-btn mb-3 py-2 px-5 fs-5">Planets</button>
      <button onClick={() => setPage("peoples")} className="planet-btn mb-3 mx-2 py-2 px-5 fs-5">Peoples</button>
    </nav>
  );
};

export default Navbar;
