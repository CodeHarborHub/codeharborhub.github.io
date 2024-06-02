import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
const aboutImg = "/img/svg/about_me.svg";

export default function AboutUsSection() {
  return (
    <section className={styles.aboutUsSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
          <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.2,
        }}
      >
            <Heading as={"h1"}>About Us</Heading>
            </motion.div>
            <motion.p
        initial={{ opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
        className={styles.aboutUsDescription}
      >
              Welcome to Code Harbor Hub, your go-to destination for quality tech education. At Code Harbor Hub, we are passionate about empowering individuals with the knowledge and skills needed to thrive in the ever-evolving world of technology.
            </motion.p>
            <motion.p
        initial={{ opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
        className={styles.aboutUsDescription}
      >
              Our mission is to provide accessible and comprehensive educational resources to learners of all levels, from beginners to advanced professionals. Whether you're looking to kickstart your career in web development, master a new programming language, or stay updated on the latest tech trends, we've got you covered.
            </motion.p>
            <motion.p
        initial={{ opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
        className={styles.aboutUsDescription}
      >
              With a team of experienced instructors and industry experts, we offer a diverse range of courses and learning paths tailored to meet your specific goals and interests. Join our community today and embark on your journey towards success in the tech industry!
            </motion.p>
          </div>
          <motion.div
        initial={{ scale: 0, y: -150 }}
        whileInView={{ scale: 0.8, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
        className={clsx("col", "col--6", styles.aboutUsImage)}
      >
            {/* Placeholder for an about us image */}
            <img src={aboutImg} alt="About Us" />
            </motion.div>
        </div>
      </div>
    </section>
  );
}
