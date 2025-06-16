import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabaseClient'

// Create a new user and sign them in
export async function POST(request: NextRequest) {
  const { email, password, name, address } = await request.json()

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password
  })

  if (signUpError || !signUpData.user) {
    return NextResponse.json({ error: signUpError?.message }, { status: 400 })
  }

  const { error: insertError } = await supabase.from('users').insert({
    id: signUpData.user.id,
    email,
    name,
    address
  })

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 })
  }

  return NextResponse.json({ user: signUpData.user })
}

// Return the currently authenticated user's profile data
export async function GET() {
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    return NextResponse.json({ error: error?.message ?? 'Not authenticated' }, { status: 401 })
  }

  const { data, error: fetchError } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single()

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

// Update the authenticated user's profile
export async function PUT(request: NextRequest) {
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    return NextResponse.json({ error: error?.message ?? 'Not authenticated' }, { status: 401 })
  }

  const { name, address } = await request.json()

  const { data, error: updateError } = await supabase
    .from('users')
    .update({ name, address })
    .eq('id', user.id)
    .select()
    .single()

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
