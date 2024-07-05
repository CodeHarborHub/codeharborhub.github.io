import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

const Accordionfaq = () => {
  return (
    <>
      <section className="text-center">
        <div
          style={{
            maxWidth: "400px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px", // Adds space between each accordion item
          }}
        >
          <h1 className="text-center text-5xl font-bold md:text-4xl mb-10">
            FAQs
          </h1>
          <Accordion type="single" collapsible className="">
            <AccordionItem value="item-1">
              <AccordionTrigger className="">
                What all resources does CodeHarbour offer?
              </AccordionTrigger>
              <AccordionContent>
                It has plethora of resources for students with additional
                features like{" "}
                <a href="https://www.codeharborhub.live/community/features">
                  these
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How to get support or reach out for queries?
              </AccordionTrigger>
              <AccordionContent>
                You can see these{" "}
                <a href="https://www.codeharborhub.live/community/supports">
                  options
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How to contribute to adding resources here?
              </AccordionTrigger>
              <AccordionContent>
                You can read the guidelines{" "}
                <a href="https://www.codeharborhub.live/community/contributing-guidelines">
                  here
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                What features does Code Harbor Hub offer?
              </AccordionTrigger>
              <AccordionContent>
                Code Harbor Hub offers a variety of features including code
                solutions, project collaboration, coding quizzes, tutorials, and
                community section. Our platform is designed to help you learn,
                share, and grow as a developer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Is it possible to contribute my tutorials here?
              </AccordionTrigger>
              <AccordionContent>
                Yes, users can contribute tutorials by submitting them through
                the "Submit Tutorial" form in the learning section.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                How many kinds of tutorial is available here?
              </AccordionTrigger>
              <AccordionContent>
                Code Harbor Hub offers tutorials on HTML & CSS, JavaScript,
                React, and Node.js, providing a comprehensive guide to web
                development.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                {" "}
                What all type of courses are available here?{" "}
              </AccordionTrigger>
              <AccordionContent>
                Code Harbor Hub offers courses in HTML & CSS, JavaScript, React,
                and Node.js. Each course is designed to help you build practical
                skills and projects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                How can I contribute to open source project?
              </AccordionTrigger>
              <AccordionContent>
                You can contribute to open source projects by navigating to the
                Showcase section, where you can find and join various community
                projects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                How can I stay updated with the latest news?
              </AccordionTrigger>
              <AccordionContent>
                You can stay updated by following our blog and joining our
                community on social media platforms like LinkedIn, YouTube,
                Discord, and Twitter.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default Accordionfaq
