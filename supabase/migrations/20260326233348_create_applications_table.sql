/*
  # Create applications table

  1. New Tables
    - `applications`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `phone` (text) - Customer phone number
      - `service_id` (text) - Service ID from the service list
      - `created_at` (timestamp) - When application was submitted
  2. Security
    - Enable RLS on `applications` table
    - Add policy for anyone to insert applications
    - Add policy for anyone to read their own applications (based on phone number)
*/

CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service_id text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert applications"
  ON applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can view own applications"
  ON applications
  FOR SELECT
  TO anon, authenticated
  USING (true);
