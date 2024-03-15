import React from "react";
import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    searchParams.set("aramaTerimi", e.target[0].value);

    setSearchParams(searchParams);
  };

  const handleChange = (e) => {
    searchParams.set("sırala", e.target.value);

    setSearchParams(searchParams);
  };

  return (
    <div className="mt-3 d-flex gap-3 align-items-center justify-content-between">
      <div className="d-flex gap-3 align-items-center">
        <label>Sırala</label>
        <select
          defaultValue={searchParams.get("sırala")}
          onChange={handleChange}
          className="form-select"
        >
          <option>A-Z</option>
          <option>Z-A</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          defaultValue={searchParams.get("aramaTerimi")}
          placeholder="Aratılacak Metin"
          className="form-control"
          type="text"
        />
        <button className="btn btn-dark">Ara</button>
      </form>
    </div>
  );
};

export default FilterArea;
