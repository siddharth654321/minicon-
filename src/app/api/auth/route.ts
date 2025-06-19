import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabaseServer'

// Create a new user and sign them in (Auth only)
export async function POST(request: NextRequest) {
  const { email, password, name } = await request.json()

  // Sign up user with Supabase Auth only
  const supabase = createSupabaseServerClient()
  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password
  })

  if (signUpError || !signUpData.user) {
    return NextResponse.json({ error: signUpError?.message }, { status: 400 })
  }

  let profileError = null
  if (signUpData.session) {
    const supabaseProfile = createSupabaseServerClient(signUpData.session.access_token)
    const { error } = await supabaseProfile.from('profiles').insert([
      {
        user_id: signUpData.user.id,
        name,
        email
      }
    ])
    profileError = error
  }

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 500 })
  }

  return NextResponse.json({ user: signUpData.user })
}

// Return the currently authenticated user's Auth data
export async function GET(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }
  const supabase = createSupabaseServerClient(token)
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    return NextResponse.json({ error: error?.message ?? 'Not authenticated' }, { status: 401 })
  }

  return NextResponse.json(user)
}

// Update the authenticated user's Auth profile (email/password)
export async function PUT(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }
  const supabase = createSupabaseServerClient(token)
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    return NextResponse.json({ error: error?.message ?? 'Not authenticated' }, { status: 401 })
  }

  const { email, password } = await request.json()
  let updateError = null
  let updatedUser = user

  // Update email if provided
  if (email && email !== user.email) {
    const { data, error: emailError } = await supabase.auth.updateUser({ email })
    if (emailError) updateError = emailError
    else updatedUser = data.user
  }

  // Update password if provided
  if (password) {
    const { data, error: passError } = await supabase.auth.updateUser({ password })
    if (passError) updateError = passError
    else updatedUser = data.user
  }

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 })
  }

  return NextResponse.json(updatedUser)
}
