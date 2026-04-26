import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { RevealOnScroll } from './useScrollReveal';

// Placeholder data — replace src values with actual image/video paths later
const galleryItems = [
  // User Testing Photos
  { id: 1, type: 'image', category: 'testing', src: '', caption: 'User testing session with preschool children', placeholder: true },
  { id: 2, type: 'image', category: 'testing', src: '', caption: 'Children interacting with gesture module', placeholder: true },
  { id: 3, type: 'image', category: 'testing', src: '', caption: 'Handwriting recognition testing', placeholder: true },
  { id: 4, type: 'image', category: 'testing', src: '', caption: 'Emotion detection module in action', placeholder: true },
  { id: 5, type: 'image', category: 'testing', src: '', caption: 'Pronunciation assessment testing', placeholder: true },
  { id: 6, type: 'image', category: 'testing', src: '', caption: 'Group testing at preschool', placeholder: true },

  // Demo Videos
  { id: 7, type: 'video', category: 'demo', src: '', caption: 'Akura App Demo Video', placeholder: true },
  { id: 8, type: 'video', category: 'demo', src: '', caption: 'Gesture Recognition Demo', placeholder: true },

  // App Screenshots
  { id: 9, type: 'image', category: 'app', src: '', caption: 'Home Screen', placeholder: true },
  { id: 10, type: 'image', category: 'app', src: '', caption: 'Sinhala Letter Learning', placeholder: true },
  { id: 11, type: 'image', category: 'app', src: '', caption: 'Number Counting Module', placeholder: true },
  { id: 12, type: 'image', category: 'app', src: '', caption: 'Progress Dashboard', placeholder: true },
];

const categories = [
  { key: 'all', label: 'All' },
  { key: 'testing', label: 'User Testing' },
  { key: 'demo', label: 'Demo Videos' },
  { key: 'app', label: 'App Screenshots' },
];

function PlaceholderCard({ item }) {
  const isVideo = item.type === 'video';

  return (
    <div className="group bg-white rounded-2xl border border-border shadow-card card-hover overflow-hidden h-full flex flex-col">
      {/* Media area */}
      <div className="relative aspect-video bg-surface-alt flex items-center justify-center overflow-hidden">
        {item.src && !item.placeholder ? (
          isVideo ? (
            <video
              src={item.src}
              controls
              className="w-full h-full object-cover"
              poster=""
            />
          ) : (
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )
        ) : (
          /* Placeholder */
          <div className="flex flex-col items-center gap-3 p-6 text-center">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
              isVideo ? 'bg-accent/10' : item.category === 'app' ? 'bg-primary/10' : 'bg-module-gesture/10'
            }`}>
              {isVideo ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : item.category === 'app' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-module-gesture" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )}
            </div>
            <span className="text-text-muted text-sm font-medium">
              {isVideo ? 'Video coming soon' : 'Image coming soon'}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-text-muted/60">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Add {isVideo ? 'video' : 'image'}
            </div>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-lg text-xs font-bold text-white shadow-sm ${
            isVideo
              ? 'bg-gradient-to-r from-rose-500 to-pink-500'
              : item.category === 'app'
              ? 'bg-gradient-to-r from-sky-500 to-blue-500'
              : 'bg-gradient-to-r from-amber-500 to-orange-500'
          }`}>
            {isVideo ? '🎬 Video' : item.category === 'app' ? '📱 Screenshot' : '📸 Testing'}
          </span>
        </div>
      </div>

      {/* Caption */}
      <div className="p-4">
        <p className="text-text-primary text-sm font-semibold group-hover:text-primary transition-colors">
          {item.caption}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-surface-alt">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Project"
          highlight="Gallery"
          subtitle="User testing sessions, app demos, and screenshots from our development journey"
        />

        {/* Filter tabs */}
        <RevealOnScroll className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat.key
                    ? 'gradient-bg-warm text-white shadow-lg shadow-accent/20'
                    : 'bg-white text-text-secondary border border-border hover:border-primary hover:text-primary hover:bg-primary-50'
                }`}
              >
                {cat.label}
                <span className={`ml-2 px-1.5 py-0.5 rounded-md text-xs ${
                  activeFilter === cat.key
                    ? 'bg-white/20'
                    : 'bg-surface-elevated'
                }`}>
                  {cat.key === 'all'
                    ? galleryItems.length
                    : galleryItems.filter((i) => i.category === cat.key).length}
                </span>
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, i) => (
            <RevealOnScroll key={item.id} delay={`${i * 80}ms`}>
              <PlaceholderCard item={item} />
            </RevealOnScroll>
          ))}
        </div>

        {/* Add more prompt */}
        <RevealOnScroll className="mt-12">
          <div className="text-center py-8 border-2 border-dashed border-border rounded-2xl bg-white/50">
            <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-text-secondary font-medium">More content coming soon</p>
            <p className="text-text-muted text-sm mt-1">User testing images and demo videos will be added here</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
