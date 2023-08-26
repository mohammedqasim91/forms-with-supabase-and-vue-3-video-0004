import { createClient } from "@supabase/supabase-js";

const supabaseUrl = " https://qsfcuwavtysejbjrwooj.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzZmN1d2F2dHlzZWpianJ3b29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwMzY2MjYsImV4cCI6MjAwODYxMjYyNn0.18ijh6Z5IMQ5CIqPUiL6cmf2tk3haxlNtc7hdMUpSfk"

export default createClient(supabaseUrl, supabaseKey);