import { useState } from "react";
import Image from "next/image";

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

const brands = [
  {
    id: 1,
    name: "1017 ALYX 9SM",
    // logo: alyx_logo,
  },
  {
    id: 2,
    name: "A-COLD-WALL*",
    // logo: acw_logo,
  },
  {
    id: 3,
    name: "AlexanderMcQUEEN",
    // logo: mcqueen_logo,
    // image: mcqueen_image,
    description:
      "Alexander McQueen is a British luxury fashion house that captivates the fashion world with its daring and provocative designs. Founded by the iconic designer Lee Alexander McQueen in 1992, the brand is renowned for its avant-garde creations that seamlessly merge craftsmanship with innovation. McQueen's distinct aesthetic often incorporates dark romanticism, theatrical flair, and meticulous attention to detail. The brand has become synonymous with pushing boundaries and challenging traditional notions of beauty in fashion. Known for its dramatic runway shows and sculptural designs, Alexander McQueen continues to be a symbol of creativity and rebellion within the realm of high fashion, honoring the legacy of its visionary founder.",
  },
  {
    id: 4,
    name: "Balenciaga",
    // logo: balenciaga_logo,
  },
  {
    id: 5,
    name: "Givenchy",
    // logo: givenchy_logo,
    // image: givenchy_image,
    description:
      "Givenchy is a renowned French luxury fashion house known for its sophisticated and avant-garde designs. Founded by Hubert de Givenchy in 1952, the brand has consistently epitomized elegance and refinement. Renowned for its haute couture, ready-to-wear collections, and iconic accessories, Givenchy seamlessly blends timeless style with modern innovation. The label is celebrated for its sharp tailoring, distinctive prints, and a commitment to creating pieces that exude an air of aristocratic glamour. Givenchy's legacy continues to influence the fashion landscape with its bold aesthetic and commitment to pushing the boundaries of contemporary luxury.",
  },
  {
    id: 6,
    name: "Jacquemus",
    // logo: jacquemus_logo,
  },
  {
    id: 7,
    name: "Maison Margiela",
    // logo: margiela_logo,
  },
  {
    id: 8,
    name: "Raf Simons",
    // logo: raf_logo,
  },
  {
    id: 9,
    name: "Rick Owens",
    // logo: rick_logo,
  },
  {
    id: 10,
    name: "Vetements",
    // logo: vetements_logo,
  },
];

export default function BrandsList() {
  const [hoveredId, setHoveredId] = useState(-1);

  return (
    <section className="grid lg:grid-cols-3 gap-28 bg-[#F4F4F6]">
      <div className="lg:col-span-1 p-12 flex flex-col gap-10">
        <h1
          className={`text-6xl tracking-tighter font-medium transition duration-300 ${
            hoveredId !== -1 ? "opacity-[0.3]" : "opacity-100"
          }`}
        >
          Featured Brands
        </h1>
        <div className="brands-list flex flex-col gap-1 text-3xl font-medium tracking-tighter">
          {brands.map((brand, idx) => (
            <a
              key={idx}
              className={`transition duration-300 cursor-pointer w-fit ${
                hoveredId === -1 || hoveredId === idx
                  ? "opacity-100"
                  : "opacity-[0.3]"
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
              src={brands[hoveredId]?.logo}
              alt={brands[hoveredId]?.name}
            />
          )} */}
        </header>
        <article className="flex gap-14 max-w-3xl">
          {hoveredId !== -1 && (
            <>
              {/* <Image
                className="object-contain w-96 max-h-[30rem]"
                src={brands[hoveredId]?.image}
                alt={brands[hoveredId]?.name}
              /> */}
              <p className="text-justify text-[1.1rem]">
                {brands[hoveredId]?.description}
              </p>
            </>
          )}
        </article>
      </div>
    </section>
  );
}
