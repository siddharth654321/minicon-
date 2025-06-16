'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import type { User } from '@supabase/supabase-js'

interface AuthContextValue {
  user: User | null
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  signOut: async () => {}
})

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, signOut }}>{children}</AuthContext.Provider>
}
