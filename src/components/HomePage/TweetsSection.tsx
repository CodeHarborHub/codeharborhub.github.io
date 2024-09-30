import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Tweet from "../Tweet";
import Tweets from "../../data/tweets";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";

type TweetType = {
  id: number;
  showOnHomepage: boolean;
};

export const TweetsSection: React.FC = () => {
  const tweetColumns = [[], [], []] as TweetType[][];

  // Distribute the tweets into 3 columns
  Tweets.filter((tweet) => tweet.showOnHomepage).forEach((tweet, i) =>
    tweetColumns[i % 3].push(tweet)
  );

  return (
    <section className="bg-white dark:bg-gray-900 py-16 p-2">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.3,
          }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Loved by Many Users
          </h2>
          <div className="mt-2 w-24 h-1 mx-auto bg-blue-500 dark:bg-blue-400"></div>
        </motion.div>

        {/* Swiper Tweets */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 2000 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="tweets-swiper"
        >
          {/* Map through tweetColumns and render SwiperSlides */}
          {tweetColumns.map((tweetItems, columnIndex) =>
            tweetItems.map((tweet, tweetIndex) => (
              <SwiperSlide key={`${columnIndex}-${tweetIndex}`}>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-2">
                  <Tweet {...tweet} />
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
    </section>
  );
};

export default TweetsSection;