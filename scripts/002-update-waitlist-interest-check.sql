-- Update the CHECK constraint on the interest column to match form options
ALTER TABLE waitlist
DROP CONSTRAINT waitlist_interest_check;

ALTER TABLE waitlist
ADD CONSTRAINT waitlist_interest_check 
CHECK (interest IN ('buying', 'booking', 'selling', 'providing', 'all'));
