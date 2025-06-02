import React from "react";
import Container from "../shared/Container";
import advImg from "/consult.jpg";

const About = () => {
  return (
    <div>
      <section className="relative pt-16 md:pt-18 lg:pt-20 magt magt2">
        <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div
            id="about"
            className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start
                            lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-blue-300 font-madimi">
              About Us
            </h2>
            <p className="mt-8 font-raleway text-2xl text-gray-800">
              At EFA, we’re on a mission to simplify financial success. Founded
              in 2020 by AODi, a Certified Financial Planner™ (CFP®) with 22
              years of experience, we provide personalized, fiduciary advice to
              busy professionals, growing families, and entrepreneurs. We
              believe in transparency, education, and strategies tailored to
              your life—not one-size-fits-all solutions. Whether you’re saving
              for retirement, buying a home, or building generational wealth,
              we’re here to guide you every step of the way.
            </p>
          </div>
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-non lg:mx-0 mx-auto max-w-3xl">
            <img
              src={advImg}
              alt="Hero image"
              width={2350}
              height={2359}
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-non max-h-96"
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
