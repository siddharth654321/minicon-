import { NextRequest, NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabaseServer'

async function getUser(request: NextRequest) {
  const token = request.headers.get('authorization')?.replace('Bearer ', '')
  if (!token) {
    return { user: null, supabase: null, error: new Error('Auth session missing!') }
  }
  const supabase = createSupabaseServerClient(token)
  const { data, error } = await supabase.auth.getUser()
  if (error || !data.user) {
    return { user: null, supabase: null, error }
  }
  return { user: data.user, supabase, error: null }
}

export async function GET(request: NextRequest) {
  const { user, supabase, error } = await getUser(request)
  if (error || !user) {
    return NextResponse.json({ error: error?.message ?? 'Not authenticated' }, { status: 401 })
  }

  const { data, error: dbError } = await supabase
    .from('addresses')
    .select('*')
    .eq('user_id', user.id)

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 })
  }
  return NextResponse.json(data)
}

export async function POST(request: NextRequest) {
  const { user, supabase, error } = await getUser(request)
  if (error || !user) {
    return NextResponse.json({ error: error?.message ?? 'Not authenticated' }, { status: 401 })
  }

  const body = await request.json()
  const { name, line1, city, state, pincode, phone } = body

  const { data, error: dbError } = await supabase
    .from('addresses')
    .insert({ user_id: user.id, name, line1, city, state, pincode, phone })
    .select()
    .single()

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 })
  }
  return NextResponse.json(data)
}

export async function PUT(request: NextRequest) {
  const { user, supabase, error } = await getUser(request)
  if (error || !user) {
    return NextResponse.json({ error: error?.message ?? 'Not authenticated' }, { status: 401 })
  }

  const body = await request.json()
  const { id, ...updates } = body

  const { data, error: dbError } = await supabase
    .from('addresses')
    .update(updates)
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single()

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 })
  }
  return NextResponse.json(data)
}

export async function DELETE(request: NextRequest) {
  const { user, supabase, error } = await getUser(request)
  if (error || !user) {
    return NextResponse.json({ error: error?.message ?? 'Not authenticated' }, { status: 401 })
  }

  const { id } = await request.json()

  const { error: dbError } = await supabase
    .from('addresses')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id)

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 })
  }
  return NextResponse.json({ success: true })
}
