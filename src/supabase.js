import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wqzatqohalouwiuvlnrs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxemF0cW9oYWxvdXdpdXZsbnJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgyNjI1MDcsImV4cCI6MjAyMzgzODUwN30.49OGNymWCWrRcFXyi-SpuovQL66stmqdKBDTaEzA7PY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
