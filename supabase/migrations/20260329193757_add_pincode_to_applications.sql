/*
  # Add pincode field to applications table

  1. Changes
    - Add `pincode` column to store customer pincode for location-based processing
    - This helps with faster service delivery to specific areas
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'applications' AND column_name = 'pincode'
  ) THEN
    ALTER TABLE applications ADD COLUMN pincode text;
  END IF;
END $$;
