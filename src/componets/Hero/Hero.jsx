import React, { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [targetTime, setTargetTime] = useState(0);

  const smoothTransition = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      const timeDiff = targetTime - video.currentTime;
      if (Math.abs(timeDiff) > 0.01) {
        video.currentTime += timeDiff * 0.1; // Smooth interpolation towards target time
        requestAnimationFrame(smoothTransition);
      }
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setScrolling(true);

    // Calculate the scroll speed
    const scrollSpeed = Math.abs(currentScrollY - lastScrollY);
    setLastScrollY(currentScrollY);

    if (videoRef.current) {
      const video = videoRef.current;
      const containerHeight = containerRef.current.clientHeight;
      const scrollRatio = Math.min(Math.max(currentScrollY / containerHeight, 0), 1);

      // Set the target time for smooth transition
      setTargetTime(scrollRatio * video.duration);

      // Adjust playback speed and clamp it to a valid range
      const speedFactor = 0.005;
      const playbackRate = Math.max(0.75, Math.min(1.5, scrollSpeed * speedFactor));
      video.playbackRate = playbackRate;

      // Trigger smooth transition
      smoothTransition();

      // Play the video if scrolling; otherwise, pause
      if (scrollSpeed > 0) {
        video.play();
      }
    }
  };

  const handleScrollStop = () => {
    setScrolling(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      handleScroll();
      if (scrolling) {
        clearTimeout(handleScrollStop.timeout);
        handleScrollStop.timeout = setTimeout(handleScrollStop, 150); // Pause after 150ms of no scroll
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
      clearTimeout(handleScrollStop.timeout);
    };
  }, [scrolling]);

  return (
    <div ref={containerRef} className="relative w-full h-[300vh]">
      <div className="sticky top-0 w-full h-screen">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/testVideo.mp4"
          muted
        />
        <div className="absolute top-80 inset-0 flex flex-col items-center justify-center text-center text-white">
          
          {/* First Section: Hero Title and Subtitle */}
          <div className={`transition-opacity duration-500 ${scrollY <= 200 ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-sm md:text-2xl font-light">
              CRAFTED THROUGH GENERATIONS
            </h2>
            <h1 className="text-6xl md:text-5xl font-bold mb-8">
              HENNESSY: A JOURNEY THROUGH TIME
            </h1>
          </div>

          {/* Second Section: Hennessy Related Random Text */}
          <div className={`transition-opacity duration-500 ${scrollY > 200 && scrollY <= 1200 ? 'opacity-100' : 'opacity-0'}`}>
            <p className=" items-center w-5/12 text-xl md:text-2xl">
              Hennessy, renowned for its exceptional cognac, epitomizes centuries of craftsmanship and tradition. Each sip tells a story of heritage and excellence, blending the finest ingredients with meticulous artistry.
            </p>
          </div>

          {/* Third Section: Additional Text */}
          <div className={`transition-opacity items-center justify-center  duration-500 ${scrollY > 1200 ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-2xl items-center justify-center text-center md:text-4xl font-light">
              THE SPIRIT OF EXCELLENCE
            </h2>
            <h2 className="text-2xl md:text-4xl font-light">
              A LEGACY, A PASSION
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
