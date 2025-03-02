"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";

const images = [
  "https://camelai.com/assets/images/airtable-square.png", 
  "https://camelai.com/assets/images/bigquery-square.png",
  "https://camelai.com/assets/images/clickhouse-square.png",
  "https://camelai.com/assets/images/csv-square.png",
  "https://camelai.com/assets/images/duckdb-square.png",
  "https://camelai.com/assets/images/dynmodb-square.png",
  "https://camelai.com/assets/images/excel-square.png",
  "https://camelai.com/assets/images/linkedin-square.png",
  "https://camelai.com/assets/images/mongodb-square.png",
  "https://camelai.com/assets/images/motherduck-square.png",
  "https://camelai.com/assets/images/mysql-square.png",
  "https://camelai.com/assets/images/peliqan-square.png",
  "https://camelai.com/assets/images/postgres-square.png",
  "https://camelai.com/assets/images/salesforce-square.png",
  "https://camelai.com/assets/images/supabase-square.png",
  "https://camelai.com/assets/images/sqlite-square.png",
  "https://camelai.com/assets/images/snowflake-square.png",
  "https://camelai.com/assets/images/sheets-square.png"
];

const Carousel = () => {
  return (
    <div className="relative w-full bg-black py-6 overflow-hidden">
      {/* Gradient Mask for Fade Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>

      {/* Upper Carousel (Left to Right) */}
      <Splide 
        options={{
          type: "loop",
          perPage: 5,
          perMove: 1,
          gap: "1rem",
          drag: false,
          arrows: false,
          pagination: false,
          fixedWidth: 100,
          fixedHeight: 100,
          autoScroll: { speed: 1 },
          direction: "ltr", // Force horizontal scrolling
        }}
        extensions={{ AutoScroll }}
        className="mb-4"
      >
        {images.map((src, index) => (
          <SplideSlide key={index} className="flex w-full h-fit items-center justify-center">
            <img src={src} alt="logo" className="mx-2 object-contain" />
          </SplideSlide>
        ))}
      </Splide>


      {/* Bottom Carousel (Right to Left) */}
      <Splide 
        options={{
          type: "loop",
          perPage: 5,
          perMove: 1,
          gap: "1rem",
          drag: false,
          arrows: false,
          pagination: false,
          fixedWidth: 100,
          fixedHeight: 100,
          autoScroll: { speed: -1 },
          direction: "ltr", // Force horizontal scrolling
        }}
        extensions={{ AutoScroll }}
        className="mb-4"
      >
        {images.map((src, index) => (
          <SplideSlide key={index} className="flex w-full h-fit items-center justify-center">
            <img src={src} alt="logo" className="mx-2 object-contain" />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carousel;
