import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-24 md:px-8">
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-brand">Privacy Policy</h1>
      <p className="mb-12 text-sm text-muted-foreground">Updated on 16/07/2026</p>
      
      <div className="space-y-8 text-foreground/80">
        <p>
          Welcome to Bharat EV! At Bharat EV Private Limited and its subsidiaries, affiliates, and associated companies (referred to individually and collectively as "Bharat EV"), we prioritize the security and privacy of your data and personal information. Whether you're browsing, purchasing, or using our products and services through our websites, mobile applications, or platforms (collectively called "Platforms"), or engaging with us in other ways, this policy helps clarify how your information is collected, used, stored, and protected.
        </p>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Acknowledgement & Consent</h2>
          <p>
            By accessing our Platforms, creating an account, or using our products and services, you acknowledge and consent to Bharat EV’s collection, use, storage, and processing of your personal and non-personal information, as outlined in this Privacy Policy. You agree that you are legally authorized to share the required information with Bharat EV and confirm that no unauthorized sharing occurs that could cause harm to any party. If you disagree with any of these terms, we recommend that you refrain from accessing our Platforms or using our services.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Information We Collect</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-xl font-medium text-foreground">Personal Information:</h3>
              <p>We collect personal data when you register, use, or purchase services on our Platforms. This includes:</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Name</li>
                <li>Contact details such as phone number and email</li>
                <li>Vehicle-related data: Registration number, model, and location</li>
                <li>Current Location</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium text-foreground">Non-Personal Information:</h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Cookies and similar technologies</li>
                <li>Social Media Data</li>
                <li>Third-Party Data</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium text-foreground">Device Permission:</h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Location Access (To get nearest charging station)</li>
                <li>Camera Access (To read charging station qr code)</li>
                <li>Notification Access (To get promotional and transactional push and email notifications)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Purpose of Collection & Use</h2>
          <p>We use your data for purposes such as:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Providing and improving services and customer support.</li>
            <li>Tailoring content and offers to your preferences.</li>
            <li>Informing you of updates, promotions, or new products.</li>
            <li>Enhancing the security and performance of our Platforms.</li>
            <li>Complying with legal and regulatory requirements.</li>
            <li>Allowing you to participate in interactive features, surveys, or promotions.</li>
            <li>Fraud prevention, diagnostics, and analytics.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Information Sharing & Transfer</h2>
          <p>Bharat EV may share your information with trusted third parties, including:</p>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Service providers, CPO partners, and OEM partners who assist in delivering our products and services.</li>
            <li>Payment processors to facilitate purchases.</li>
            <li>Government agencies or law enforcement, as required by law.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Communication Preferences</h2>
          <p>
            We may contact you via email, phone, text message, or push notifications to inform you about products, services, or updates. You can adjust your preferences for notifications at any time through your account settings or by contacting customer support.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Security Measures</h2>
          <p>
            We take strict measures to ensure that your data is protected against unauthorized access, alteration, or loss. However, you acknowledge that no method of data transmission is entirely secure.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Your Rights and Control</h2>
          <ul className="mt-2 list-inside list-disc space-y-1">
            <li>Access or correct your personal information.</li>
            <li>Restrict or withdraw consent for processing your data.</li>
            <li>Request the deletion of your personal data, in accordance with legal obligations.</li>
            <li>Disable communications or marketing preferences at any time.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Data Retention</h2>
          <p>
            We retain your data for as long as necessary to provide you with services, fulfill legal obligations, or resolve disputes. You can request the deletion of your data at any time.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Changes to This Privacy Policy</h2>
          <p>
            Bharat EV reserves the right to modify or update this policy at any time. Any updates will be reflected on our Platforms, along with the "Last Updated" date at the top of the document.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Contact Us</h2>
          <p>For any questions or concerns regarding this Privacy Policy, or if you wish to exercise your rights, please contact our Grievance Redressal Officer at:</p>
          <div className="mt-2 text-foreground">
            <p><strong>Email:</strong> <a href="mailto:bhaaratev@gmail.com" className="transition-colors hover:text-brand">bhaaratev@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+918901222728" className="transition-colors hover:text-brand">+91 89012 22728</a></p>
            <p><strong>Address:</strong> B-3, SEC-21A, Phase-1 Industrial Estate, HSIIDC Industrial Area, Barhi, Sonipat, Haryana – 131101, India</p>
          </div>
        </section>
      </div>
    </main>
  );
}
