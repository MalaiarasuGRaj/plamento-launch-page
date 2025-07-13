-- Add required columns to Waitlist table
ALTER TABLE public.Waitlist 
ADD COLUMN first_name TEXT,
ADD COLUMN last_name TEXT,
ADD COLUMN email TEXT,
ADD COLUMN designation TEXT;

-- Remove the old Name column as it's no longer needed
ALTER TABLE public.Waitlist DROP COLUMN Name;

-- Enable Row Level Security
ALTER TABLE public.Waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert into waitlist (public signup)
CREATE POLICY "Anyone can insert into waitlist" 
ON public.Waitlist 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading waitlist data (for admin purposes)
CREATE POLICY "Anyone can read waitlist" 
ON public.Waitlist 
FOR SELECT 
USING (true);