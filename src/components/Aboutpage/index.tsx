import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const aboutImg = "/img/svg/about_me.svg";

export default function AboutUsSection() {
  return (
    <section className={styles.aboutUsSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as={"h1"}>About Us</Heading>
            <p className={styles.aboutUsDescription}>
              Welcome to Code Harbor Hub, your go-to destination for quality tech education. At Code Harbor Hub, we are passionate about empowering individuals with the knowledge and skills needed to thrive in the ever-evolving world of technology.
            </p>
            <p className={styles.aboutUsDescription}>
              Our mission is to provide accessible and comprehensive educational resources to learners of all levels, from beginners to advanced professionals. Whether you're looking to kickstart your career in web development, master a new programming language, or stay updated on the latest tech trends, we've got you covered.
            </p>
            <p className={styles.aboutUsDescription}>
              With a team of experienced instructors and industry experts, we offer a diverse range of courses and learning paths tailored to meet your specific goals and interests. Join our community today and embark on your journey towards success in the tech industry!
            </p>
          </div>
          <div className={clsx("col", "col--6", styles.aboutUsImage)}>
            {/* Placeholder for an about us image */}
            <img src={aboutImg} alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
}
