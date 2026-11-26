// components/QuestionnaireForm.tsx
// ─────────────────────────────────────────────────────────────────────────
// DezignLoop project questionnaire — the real form (replaces the Oct 2026
// scaffold). Four steps, modeled on TechCore Studio's proven Website
// Workbook, adapted to DezignLoop's services and light theme.
//
// Field mapping to POST /api/questionnaire:
//   name, email, phone, service, budget, timePreference, business,
//   message (all extra answers, labeled one per line — the API folds
//   `message` into the service value so no answer is ever lost).
// ─────────────────────────────────────────────────────────────────────────
'use client';

import { useEffect, useState } from 'react';

const SERVICES = [
  'Web Design',
  'Logo & Branding',
  'E-commerce Store',
  'SEO',
  'Mobile App',
  'Custom Software',
  'Something Else',
];

const INDUSTRIES = [
  'Technology & Software',
  'Healthcare & Medical',
  'Finance & Banking',
  'Retail & E-commerce',
  'Education & Training',
  'Real Estate',
  'Hospitality & Tourism',
  'Restaurant & Food',
  'Fitness & Wellness',
  'Fashion & Beauty',
  'Construction & Trades',
  'Consulting & Coaching',
  'Non-Profit',
  'Other',
];

const LOGO_OPTIONS = ['Yes, I have one', 'No, I need one', 'Not sure yet'];

const BUDGETS = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $5,000',
  '$5,000 – $10,000',
  'Over $10,000',
  'Not sure yet',
];

const TIMELINES = [
  'As soon as possible',
  'Within 1 month',
  '1 – 3 months',
  'Just researching',
];

const STEP_TITLES = [
  'Your details',
  'Your business & project',
  'Budget, timeline & setup',
  'Anything else?',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  industry: string;
  businessName: string;
  service: string;
  logo: string;
  slogan: string;
  purpose: string;
  hasWebsite: string;
  existingWebsiteUrl: string;
  colorPreferences: string;
  competitors: string;
  paymentIntegration: string;
  specificRequirements: string;
  contentPages: string;
  budget: string;
  timeline: string;
  hasDomain: string;
  domainProvider: string;
  domainUsername: string;
  hasHosting: string;
  hostingProvider: string;
  hostingUsername: string;
  notes: string;
}

const INITIAL: FormState = {
  name: '',
  email: '',
  phone: '',
  industry: '',
  businessName: '',
  service: '',
  logo: '',
  slogan: '',
  purpose: '',
  hasWebsite: '',
  existingWebsiteUrl: '',
  colorPreferences: '',
  competitors: '',
  paymentIntegration: '',
  specificRequirements: '',
  contentPages: '',
  budget: '',
  timeline: '',
  hasDomain: '',
  domainProvider: '',
  domainUsername: '',
  hasHosting: '',
  hostingProvider: '',
  hostingUsername: '',
  notes: '',
};

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition';

const labelClass = 'block text-sm font-medium text-gray-700 mb-2';

