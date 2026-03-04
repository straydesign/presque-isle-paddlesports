'use client';

interface CheckfrontBookingProps {
  itemId?: string;
  className?: string;
}

export function CheckfrontBooking({ className = '' }: CheckfrontBookingProps) {
  const checkfrontHost = process.env.NEXT_PUBLIC_CHECKFRONT_HOST;

  if (!checkfrontHost) {
    return (
      <div className={`bg-muted rounded-lg p-8 text-center ${className}`}>
        <p className="text-lg font-bold mb-2">Online Booking Coming Soon</p>
        <p className="text-muted-foreground mb-4">
          Call us to make a reservation in the meantime.
        </p>
        <a
          href="tel:8148383938"
          className="inline-flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Call (814) 838-3938
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Checkfront widget will be embedded here once configured */}
      <div id="checkfront-widget" />
    </div>
  );
}
