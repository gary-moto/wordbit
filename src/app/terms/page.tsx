import { Metadata } from "next";
import ToolLayout from "@/components/ToolLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for WordBit - Free Online Text Tools.",
  alternates: { canonical: "https://wordbit.io/terms" },
};

export default function TermsPage() {
  return (
    <ToolLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-[#2c2825] mb-2">Terms of Service</h1>
        <p className="text-[#a09890] mb-8">Last updated: February 24, 2026</p>

        <div className="space-y-6 text-[#5a524b]">
          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">1. Acceptance of Terms</h2>
            <p>By accessing and using WordBit (wordbit.io), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">2. Description of Service</h2>
            <p>WordBit provides free online text processing tools. All tools run entirely in your browser — no data is sent to or stored on our servers.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">3. Use of Service</h2>
            <p>You agree to use WordBit only for lawful purposes. You may not use our service to process illegal, harmful, or infringing content. We reserve the right to restrict access to users who violate these terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">4. Disclaimer of Warranties</h2>
            <p>WordBit is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, error-free, or that results will be accurate.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">5. Limitation of Liability</h2>
            <p>In no event shall WordBit or its operators be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">6. Intellectual Property</h2>
            <p>The WordBit name, logo, and website design are our intellectual property. You retain all rights to any content you process using our tools.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">7. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#2c2825] mb-2">8. Contact</h2>
            <p>Questions about these Terms? Contact us at legal@wordbit.io.</p>
          </section>
        </div>
      </div>
    </ToolLayout>
  );
}