function ChoiceRow({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`px-4 py-2.5 rounded-lg border-2 text-sm font-semibold transition ${
            value === opt
              ? 'border-primary bg-primary text-white'
              : 'border-gray-300 bg-white text-gray-700 hover:border-primary'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default function QuestionnaireForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // The "Send my answers" button appears in the exact spot the step-3
  // "Continue" button just occupied, so a double-click / double-tap on
  // Continue can land on Send and submit step 4 with empty notes before
  // the user ever sees the notes box (observed in the 2026-11-23 live
  // test). Keep Send disarmed briefly after arriving on the last step.
  const [submitArmed, setSubmitArmed] = useState(false);

  useEffect(() => {
    if (step === STEP_TITLES.length - 1) {
      setSubmitArmed(false);
      const t = setTimeout(() => setSubmitArmed(true), 800);
      return () => clearTimeout(t);
    }
    setSubmitArmed(false);
  }, [step]);

  const set =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const setValue = (field: keyof FormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const stepValid = (): boolean => {
    if (step === 0) {
      return (
        form.name.trim().length > 1 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
      );
    }
    if (step === 1) return form.service !== '';
    if (step === 2) return form.budget !== '' && form.timeline !== '';
    return true;
  };

  const handleNext = () => {
    if (!stepValid()) {
      setError(
        step === 0
          ? 'Please add your name and a valid email so we can reply.'
          : 'Please complete this step before continuing.'
      );
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, STEP_TITLES.length - 1));
  };

  const handleBack = () => {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ignore a submit that lands within the arming window after step 4
    // appears (double-click carry-over from Continue) — the button is
    // also disabled then, this is the second line of defence.
    if (!submitArmed) return;
    setError(null);
    setIsSubmitting(true);

    const lines: Array<[string, string]> = [
      ['Industry', form.industry],
      ['Business name', form.businessName],
      ['Logo', form.logo],
      ['Slogan', form.slogan],
      ['Purpose of the website', form.purpose],
      [
        'Existing website',
        form.hasWebsite === 'yes'
          ? form.existingWebsiteUrl.trim() || 'Yes'
          : form.hasWebsite === 'no'
            ? 'No'
            : '',
      ],
      ['Color preferences', form.colorPreferences],
      ['Competitors / sites you like', form.competitors],
      ['Payment integration', form.paymentIntegration],
      ['Specific requirements', form.specificRequirements],
      ['Content pages', form.contentPages],
      [
        'Domain',
        form.hasDomain === 'yes'
          ? `Yes — ${form.domainProvider.trim()}${form.domainUsername.trim() ? ` (${form.domainUsername.trim()})` : ''}`.trim()
          : form.hasDomain === 'no'
            ? 'No'
            : '',
      ],
      [
        'Hosting',
        form.hasHosting === 'yes'
          ? `Yes — ${form.hostingProvider.trim()}${form.hostingUsername.trim() ? ` (${form.hostingUsername.trim()})` : ''}`.trim()
          : form.hasHosting === 'no'
            ? 'No'
            : '',
      ],
      ['Anything else', form.notes],
    ];
    const message = lines
      .filter(([, v]) => v.trim() !== '')
      .map(([k, v]) => `${k}: ${v.trim()}`)
      .join('\n');

    try {
      const res = await fetch('/api/questionnaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || undefined,
          business: form.businessName.trim() || undefined,
          service: form.service,
          budget: form.budget,
          timePreference: form.timeline,
          message: message || undefined,
        }),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        setSubmitted(true);
      } else {
        setError(
          data?.message ||
            'Something went wrong. Please try again or email support@dezignloop.com.'
        );
      }
    } catch {
      setError(
        'Connection error. Please check your internet and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-10 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Thanks, {form.name.split(' ')[0] || 'friend'}!
        </h2>
        <p className="text-gray-600">
          Your answers are in. Our team will review them and reach out shortly
          with next steps and a straight price.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Progress */}
      <div className="px-8 pt-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-gray-900">
            Step {step + 1} of {STEP_TITLES.length}: {STEP_TITLES[step]}
          </p>
          <p className="text-sm text-gray-500">
            {Math.round(((step + 1) / STEP_TITLES.length) * 100)}%
          </p>
        </div>
        <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary-dark transition-all duration-300"
            style={{
              width: `${((step + 1) / STEP_TITLES.length) * 100}%`,
            }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {step === 0 && (
          <>
            <div>
              <label className={labelClass}>Full name *</label>
              <input
                type="text"
                value={form.name}
                onChange={set('name')}
                className={inputClass}
                placeholder="Jane Smith"
                required
              />
            </div>
            <div>
              <label className={labelClass}>Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={set('email')}
                className={inputClass}
                placeholder="jane@mybusiness.com"
                required
              />
            </div>
            <div>
              <label className={labelClass}>Phone (optional)</label>
              <input
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                className={inputClass}
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label className={labelClass}>Industry</label>
              <select
                value={form.industry}
                onChange={set('industry')}
                className={inputClass}
              >
                <option value="">Select your industry...</option>
                {INDUSTRIES.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <div>
              <label className={labelClass}>Business name</label>
              <input
                type="text"
                value={form.businessName}
                onChange={set('businessName')}
                className={inputClass}
                placeholder="Your business or brand name"
              />
            </div>
            <div>
              <label className={labelClass}>What do you need? *</label>
              <select
                value={form.service}
                onChange={set('service')}
                className={inputClass}
                required
              >
                <option value="">Select a service...</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Do you have a logo?</label>
              <ChoiceRow
                value={form.logo}
                onChange={setValue('logo')}
                options={LOGO_OPTIONS}
              />
              {form.logo === 'Yes, I have one' && (
                <p className="mt-2 text-sm text-gray-500">
                  You can send it to us by reply email after submitting —
                  no upload needed here.
                </p>
              )}
            </div>
            <div>
              <label className={labelClass}>Business slogan (optional)</label>
              <input
                type="text"
                value={form.slogan}
                onChange={set('slogan')}
                className={inputClass}
                placeholder="Your tagline or slogan"
              />
            </div>
            <div>
              <label className={labelClass}>
                What is the main purpose of the website?
              </label>
              <textarea
                value={form.purpose}
                onChange={set('purpose')}
                className={inputClass}
                rows={3}
                placeholder="Generate leads, sell products, showcase a portfolio..."
              />
            </div>
            <div>
              <label className={labelClass}>
                Do you already have a website?
              </label>
              <ChoiceRow
                value={form.hasWebsite}
                onChange={setValue('hasWebsite')}
                options={['yes', 'no']}
              />
              {form.hasWebsite === 'yes' && (
                <input
                  type="text"
                  value={form.existingWebsiteUrl}
                  onChange={set('existingWebsiteUrl')}
                  className={`${inputClass} mt-3`}
                  placeholder="Your current website URL"
                />
              )}
            </div>
            <div>
              <label className={labelClass}>Any color preferences?</label>
              <input
                type="text"
                value={form.colorPreferences}
                onChange={set('colorPreferences')}
                className={inputClass}
                placeholder="e.g. Blue & white, dark theme, warm earth tones..."
              />
            </div>
            <div>
              <label className={labelClass}>
                Top 3 competitors or websites you like
              </label>
              <textarea
                value={form.competitors}
                onChange={set('competitors')}
                className={inputClass}
                rows={3}
                placeholder="Paste URLs of websites you like or compete with..."
              />
            </div>
            <div>
              <label className={labelClass}>
                Any payment integration needed?
              </label>
              <input
                type="text"
                value={form.paymentIntegration}
                onChange={set('paymentIntegration')}
                className={inputClass}
                placeholder="e.g. Stripe, PayPal, Square, or none..."
              />
            </div>
            <div>
              <label className={labelClass}>
                Specific requirements or preferences
              </label>
              <textarea
                value={form.specificRequirements}
                onChange={set('specificRequirements')}
                className={inputClass}
                rows={3}
                placeholder="Any special features, integrations, or requirements..."
              />
            </div>
            <div>
              <label className={labelClass}>Content pages you will need</label>
              <textarea
                value={form.contentPages}
                onChange={set('contentPages')}
                className={inputClass}
                rows={3}
                placeholder="e.g. Home, About Us, Services, Portfolio, Contact, FAQs..."
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label className={labelClass}>Budget range *</label>
              <select
                value={form.budget}
                onChange={set('budget')}
                className={inputClass}
                required
              >
                <option value="">Select a budget...</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>When do you want to start? *</label>
              <select
                value={form.timeline}
                onChange={set('timeline')}
                className={inputClass}
                required
              >
                <option value="">Select a timeline...</option>
                {TIMELINES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Do you have a domain?</label>
              <ChoiceRow
                value={form.hasDomain}
                onChange={setValue('hasDomain')}
                options={['yes', 'no']}
              />
              {form.hasDomain === 'yes' && (
                <div className="grid sm:grid-cols-2 gap-3 mt-3">
                  <input
                    type="text"
                    value={form.domainProvider}
                    onChange={set('domainProvider')}
                    className={inputClass}
                    placeholder="Domain provider"
                  />
                  <input
                    type="text"
                    value={form.domainUsername}
                    onChange={set('domainUsername')}
                    className={inputClass}
                    placeholder="Domain username"
                  />
                </div>
              )}
            </div>
            <div>
              <label className={labelClass}>Do you have hosting?</label>
              <ChoiceRow
                value={form.hasHosting}
                onChange={setValue('hasHosting')}
                options={['yes', 'no']}
              />
              {form.hasHosting === 'yes' && (
                <div className="grid sm:grid-cols-2 gap-3 mt-3">
                  <input
                    type="text"
                    value={form.hostingProvider}
                    onChange={set('hostingProvider')}
                    className={inputClass}
                    placeholder="Hosting provider"
                  />
                  <input
                    type="text"
                    value={form.hostingUsername}
                    onChange={set('hostingUsername')}
                    className={inputClass}
                    placeholder="Hosting username"
                  />
                </div>
              )}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <label className={labelClass}>
                Anything else we should know? (optional)
              </label>
              <textarea
                value={form.notes}
                onChange={set('notes')}
                className={inputClass}
                rows={5}
                placeholder="Links to sites you like, deadlines, questions — anything that helps us give you a straight answer."
              />
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 space-y-1">
              <p>
                <strong>Name:</strong> {form.name}
              </p>
              <p>
                <strong>Email:</strong> {form.email}
              </p>
              {form.businessName && (
                <p>
                  <strong>Business:</strong> {form.businessName}
                </p>
              )}
              <p>
                <strong>Service:</strong> {form.service}
              </p>
              <p>
                <strong>Budget:</strong> {form.budget}
              </p>
              <p>
                <strong>Timeline:</strong> {form.timeline}
              </p>
            </div>
          </>
        )}

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className="px-5 py-3 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Back
          </button>

          {step < STEP_TITLES.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold hover:opacity-90 transition"
            >
              Continue
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting || !submitArmed}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold hover:opacity-90 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                'Send my answers'
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
