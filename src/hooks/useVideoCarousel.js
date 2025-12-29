import { useState, useRef, useCallback } from 'react';

/**
 * Custom hook for managing video carousel functionality
 * Handles crossfading between multiple videos
 *
 * @param {string[]} videos - Array of video URLs
 * @returns {object} - Video carousel state and controls
 */
export const useVideoCarousel = (videos) => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef([]);

  // Initialize refs array
  const setVideoRef = useCallback((index) => (ref) => {
    videoRefs.current[index] = ref;
  }, []);

  // Handle video end event
  const handleVideoEnd = useCallback((videoIndex) => {
    const nextIndex = (videoIndex + 1) % videos.length;
    const currentRef = videoRefs.current[videoIndex];
    const nextRef = videoRefs.current[nextIndex];

    if (currentRef && nextRef) {
      // Start next video
      nextRef.currentTime = 0;
      nextRef.play();

      // Crossfade effect
      currentRef.style.opacity = '0';
      nextRef.style.opacity = '1';

      // Update state after fade
      setTimeout(() => {
        setActiveVideo(nextIndex);
      }, 1500);
    }
  }, [videos.length]);

  return {
    activeVideo,
    setVideoRef,
    handleVideoEnd,
    videoRefs
  };
};
