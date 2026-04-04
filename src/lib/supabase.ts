import { createClient } from '@supabase/supabase-js';

// Supabase connection
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface ApplicationData {
  full_name: string;
  phone: string;
  service_id?: string; // optional (important fix)
  pincode: string;
}

export interface Application extends ApplicationData {
  id: number;
  created_at: string;
}

// ✅ FIXED INSERT FUNCTION
export async function submitApplication(data: ApplicationData) {
  // Build clean payload (no undefined values)
  const payload: any = {
    full_name: data.full_name,
    phone: data.phone,
    pincode: data.pincode,
  };

  // Only include service_id if present
  if (data.service_id) {
    payload.service_id = data.service_id;
  }

  console.log("Submitting payload:", payload); // debug

  const { error } = await supabase
    .from('applications')
    .insert([payload]);

  if (error) {
    console.error("INSERT ERROR:", error);
    throw error;
  }

  return true;
}

// Fetch applications (no change needed)
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
