import React from "react";
import TestimonyCard from "../shared/TestimonyCard";
import Container from "../shared/Container";
import clientImg from "/Client.jpg";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <Container className="mt-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <div>
            <h2 className="font-raleway text-5xl font-extrabold text-blue-300 mb-3">
              Hear From Those Who’ve Trusted Us
            </h2>
            <p className="font-raleway text-2xl text-gray-500 ">
              Our clients’ success is our greatest measure of achievement. Don’t
              just take our word for it—see how strategic financial guidance has
              transformed their futures.
            </p>
          </div>
          <img src={clientImg} alt="client interacting with an adviser" />
        </div>
        <div className="w-full lg:w-1/2">
          <TestimonyCard />
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
