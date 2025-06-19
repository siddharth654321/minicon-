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
    .from('profiles')
    .select('*')
    .eq('user_id', user.id)
    .maybeSingle()

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 })
  }
  return NextResponse.json(data ?? null)
}

export async function POST(request: NextRequest) {
  const { user, supabase, error } = await getUser(request)
  if (error || !user) {
    return NextResponse.json({ error: error?.message ?? 'Not authenticated' }, { status: 401 })
  }

  const body = await request.json()
  const { name, email, phone, address } = body

  const { data, error: dbError } = await supabase
    .from('profiles')
    .insert({ user_id: user.id, name, email, phone, address })
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
  const { name, email, phone, address } = body

  const { data, error: dbError } = await supabase
    .from('profiles')
    .update({ name, email, phone, address })
    .eq('user_id', user.id)
    .select()
    .single()

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 })
  }
  return NextResponse.json(data)
}
