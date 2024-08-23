import React, { useRef, useEffect, useState } from 'react';

const HeroSection = () => {
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className={`text-6xl md:text-9xl font-bold mb-8 ${scrollY > 200 ? 'opacity-0' : 'opacity-100'}`}>
            HENNESSY: A JOURNEY THROUGH TIME
          </h1>
          <h2 className={`text-2xl md:text-4xl font-light ${scrollY > 600 ? 'opacity-100' : 'opacity-0'}`}>
            CRAFTED THROUGH GENERATIONS
          </h2>
          <h2 className={`text-2xl md:text-4xl font-light ${scrollY > 1200 ? 'opacity-100' : 'opacity-0'}`}>
            THE SPIRIT OF EXCELLENCE
          </h2>
          <h2 className={`text-2xl md:text-4xl font-light ${scrollY > 1800 ? 'opacity-100' : 'opacity-0'}`}>
            A LEGACY, A PASSION
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
