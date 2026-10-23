// components/QuestionnaireForm.tsx
// ─────────────────────────────────────────────────────────────────────────
// SCAFFOLD questionnaire form. The owner will supply his own questionnaire
// form code later — when it arrives, replace THIS component only. The page
// shell (app/questionnaire/page.tsx) and the API (app/api/questionnaire)
// stay untouched.
//
// Field mapping to the popup_leads table (via POST /api/questionnaire):
//   name, email, phone, service, budget, time_preference
// The step-2 business details and step-4 "anything else" text are sent as
// `message`, which the API folds into the service value (the schema has no
// notes column), so no answer is lost.
// ─────────────────────────────────────────────────────────────────────────
'use client';

import { useState } from 'react';

const SERVICES = [
  'Web Design',
  'Logo & Branding',
  'E-commerce Store',
  'SEO',
  'Mobile App',
  'Custom Software',
  'Something Else',
];

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
  'Your business & what you need',
  'Budget & timeline',
  'Anything else?',
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  businessDetails: string;
  budget: string;
  timeline: string;
  notes: string;
}

const INITIAL: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  businessDetails: '',
  budget: '',
  timeline: '',
  notes: '',
};

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition';

export default function QuestionnaireForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
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
    setError(null);
    setIsSubmitting(true);

    const messageParts = [
      form.businessDetails.trim()
        ? `About the business: ${form.businessDetails.trim()}`
        : '',
      form.notes.trim(),
    ].filter(Boolean);

    try {
      const res = await fetch('/api/questionnaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || undefined,
          service: form.service,
          budget: form.budget,
          timePreference: form.timeline,
          message: messageParts.join(' | ') || undefined,
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full name *
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone (optional)
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={set('phone')}
                className={inputClass}
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What do you need? *
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your business
              </label>
              <textarea
                value={form.businessDetails}
                onChange={set('businessDetails')}
                className={inputClass}
                rows={4}
                placeholder="What does your business do, who are your customers, and what should this project achieve?"
              />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget range *
              </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                When do you want to start? *
              </label>
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
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
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
              disabled={isSubmitting}
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
