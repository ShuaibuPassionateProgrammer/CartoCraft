"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "WAN 2.2",
    subtitle: "Advanced AI image generation with the latest tech and powerful features for creative professionals and enthusiasts.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&h=600&fit=crop",
    cta: "Try WAN 2.2"
  },
  {
    id: 2,
    title: "FLUX Krea",
    subtitle: "We're making AI for everyone to use FLUX Krea model. Deliver advanced text-to-image generation with lightning-fast results.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    cta: "Explore FLUX"
  },
  {
    id: 3,
    title: "Open Source",
    subtitle: "Join our open-source community and contribute to the future of AI-powered creative tools.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    cta: "Get Started"
  },
  {
    id: 4,
    title: "Real-time Generation",
    subtitle: "Experience instant AI generation with our cutting-edge real-time processing technology.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=600&fit=crop",
    cta: "Try Now"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Pause auto-rotation on hover and focus
  const [, setIsPaused] = useState(false);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'Home') {
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section 
      className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden"
      aria-label="Featured content carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-hidden={index !== currentSlide}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover"
                priority={index === 0}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
                <div className="max-w-2xl text-white">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 text-white/90 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    {slide.subtitle}
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400"
                  >
                    <a href="#generate">
                      {slide.cta}
                      <span className="sr-only">: {slide.title}</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}