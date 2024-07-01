import React, { useState } from "react";
import Planets from "./components/Planets";
import Peoples from "./components/Peoples";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("planets");

  return (
    <QueryClientProvider client={queryClient} className="App">
      <section className="fluid parent-section pt-5">
      <div className="container pt-5">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-md-6 col-12">
      <h1 className="pt-5 pb-3 ">Star wars</h1>
      <Navbar setPage={setPage} />
      <div>{page === "planets" ? <Planets /> : <Peoples />}</div>
      </div>
      </div>
      </div>
      </section>
    </QueryClientProvider>
  );
}

export default App;