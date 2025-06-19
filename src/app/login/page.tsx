'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { TextField, Button, Box, Typography } from '@mui/material'
import { supabase } from '@/lib/supabaseClient'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [resetSent, setResetSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
    } else {
      router.push('/')
    }
  }

  const handleForgotPassword = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email)
    if (error) setError(error.message)
    else setResetSent(true)
  }

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 8 }}>
      <Typography variant='h5' color='black' sx={{ mb: 2 }}>Login</Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
        <TextField label='Email' type='email' value={email} onChange={e => setEmail(e.target.value)} required />
        <TextField label='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} required />
        {error && <Typography color='error' variant='body2'>{error}</Typography>}
        <Button type='submit' variant='contained'>Login</Button>
      </form>
      <Button sx={{ mt: 2 }} onClick={() => router.push('/signup')}>Create Account</Button>
      <Button sx={{ mt: 2 }} onClick={handleForgotPassword} disabled={!email}>Forgot your password?</Button>
      {resetSent && <Typography color='primary' variant='body2'>Password reset email sent!</Typography>}
    </Box>
  )
}
