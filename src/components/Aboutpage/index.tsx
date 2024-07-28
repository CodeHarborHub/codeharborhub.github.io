import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import {Chart,Community,Courses,Tutorials,Problems,Solutions} from "./chart";
const ourmission= "/img/svg/our_mission.png";
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
        <div className="row">
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
            <img src={ourmission} alt="About Us" />
            </motion.div>
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
            <Heading as={"h1"}>Our Mission</Heading>
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
     At  Codeharborhub,  our mission is to empower every student to enhance their career opportunities and achieve their goals. We are committed to providing high-quality educational resources and courses that foster growth, learning, and success. Through our comprehensive and engaging curriculum, we aim to equip students with the knowledge and skills they need to excel in their chosen fields. Our goal is to create a supportive and inclusive learning environment that inspires and motivates students to reach their full potential. Together, we strive to make a positive impact on the future of education and the professional success of our learners. 
            </motion.p> 
            </div>
        </div>
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
            <Heading as={"h1"}>Our Learning Path</Heading>
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
we believe in a structured and comprehensive approach to learning. Our learning paths are meticulously designed to guide you through a progressive journey, ensuring you master the skills you need. Each path is tailored to different levels of expertise, from beginners to advanced learners, with a blend of theoretical knowledge and practical experience.
           </motion.p>
           <Heading as={"h2"}>Community</Heading>
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
Our vibrant community is at the heart of our learning experience. Join a diverse group of learners, educators, and industry professionals who are passionate about sharing knowledge and helping each other grow. Participate in discussions, share your progress, ask questions, and get feedback. Our community is here to support you every step of the way.
      </motion.p>
      <Heading as={"h2"}>Courses</Heading>
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
Our courses are crafted by industry experts and experienced educators to provide you with in-depth knowledge and practical skills. Each course is divided into easily digestible modules, allowing you to learn at your own pace. From foundational concepts to advanced techniques, our courses cover a wide range of topics to cater to your learning needs.

      </motion.p>
      <Heading as={"h2"}>Tutorials</Heading>
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
Dive into our extensive library of tutorials designed to help you understand specific concepts and tools. Whether you're looking to master a programming language, learn a new framework, or understand a complex algorithm, our tutorials offer step-by-step guidance to help you achieve your goals.

      </motion.p>
      <Heading as={"h2"}>Problems</Heading>

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
Challenge yourself with our collection of problems designed to test your understanding and improve your problem-solving skills. Our problems range from beginner to advanced levels, covering various topics and difficulty levels. Each problem comes with detailed instructions and hints to help you along the way.

      </motion.p>
      <Heading as={"h2"}>Solutions</Heading>
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
Learn from detailed solutions provided for each problem. Our solutions not only give you the correct answer but also explain the thought process and logic behind them. This helps you understand different approaches to solving problems and enhances your critical thinking skills.
</motion.p>
            </div>
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
      ><Chart />
      </motion.div>
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
        <Community />
      </motion.div>
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
        <Courses />
      </motion.div><motion.div
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
        <Tutorials />
      </motion.div>
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
        <Problems />
      </motion.div>
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
        <Solutions />
      </motion.div>
      </div>
            </div>
      </div>
    </section>
  );
}
