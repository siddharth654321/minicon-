import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

// Create a new user and sign them in
export async function POST(request: NextRequest) {
  const { email, password, name, address } = await request.json()

  console.log('POST /api/auth payload', { email, name, address })

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password
  })

  console.log('signUp result', { signUpData, signUpError })

  if (signUpError || !signUpData.user) {
    return NextResponse.json({ error: signUpError?.message }, { status: 400 })
  }

  const { data: insertData, error: insertError } = await supabase
    .from('users')
    .insert({
      id: signUpData.user.id,
      email,
      name,
      address
    })
    .select()
    .single()

  console.log('insert result', { insertData, insertError })

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  return NextResponse.json({ user: signUpData.user })
}

// Return the currently authenticated user's profile data
export async function GET() {
  const { data: { user }, error } = await supabase.auth.getUser()

  console.log('GET /api/auth user', { user, error })

  if (error || !user) {
    return NextResponse.json({ error: error?.message ?? 'Not authenticated' }, { status: 401 })
  }

  const { data, error: fetchError } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single()

  console.log('GET profile result', { data, fetchError })

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

// Update the authenticated user's profile
export async function PUT(request: NextRequest) {
  const { data: { user }, error } = await supabase.auth.getUser()

  console.log('PUT /api/auth user', { user, error })

  if (error || !user) {
    return NextResponse.json({ error: error?.message ?? 'Not authenticated' }, { status: 401 })
  }

  const { name, address } = await request.json()

  console.log('PUT /api/auth payload', { name, address })

  const { data, error: updateError } = await supabase
    .from('users')
    .update({ name, address })
    .eq('id', user.id)
    .select()
    .single()

  console.log('update result', { data, updateError })

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
