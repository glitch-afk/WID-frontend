import { useContext, createContext, useState } from 'react'

const IDContext = createContext()

export function IDWrapper({ children }) {
  const [wagpayID, setWagpayID] = useState('')

  return (
    <IDContext.Provider value={{ wagpayID, setWagpayID }}>
      {children}
    </IDContext.Provider>
  )
}

export function useIDContext() {
  return useContext(IDContext)
}
