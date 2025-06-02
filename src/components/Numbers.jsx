import React from "react";
import Container from "../shared/Container";
import { FaPeopleRoof, FaBusinessTime } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { IoIosPerson } from "react-icons/io";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Reading({ n, end = "" }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3, // % of component visible before triggering
  });

  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? n : 0 },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <div ref={ref}>
      <animated.div>
        {number.to((val) => `${val.toFixed(0)}${end}`)}
      </animated.div>
    </div>
  );
}

const Numbers = () => {
  return (
    <div>
      <section className="relative pt-16 md:pt-18 lg:pt-20 magt magt2">
        <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          <div
            className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl
                      border-box-border divide-box-border
                     grid grid-rows-2 sm:grid-cols-2 "
          >
            <div className="text-center px-5">
              <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
                <IoIosPerson size={58} className="text-blue-300" />{" "}
                <Reading n={100} end="M" />
              </h2>
              <p className="mt-2 text-heading-3 font-medium">Individuals</p>
            </div>
            <div className="text-center px-5">
              <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
                <FaPeopleRoof size={58} className="text-blue-300" />{" "}
                <Reading n={250} end="+" />
              </h2>
              <p className="mt-2 text-heading-3 font-medium">
                Enterprise Clients
              </p>
            </div>
            <div className="text-center px-5">
              <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
                <FaBusinessTime size={58} className="text-blue-300" /> 24-hour
              </h2>
              <p className="mt-2 text-heading-3 font-medium">response times</p>
            </div>
            <div className="text-center px-6">
              <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
                <LuBrainCircuit size={58} className="text-blue-300" />{" "}
                <Reading n={20} end="+" />
              </h2>
              <p className="mt-2 text-heading-3 font-medium">
                Years of Innovation
              </p>
            </div>
          </div>
          <div
            id="about"
            className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start
                            lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-blue-300 font-madimi">
              Empowering Your Financial Future, One Client at a Time
            </h2>
            <p className="mt-8 font-raleway text-2xl text-gray-800">
              With a proven track record of excellence, we’ve helped over 250
              enterprise clients and 100 millons of individuals navigate the
              complexities of financial planning, investment strategies, and
              wealth management. Our tailored advice transforms uncertainty into
              confidence, turning aspirations into actionable goals. Whether
              you're a growing business or an individual planning for the
              future, trust a team dedicated to your success. Join the thriving
              community that relies on our expertise—because your financial
              growth is our greatest achievement.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Numbers;
