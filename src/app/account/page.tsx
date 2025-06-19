'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@mui/material'
import AccountPage from '../components/account'
import { useAuth } from '../components/AuthProvider'

const Account = () => {
  const { user, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user === null) {
      router.replace('/login')
    }
  }, [user, router])

  if (!user) return null

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <div style={{ padding: 16 }}>
        <Button variant='outlined' onClick={signOut}>Sign Out</Button>
      </div>
      <AccountPage />
    </div>
  )
}

export default Account
