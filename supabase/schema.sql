-- Schema definitions for Supabase

create table if not exists products (
  id bigint primary key,
  title text not null,
  subtitle text,
  price numeric not null,
  img text,
  label text,
  item text,
  color text,
  size text,
  image text
);

create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  password_hash text not null,
  created_at timestamp with time zone default now()
);

create table if not exists cart_items (
  id bigint generated always as identity primary key,
  user_id uuid references users(id) on delete cascade,
  product_id bigint references products(id) on delete cascade,
  quantity integer not null default 1,
  created_at timestamp with time zone default now()
);

create table if not exists wishlist_items (
  id bigint generated always as identity primary key,
  user_id uuid references users(id) on delete cascade,
  product_id bigint references products(id) on delete cascade,
  created_at timestamp with time zone default now()
);

create table if not exists orders (
  id bigint generated always as identity primary key,
  user_id uuid references users(id) on delete cascade,
  total numeric not null,
  status text default 'pending',
  created_at timestamp with time zone default now()
);

create table if not exists order_items (
  id bigint generated always as identity primary key,
  order_id bigint references orders(id) on delete cascade,
  product_id bigint references products(id) on delete cascade,
  quantity integer not null default 1,
  price numeric not null
);
