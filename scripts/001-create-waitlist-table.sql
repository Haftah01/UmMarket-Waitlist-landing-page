-- Create waitlist table for UmMahrket early signups
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  interest TEXT NOT NULL CHECK (interest IN ('buyer', 'seller', 'both')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index for filtering by interest
CREATE INDEX IF NOT EXISTS idx_waitlist_interest ON waitlist(interest);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anonymous users (for waitlist signups)
CREATE POLICY "Allow anonymous waitlist signups" ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow reading own data (by email match - for future use)
CREATE POLICY "Users can view their own waitlist entry" ON waitlist
  FOR SELECT
  TO anon
  USING (false); -- No public reads for now, admin only
