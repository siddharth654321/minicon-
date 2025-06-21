'use client'
import React from 'react'
import { Button } from '@mui/material'
import AccountPage from '../components/account'
import { useAuth } from '../components/AuthProvider'

const Account = () => {
  const {  signOut } = useAuth()

 

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
