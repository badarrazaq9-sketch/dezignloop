// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    'Missing Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL and/or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY'
  );
}

// Single client instance for public/anon usage (your form inserts)
export const supabase = createClient(supabaseUrl, supabasePublishableKey);