// lib/supabaseAdmin.ts
// This client uses the SERVICE_ROLE key → only use on SERVER-SIDE (never in browser!)
import { createClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SECRET_KEY) {
  throw new Error(
    'Missing Supabase env vars for admin client: NEXT_PUBLIC_SUPABASE_URL and/or SUPABASE_SECRET_KEY'
  );
}

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
);