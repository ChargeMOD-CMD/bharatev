import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions")({
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-24 md:px-8">
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-brand">Terms and Conditions</h1>
      <p className="mb-12 text-sm text-muted-foreground">Updated on 16/07/2026</p>
      
      <div className="space-y-8 text-foreground/80">
        <p>
          Please read these Terms of Service carefully as they contain important information about your legal rights, remedies, and obligations. By accessing or using our website, www.bharatev.in, and our services, you agree to comply with and be bound by these Terms of Service.
        </p>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Overview of Services</h2>
          <p>
            The Website provides detailed information about Bharat EV’s EV charging network, including station locations, collaborations for distributorship, and access to a cloud-based ecosystem designed to improve the charging network. Additionally, the Website allows for the booking and payment of services by clients/customers of Bharat EV.
          </p>
          <p className="mt-2">
            The Website may contain links to third-party websites or resources. These services are subject to different terms and conditions, and Bharat EV is not responsible for their availability or accuracy.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Modifications to the Terms</h2>
          <p>
            Bharat EV reserves the right to modify these Terms at any time. Continued use of the Website constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Account Responsibilities</h2>
          <p>
            As a registered user, you are responsible for maintaining the confidentiality and security of your User Account credentials. Payments made via your User Account are deemed genuine and valid.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Intellectual Property Rights</h2>
          <p>
            All intellectual property rights related to the Website are the exclusive property of Bharat EV. No licenses or rights are granted except those explicitly stated in these Terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Payment Processing</h2>
          <p>
            Payments on the Website are facilitated by Razorpay. All payments will be considered valid, and Bharat EV assumes no responsibility for fraudulent transactions.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Reviews and Ratings</h2>
          <p>
            Users may submit public reviews and ratings about their experiences. Reviews must be accurate and not contain offensive or defamatory language.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Restrictions and Prohibited Uses</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Violate any applicable laws, agreements, or third-party rights.</li>
            <li>Use automated means to access or interact with the Website.</li>
            <li>Engage in activities that damage or impair the Website's performance or security.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Termination and Suspension</h2>
          <p>
            Bharat EV may terminate or suspend your access to the Website without notice if you violate these Terms or applicable laws.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Limitation of Liability</h2>
          <p>
            Bharat EV disclaims all liability for incidental, special, consequential, or exemplary damages arising from your use of the Website. Aggregate liability is limited to amounts paid by you for services via the Website.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Indemnification</h2>
          <p>
            You agree to indemnify and hold Bharat EV harmless from any claims or damages arising out of your use of the Website or breach of these Terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Dispute Resolution and Arbitration</h2>
          <p>
            All disputes arising from these Terms shall be settled by arbitration under the Arbitration and Conciliation Act, 1996, in India.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Governing Law</h2>
          <p>
            These Terms are governed by Indian law, with the courts in New Delhi having exclusive jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Feedback</h2>
          <p>
            Feedback submitted by users is considered non-confidential and may be used by Bharat EV without compensation.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Refund Policy</h2>
          <p>
            Customers may request refunds for issues such as erroneous charges or service failures within 6 months of the transaction. Refunds are subject to approval and processed within 5-7 business days if approved.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Contact Us</h2>
          <p>For inquiries regarding these Terms, please contact us at:</p>
          <div className="mt-2 text-foreground">
            <p><strong>Email:</strong> hello@bharatev.in</p>
            <p><strong>Address:</strong> Bharat EV Corporate Office, New Delhi, India</p>
          </div>
        </section>
      </div>
    </main>
  );
}
