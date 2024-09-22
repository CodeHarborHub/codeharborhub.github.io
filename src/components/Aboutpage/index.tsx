import React from "react";
import { motion } from "framer-motion";
import {
  Chart,
  Community,
  Courses,
  Tutorials,
  Problems,
  Solutions,
} from "./chart";

const aboutImg = "/img/svg/about_me.svg";
const ourmission = "/img/svg/our_mission.png";

export default function AboutUsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div>
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
              <h1 className="text-4xl font-bold mb-4">About Us</h1>
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
              className="text-lg mb-4"
            >
              Welcome to CodeHarborHub, your go-to destination for quality tech
              education. We are a team of passionate developers and tech
              enthusiasts who are dedicated to providing the best learning
              experience for our students.
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
              className="text-lg mb-4"
            >
              Our mission is to provide accessible and comprehensive educational
              resources to help you achieve your tech goals. Whether you are a
              beginner or an experienced developer, we have something for
              everyone.
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
              className="text-lg mb-4"
            >
              With a team of experienced instructors and industry experts, we
              offer a diverse range of courses and tutorials to help you stay
              ahead in the tech industry. Join us today and start your journey
              to becoming a tech pro!
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
            className="flex justify-center"
          >
            <img src={aboutImg} alt="About Us" className="w-full max-w-md" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
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
            className="flex justify-center"
          >
            <img
              src={ourmission}
              alt="Our Mission"
              className="w-full max-w-md"
            />
          </motion.div>

          <div>
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
              <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
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
              className="text-lg mb-4"
            >
              At Codeharborhub, our mission is to empower every student to
              enhance their tech skills and achieve their goals. We are
              committed to providing high-quality educational resources that are
              accessible to everyone. Our goal is to help you succeed in the
              tech industry and build a successful career.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <div>
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
              <h1 className="text-4xl font-bold mb-4">Our Learning Path</h1>
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
              className="text-lg mb-4"
            >
              We believe in a structured and comprehensive approach to learning.
              Our learning path is designed to help you build a strong
              foundation in tech and advance your skills.
            </motion.p>
            <h2 className="text-2xl font-bold mb-4">Community</h2>
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
              className="text-lg mb-4"
            >
              Our vibrant community is at the heart of our learning experience -
              a place where you can connect with fellow students, share ideas,
              and collaborate on projects. Join our community and be a part of
              something great!
            </motion.p>

            <h2 className="text-2xl font-bold mb-4">Courses</h2>
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
              className="text-lg mb-4"
            >
              Our courses are designed to help you learn new skills and stay
              updated with the latest technologies. From web development to data
              science, we offer a wide range of courses to suit your interests
              and career goals.
            </motion.p>

            <h2 className="text-2xl font-bold mb-4">Tutorials</h2>

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
              className="text-lg mb-4"
            >
              Our tutorials are a great way to learn new concepts and improve
              your skills. Whether you are a beginner or an experienced
              developer, our tutorials cover a wide range of topics to help you
              grow as a tech professional.
            </motion.p>

            <h2 className="text-2xl font-bold mb-4">Problems</h2>

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
              className="text-lg mb-4"
            >
              Our problems section is designed to help you practice your coding
              skills and prepare for technical interviews. With a wide range of
              problems to choose from, you can challenge yourself and improve
              your problem-solving abilities.
            </motion.p>

            <h2 className="text-2xl font-bold mb-4">Solutions</h2>

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
              className="text-lg mb-4"
            >
              Our solutions section provides detailed explanations and
              step-by-step solutions to help you understand complex problems and
              concepts. With our solutions, you can learn new techniques and
              improve your problem-solving skills.
            </motion.p>
          </div>

          <div>
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
              <Chart />
              <Community />
              <Courses />
              <Tutorials />
              <Problems />
              <Solutions />
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
             />
          </div>
        </div>
      </div>
    </section>
  );
}
