import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employment',
  description:
    'Join the Presque Isle Paddlesports team. Seasonal and part-time positions available.',
};

export default function EmploymentPage() {
  return (
    <div>
      <div className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Employment</h1>
          <p className="text-xl">Work where summer feels like freedom</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
        <p className="text-lg text-muted-foreground mb-8">
          We&rsquo;re always looking for energetic, friendly people who love the outdoors and enjoy helping others have a great time on the water.
        </p>

        <div className="bg-muted p-8 rounded-lg mb-8">
          <p className="font-medium mb-4">
            All positions are part-time and seasonal (May through September).
          </p>
          <h3 className="text-2xl font-bold mb-4">Positions Available</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Dock Attendants</li>
            <li>• Tour Guides</li>
            <li>• Maintenance Staff</li>
            <li>• Customer Service</li>
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-border rounded-xl p-6 text-center">
            <h3 className="font-bold mb-2">Download Application</h3>
            <p className="text-sm text-muted-foreground mb-4">Print, fill out, and bring it in</p>
            <span className="inline-flex items-center justify-center border border-border rounded-lg px-6 py-3 font-medium text-muted-foreground">
              PDF Coming Soon
            </span>
          </div>
          <div className="bg-white border border-border rounded-xl p-6 text-center">
            <h3 className="font-bold mb-2">Email Us</h3>
            <p className="text-sm text-muted-foreground mb-4">Send your resume and a brief intro</p>
            <a
              href="mailto:info@pippaddlesports.com"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Email Application
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold">How to Apply</h3>
          <div className="space-y-2 text-muted-foreground">
            <p><strong>Email:</strong>{' '}
              <a href="mailto:info@pippaddlesports.com" className="text-primary hover:underline">
                info@pippaddlesports.com
              </a>
            </p>
            <p><strong>Visit us at:</strong></p>
            <div className="ml-4">
              <p>Presque Isle Paddlesports</p>
              <p>Presque Isle State Park</p>
              <p>Erie, PA 16505</p>
            </div>
            <p className="pt-4">
              <strong>Call:</strong>{' '}
              <a href="tel:8148383938" className="text-primary hover:underline">(814) 838-3938</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
