import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import useGoogleReviews from '../../hooks/useGoogleReviews';

const Testimonials = () => {
  const prefersReducedMotion = useReducedMotion();
  const { reviews, rating, totalReviews, loading } = useGoogleReviews();

  const hasReviews = reviews.length > 0;
  const displayRating = rating || null;

  const renderStars = (starRating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < starRating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const GoogleLogo = ({ className = 'w-5 h-5' }) => (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );

  // Empty placeholder cards when no reviews exist
  const emptyCards = [1, 2, 3, 4, 5];

  return (
    <section className="relative py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black text-spin-teal mb-4 tracking-tight">
            O QUE DIZEM OS NOSSOS JOGADORES
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A opinião de quem joga connosco é o nosso maior orgulho
          </p>
        </motion.div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center h-80 mb-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-spin-orange"></div>
          </div>
        )}

        {/* Reviews or Empty Cards */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
            {hasReviews
              ? reviews.map((review, idx) => (
                  <motion.div
                    key={idx}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : idx * 0.1 }}
                    className="bg-gray-100 rounded-2xl p-6 relative flex flex-col min-h-[280px]"
                  >
                    <div className="absolute top-5 right-5">
                      <GoogleLogo className="w-5 h-5" />
                    </div>

                    <div className="flex gap-0.5 mb-4">
                      {renderStars(review.rating)}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-1">
                      "{review.quote}"
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      {review.profilePhoto ? (
                        <img
                          src={review.profilePhoto}
                          alt={review.name}
                          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-10 h-10 bg-spin-orange rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {review.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
                        </div>
                      )}
                      <div>
                        <div className="text-spin-teal font-bold text-sm">{review.name}</div>
                        {review.relativeTime && (
                          <div className="text-gray-400 text-xs">{review.relativeTime}</div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))
              : emptyCards.map((_, idx) => (
                  <motion.div
                    key={idx}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : idx * 0.1 }}
                    className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-6 relative flex flex-col items-center justify-center min-h-[280px]"
                  >
                    <div className="absolute top-5 right-5">
                      <GoogleLogo className="w-5 h-5 opacity-30" />
                    </div>

                    <div className="flex gap-0.5 mb-4 opacity-20">
                      {renderStars(0)}
                    </div>

                    <div className="text-center">
                      <svg className="w-10 h-10 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <p className="text-gray-400 text-sm">Em breve</p>
                    </div>
                  </motion.div>
                ))
            }
          </div>
        )}

        {/* Rating from Google */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.4 }}
          className="mt-8 flex justify-center"
        >
          <div className="text-center">
            {displayRating ? (
              <>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="text-4xl md:text-5xl font-heading font-black text-spin-teal">{displayRating}</div>
                  <div className="flex gap-0.5">
                    {renderStars(Math.round(displayRating))}
                  </div>
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">
                  Avaliação Google
                  {totalReviews && (
                    <span className="normal-case"> ({totalReviews} avaliações)</span>
                  )}
                </div>
              </>
            ) : (
              <div className="text-gray-400 text-sm">
                Ainda sem avaliações no Google
              </div>
            )}
            <div className="flex items-center justify-center gap-1.5 mt-3">
              <GoogleLogo className="w-4 h-4" />
              <span className="text-gray-400 text-xs">Google Reviews</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
