import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicy,
});

function RefundPolicy() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-24 md:px-8">
      <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-brand">Cancellation and Refund Policy</h1>
      <p className="mb-12 text-sm text-muted-foreground">Updated on 16/07/2026</p>
      
      <div className="space-y-8 text-foreground/80">
        <p>
          Welcome to Bharat EV! We value your trust and strive to ensure your experience with us is seamless. If you encounter any issues with your purchases, we invite you to review our updated Cancellation and Refund Policy below.
        </p>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Scope of Policy</h2>
          <p>
            This policy applies to the three types of products we offer: Goods, Subscription Plans, and Wallet Services. Each category has its own specific guidelines for cancellations and refunds.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Interpretation and Definitions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-xl font-medium text-foreground">Interpretation</h3>
              <p>
                Words with capitalized initials have specific meanings defined in this policy. The definitions apply equally whether words appear in singular or plural.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-medium text-foreground">Definitions</h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li><strong>Application:</strong> The software provided by Bharat EV, accessible via any electronic device.</li>
                <li><strong>Company:</strong> Bharat EV Private Limited, operating under Bharat EV, located at Bharat EV Corporate Office, New Delhi, India.</li>
                <li><strong>Goods:</strong> Items such as chargers, RFID cards, and accessories offered for sale on our Service.</li>
                <li><strong>Subscription Plans:</strong> Service-based plans to access charging solutions at Bharat EV stations.</li>
                <li><strong>Wallet:</strong> Preloaded funds used within the Bharat EV app for charging transactions.</li>
                <li><strong>Service:</strong> Our website, application, or both.</li>
                <li><strong>Website:</strong> Our online platform, accessible at www.bharatev.in.</li>
                <li><strong>You:</strong> The individual or entity using our services.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Cancellation and Refund Policy by Product Type</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-medium text-foreground">1. Goods (Chargers, RFID Cards, and Accessories)</h3>
              <p>
                <strong>Damaged or Defective Goods:</strong> If you receive a damaged or defective product, we’ll replace it after verification. The replacement process typically takes 7–10 business days.
              </p>
              <p className="mt-2">
                <strong>Cancellation Policy:</strong> Goods can only be replaced if they are damaged or defective. Replacement requests must be made within 14 days of delivery.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-medium text-foreground">2. Subscription Plans</h3>
              <p>
                <strong>Refund Policy:</strong> Due to the nature of subscription services, refunds are not available. However, if you accidentally choose the wrong plan, we will help you switch to the correct plan. This process will take 1–2 business days to complete.
              </p>
              <p className="mt-2">
                <strong>Why We Don't Offer Refunds:</strong> Subscription plans are crafted to meet individual usage needs, and resources are allocated upon purchase. However, we are here to assist and ensure you’re on the plan that suits you best.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-medium text-foreground">3. Wallet Services</h3>
              <p>
                <strong>Refund Policy:</strong> Funds added to the wallet are meant for seamless and uninterrupted charging experiences. While wallet balances are non-refundable, we believe in creating a rewarding journey for every user through added convenience and exclusive benefits.
              </p>
              <p className="mt-2">
                <strong>Commitment to Quality:</strong> Wallet services provide unmatched flexibility, ensuring your EV is always powered without interruptions.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Returning Goods</h2>
          <p>If you need to return a product, kindly send it to:</p>
          <div className="mt-2 mb-4 text-foreground">
            <p>Bharat EV Private Limited</p>
            <p>Bharat EV Corporate Office</p>
            <p>New Delhi, India</p>
          </div>
          <p>
            <strong>Important Note:</strong> We are not responsible for items lost or damaged during return shipping. We recommend using an insured and trackable mail service. Refunds or replacements will only be processed upon receipt of the returned goods.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-foreground">Contact Us</h2>
          <p>
            Your satisfaction is our priority. If you have any questions or need assistance with cancellations or refunds, please reach out to us:
          </p>
          <div className="mt-2 text-foreground">
            <p><strong>Email:</strong> <a href="mailto:bhaaratev@gmail.com" className="transition-colors hover:text-brand">bhaaratev@gmail.com</a></p>
          </div>
          <p className="mt-4">
            We are here to help you navigate your Bharat EV experience with ease and confidence!
          </p>
        </section>
      </div>
    </main>
  );
}
