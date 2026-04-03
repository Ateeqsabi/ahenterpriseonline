import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ApplicationData {
  full_name: string;   // ✅ FIXED
  phone: string;
  service_id: string;
  pincode: string;
}

export interface Application extends ApplicationData {
  id: string;
  created_at: string;
}

export async function submitApplication(data: ApplicationData) {
  const { data: result, error } = await supabase
    .from('applications')
    .insert([
      {
        full_name: data.full_name,   // ✅ FIXED
        phone: data.phone,
        service_id: data.service_id,
        pincode: data.pincode,
      }
    ])
    .select()
    .maybeSingle();

  if (error) {
    throw error;
  }

  return result;
}

export async function getApplications() {
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data as Application[];
}
