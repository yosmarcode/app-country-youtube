import React from 'react'

const CardComponent = (dataRow) => {
  return (
    <div className="sm:w-32 lg:w-48 h-56  bg-zinc-800 hover:bg-gray-600 rounded-lg border-2 border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/40 hover:cursor-pointer hover:transition-colors hover:-translate-y-1 hover:scale-110 duration-300">
    <a href={`/country/${dataRow.cca2}`}>
      <div className="pt-2">
          <div className="flex justify-center items-center h-36">
              <img src={dataRow.flags?.png} title={dataRow.name?.common ?? ''} alt={dataRow.name?.common ?? ''} width={120} height={120} />
          </div>
  
     </div>
     {dataRow.name?.common && (<div className="w-full text-center bg-slate-800 h-12 mt-4 bottom-0 text-md">
      <span>{dataRow.name?.common}</span>
     </div>)}
     </a>
  
  
  </div>
  )
}

export default CardComponent