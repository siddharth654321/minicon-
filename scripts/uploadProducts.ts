import { createClient } from '@supabase/supabase-js';
import { preProduct, Product } from '../src/app/dummyData';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function main() {
  const { data, error } = await supabase
    .from('products')
    .upsert<Product>(preProduct, { onConflict: 'id' })
    .select();
  if (error) {
    console.error('Error inserting products:', error);
    process.exit(1);
  }
  console.log(`Inserted ${data ? data.length : 0} products`);
}

main().then(() => process.exit()).catch((err) => {
  console.error(err);
  process.exit(1);
});
