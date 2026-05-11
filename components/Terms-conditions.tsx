// components/Terms-conditions.tsx
'use client';

import {
  FileText, Globe, CreditCard, Lock, AlertTriangle, Scale,
  Ban, CheckCircle2, ChevronRight, Mail, ArrowRight, Calendar,
  User, Shield, Gavel, Eye, Zap, XCircle
} from 'lucide-react';
import BlurIn from '@/components/BlurIn';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 md:pt-40 pb-24 bg-white dark:bg-slate-950 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          {/* Header */}
          <BlurIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500 text-white shadow-lg mb-4">
                <FileText size={32} />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3">
                Terms of Service
              </h1>
              <p className="text-slate-500 dark:text-slate-400">
                Rules for using DezignLoop LLC services
              </p>
              <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-500">
                <Calendar size={12} /> Last Updated: May 12, 2026
              </div>
            </div>
          </BlurIn>

          {/* Content */}
          <div className="space-y-6">

            {/* 1. Acceptance */}
            <BlurIn>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  {/* <HandHelping size={20} className="text-blue-600 dark:text-blue-400" /> */}
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
                </div>
                <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                  By accessing or using DezignLoop LLC services, you agree to be bound by these Terms of Service and any applicable laws. If you do not agree with any part of these terms, please do not access the Site. These terms constitute a legally binding agreement between you and DezignLoop LLC.
                </p>
              </div>
            </BlurIn>

            {/* 2. Company Info */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Globe size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">2. Company Information</h2>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Legal Name</div>
                      <div className="font-bold text-slate-900 dark:text-white">DezignLoop LLC</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Business Type</div>
                      <div className="font-bold text-slate-900 dark:text-white">Limited Liability Company</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Registered In</div>
                      <div className="font-bold text-slate-900 dark:text-white">United States</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Website</div>
                      <div className="font-bold text-slate-900 dark:text-white">dezignloop.com</div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
                  Our services are provided subject to the laws of the state in which we are registered and applicable federal laws. References to "Company," "we," "our," or "us" mean DezignLoop LLC.
                </p>
              </div>
            </BlurIn>

            {/* 3. Services */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Zap size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">3. Services & Deliverables</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  We provide custom design and development services. All deliverables are subject to the specific terms outlined in your project proposal or contract. Unless otherwise agreed in writing:
                </p>
                <div className="space-y-3">
                  {[
                    { ok: true, text: 'We retain ownership of all source files and design assets until full payment is received' },
                    { ok: true, text: 'Upon full payment, you receive a license to use the final deliverables for their intended purpose' },
                    { ok: false, text: 'You may not resell, redistribute, or claim ownership of our source files' },
                    { ok: true, text: 'We reserve the right to display completed work in our portfolio unless an NDA is in place' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                      {item.ok ? (
                        <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                      ) : (
                        <XCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                      )}
                      <span className="text-sm text-slate-600 dark:text-slate-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurIn>

            {/* 4. Payments */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <CreditCard size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">4. Payments & Billing</h2>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-amber-800 dark:text-amber-200 text-sm">
                      All payments are processed securely through <strong>PayPal</strong> and/or <strong>Stripe</strong>. By making a payment, you agree to their terms and conditions in addition to ours.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#003087] text-white flex items-center justify-center text-xs font-bold">PP</div>
                      <span className="font-bold text-sm text-slate-900 dark:text-white">PayPal</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2"><ChevronRight size={12} className="text-blue-500 mt-0.5 shrink-0" />Buyer Protection eligible</li>
                      <li className="flex items-start gap-2"><ChevronRight size={12} className="text-blue-500 mt-0.5 shrink-0" />PayPal account or guest checkout</li>
                      <li className="flex items-start gap-2"><ChevronRight size={12} className="text-blue-500 mt-0.5 shrink-0" />Fees vary by region and payment type</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#635BFF] text-white flex items-center justify-center text-xs font-bold">ST</div>
                      <span className="font-bold text-sm text-slate-900 dark:text-white">Stripe</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2"><ChevronRight size={12} className="text-blue-500 mt-0.5 shrink-0" />PCI DSS Level 1 compliant</li>
                      <li className="flex items-start gap-2"><ChevronRight size={12} className="text-blue-500 mt-0.5 shrink-0" />All major cards accepted</li>
                      <li className="flex items-start gap-2"><ChevronRight size={12} className="text-blue-500 mt-0.5 shrink-0" />Processing fee: 2.9% + $0.30</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    'Payments must be made according to the schedule outlined in your project agreement',
                    'Late payments may result in project delays or suspension of services',
                    'You are responsible for any applicable taxes, fees, or currency conversion charges',
                    'We reserve the right to change our pricing at any time with notice for ongoing projects',
                    'Deposits are non-refundable once work has commenced (see Refund Policy)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <ChevronRight size={14} className="text-blue-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </BlurIn>

            {/* 5. User Responsibilities */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <User size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">5. User Responsibilities</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">You agree to:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Provide accurate and complete information when requested',
                    'Maintain the confidentiality of any account credentials',
                    'Use our services in compliance with all applicable laws',
                    'Not use our services to transmit harmful or illegal content',
                    'Not interfere with the security or integrity of our systems',
                    'Not attempt to reverse engineer or extract source code',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-blue-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </BlurIn>

            {/* 6. Intellectual Property */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Lock size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">6. Intellectual Property</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  All content on this website, including text, graphics, logos, icons, images, audio clips, digital downloads, and software, is the property of DezignLoop LLC and is protected by United States and international copyright, trademark, and other intellectual property laws. Unauthorized use may result in legal action. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from our Site without prior written consent.
                </p>
              </div>
            </BlurIn>

            {/* 7. Limitation of Liability */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Scale size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">7. Limitation of Liability</h2>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-4">
                  <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                    To the maximum extent permitted by law, DezignLoop LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, data loss, or business interruption.
                  </p>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our total liability for any claim arising from these terms or our services shall not exceed the total amount paid by you to us in the 12 months preceding the claim. This limitation applies regardless of the form of action, whether in contract, tort, negligence, strict liability, or otherwise.
                </p>
              </div>
            </BlurIn>

            {/* 8. Disclaimer */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Eye size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">8. Disclaimer of Warranties</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our services are provided <strong>"as is"</strong> and <strong>"as available"</strong> without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, secure, or free of viruses or other harmful components. We disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </div>
            </BlurIn>

            {/* 9. Indemnification */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Shield size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">9. Indemnification</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless DezignLoop LLC, its members, managers, employees, agents, and affiliates from any claims, damages, losses, liabilities, costs, or expenses (including reasonable attorneys' fees) arising from your use of our services, violation of these terms, or infringement of any third-party rights.
                </p>
              </div>
            </BlurIn>

            {/* 10. Governing Law */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Gavel size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">10. Governing Law & Dispute Resolution</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State of [Your State], United States, without regard to conflict of law principles.
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4">
                  <div className="font-bold text-sm text-slate-900 dark:text-white mb-2">Dispute Resolution Process:</div>
                  <div className="space-y-2">
                    {[
                      'Any disputes shall first be attempted to be resolved through good-faith negotiation',
                      'If unresolved within 30 days, disputes shall be settled by binding arbitration',
                      'Arbitration conducted in [Your City, State] per American Arbitration Association rules',
                      'You waive any right to participate in class actions against DezignLoop LLC',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <span className="font-bold text-blue-500">{i + 1}.</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BlurIn>

            {/* 11. Termination */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Ban size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">11. Termination</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We reserve the right to terminate or suspend your access to our services at any time, with or without notice, for any reason, including violation of these terms, fraudulent activity, or non-payment. Upon termination, all provisions that by their nature should survive termination shall remain in effect, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </div>
            </BlurIn>

            {/* 12. Changes to Terms */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Calendar size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">12. Changes to Terms</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We may modify these Terms of Service at any time. Changes will be effective immediately upon posting with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the revised terms. We encourage you to review these terms periodically.
                </p>
              </div>
            </BlurIn>

            {/* 13. Contact */}
            <BlurIn>
              <div className="bg-blue-500 rounded-2xl p-6 text-white text-center">
                <Mail size={24} className="mx-auto mb-3 opacity-80" />
                <p className="font-bold mb-1">13. Contact Us</p>
                <p className="text-sm opacity-90 mb-4">If you have questions about these Terms of Service:</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {/* <a href="mailto:legal@dezignloop.com" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors">
                    legal@dezignloop.com <ArrowRight size={14} />
                  </a> */}
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-white/30 transition-colors">
                    Contact Support
                  </a>
                </div>
              </div>
            </BlurIn>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}