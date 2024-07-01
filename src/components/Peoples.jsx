import React, { useState } from "react";
import { useQuery } from "react-query";
import People from "./People";

const fetchPeoples = async (page) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

const Peoples = () => {
  const [page, setPage] = useState(1);
  const { data, status, isFetching } = useQuery(["people", page], () => fetchPeoples(page), {
    staleTime: 0,
    keepPreviousData: true,
  });

  return (
    <div>
      <button onClick={() => setPage((old) => Math.max(old - 1, 1))} disabled={page === 1} className="py-2 px-4 text-light prev-btn">
        Previous Page
      </button>
      <h6 className="mt-2">Page: {page}</h6>
      <button onClick={() => setPage((old) => old + 1)} disabled={!data || !data.next} className="py-2 px-4 mb-3 text-light prev-btn">
        Next Page
      </button>
      {status === "loading" && !isFetching && (
        <div>Loading data...</div>
      )}

      {status === "error" && (
        <div>Error fetching data</div>
      )}

      {status === "success" && (
        <div>
          {data.results.map((people) => (
            <People key={people.name} people={people} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Peoples;
