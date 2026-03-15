import { useState, useEffect } from 'react';

const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;

const useGoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(null);
  const [totalReviews, setTotalReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!PLACE_ID || !API_KEY) {
      setError('Google Places API not configured');
      setLoading(false);
      return;
    }

    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount,reviews&languageCode=pt`,
          {
            headers: {
              'X-Goog-Api-Key': API_KEY,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        setRating(data.rating || null);
        setTotalReviews(data.userRatingCount || null);

        if (data.reviews) {
          const formattedReviews = data.reviews.map((review) => ({
            name: review.authorAttribution?.displayName || 'Anónimo',
            profilePhoto: review.authorAttribution?.photoUri || null,
            rating: review.rating || 5,
            quote: review.text?.text || '',
            relativeTime: review.relativePublishTimeDescription || '',
            time: review.publishTime || '',
          }));
          setReviews(formattedReviews);
        }
      } catch (err) {
        console.error('Failed to fetch Google Reviews:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, rating, totalReviews, loading, error };
};

export default useGoogleReviews;
