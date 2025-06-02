import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { testimonyData } from "../utils/data";
import "swiper/css";
import "swiper/css/navigation";

const TestimonyCard = () => {
  return (
    <div className="testimony-swiper-container">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={5}
        slidesPerView={2}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          340: { slidesPerView: 1 },
          464: { slidesPerView: 1 },
          760: { slidesPerView: 2 },
          1024: { slidesPerView: 1 },
          1100: { slidesPerView: 2 },
        }}
      >
        {testimonyData.map((test) => (
          <SwiperSlide key={test.id}>
            <div className="bg-blue-300 flex flex-col rounded-3xl h-[480px] w-63 px-2 py-6 font-madimi testimony-card-bg relative">
              <p className="font-raleway font-medium text-2xl flex-grow overflow-y-auto">
                {test.testimony}
              </p>
              <div className="mt-auto pt-4">
                <h4 className="font-extrabold text-lg">{test.testifier}</h4>
                <h5 className="font-semibold text-base pt-1">{test.company}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonyCard;
