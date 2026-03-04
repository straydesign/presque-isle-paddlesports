import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policies',
  description:
    'Weather, cancellation, safety, and fee policies for Presque Isle Paddlesports.',
};

export default function PoliciesPage() {
  return (
    <div>
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Policies</h1>
          <p className="text-xl">Clear guidelines for a safe, great experience</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20 space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-4">Weather Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            We operate weather permitting. Safety comes first. If weather conditions are unsafe, we&rsquo;ll help you reschedule at no charge. Last-minute cancellations due to weather will receive full refunds or rebooking options.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Cancellation Policy</h2>
          <div className="text-muted-foreground leading-relaxed space-y-2">
            <p><strong>Paddle rentals:</strong> Cancel up to 24 hours before for full refund</p>
            <p><strong>Motorboats:</strong> Cancel 48 hours before for full refund</p>
            <p><strong>Tours:</strong> Cancel 48 hours before for full refund</p>
            <p className="mt-4">Late cancellations may incur a 50% fee. No-shows forfeit full payment.</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Safety Rules</h2>
          <ul className="text-muted-foreground leading-relaxed space-y-2">
            <li>• Life jackets must be worn at all times on the water</li>
            <li>• Follow all posted signs and markers</li>
            <li>• Stay within designated rental areas</li>
            <li>• No alcohol or drugs while operating any watercraft</li>
            <li>• Children under 12 must be with an adult</li>
            <li>• Report any equipment issues immediately</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Fees &amp; Fuel</h2>
          <p className="text-muted-foreground leading-relaxed">
            Motorboat rentals require a $200 refundable security deposit. Fuel is included in the hourly rate — we&rsquo;ll fill it, you return it as-is. Damage beyond normal wear may incur additional fees.
          </p>
        </section>
      </div>
    </div>
  );
}
