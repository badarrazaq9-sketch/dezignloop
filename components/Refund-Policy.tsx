// app/refund-policy/page.tsx
'use client';

import {
  RotateCcw, Shield, CheckCircle2, Ban, Percent, Clock,
  CreditCard, Mail, ArrowRight, AlertTriangle, XCircle,
  Wallet, Calendar, HelpCircle, ChevronRight, FileText,
  Lock, Globe, BadgeCheck, Receipt, Banknote
} from 'lucide-react';
import BlurIn from '@/components/BlurIn';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 md:pt-40 pb-24 bg-white dark:bg-slate-950 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

          {/* Header */}
          <BlurIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-violet-500 text-white shadow-lg mb-4">
                <RotateCcw size={32} />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3">
                Refund Policy
              </h1>
              <p className="text-slate-500 dark:text-slate-400">
                Clear rules for refunds at DezignLoop LLC
              </p>
              <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-500">
                <Calendar size={12} /> Last Updated: May 11, 2026
              </div>
            </div>
          </BlurIn>

          {/* Content */}
          <div className="space-y-6">

            {/* General Policy */}
            <BlurIn>
              <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield size={20} className="text-violet-600 dark:text-violet-400" />
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">General Policy</h2>
                </div>
                <p className="text-violet-800 dark:text-violet-200 text-sm leading-relaxed">
                  Due to the custom nature of our design and development services, <strong>all sales are final</strong> unless otherwise agreed in writing. DezignLoop LLC invests significant time and resources into each project. Refunds are only granted in the specific cases outlined below.
                </p>
              </div>
            </BlurIn>

            {/* Eligible for Refund */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Eligible for Refund</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: 'Project Not Started', desc: 'Full refund — no work has begun and no deliverables provided' },
                    { title: 'Our Breach of Contract', desc: 'Significant breach by DezignLoop LLC that cannot be remedied' },
                    { title: 'Mutual Agreement', desc: 'Both parties agree in writing to terminate and refund' },
                    { title: 'Force Majeure', desc: 'Project cannot be completed due to circumstances beyond our control' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800">
                      <ChevronRight size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-bold text-sm text-slate-900 dark:text-white">{item.title}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BlurIn>

            {/* Non-Refundable Items */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
                    <Ban size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Non-Refundable Items</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  The following are non-refundable under all circumstances:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Deposits or upfront payments once work has commenced',
                    'Completed and delivered work products',
                    'Third-party expenses incurred on your behalf',
                    'Rush fees or expedited delivery charges',
                    'PayPal processing fees',
                    'Stripe processing fees (2.9% + $0.30 per transaction)',
                    'Stock images, fonts, or licensed assets',
                    'Hosting, domain, or plugin costs',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <XCircle size={14} className="text-red-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </BlurIn>

            {/* Partial Refunds */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    <Percent size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Partial Refunds</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  If work has already begun, we may offer a partial refund proportional to the uncompleted portion of the project, minus the following deductions:
                </p>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 space-y-3">
                  {[
                    { label: 'Non-refundable deposit (as specified in contract)', amount: 'Per agreement' },
                    { label: 'Expenses already incurred on your behalf', amount: 'Actual cost' },
                    { label: 'Stripe processing fee', amount: '2.9% + $0.30' },
                    { label: 'PayPal processing fee', amount: 'Varies by region' },
                    { label: 'Administrative processing fee', amount: 'Fixed' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b border-slate-200 dark:border-slate-700 pb-2 last:border-0 last:pb-0">
                      <span className="text-slate-600 dark:text-slate-300">{row.label}</span>
                      <span className="font-mono font-bold text-red-500 text-xs">{row.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurIn>

            {/* Payment Processor Verification & Timeline */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    <Clock size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Refund Processing & Verification</h2>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-5">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-amber-800 dark:text-amber-200 text-sm">
                      <strong>Refund Timeline: 7-10 working days</strong> from approval. This includes verification, processor handling, and bank settlement time.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Stripe */}
                  <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#635BFF] text-white flex items-center justify-center text-xs font-bold">ST</div>
                      <span className="font-bold text-slate-900 dark:text-white">Stripe Verification</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <BadgeCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">Original payment must be verified in Stripe Dashboard</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <BadgeCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">Transaction ID and charge receipt required</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <BadgeCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">Refund issued to original card used for payment</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <BadgeCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">Stripe fee (2.9% + $0.30) is non-refundable</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <BadgeCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">Appears on statement within 7-10 working days</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Lock size={14} className="text-violet-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">PCI DSS Level 1 compliant processing</span>
                      </div>
                    </div>
                  </div>

                  {/* PayPal */}
                  <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#003087] text-white flex items-center justify-center text-xs font-bold">PP</div>
                      <span className="font-bold text-slate-900 dark:text-white">PayPal Verification</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <BadgeCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">Original PayPal transaction ID required</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <BadgeCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">Payment must be verified in PayPal Business account</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <BadgeCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">Refund sent to original PayPal account or card</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <BadgeCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">PayPal processing fees are non-refundable</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <BadgeCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">Appears in PayPal within 7-10 working days</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Lock size={14} className="text-violet-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-600 dark:text-slate-300">Buyer Protection and Seller Protection apply</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Receipt size={18} className="text-violet-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white mb-1">Required for All Refunds</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-600 dark:text-slate-300">
                        <div className="flex items-center gap-1"><ChevronRight size={10} className="text-violet-500" /> Original payment receipt/invoice</div>
                        <div className="flex items-center gap-1"><ChevronRight size={10} className="text-violet-500" /> Transaction ID (Stripe/PayPal)</div>
                        <div className="flex items-center gap-1"><ChevronRight size={10} className="text-violet-500" /> Proof of payment (bank statement)</div>
                        <div className="flex items-center gap-1"><ChevronRight size={10} className="text-violet-500" /> Matching billing email address</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BlurIn>

            {/* How to Request */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    <Wallet size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">How to Request a Refund</h2>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-amber-800 dark:text-amber-200 text-sm">
                      Email <strong>billing@dezignloop.com</strong> within 7 days of payment. All refund requests must be submitted in writing.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                  {['Full name', 'Project details', 'Payment date', 'Amount paid', 'Reason for request', 'Supporting documentation'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={12} className="text-violet-500" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Clock size={12} /> Response: 5 business days</span>
                  <span className="flex items-center gap-1"><CheckCircle2 size={12} /> Approval: 7-10 working days</span>
                  <span className="flex items-center gap-1"><Banknote size={12} /> Refund: 7-10 working days</span>
                </div>
              </div>
            </BlurIn>

            {/* Cancellation by Client */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    <FileText size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Project Cancellation by Client</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  If you choose to cancel a project after work has begun, you remain liable for all work completed up to the cancellation date. Any completed deliverables will be provided to you upon payment for completed work. No refunds will be issued for deposits or payments for completed milestones.
                </p>
              </div>
            </BlurIn>

            {/* Cancellation by Company */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    <Globe size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Project Cancellation by Company</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  If DezignLoop LLC must cancel a project due to unforeseen circumstances, we will provide written notice as soon as possible, deliver all completed work products paid for up to the cancellation date, and issue a prorated refund for any prepaid but uncompleted work within 7-10 working days.
                </p>
              </div>
            </BlurIn>

            {/* Chargebacks */}
            <BlurIn>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="text-red-500 shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-900 dark:text-red-200 text-sm mb-1">Chargebacks</h3>
                    <p className="text-red-800 dark:text-red-300 text-xs leading-relaxed">
                      Chargebacks initiated through your bank or credit card company that violate this policy will be disputed. We recommend contacting us first at billing@dezignloop.com — we resolve issues faster than banks and can process legitimate refunds within 7-10 working days.
                    </p>
                  </div>
                </div>
              </div>
            </BlurIn>

            {/* Changes to Policy */}
            <BlurIn>
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    <Calendar size={20} />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 dark:text-white">Changes to This Policy</h2>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  We may modify this Refund Policy at any time. Changes will not apply retroactively to projects already in progress. The updated version will be indicated by an updated "Last Updated" date.
                </p>
              </div>
            </BlurIn>

            {/* Contact */}
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