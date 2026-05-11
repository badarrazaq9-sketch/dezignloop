// app/privacy-policy/page.tsx
'use client';

import {
  Shield, Eye, CreditCard, Server, Cookie, UserCheck, Calendar,
  Lock, Globe, Mail, ArrowRight, CheckCircle2,
  AlertTriangle, Fingerprint, HardDrive, Share2, Baby, ChevronRight,
  MessageSquare, Phone
} from 'lucide-react';
import BlurIn from '@/components/BlurIn';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 md:pt-40 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          {/* Header */}
          <BlurIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500 text-white shadow-lg mb-4">
                <Shield size={32} />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3">
                Privacy Policy
              </h1>
              <p className="text-slate-500 dark:text-slate-400">
                How DezignLoop LLC protects your data
              </p>
              <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-500">
                <Calendar size={12} /> Last Updated: May 11, 2026
              </div>
            </div>
          </BlurIn>

          {/* Content Cards */}
          <div className="space-y-6">

            {/* Intro */}
            <BlurIn>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6">
                <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
                  <strong>DezignLoop LLC</strong> ("Company", "we", "our", "us") respects your privacy and is committed to protecting it through this Privacy Policy. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website and related services (collectively, the "Site"). Please read this carefully. If you do not agree, please do not access the Site.
                </p>
              </div>
            </BlurIn>

            {/* 1. Information We Collect */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Fingerprint size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">1. Information We Collect</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and any other details you provide through forms, account creation, purchases, or direct communications.
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    We may also automatically collect certain information about your device and browsing actions through cookies, analytics tools, and similar technologies.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: 'Identity', desc: 'Name, username, account details' },
                      { title: 'Contact', desc: 'Email, phone, postal address' },
                      { title: 'Technical', desc: 'IP address, browser, device info' },
                      { title: 'Usage', desc: 'How you interact with our site' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                        <ChevronRight size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        <div>
                          <div className="font-bold text-sm text-slate-900 dark:text-white">{item.title}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </BlurIn>

            {/* 2. How We Use Your Information */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Server size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">2. How We Use Your Information</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  We may use the information we collect from you to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Provide, operate, and maintain our services',
                    'Process transactions and send order confirmations',
                    'Respond to your requests and provide customer support',
                    'Send marketing and promotional communications (if you opt in)',
                    'Send SMS notifications if you provide consent',
                    'Improve our website, services, and user experience',
                    'Comply with legal obligations',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </BlurIn>

            {/* 3. SMS/Mobile Messaging Privacy */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <MessageSquare size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">3. SMS/Mobile Messaging Privacy</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  If you provide your phone number and opt in to receive SMS messages from DezignLoop LLC:
                </p>
                <div className="space-y-3">
                  {[
                    'You consent to receive text messages (including marketing and transactional messages) at the number you provided',
                    'Message frequency may vary',
                    'Message and data rates may apply depending on your carrier and plan',
                    'You can opt out at any time by replying STOP to any message we send you',
                    'For help, reply HELP or email us at info@dezignloop.com',
                    'Your consent to receive SMS messages is not a condition of purchase',
                    'We will never share your mobile number with third parties for their own marketing purposes',
                    'We do not share, sell, or rent mobile opt-in data or consent with third parties or affiliates',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                      <Phone size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurIn>

            {/* 4. Payment Processing */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <CreditCard size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">4. Payment Processing</h2>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-amber-800 dark:text-amber-200 text-sm">
                      <strong>We never store your full card details.</strong> All payments are handled securely by PayPal and Stripe.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#003087] text-white flex items-center justify-center text-xs font-bold">PP</div>
                      <span className="font-bold text-sm text-slate-900 dark:text-white">PayPal</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Processes PayPal payments. Collects transaction & device data per their own privacy policy.</p>
                    <a href="https://paypal.com/privacy" target="_blank" rel="noopener" className="text-xs text-[#003087] font-bold hover:underline">View PayPal Policy →</a>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#635BFF] text-white flex items-center justify-center text-xs font-bold">ST</div>
                      <span className="font-bold text-sm text-slate-900 dark:text-white">Stripe</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Processes card payments. PCI DSS Level 1 compliant. Own privacy policy applies.</p>
                    <a href="https://stripe.com/privacy" target="_blank" rel="noopener" className="text-xs text-[#635BFF] font-bold hover:underline">View Stripe Policy →</a>
                  </div>
                </div>
              </div>
            </BlurIn>

            {/* 5. Sharing Your Information */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Share2 size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">5. Sharing Your Information</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  We do not sell or rent your personal information to third parties. We may share your information with:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'PayPal & Stripe', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
                    { name: 'Service Providers', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
                    { name: 'Email/SMS Delivery', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300' },
                    { name: 'Legal Authorities', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' },
                    { name: 'Business Transfers', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' },
                  ].map((tag, i) => (
                    <span key={i} className={`px-3 py-1.5 rounded-lg text-xs font-bold ${tag.color}`}>
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </BlurIn>

            {/* 6. Your Rights */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <UserCheck size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">6. Your Rights</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Access, update, or delete your personal information',
                    'Opt out of marketing communications',
                    'Opt out of SMS messages at any time (reply STOP)',
                    'Request a copy of your personal data',
                    'Withdraw consent at any time',
                    'Data portability',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </BlurIn>

            {/* 7. Security */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Lock size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">7. Security</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure.
                </p>
              </div>
            </BlurIn>

            {/* 8. Cookies & Tracking */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Cookie size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">8. Cookies & Tracking</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  We use cookies to enhance your experience and analyze traffic. <strong>PayPal and Stripe</strong> may also place cookies during checkout to process payments securely.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Essential', 'Analytics', 'Functional', 'Payment (3rd Party)'].map((type, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </BlurIn>

            {/* 9. Children's Privacy */}
            <BlurIn>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-5 text-center">
                <Baby size={24} className="text-red-500 mx-auto mb-2" />
                <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                  Not for users under <strong>18</strong>. We do not knowingly collect children's data.
                </p>
              </div>
            </BlurIn>

            {/* 10. Changes to This Policy */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Calendar size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">10. Changes to This Privacy Policy</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date and will be effective as soon as it is accessible.
                </p>
              </div>
            </BlurIn>

            {/* 11. Contact Us */}
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