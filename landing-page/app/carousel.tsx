// "use client";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import Image from "next/image";

// const images = [
//   "https://camelai.com/assets/images/sheets-square.png"
// ];

// const Carousel = () => {
//   return (
//     <div className="relative w-full bg-black py-6 overflow-hidden">
//       {/* Gradient Mask for Fade Effect */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>

//       {/* Upper Carousel (Left to Right) */}
//       <Splide 
//         options={{
//           type: "loop",
//           perPage: 5,
//           perMove: 1,
//           gap: "1rem",
//           drag: false,
//           arrows: false,
//           pagination: false,
//           fixedWidth: 100,
//           fixedHeight: 100,
//           autoScroll: { speed: 1 },
//           direction: "ltr", // Force horizontal scrolling
//         }}
//         extensions={{ AutoScroll }}
//         className="mb-4"
//       >
//         {images.map((src, index) => (
//           <SplideSlide key={index} className="flex w-full h-fit items-center justify-center">
//             <img src={src} alt="logo" className="mx-2 object-contain" />
//           </SplideSlide>
//         ))}
//       </Splide>


//       {/* Bottom Carousel (Right to Left) */}
//       <Splide 
//         options={{
//           type: "loop",
//           perPage: 5,
//           perMove: 1,
//           gap: "1rem",
//           drag: false,
//           arrows: false,
//           pagination: false,
//           width: '80%', // Set the desired width
//           height: '300px',
//           autoScroll: { speed: -1 },
//           direction: "ltr", // Force horizontal scrolling
//         }}
//         extensions={{ AutoScroll }}
//         className="mb-4"
//       >
//         {images.map((src, index) => (
//           <SplideSlide key={index} className="flex w-full h-fit items-center justify-center">
//             <img src={src} alt="logo" className="mx-2 object-contain" />
//           </SplideSlide>
//         ))}
//       </Splide>
//     </div>
//   );
// };

// export default Carousel;

// components/Carousel.tsx

"use client";
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/css'; // Import default Splide styles

const Carousel: React.FC = () => {
  return (
    <div className="relative w-full bg-black py-6 overflow-hidden">
      {/* Gradient Mask for Fade Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>

      <Splide
        options={{
          type: 'loop', // Infinite loop
          autoWidth: true, // Adjust slide width automatically
          gap: '1rem', // Space between slides
          perPage: 12,
          pagination: false, // Disable pagination dots
          arrows: false, // Disable navigation arrows
          autoScroll: {
            speed: 0.25, // Auto-scroll speed (pixels per frame)
            pauseOnHover: true, // Pause scrolling on hover
            pauseOnFocus: false,
          },
        }}
        extensions={{ AutoScroll }}
        className="custom-carousel"
      >
        {/* Add your slides here */}
        <SplideSlide>
          <img src="https://camelai.com/assets/images/airtable-square.png" alt="Airtable" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/bigquery-square.png" alt="BigQuery" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/clickhouse-square.png" alt="Clickhouse" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/csv-square.png" alt="CSV" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/duckdb-square.png" alt="DuckDB" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/dynmodb-square.png" alt="DynmoDB" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/excel-square.png" alt="Excel" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/linkedin-square.png" alt="LinkedIn" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/mongodb-square.png" alt="MongoDB" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/motherduck-square.png" alt="Motherduck" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/mysql-square.png" alt="MySQL" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/peliqan-square.png" alt="Peliqan" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/postgres-square.png" alt="Postgres" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/salesforce-square.png" alt="Salesforce" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/supabase-square.png" alt="Supabase" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/sqlite-square.png" alt="SQLite" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/snowflake-square.png" alt="Snowflake" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/sheets-square.png" alt="Sheets" className="carousel-image" />
        </SplideSlide>
      </Splide>
      <Splide
        options={{
          type: 'loop', // Infinite loop
          autoWidth: true, // Adjust slide width automatically
          gap: '1rem', // Space between slides
          perPage: 12,
          pagination: false, // Disable pagination dots
          arrows: false, // Disable navigation arrows
          autoScroll: {
            speed: -0.25, // Auto-scroll speed (pixels per frame)
            pauseOnHover: true, // Pause scrolling on hover
            pauseOnFocus: false,
          },
        }}
        extensions={{ AutoScroll }}
        className="custom-carousel mt-5"
      >
        {/* Add your slides here */}
        <SplideSlide>
          <img src="https://camelai.com/assets/images/airtable-square.png" alt="Airtable" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/bigquery-square.png" alt="BigQuery" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/clickhouse-square.png" alt="Clickhouse" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/csv-square.png" alt="CSV" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/duckdb-square.png" alt="DuckDB" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/dynmodb-square.png" alt="DynmoDB" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/excel-square.png" alt="Excel" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/linkedin-square.png" alt="LinkedIn" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/mongodb-square.png" alt="MongoDB" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/motherduck-square.png" alt="Motherduck" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/mysql-square.png" alt="MySQL" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/peliqan-square.png" alt="Peliqan" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/postgres-square.png" alt="Postgres" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/salesforce-square.png" alt="Salesforce" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/supabase-square.png" alt="Supabase" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/sqlite-square.png" alt="SQLite" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/snowflake-square.png" alt="Snowflake" className="carousel-image" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://camelai.com/assets/images/sheets-square.png" alt="Sheets" className="carousel-image" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;
