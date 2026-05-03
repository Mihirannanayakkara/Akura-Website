import { useState, useEffect, useCallback } from 'react';
import SectionHeading from './SectionHeading';
import { RevealOnScroll } from './useScrollReveal';

// Uploaded testing images
import withTeachersImg from '../assets/testing/with teachers.jpeg';
import lettersImg from '../assets/testing/letters.jpeg';
import emotionsImg from '../assets/testing/emotions.jpeg';
import numbersImg from '../assets/testing/numbers.jpeg';
import pronunciationImg from '../assets/testing/pronanuciation.jpeg';
import userTestingVideo from '../assets/testing/feedback_a.mp4';

// Uploaded app screenshots
import emotionImg from '../assets/testing/emotion.jpeg';
import letterImg from '../assets/testing/letter.jpeg';
import numberImg from '../assets/testing/number.jpeg';
import voiceImg from '../assets/testing/voice.jpeg';

//demo video
import demoVideo from '../assets/testing/Akura_.mp4';

const galleryItems = [
  { id: 1, type: 'image', category: 'testing', src: withTeachersImg, caption: 'User testing session with preschool children' },
  { id: 2, type: 'image', category: 'testing', src: numbersImg, caption: 'Children interacting with gesture module' },
  { id: 3, type: 'image', category: 'testing', src: lettersImg, caption: 'Handwriting recognition testing' },
  { id: 4, type: 'image', category: 'testing', src: emotionsImg, caption: 'Emotion detection module in action' },
  { id: 5, type: 'image', category: 'testing', src: pronunciationImg, caption: 'Pronunciation assessment testing' },
  { id: 6, type: 'video', category: 'testing', src: userTestingVideo, caption: 'Teacher at preschool' },
  { id: 7, type: 'video', category: 'demo', src: demoVideo, caption: 'Akura App Demo Video' },
  { id: 9, type: 'image', category: 'app', src: emotionImg, caption: 'Emotion based personalized module' },
  { id: 10, type: 'image', category: 'app', src: letterImg, caption: 'Sinhala Letter Learning' },
  { id: 11, type: 'image', category: 'app', src: numberImg, caption: 'Number Counting Module' },
  { id: 12, type: 'image', category: 'app', src: voiceImg, caption: 'Voice Module' },
];

const categories = [
  { key: 'all', label: 'All' },
  { key: 'testing', label: 'User Testing' },
  { key: 'demo', label: 'Demo Videos' },
  { key: 'app', label: 'App Screenshots' },
];

/* ─── Lightbox Modal ─── */
function Lightbox({ item, onClose, onPrev, onNext, currentIndex, totalCount }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm animate-fade-in" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center max-w-[90vw] max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
          aria-label="Close lightbox"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation - Previous */}
        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 sm:-translate-x-16 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 hidden sm:flex items-center justify-center"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Navigation - Next */}
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 sm:translate-x-16 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 hidden sm:flex items-center justify-center"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image */}
        {item.type === 'video' ? (
          <video
            src={item.src}
            controls
            autoPlay
            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
          />
        ) : (
          <img
            src={item.src}
            alt={item.caption}
            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain"
          />
        )}

        {/* Caption + Counter */}
        <div className="mt-4 text-center">
          <p className="text-white text-base font-semibold">{item.caption}</p>
          <p className="text-white/50 text-sm mt-1">{currentIndex + 1} / {totalCount}</p>
        </div>

        {/* Mobile nav buttons */}
        <div className="flex gap-4 mt-4 sm:hidden">
          <button
            onClick={onPrev}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
          >
            ← Previous
          </button>
          <button
            onClick={onNext}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Gallery Card ─── */
function PlaceholderCard({ item, onClick }) {
  const isVideo = item.type === 'video';
  const hasSource = item.src && !item.src.startsWith('/images/gallery/');

  return (
    <div
      className={`group bg-surface-card rounded-2xl border border-border shadow-card card-hover overflow-hidden h-full flex flex-col ${hasSource ? 'cursor-pointer' : ''}`}
      onClick={hasSource ? () => onClick(item) : undefined}
    >
      <div className="relative aspect-video bg-surface-alt flex items-center justify-center overflow-hidden">
        {item.src ? (
          isVideo ? (
            <video src={item.src} controls className="w-full h-full object-cover" poster="" />
          ) : (
            <>
              <img src={item.src} alt={item.caption} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              {/* Zoom overlay on hover */}
              {hasSource && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              )}
            </>
          )
        ) : (
          <div className="flex flex-col items-center gap-3 p-6 text-center">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isVideo ? 'bg-accent/10' : item.category === 'app' ? 'bg-primary/10' : 'bg-module-gesture/10'
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

        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 rounded-lg text-xs font-bold text-white shadow-sm ${isVideo
              ? 'bg-gradient-to-r from-rose-500 to-pink-500'
              : item.category === 'app'
                ? 'bg-gradient-to-r from-sky-500 to-blue-500'
                : 'bg-gradient-to-r from-amber-500 to-orange-500'
            }`}>
            {isVideo ? '🎬 Video' : item.category === 'app' ? '📱 Screenshot' : '📸 Testing'}
          </span>
        </div>
      </div>

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
  const [lightboxItem, setLightboxItem] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  // Only items with real images are navigable in the lightbox
  const viewableItems = filteredItems.filter(
    (item) => item.src && !item.src.startsWith('/images/gallery/')
  );

  const openLightbox = useCallback((item) => {
    const idx = viewableItems.findIndex((i) => i.id === item.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxItem(item);
  }, [viewableItems]);

  const closeLightbox = useCallback(() => {
    setLightboxItem(null);
  }, []);

  const goToPrev = useCallback(() => {
    const newIndex = (lightboxIndex - 1 + viewableItems.length) % viewableItems.length;
    setLightboxIndex(newIndex);
    setLightboxItem(viewableItems[newIndex]);
  }, [lightboxIndex, viewableItems]);

  const goToNext = useCallback(() => {
    const newIndex = (lightboxIndex + 1) % viewableItems.length;
    setLightboxIndex(newIndex);
    setLightboxItem(viewableItems[newIndex]);
  }, [lightboxIndex, viewableItems]);

  return (
    <>
      <section id="gallery" className="relative py-24 sm:py-32 bg-surface-alt">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Project"
            highlight="Gallery"
            subtitle="User testing sessions, app demos, and screenshots from our development journey"
          />

          <RevealOnScroll className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeFilter === cat.key
                      ? 'gradient-bg-warm text-white shadow-lg shadow-accent/20'
                      : 'bg-surface-card text-text-secondary border border-border hover:border-primary hover:text-primary hover:bg-primary-50 dark:hover:bg-primary-50/10'
                    }`}
                >
                  {cat.label}
                  <span className={`ml-2 px-1.5 py-0.5 rounded-md text-xs ${activeFilter === cat.key
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, i) => (
              <RevealOnScroll key={item.id} delay={`${i * 80}ms`}>
                <PlaceholderCard item={item} onClick={openLightbox} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
          currentIndex={lightboxIndex}
          totalCount={viewableItems.length}
        />
      )}
    </>
  );
}
