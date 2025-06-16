import { createClient } from '@supabase/supabase-js'
import { preProduct } from '../src/app/dummyData'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

async function seed() {
  const { error } = await supabase.from('products').insert(preProduct)
  if (error) {
    console.error('Failed to seed products', error)
  } else {
    console.log('Products seeded successfully')
  }
}

seed()
