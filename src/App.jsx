import React from 'react'
import Header from './components/Header'
import ClientInfo from './components/ClientInfo'
import InteractionPanel from './components/InteractionPanel'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Header />
      <div className="space-y-8">
        <ClientInfo />
        <InteractionPanel />
      </div>
    </div>
  )
}

export default App