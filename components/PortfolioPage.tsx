// 'use client';

// import { useState } from "react";
// import { X, ArrowRight } from "lucide-react";

// /* =======================
//    PORTFOLIO DATA (Local Images)
// ======================= */

// // Base path for all portfolio images (public folder)
// const BASE_PATH = "/portfolio";

// // Define categories with their folder names and how many images each has
// // Adjust the 'count' if some folders have more/less than 6 images
// const PORTFOLIO_CATEGORIES = [
//   {
//     type: "web",
//     category: "Web Design",
//     folder: "webd",
//     count: 6, // 1.png to 6.png
//   },
//   {
//     type: "ecom",
//     category: "E-Commerce",
//     folder: "ecom",
//     count: 6,
//   },
//   {
//     type: "branding",
//     category: "Branding",
//     folder: "branding",
//     count: 6,
//   },
//   {
//     type: "app",
//     category: "Mobile App",
//     folder: "appd",
//     count: 6,
//   },
//   {
//     type: "custom",
//     category: "Custom Development",
//     folder: "custom",
//     count: 6,
//   },
//   // Add more categories if needed (marketing, video, etc.)
//   // {
//   //   type: "marketing",
//   //   category: "Marketing",
//   //   folder: "marketing",
//   //   count: 6,
//   // },
//   // {
//   //   type: "video",
//   //   category: "Video Editing",
//   //   folder: "video",
//   //   count: 6,
//   // },
// ];

// // Generate flat list of portfolio items from folders
// const PORTFOLIO_ITEMS = PORTFOLIO_CATEGORIES.flatMap((cat) =>
//   Array.from({ length: cat.count }, (_, i) => ({
//     title: `${cat.category} Project ${i + 1}`,
//     category: cat.category,
//     type: cat.type,
//     image: `${BASE_PATH}/${cat.folder}/${i + 1}.png`,
//   }))
// );

// /* =======================
//    FILTERS
// ======================= */

// const FILTERS = [
//   { id: "all", label: "All Work" },
//   { id: "web", label: "Web Design" },
//   { id: "ecom", label: "E-Commerce" },
//   { id: "branding", label: "Branding" },
//   { id: "app", label: "Mobile Apps" },
//   { id: "custom", label: "Custom Development" },
//   // Add these if you have images in those folders
//   // { id: "marketing", label: "Marketing" },
//   // { id: "video", label: "Video" },
// ];

// /* =======================
//    PORTFOLIO PAGE COMPONENT
// ======================= */

// export default function PortfolioPage() {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [lightbox, setLightbox] = useState<string | null>(null);

//   const filteredItems =
//     activeFilter === "all"
//       ? PORTFOLIO_ITEMS
//       : PORTFOLIO_ITEMS.filter((item) => item.type === activeFilter);

//   return (
//     <section className="pt-40 pb-28 bg-white dark:bg-slate-950 min-h-screen">
//       <div className="container mx-auto px-4">

//         {/* Header */}
//         <div className="text-center max-w-2xl mx-auto mb-20">
//           <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 block">
//             Our Work
//           </span>
//           <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white mb-6">
//             Selected Projects
//           </h1>
//           <p className="text-slate-500 dark:text-slate-400 text-lg">
//             A showcase of our best work across various industries. Filter by category to see specific expertise.
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible justify-start md:justify-center gap-3 mb-16 px-2 md:px-0 scrollbar-hide">
//           {FILTERS.map((filter) => (
//             <button
//               key={filter.id}
//               onClick={() => setActiveFilter(filter.id)}
//               className={`px-6 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap flex-shrink-0
//                 ${activeFilter === filter.id
//                   ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg scale-105"
//                   : "bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
//                 }`}
//             >
//               {filter.label}
//             </button>
//           ))}
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {filteredItems.map((item, i) => (
//             <div
//               key={i}
//               onClick={() => setLightbox(item.image)}
//               className="group cursor-pointer"
//             >
//               <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-[4/3] border border-slate-100 dark:border-slate-800">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
//                   loading="lazy" // good for performance
//                   onError={(e) => {
//                     // Fallback if image not found
//                     e.currentTarget.src = "/fallback-portfolio.png"; // optional: add a placeholder
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
//                 <div className="absolute bottom-6 right-6 w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all shadow-lg">
//                   <ArrowRight className="text-slate-900 dark:text-white" />
//                 </div>
//               </div>

//               {/* <h3 className="text-xl font-black text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
//                 {item.title}
//               </h3> */}
//               <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
//                 {item.category}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>

//       {/* Lightbox */}
//       {lightbox && (
//         <div
//           onClick={() => setLightbox(null)}
//           className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6 backdrop-blur cursor-pointer"
//         >
//           <button
//             onClick={() => setLightbox(null)}
//             className="
//               absolute top-4 right-4 sm:top-6 sm:right-6
//               w-10 h-10 sm:w-12 sm:h-12
//               rounded-full
//               bg-white/90 dark:bg-slate-900/90
//               border border-slate-200 dark:border-slate-700
//               flex items-center justify-center
//               text-slate-600 dark:text-white/70
//               hover:text-slate-900 dark:hover:text-white
//               hover:bg-slate-100 dark:hover:bg-slate-800
//               transition-all shadow-md
//             "
//             aria-label="Close"
//           >
//             <X size={20} className="sm:w-6 sm:h-6" />
//           </button>

//           <Image
//             src={lightbox}
//             alt="Portfolio lightbox"
//             className="max-w-full max-h-full rounded-xl shadow-2xl object-contain"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </section>
//   );
// }