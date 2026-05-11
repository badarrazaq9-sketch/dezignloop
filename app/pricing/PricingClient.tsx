'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCategoriesPage from '@/components/PricingCategoriesPage';

export default function PricingPage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300 selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <PricingCategoriesPage />
      <Footer />
    </div>
  );
}
