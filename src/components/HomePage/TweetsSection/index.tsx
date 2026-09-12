import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircleHeart,
  Quote,
  Sparkles,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Tweet from "../../Tweet";
import Tweets from "../../../data/tweets";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TweetsSection.css";

const TweetsSection: React.FC = () => {
  const homepageTweets = Tweets.filter((tweet) => tweet.showOnHomepage);

  if (!homepageTweets.length) {
    return null;
  }

  return (
    <section
      className="tweets-section"
      aria-labelledby="community-voices-title"
    >
      <div className="tweets-section__container">
        {/* Background decoration */}
        <div
          className="tweets-section__glow tweets-section__glow--one"
          aria-hidden="true"
        />
        <div
          className="tweets-section__glow tweets-section__glow--two"
          aria-hidden="true"
        />

        {/* Header */}
        <motion.header
          className="tweets-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="tweets-section__eyebrow">
            <MessageCircleHeart size={16} aria-hidden="true" />
            <span>COMMUNITY VOICES</span>
          </div>

          <h2
            id="community-voices-title"
            className="tweets-section__title"
          >
            Built by the community,
            <span> loved by learners.</span>
          </h2>

          <p className="tweets-section__description">
            Discover what developers, learners, and open-source contributors
            are saying about their experience with CodeHarborHub.
          </p>
        </motion.header>

        {/* Social proof */}
        <motion.div
          className="tweets-section__trust"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="tweets-section__trust-icon">
            <Sparkles size={16} aria-hidden="true" />
          </div>

          <div>
            <strong>Real community feedback</strong>
            <span>
              Learners sharing their journey with CodeHarborHub
            </span>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="tweets-section__slider-wrapper"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className="tweets-section__swiper"
            spaceBetween={20}
            slidesPerView={1}
            loop={homepageTweets.length > 3}
            speed={700}
            grabCursor
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {homepageTweets.map((tweet, index) => (
              <SwiperSlide
                key={`${tweet.githubUsername || tweet.handle}-${index}`}
                className="tweets-section__slide"
              >
                <Tweet {...tweet} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="tweets-section__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="tweets-section__footer-quote">
            <Quote size={18} aria-hidden="true" />
            <span>
              Your learning journey could be the next story we feature.
            </span>
          </div>

          <a
            href="https://x.com/CodesWithAjay"
            target="_blank"
            rel="noopener noreferrer"
            className="tweets-section__footer-link"
          >
            <span>Share your experience</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TweetsSection;