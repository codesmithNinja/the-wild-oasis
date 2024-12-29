import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://bdogogoqjoagmdtfitxp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkb2dvZ29xam9hZ21kdGZpdHhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMjAwNTAsImV4cCI6MjA1MDc5NjA1MH0.3CBrm9Tf1GRXHh84NXOTrmQ0k9xbAIRGyWYkilItPqM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
