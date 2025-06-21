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

  const productId = request.nextUrl.searchParams.get('productId')
  if (productId) {
    const { data, error: dbError } = await supabase
      .from('cart')
      .select('id, quantity')
      .eq('user_id', user.id)
      .eq('product_id', Number(productId))
      .maybeSingle()
    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 500 })
    }
    return NextResponse.json(data)
  }

  const { data, error: dbError } = await supabase
    .from('cart')
    .select('quantity, product:products(*)')
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

  const { product_id, quantity = 1 } = await request.json()

  const { data: existing, error: fetchError } = await supabase
    .from('cart')
    .select('id, quantity')
    .eq('user_id', user.id)
    .eq('product_id', product_id)
    .maybeSingle()

  if (fetchError) {
    return NextResponse.json({ error: fetchError.message }, { status: 500 })
  }

  let data, dbError
  if (existing) {
    ;({ data, error: dbError } = await supabase
      .from('cart')
      .update({ quantity: existing.quantity + quantity })
      .eq('id', existing.id)
      .select()
      .single())
  } else {
    ;({ data, error: dbError } = await supabase
      .from('cart')
      .insert({ user_id: user.id, product_id, quantity })
      .select()
      .single())
  }

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

  const { product_id, quantity } = await request.json()

  const { data, error: dbError } = await supabase
    .from('cart')
    .update({ quantity })
    .eq('user_id', user.id)
    .eq('product_id', product_id)
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

  const { product_id } = await request.json()

  const { error: dbError } = await supabase
    .from('cart')
    .delete()
    .eq('user_id', user.id)
    .eq('product_id', product_id)

  if (dbError) {
    return NextResponse.json({ error: dbError.message }, { status: 500 })
  }
  return NextResponse.json({ success: true })
}
