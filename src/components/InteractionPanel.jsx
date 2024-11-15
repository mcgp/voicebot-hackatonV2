import React from 'react'
import { FaComments, FaMicrophone, FaFileExport, FaRobot, FaChartBar } from 'react-icons/fa'

export default function InteractionPanel() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-[#1a3b4a] mb-4">Interacción con el Cliente</h2>
      
      <button className="bg-[#1a3b4a] text-white px-4 py-2 rounded flex items-center gap-2 mb-4">
        <FaComments />
        Conversar con un Agente
      </button>

      <div className="border rounded-lg p-4 mb-4">
        <p className="text-gray-600">Emma: Hola Luis Guillermo Pardo, un gusto en saludarlo. Le había Emma, asistente virtual de Indra. Lo estoy llamando para que podamos conversar sobre el vencimiento de su factura por un monto de 100 Pesos Colombianos.</p>
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2">
          <FaComments /> Detener Interacción
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2">
          <FaMicrophone /> Activar/Desactivar Micrófono
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
          <FaFileExport /> Exportar Conversación
        </button>
        <button className="bg-cyan-500 text-white px-4 py-2 rounded flex items-center gap-2">
          <FaRobot /> Text Mining
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center gap-2">
          <FaChartBar /> Costos Estimados
        </button>
      </div>

      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-2">Resultados del Análisis</h3>
        <div className="min-h-[100px]"></div>
      </div>
    </div>
  )
}