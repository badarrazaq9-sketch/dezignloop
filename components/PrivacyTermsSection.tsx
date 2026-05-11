'use client';

import React, { useState } from 'react';

interface PrivacyTermsSectionProps {
  title?: string;
  date?: string;
  isPrivacy?: boolean;
}

export default function PrivacyTermsSection({
  title = 'Privacy Policy',
  date = 'Last Updated: January 2026',
  isPrivacy = true,
}: PrivacyTermsSectionProps) {
  return (
    <div className="pt-40 pb-24 bg-white dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            {title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold">{date}</p>
        </div>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          {isPrivacy ? (
            <>
              <h3>1. Introduction</h3>
              <p>
                Welcome to DezignLoop. We respect your privacy and are committed to protecting your
                personal data. This privacy policy will inform you as to how we look after your
                personal data when you visit our website.
              </p>
              <h3>2. Data We Collect</h3>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you
                which we have grouped together follows: Identity Data, Contact Data, and Technical
                Data.
              </p>
              <h3>3. How We Use Your Data</h3>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we
                will use your personal data in the following circumstances: To perform the contract
                we are about to enter into or have entered into with you.
              </p>
            </>
          ) : (
            <>
              <h3>1. Terms</h3>
              <p>
                By accessing this Website, accessible from dezignloop.com, you are agreeing to be
                bound by these Website Terms and Conditions of Use and agree that you are
                responsible for the agreement with any applicable local laws.
              </p>
              <h3>2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the materials on
                DezignLoop's Website for personal, non-commercial transitory viewing only.
              </p>
              <h3>3. Disclaimer</h3>
              <p>
                All the materials on DezignLoop's Website are provided "as is". DezignLoop makes no
                warranties, may it be expressed or implied, therefore negates all other warranties.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
