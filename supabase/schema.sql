-- SQL schema for Supabase tables

-- Remove the old users table and use a profiles table referencing auth.users
create table if not exists profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  name text,
  email text,
  phone text,
  address text,
  created_at timestamp with time zone default current_timestamp
);

create table if not exists products (
  id integer primary key,
  title text not null,
  subtitle text,
  price numeric,
  img text,
  label text,
  item text,
  color text,
  size text,
  image text,
  created_at timestamp with time zone default current_timestamp
);

create table if not exists wishlist (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id) on delete cascade,
  product_id integer references products(id) on delete cascade,
  created_at timestamp with time zone default current_timestamp
);

create table if not exists cart (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id) on delete cascade,
  product_id integer references products(id) on delete cascade,
  quantity integer default 1,
  created_at timestamp with time zone default current_timestamp
);

create table if not exists orders (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id) on delete cascade,
  status text,
  total_amount numeric,
  created_at timestamp with time zone default current_timestamp
);
create table if not exists order_items (
  id bigint generated always as identity primary key,
  order_id bigint references orders(id) on delete cascade,
  product_id integer references products(id) on delete set null,
  quantity integer default 1,
  price numeric, -- price at the time of order
  created_at timestamp with time zone default current_timestamp
);
-- Enable RLS for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to insert their own profile
CREATE POLICY "Allow authenticated user to insert own profile"
ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Allow authenticated users to update their own profile
CREATE POLICY "Allow authenticated user to update own profile"
ON public.profiles
FOR UPDATE
USING (auth.uid() = user_id);

-- Allow authenticated users to view their own profile
CREATE POLICY "Allow authenticated user to view own profile"
ON public.profiles
FOR SELECT
USING (auth.uid() = user_id);

-- Addresses table for multiple addresses per user
create table if not exists addresses (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id) on delete cascade,
  name text,
  line1 text,
  city text,
  state text,
  pincode text,
  phone text,
  created_at timestamp with time zone default current_timestamp
);

-- Enable RLS for addresses
ALTER TABLE public.addresses ENABLE ROW LEVEL SECURITY;

-- Policies for addresses
CREATE POLICY "Allow authenticated user to manage own addresses"
ON public.addresses
FOR ALL
USING (auth.uid() = user_id);
