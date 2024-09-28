import React, { useState } from "react";
import CardComponent from "./CardComponent";

const MainComponent = (response) => {
  const [formValue, setFormValue] = useState();
  const [dataResponse, setDataResponse] = useState(response ?? [])

    const searchInput = () => {
        if (formValue) {
            let data = Object.values(response)

            let _response = data.filter((x) => x?.name?.common.toUpperCase().includes(formValue.toUpperCase()))
            if (_response){
            setDataResponse(_response ?? [])
            }
        }
    }

  return (

    <main className="bg-gray-900 dark:bg-gray-800">

      <h1 className="ml-4 text-start">Lista de Paises</h1>
      <div className="sticky top-0 gap-6 flex justify-between pt-10 pb-10">
        <input
          type="search"
          name="search"
          className="input-search h-12 w-full rounded-md pl-3 text-black "
          placeholder="Buscar (VENEZUELA)"
          id="input-search"
          onChange={(e) => {
            setFormValue(e.target.value)
        }}
        onKeyUp={searchInput}
        />
        <button className="h-12 w-full lg:w-64 rounded-md bg-gray-600 p-3 pl-3 dark:bg-gray-900">
          Buscar
        </button>
      </div>

      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7 lg:gap-6 xl:grid-cols-8">
        {Object.values(dataResponse).map((row, i) => (
          <CardComponent {...row} key={i + 1} />
        ))}
      </ul>
    </main>

  );
};

export default MainComponent;
