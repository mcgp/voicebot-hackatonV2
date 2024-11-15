import React from 'react'

export default function ClientInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-[#1a3b4a] mb-4">Información del Cliente</h2>
      <select className="w-full p-2 mb-4 border rounded">
        <option>Luis Guillermo Pardo</option>
      </select>
      
      <div className="space-y-2">
        <div>
          <span className="font-medium">Nombre: </span>
          <span>Luis Guillermo Pardo</span>
        </div>
        <div>
          <span className="font-medium">Tipología: </span>
          <span>Jurídica</span>
        </div>
        <div>
          <span className="font-medium">Deuda: </span>
          <span>100</span>
        </div>
      </div>
    </div>
  )
}