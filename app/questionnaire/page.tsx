// app/questionnaire/page.tsx
// Public questionnaire page. The form itself lives in
// components/QuestionnaireForm.tsx so it can be swapped out without
// touching this shell or the API.
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuestionnaireForm from '@/components/QuestionnaireForm';

export const metadata: Metadata = {
  title: 'Project Questionnaire',
  description:
    'Tell us about your project in 2 minutes — a few quick questions and the DezignLoop team will come back with next steps and a straight price.',
  alternates: {
    canonical: 'https://www.dezignloop.com/questionnaire',
  },
};

export default function QuestionnairePage() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Tell Us About Your <span className="text-primary">Project</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Four quick steps, about two minutes. We read every answer and reply
            with honest next steps — no pressure, no obligation.
          </p>
        </div>
        <QuestionnaireForm />
      </section>
      <Footer />
    </main>
  );
}
