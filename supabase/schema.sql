-- Updated SQL schema for Supabase tables
-- Generated from remote database schema

-- Profiles table referencing auth.users
CREATE TABLE public.profiles (
  user_id uuid NOT NULL PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name text,
  email text,
  phone text,
  address text,
  created_at timestamp with time zone DEFAULT current_timestamp
);

-- Products table (updated structure)
CREATE TABLE public.products (
  id bigint NOT NULL PRIMARY KEY,
  title text NOT NULL,
  subtitle text,
  description text,
  price_before numeric,
  price_after numeric NOT NULL,
  category text NOT NULL,
  size_chart_image text,
  wash_care text,
  slug text,
  discount_percentage integer,
  collection text[] NOT NULL,
  material text,
  images text[] NOT NULL,
  available_sizes text[] NOT NULL,
  available_colors text[] NOT NULL,
  stock_quantity integer,
  is_active boolean,
  created_at timestamp with time zone DEFAULT current_timestamp,
  updated_at timestamp with time zone DEFAULT current_timestamp
);

-- Addresses table for multiple addresses per user
CREATE TABLE public.addresses (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  name text,
  line1 text,
  city text,
  state text,
  pincode text,
  phone text,
  created_at timestamp with time zone DEFAULT current_timestamp
);

-- Wishlist table
CREATE TABLE public.wishlist (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id bigint REFERENCES products(id) ON DELETE CASCADE,
  created_at timestamp with time zone DEFAULT current_timestamp
);

-- Cart table
CREATE TABLE public.cart (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id bigint REFERENCES products(id) ON DELETE CASCADE,
  quantity integer DEFAULT 1,
  created_at timestamp with time zone DEFAULT current_timestamp
);

-- Orders table
CREATE TABLE public.orders (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  status text,
  total_amount numeric,
  created_at timestamp with time zone DEFAULT current_timestamp
);

-- Order items table
CREATE TABLE public.order_items (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  order_id bigint REFERENCES orders(id) ON DELETE CASCADE,
  product_id bigint REFERENCES products(id) ON DELETE SET NULL,
  quantity integer DEFAULT 1,
  price numeric, -- price at the time of order
  created_at timestamp with time zone DEFAULT current_timestamp
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wishlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Allow authenticated user to insert own profile"
ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Allow authenticated user to update own profile"
ON public.profiles
FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Allow authenticated user to view own profile"
ON public.profiles
FOR SELECT
USING (auth.uid() = user_id);

-- RLS Policies for addresses
CREATE POLICY "Allow authenticated user to manage own addresses"
ON public.addresses
FOR ALL
USING (auth.uid() = user_id);

-- RLS Policies for wishlist
CREATE POLICY "Allow authenticated user to manage own wishlist"
ON public.wishlist
FOR ALL
USING (auth.uid() = user_id);

-- RLS Policies for cart
CREATE POLICY "Allow authenticated user to manage own cart"
ON public.cart
FOR ALL
USING (auth.uid() = user_id);

-- RLS Policies for orders
CREATE POLICY "Allow authenticated user to view own orders"
ON public.orders
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Allow authenticated user to insert own orders"
ON public.orders
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- RLS Policies for order_items
CREATE POLICY "Allow authenticated user to view own order items"
ON public.order_items
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM orders 
    WHERE orders.id = order_items.order_id 
    AND orders.user_id = auth.uid()
  )
);

-- Public read access for products (no RLS needed for public data)
-- Products table remains publicly readable for the storefront