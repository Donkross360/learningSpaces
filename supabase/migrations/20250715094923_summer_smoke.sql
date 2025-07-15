/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `name` (text, optional)
      - `created_at` (timestamp)
      - `status` (text, default 'pending')

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for public insert access
    - Add policy for admin read access
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert into waitlist (for signups)
CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read waitlist (for admin dashboard)
CREATE POLICY "Authenticated users can read waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);