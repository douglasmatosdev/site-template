'use client'
import React from 'react'

const IsClientCtx = React.createContext(false)

export const IsClientCtxProvider = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
    const [isClient, setIsClient] = React.useState(false)
    React.useEffect(() => setIsClient(true), [])

    return <IsClientCtx.Provider value={isClient}>{children}</IsClientCtx.Provider>
}

export function useIsClient(): React.ServerContextJSONValue {
    return React.useContext(IsClientCtx)
}
