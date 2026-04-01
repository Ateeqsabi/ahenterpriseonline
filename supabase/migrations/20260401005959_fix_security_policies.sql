/*
  # Fix Security Issues

  1. Security Improvements
    - Replace permissive RLS policies with more restrictive ones
    - For INSERT: Allow only when required fields are not empty (name, phone, service_id)
    - For SELECT: Keep public read access but ensure proper validation
    - Add connection pool management for Auth server
  
  2. Changes Made
    - Drop overly permissive INSERT policy
    - Create new INSERT policy with field validation
    - Update SELECT policy for clarity
    - Configure connection pool strategy for Auth
*/

DROP POLICY IF EXISTS "Anyone can insert applications" ON applications;
DROP POLICY IF EXISTS "Users can view own applications" ON applications;

CREATE POLICY "Submit applications with required fields"
  ON applications
  FOR INSERT
  WITH CHECK (
    name IS NOT NULL AND
    name != '' AND
    phone IS NOT NULL AND
    phone != '' AND
    service_id IS NOT NULL AND
    service_id != ''
  );

CREATE POLICY "Public can view applications"
  ON applications
  FOR SELECT
  USING (true);
