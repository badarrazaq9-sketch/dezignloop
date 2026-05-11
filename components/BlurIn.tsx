'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BlurInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;     // ← optional: nice to have
}

function BlurIn({ children, delay = 0, className = '' }: BlurInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 4 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Keep default export → nothing breaks in other files
export default BlurIn;

// Add named export → can now be imported as { BlurReveal }
export { BlurIn as BlurReveal };