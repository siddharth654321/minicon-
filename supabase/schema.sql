-- SQL schema for Supabase tables

create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  password_hash text not null,
  name text,
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
  user_id uuid references users(id) on delete cascade,
  product_id integer references products(id) on delete cascade,
  created_at timestamp with time zone default current_timestamp
);

create table if not exists cart (
  id bigint generated always as identity primary key,
  user_id uuid references users(id) on delete cascade,
  product_id integer references products(id) on delete cascade,
  quantity integer default 1,
  created_at timestamp with time zone default current_timestamp
);

create table if not exists orders (
  id bigint generated always as identity primary key,
  user_id uuid references users(id) on delete cascade,
  status text,
  total_amount numeric,
  created_at timestamp with time zone default current_timestamp
);
