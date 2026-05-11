// 'use client';

// import React from 'react';
// import Image from 'next/image';
// interface ServiceHeroIllustrationProps {
//   slug: string;
// }

// export default function ServiceHeroIllustration({ slug }: ServiceHeroIllustrationProps) {
//   // Map of service slugs to images
//   const images: Record<string, string> = {
//     'web-design': 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80',
//     'branding': 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
//     'custom-development': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
//     'growth-marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
//     'mobile-app-dev': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
//     'video-editing': 'https://images.unsplash.com/photo-1516321318423-f06f70ab7792?auto=format&fit=crop&w=1200&q=80',
//   };

//   const image = images[slug] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80';

//   return (
//     <Image
//       src={image}
//       alt={slug}
//       className="w-full h-full object-cover"
//     />
//   );
// }
