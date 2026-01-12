import React, { useState } from 'react';
import { Camera, Maximize2, Filter, ChevronRight, ChevronLeft, X, Heart, Users, MapPin } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Sunday Service', 'Conventions', 'Outreach', 'Youth Fellowship'];

  const galleryImages = [
    { id: 1, src: '/Header2.jpg', category: 'Sunday Service', title: 'Sunday Worship Encounter', description: 'Hearts lifted in reverence during our corporate worship.' },
    { id: 2, src: '/Header3.JPG', category: 'Sunday Service', title: 'The Word Experience', description: 'Deep diving into the apostolic doctrine.' },
    { id: 3, src: '/header4.JPG', category: 'Conventions', title: 'National Convention', description: 'Intercessors gathering from across the nation.' },
    { id: 4, src: '/header5.JPG', category: 'Conventions', title: 'Prophetic Night', description: 'A night of divine revelations and breakthroughs.' },
    { id: 5, src: '/Image.jpg', category: 'Outreach', title: 'Community Outreach', description: 'Taking the love of Christ to our community.' },
    { id: 6, src: '/eader6.JPG', category: 'Youth Fellowship', title: 'Youth Awakening', description: 'Empowering the next generation for the Kingdom.' },
    { id: 7, src: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=800', category: 'Sunday Service', title: 'Holy Communion', description: 'Breaking bread in remembrance of our Lord.' },
    { id: 8, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800', category: 'Outreach', title: 'Evangelism Drive', description: 'Spreading the gospel to the ends of the earth.' },
    { id: 9, src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800', category: 'Conventions', title: 'Freedom Night', description: 'Breaking chains and entering into liberty.' },
  ];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const nextImage = (e) => {
    e.stopPropagation();
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleDownload = async (imageUrl, title) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `PraiseChapel-Gallery-${title.replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Download error:', e);
      const link = document.createElement('a');
      link.href = imageUrl;
      link.target = '_blank';
      link.download = `Gallery-${title}.jpg`;
      link.click();
    }
  };

  return (
    <div className="flex flex-col bg-zinc-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-zinc-900 bg-zinc-900/20 text-center">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Ministry <span className="text-brand-red">Gallery</span>
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm font-medium">
            Capturing moments of worship and fellowship across our global community.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] md:top-[88px] z-40 bg-zinc-950 border-b border-zinc-900 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all border ${
                  activeFilter === cat 
                    ? 'bg-brand-red border-brand-red text-white' 
                    : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-900 group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Minimal Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 size={24} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="py-40 text-center space-y-6">
              <div className="w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mx-auto text-zinc-700">
                <Camera size={40} />
              </div>
              <p className="text-zinc-500 font-black uppercase tracking-widest text-xs">No memories found in this collection</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 bg-black/95"
            onClick={() => setSelectedImage(null)}
          ></div>
          
          <button 
            className="absolute top-6 right-6 z-[110] text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          {/* Controls */}
          <button 
            onClick={prevImage}
            className="absolute left-4 z-[110] p-4 text-white/30 hover:text-white transition-colors active:scale-90"
          >
            <ChevronLeft size={48} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 z-[110] p-4 text-white/30 hover:text-white transition-colors active:scale-90"
          >
            <ChevronRight size={48} />
          </button>

          <div className="relative z-[105] max-w-5xl w-full flex flex-col items-center gap-6">
            <img 
              src={selectedImage.src} 
              className="max-h-[75vh] w-auto rounded-lg shadow-2xl" 
              alt={selectedImage.title} 
            />
            
            <div className="flex flex-col items-center text-center gap-4">
              <div className="space-y-1">
                <h2 className="text-xl font-black text-white uppercase tracking-tight">{selectedImage.title}</h2>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{selectedImage.date || selectedImage.category}</span>
              </div>
              
              <button 
                onClick={() => handleDownload(selectedImage.src, selectedImage.title)}
                className="px-8 py-3 rounded-full bg-white text-black font-black uppercase tracking-widest text-[10px] hover:bg-brand-red hover:text-white transition-all active:scale-95 flex items-center gap-2"
              >
                <Download size={14} />
                Download
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;
