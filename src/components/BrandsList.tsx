import { useState } from "react";
import { featuredBrands } from "@/data/brands";
// import Image from "next/image";

// import margiela_logo from "";
// import raf_logo from "";
// import vetements_logo from "";
// import givenchy_logo from "";
// import alyx_logo from "";
// import balenciaga_logo from "";
// import jacquemus_logo from "";
// import rick_logo from "";
// import acw_logo from "";
// import mcqueen_logo from "";

// import mcqueen_image from "";
// import givenchy_image from "";

export default function BrandsList() {
  const [hoveredId, setHoveredId] = useState(-1);

  return (
    <section className="grid lg:grid-cols-3 gap-28 bg-[#F4F4F6]">
      <div className="lg:col-span-1 p-12 flex flex-col gap-10">
        <h2
          className={`text-6xl tracking-tighter font-medium transition duration-300 ${
            hoveredId !== -1 ? "opacity-30" : "opacity-100"
          }`}
        >
          Featured Brands
        </h2>
        <div className="brands-list flex flex-col gap-1 text-3xl font-medium tracking-tighter">
          {featuredBrands.map((brand, idx) => (
            <a
              key={idx}
              className={`transition duration-300 cursor-pointer w-fit ${
                hoveredId === -1 || hoveredId === idx
                  ? "opacity-100"
                  : "opacity-30"
              }`}
              onMouseEnter={() => setHoveredId(idx)}
              onMouseLeave={() => setHoveredId(-1)}
            >
              {brand.name}
            </a>
          ))}
        </div>
      </div>
      <div className="lg:col-span-2 flex flex-col gap-16 items-center w-full">
        <header className="w-full h-24 flex items-center justify-center">
          {/* {hoveredId !== -1 && (
            <Image
              className="object-contain w-72 mt-12"
              src={featuredBrands[hoveredId]?.logo}
              alt={featuredBrands[hoveredId]?.name}
            />
          )} */}
        </header>
        <article className="flex gap-14 max-w-3xl">
          {hoveredId !== -1 && (
            <>
              {/* <Image
                className="object-contain w-96 max-h-[30rem]"
                src={featuredBrands[hoveredId]?.image}
                alt={featuredBrands[hoveredId]?.name}
              /> */}
              <p className="text-justify text-[1.1rem]">
                {featuredBrands[hoveredId]?.description}
              </p>
            </>
          )}
        </article>
      </div>
    </section>
  );
}
