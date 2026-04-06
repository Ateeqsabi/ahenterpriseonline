import { createClient } from '@supabase/supabase-js';

// Supabase connection
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface ApplicationData {
  full_name: string;
  phone: string;
  service_id?: string;
  pincode: string;
  description?: string;
}

export interface Application extends ApplicationData {
  id: number;
  created_at: string;
}

// ✅ FINAL FIXED INSERT FUNCTION
export async function submitApplication(data: ApplicationData) {
  const payload: any = {
    full_name: data.full_name,
    phone: data.phone,
    pincode: data.pincode,
    description: (data.description || '').trim(), // ✅ ALWAYS INCLUDED
  };

  // Only include service_id if present
  if (data.service_id) {
    payload.service_id = data.service_id;
  }

  console.log("Submitting payload:", payload);

  const { error } = await supabase
    .from('applications')
    .insert([payload]);

  if (error) {
    console.error("INSERT ERROR:", error);
    throw error;
  }

  return true;
}

// Fetch applications
export async function getApplications() {
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("FETCH ERROR:", error);
    throw error;
  }

  return data as Application[];
}
