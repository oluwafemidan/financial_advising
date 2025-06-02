import React from "react";
import Container from "../shared/Container";

const logos = [
  "discord",
  "openai",
  "paypal",
  "mastercard_",
  "spotify",
  "youtube",
  "samsung",
  "nivea",
  "deepseek_",
  "lg",
  "unilever",
  "lenovo",
  "microsoft",
  "google",
  "Stanley",
  "toyota",
  "visa",
  "vodafone",
  "gsk",
  "johnnie",
  "oppo",
  "qatar",
  "starbucks",
  "university",
];

const Brand = () => {
  return (
    <div>
      <section>
        <Container className="space-y-8 mt-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-blue-400 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-madimi font-bold">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            {logos.map((logo, key) => (
              <div
                key={key}
                className="p-4 sm:p-5 bg-body border  rounded-xl group"
              >
                <img
                  src={`/logos/${logo}.png`}
                  width={100}
                  height={60}
                  alt={logo}
                  className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Brand;
