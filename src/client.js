import { createClient } from '@supabase/supabase-js'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3dWxndGpvdnN2bXR5d3BuZmxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3NzIzNzAsImV4cCI6MjAzOTM0ODM3MH0.qac0yiW0hufI6dXULlqgmfsyJyZbJhXjgDpA6-plWLs';
const URL = 'https://jwulgtjovsvmtywpnflr.supabase.co';

export const supabase = createClient(URL, API_KEY)