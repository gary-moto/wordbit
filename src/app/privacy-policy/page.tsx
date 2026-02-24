import { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for WordBit - Free Online Text Tools.",
  alternates: { canonical: "https://wordbit.io/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <ToolLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2c2825] mb-2">Privacy Policy</h1>
        <p className="text-[#a09890] mb-8">Last updated: February 24, 2026</p>

        <div className="space-y-6 text-[#5a524b]">
          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">1. Introduction</h2>
            <p>Welcome to WordBit. We are committed to protecting your privacy. This Privacy Policy explains how we handle your information when you visit wordbit.io.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">2. Information We Collect</h2>
            <p><strong>We do not collect personal information.</strong> All text processing runs entirely in your browser. Your text is never uploaded to our servers. We do not require accounts or sign-ins.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">3. Cookies &amp; Analytics</h2>
            <p>We may use cookies for analytics and advertising purposes. Third-party services such as Google Analytics and Google AdSense may place cookies on your device to provide usage statistics and relevant advertisements. You can control cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">4. Third-Party Advertising</h2>
            <p>We display advertisements through Google AdSense. Third-party vendors, including Google, use cookies to serve ads based on your prior visits. You can opt out of personalized advertising at <a href="https://www.google.com/settings/ads" className="text-[#e07a5f] hover:underline">Google Ads Settings</a> or visit <a href="https://www.aboutads.info/" className="text-[#e07a5f] hover:underline">aboutads.info</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">5. Data Security</h2>
            <p>Since all processing happens locally in your browser, your data never leaves your device. We implement reasonable security measures to protect the limited information we collect through analytics.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">6. Children&apos;s Privacy</h2>
            <p>Our service is not directed to children under 13. We do not knowingly collect personal information from children.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at privacy@wordbit.io.</p>
          </section>
        </div>
      </div>
    </ToolLayout>
  );
}
