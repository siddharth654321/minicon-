'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { TextField, Button, Box, Typography } from '@mui/material'

export default function SignUpPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name })
    })
    const data = await res.json()
    if (!res.ok) {
      setError(data.error)
    } else {
      router.push('/login')
    }
  }

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 8 }}>
      <Typography variant='h5' color='black' sx={{ mb: 2 }}>Sign Up</Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
        <TextField label='Name' value={name} onChange={e => setName(e.target.value)} required />
        <TextField label='Email' type='email' value={email} onChange={e => setEmail(e.target.value)} required />
        <TextField label='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} required />
        {error && <Typography color='error' variant='body2'>{error}</Typography>}
        <Button type='submit' variant='contained'>Create Account</Button>
      </form>
      <Button sx={{ mt: 2 }} onClick={() => router.push('/login')}>Back to Login</Button>
    </Box>
  )
}
